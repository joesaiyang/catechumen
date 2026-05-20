// GET/POST /api/custom-quizzes/items?quizId=...
import type { VercelRequest, VercelResponse } from '@vercel/node';
import getDb from '../_lib/db.js';
import { requireAuth } from '../_lib/auth.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const payload = requireAuth(req, res as never);
  if (!payload) return;
  const sql = getDb();
  const quizId = req.query.quizId as string;
  if (!quizId) return res.status(400).json({ error: 'Missing quizId' });

  // Verify family owns this quiz
  const [quiz] = await sql`
    SELECT cq.id FROM custom_quizzes cq
    JOIN users u ON u.family_id = cq.family_id
    WHERE cq.id = ${quizId} AND u.id = ${payload.userId}
  `;
  if (!quiz) return res.status(404).json({ error: 'Quiz not found' });

  if (req.method === 'GET') {
    const items = await sql`
      SELECT * FROM custom_quiz_items
      WHERE quiz_id = ${quizId}
      ORDER BY sort_order ASC
    `;
    return res.status(200).json({ items });
  }

  if (req.method === 'POST') {
    if (payload.role !== 'parent') return res.status(403).json({ error: 'Parents only' });
    const { customQuestion, customAnswer, refType, refId, sortOrder } = req.body as {
      customQuestion?: string; customAnswer?: string;
      refType?: string; refId?: string; sortOrder?: number;
    };

    if (!customQuestion && !refType) {
      return res.status(400).json({ error: 'Provide either customQuestion+customAnswer or refType+refId' });
    }

    const [maxOrder] = await sql`SELECT COALESCE(MAX(sort_order), -1) AS m FROM custom_quiz_items WHERE quiz_id = ${quizId}`;
    const order = sortOrder ?? (maxOrder.m + 1);

    const [item] = await sql`
      INSERT INTO custom_quiz_items
        (quiz_id, sort_order, custom_question, custom_answer, ref_type, ref_id)
      VALUES
        (${quizId}, ${order}, ${customQuestion ?? null}, ${customAnswer ?? null},
         ${refType ?? null}, ${refId ?? null})
      RETURNING *
    `;
    return res.status(201).json({ item });
  }

  if (req.method === 'DELETE') {
    if (payload.role !== 'parent') return res.status(403).json({ error: 'Parents only' });
    const { itemId } = req.body as { itemId: string };
    await sql`DELETE FROM custom_quiz_items WHERE id = ${itemId} AND quiz_id = ${quizId}`;
    return res.status(200).json({ ok: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
