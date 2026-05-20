// POST /api/hearts — spend 100 XP to refill all hearts to 5
import type { VercelRequest, VercelResponse } from '@vercel/node';
import getDb from '../_lib/db.js';
import { requireAuth } from '../_lib/auth.js';

const XP_COST = 100;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const payload = requireAuth(req, res as never);
  if (!payload) return;

  const sql = getDb();
  const [user] = await sql`SELECT hearts, xp FROM users WHERE id = ${payload.userId}`;
  if (!user) return res.status(404).json({ error: 'User not found' });
  if (user.hearts >= 5) return res.status(400).json({ error: 'Hearts already full' });
  if (user.xp < XP_COST) return res.status(400).json({ error: `Need ${XP_COST} XP` });

  const [updated] = await sql`
    UPDATE users
    SET hearts = 5, hearts_refill_at = NULL, xp = xp - ${XP_COST}
    WHERE id = ${payload.userId}
    RETURNING hearts, xp
  `;

  return res.status(200).json({ hearts: updated.hearts, xp: updated.xp });
}
