import type { VercelRequest, VercelResponse } from '@vercel/node';
import getDb from '../_lib/db.js';
import { requireAuth } from '../_lib/auth.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const payload = requireAuth(req, res as never);
  if (!payload) return;
  const sql = getDb();

  if (req.method === 'GET') {
    // ?catechismId=wsc  → per-question progress for the path page
    const catechismId = req.query.catechismId as string | undefined;
    if (catechismId) {
      const questions = await sql`
        SELECT
          cq.id, cq.number, cq.section, cq.section_name,
          up.mastered, up.repetitions, up.due_at
        FROM catechism_questions cq
        LEFT JOIN user_progress up
          ON up.content_id = cq.id
          AND up.user_id = ${payload.userId}
          AND up.content_type = 'catechism'
        WHERE cq.catechism_id = ${catechismId}
        ORDER BY cq.number ASC
      `;
      return res.status(200).json({ questions });
    }

    // DISTINCT ON deduplicates rows where the same catechism_id was inserted
    // multiple times (ON CONFLICT fails to deduplicate when custom_quiz_id IS NULL
    // because NULL != NULL in Postgres unique constraints).
    // Keep the most-recent row per (plan_type, catechism_id) pair.
    const plans = await sql`
      SELECT DISTINCT ON (sp.plan_type, sp.catechism_id)
        sp.*, c.name AS catechism_name, c.abbreviation, c.question_count
      FROM user_study_plans sp
      LEFT JOIN catechisms c ON c.id = sp.catechism_id
      WHERE sp.user_id = ${payload.userId} AND sp.is_active = true
      ORDER BY sp.plan_type, sp.catechism_id, sp.started_at DESC
    `;
    return res.status(200).json({ plans });
  }

  if (req.method === 'POST') {
    const { planType, catechismId, customQuizId, quizMode } = req.body as {
      planType: string; catechismId?: string; customQuizId?: string; quizMode?: string;
    };
    if (!planType) return res.status(400).json({ error: 'Missing planType' });

    const [plan] = await sql`
      INSERT INTO user_study_plans (user_id, plan_type, catechism_id, custom_quiz_id, quiz_mode)
      VALUES (
        ${payload.userId}, ${planType},
        ${catechismId ?? null}, ${customQuizId ?? null},
        ${quizMode ?? 'fill_blank'}
      )
      ON CONFLICT (user_id, plan_type, catechism_id, custom_quiz_id)
      DO UPDATE SET quiz_mode = ${quizMode ?? 'fill_blank'}, is_active = true
      RETURNING *
    `;
    return res.status(201).json({ plan });
  }

  if (req.method === 'PATCH') {
    const { planId, quizMode, isActive } = req.body as {
      planId: string; quizMode?: string; isActive?: boolean;
    };
    if (!planId) return res.status(400).json({ error: 'Missing planId' });

    const [plan] = await sql`
      UPDATE user_study_plans SET
        quiz_mode = COALESCE(${quizMode ?? null}, quiz_mode),
        is_active = COALESCE(${isActive ?? null}, is_active)
      WHERE id = ${planId} AND user_id = ${payload.userId}
      RETURNING *
    `;
    return res.status(200).json({ plan });
  }

  if (req.method === 'DELETE') {
    // Use query param — Vercel does not reliably parse bodies on DELETE requests
    const catechismId = req.query.catechismId as string | undefined;
    if (!catechismId) return res.status(400).json({ error: 'Missing catechismId' });

    await sql`
      DELETE FROM user_progress
      WHERE user_id = ${payload.userId}
        AND content_type = 'catechism'
        AND content_id IN (
          SELECT id FROM catechism_questions WHERE catechism_id = ${catechismId}
        )
    `;
    return res.status(200).json({ ok: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
