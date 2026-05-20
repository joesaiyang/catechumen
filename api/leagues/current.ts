// GET /api/leagues/current — current week's leaderboard for the caller's tier
import type { VercelRequest, VercelResponse } from '@vercel/node';
import getDb from '../_lib/db.js';
import { requireAuth } from '../_lib/auth.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const payload = requireAuth(req, res as never);
  if (!payload) return;

  const sql = getDb();

  const [user] = await sql`SELECT league_tier FROM users WHERE id = ${payload.userId}`;
  if (!user) return res.status(404).json({ error: 'User not found' });

  const [week] = await sql`
    SELECT id, tier, week_start, week_end FROM league_weeks
    WHERE tier = ${user.league_tier}
      AND week_start <= current_date AND week_end >= current_date
  `;

  if (!week) return res.status(200).json({ week: null, entries: [] });

  const entries = await sql`
    SELECT u.id, u.display_name, u.league_tier,
           COALESCE(le.xp_earned, 0) AS xp_earned,
           ROW_NUMBER() OVER (ORDER BY COALESCE(le.xp_earned, 0) DESC) AS rank
    FROM users u
    LEFT JOIN league_entries le ON le.user_id = u.id AND le.league_week_id = ${week.id}
    WHERE u.family_id IN (
      SELECT family_id FROM league_entries le2
      JOIN users u2 ON u2.id = le2.user_id
      WHERE le2.league_week_id = ${week.id}
      UNION SELECT ${payload.familyId}
    )
    ORDER BY xp_earned DESC
    LIMIT 30
  `;

  return res.status(200).json({ week, entries, currentUserId: payload.userId });
}
