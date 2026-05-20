import type { VercelRequest, VercelResponse } from '@vercel/node';
import getDb from '../_lib/db.js';
import { requireAuth } from '../_lib/auth.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const payload = requireAuth(req, res as never);
  if (!payload) return;
  const sql = getDb();

  if (req.method === 'GET') {
    const quizzes = await sql`
      SELECT cq.*, COUNT(cqi.id)::int AS item_count
      FROM custom_quizzes cq
      LEFT JOIN custom_quiz_items cqi ON cqi.quiz_id = cq.id
      WHERE cq.family_id = (SELECT family_id FROM users WHERE id = ${payload.userId})
        AND cq.is_active = true
      GROUP BY cq.id
      ORDER BY cq.created_at DESC
    `;
    return res.status(200).json({ quizzes });
  }

  if (req.method === 'POST') {
    if (payload.role !== 'parent') return res.status(403).json({ error: 'Parents only' });
    const { name, description } = req.body as { name: string; description?: string };
    if (!name) return res.status(400).json({ error: 'Missing name' });

    const [quiz] = await sql`
      INSERT INTO custom_quizzes (family_id, created_by, name, description)
      VALUES (
        (SELECT family_id FROM users WHERE id = ${payload.userId}),
        ${payload.userId}, ${name}, ${description ?? null}
      )
      RETURNING *
    `;
    return res.status(201).json({ quiz });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
