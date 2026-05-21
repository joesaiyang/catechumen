import type { VercelRequest, VercelResponse } from '@vercel/node';
import getDb from '../_lib/db.js';
import { requireAuth } from '../_lib/auth.js';
import { refreshHearts } from '../_lib/hearts.js';
import { earnedIds } from '../_lib/achievements.js';

const XP_COST = 100;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const payload = requireAuth(req, res as never);
  if (!payload) return;

  const sql = getDb();

  // GET — return current user profile
  if (req.method === 'GET') {
    const [user] = await sql`
      SELECT id, family_id, role, display_name, email, username,
             xp, streak_days, streak_last_at, gems, hearts, league_tier, created_at
      FROM users WHERE id = ${payload.userId}
    `;
    if (!user) return res.status(404).json({ error: 'User not found' });
    const { hearts, hearts_refill_at } = await refreshHearts(user.id, sql);
    const badges = await earnedIds(user.id, sql);
    return res.status(200).json({ user: { ...user, hearts, hearts_refill_at }, earnedAchievements: badges });
  }

  // POST — purchase hearts with XP (moved from /api/hearts)
  if (req.method === 'POST') {
    const [user] = await sql`SELECT hearts, xp FROM users WHERE id = ${payload.userId}`;
    if (!user) return res.status(404).json({ error: 'User not found' });
    if (user.hearts >= 5) return res.status(400).json({ error: 'Hearts already full' });
    if (user.xp < XP_COST) return res.status(400).json({ error: `Need ${XP_COST} XP` });
    const [updated] = await sql`
      UPDATE users SET hearts = 5, hearts_refill_at = NULL, xp = xp - ${XP_COST}
      WHERE id = ${payload.userId} RETURNING hearts, xp
    `;
    return res.status(200).json({ hearts: updated.hearts, xp: updated.xp });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
