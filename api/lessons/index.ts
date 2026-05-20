// GET /api/lessons?type=catechism&source=wsc&limit=5
// Returns due questions for the session based on content type + source
import type { VercelRequest, VercelResponse } from '@vercel/node';
import getDb from '../_lib/db.js';
import { requireAuth } from '../_lib/auth.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const payload = requireAuth(req, res as never);
  if (!payload) return;

  const sql = getDb();
  const limit  = Math.min(parseInt(req.query.limit  as string ?? '5',  10), 20);
  const type   = (req.query.type   as string) ?? 'catechism';
  const source = (req.query.source as string) ?? 'wsc';

  if (type === 'catechism') {
    // Due SRS cards first
    const due = await sql`
      SELECT
        cq.id, cq.catechism_id, cq.number, cq.section, cq.section_name,
        cq.question, cq.answer, cq.proof_texts,
        up.repetitions, up.ease_factor, up.interval_days, up.due_at, up.mastered
      FROM catechism_questions cq
      JOIN user_progress up
        ON up.content_id = cq.id
       AND up.user_id = ${payload.userId}
       AND up.content_type = 'catechism'
      WHERE cq.catechism_id = ${source}
        AND up.due_at <= now()
        AND NOT up.mastered
      ORDER BY up.due_at ASC
      LIMIT ${limit}
    `;

    const remaining = limit - due.length;
    let unseen: any[] = [];
    if (remaining > 0) {
      unseen = await sql`
        SELECT
          cq.id, cq.catechism_id, cq.number, cq.section, cq.section_name,
          cq.question, cq.answer, cq.proof_texts,
          0 AS repetitions, 2.5 AS ease_factor, 1 AS interval_days,
          now() AS due_at, false AS mastered
        FROM catechism_questions cq
        WHERE cq.catechism_id = ${source}
          AND cq.id NOT IN (
            SELECT content_id FROM user_progress
            WHERE user_id = ${payload.userId} AND content_type = 'catechism'
          )
        ORDER BY cq.number ASC
        LIMIT ${remaining}
      `;
    }
    return res.status(200).json({ questions: [...due, ...unseen], type, source });
  }

  if (type === 'verse') {
    const due = await sql`
      SELECT
        mv.id, mv.reference, mv.book, mv.testament, mv.text_web AS answer,
        mv.theme, mv.difficulty, mv.tags,
        mv.reference AS question,
        up.repetitions, up.ease_factor, up.interval_days, up.due_at, up.mastered
      FROM memory_verses mv
      JOIN user_progress up
        ON up.content_id = mv.id
       AND up.user_id = ${payload.userId}
       AND up.content_type = 'verse'
      WHERE up.due_at <= now() AND NOT up.mastered
      ORDER BY up.due_at ASC
      LIMIT ${limit}
    `;

    const remaining = limit - due.length;
    let unseen: any[] = [];
    if (remaining > 0) {
      unseen = await sql`
        SELECT
          mv.id, mv.reference, mv.book, mv.testament, mv.text_web AS answer,
          mv.theme, mv.difficulty, mv.tags,
          mv.reference AS question,
          0 AS repetitions, 2.5 AS ease_factor, 1 AS interval_days,
          now() AS due_at, false AS mastered
        FROM memory_verses mv
        WHERE mv.id NOT IN (
          SELECT content_id FROM user_progress
          WHERE user_id = ${payload.userId} AND content_type = 'verse'
        )
        ORDER BY mv.difficulty ASC, mv.id ASC
        LIMIT ${remaining}
      `;
    }
    return res.status(200).json({ questions: [...due, ...unseen], type, source: 'verses' });
  }

  if (type === 'bible_quiz') {
    const due = await sql`
      SELECT bq.id, bq.testament, bq.book, bq.reference, bq.category,
             bq.difficulty, bq.question, bq.answer, bq.options,
             up.repetitions, up.ease_factor, up.due_at, up.mastered
      FROM bible_quiz_questions bq
      JOIN user_progress up
        ON up.content_id = bq.id
       AND up.user_id = ${payload.userId}
       AND up.content_type = 'bible_quiz'
      WHERE up.due_at <= now() AND NOT up.mastered
      ORDER BY up.due_at ASC
      LIMIT ${limit}
    `;

    const remaining = limit - due.length;
    let unseen: any[] = [];
    if (remaining > 0) {
      unseen = await sql`
        SELECT bq.id, bq.testament, bq.book, bq.reference, bq.category,
               bq.difficulty, bq.question, bq.answer, bq.options,
               0 AS repetitions, 2.5 AS ease_factor, now() AS due_at, false AS mastered
        FROM bible_quiz_questions bq
        WHERE bq.id NOT IN (
          SELECT content_id FROM user_progress
          WHERE user_id = ${payload.userId} AND content_type = 'bible_quiz'
        )
        ORDER BY bq.difficulty ASC, bq.id ASC
        LIMIT ${remaining}
      `;
    }
    return res.status(200).json({ questions: [...due, ...unseen], type, source: 'bible_quiz' });
  }

  if (type === 'custom') {
    const items = await sql`
      SELECT cqi.id, cqi.custom_question AS question, cqi.custom_answer AS answer,
             cqi.ref_type, cqi.ref_id, cqi.sort_order
      FROM custom_quiz_items cqi
      JOIN custom_quizzes cq ON cq.id = cqi.quiz_id
      WHERE cq.id = ${source}
        AND (cq.family_id = (SELECT family_id FROM users WHERE id = ${payload.userId}))
      ORDER BY cqi.sort_order ASC
      LIMIT ${limit}
    `;
    return res.status(200).json({ questions: items, type, source });
  }

  return res.status(400).json({ error: 'Invalid type' });
}
