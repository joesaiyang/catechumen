// GET /api/lessons — returns due questions for today's session
import type { VercelRequest, VercelResponse } from '@vercel/node';
import getDb from '../_lib/db.js';
import { requireAuth } from '../_lib/auth.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const payload = requireAuth(req, res as never);
  if (!payload) return;

  const sql = getDb();
  const limit = Math.min(parseInt(req.query.limit as string ?? '10', 10), 30);

  // Due SRS cards first, then unseen questions
  const due = await sql`
    SELECT q.number, q.unit, q.unit_name, q.question, q.answer, q.proof_texts,
           up.repetitions, up.ease_factor, up.interval_days, up.due_at, up.mastered
    FROM questions q
    JOIN user_progress up ON up.question_id = q.number AND up.user_id = ${payload.userId}
    WHERE up.due_at <= now() AND NOT up.mastered
    ORDER BY up.due_at ASC
    LIMIT ${limit}
  `;

  const remaining = limit - due.length;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let unseen: any[] = [];
  if (remaining > 0) {
    unseen = await sql`
      SELECT q.number, q.unit, q.unit_name, q.question, q.answer, q.proof_texts,
             0 AS repetitions, 2.5 AS ease_factor, 1 AS interval_days, now() AS due_at, false AS mastered
      FROM questions q
      WHERE q.number NOT IN (
        SELECT question_id FROM user_progress WHERE user_id = ${payload.userId}
      )
      ORDER BY q.number ASC
      LIMIT ${remaining}
    `;
  }

  return res.status(200).json({ questions: [...due, ...unseen] });
}
