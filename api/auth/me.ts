import type { VercelRequest, VercelResponse } from '@vercel/node';
import getDb from '../_lib/db.js';
import { requireAuth } from '../_lib/auth.js';
import { refreshHearts } from '../_lib/hearts.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const payload = requireAuth(req, res as never);
  if (!payload) return;

  const sql = getDb();
  const [user] = await sql`
    SELECT id, family_id, role, display_name, email, username,
           xp, streak_days, streak_last_at, gems, hearts, league_tier, created_at
    FROM users WHERE id = ${payload.userId}
  `;

  if (!user) return res.status(404).json({ error: 'User not found' });
  const { hearts, hearts_refill_at } = await refreshHearts(user.id, sql);
  return res.status(200).json({ user: { ...user, hearts, hearts_refill_at } });
}
