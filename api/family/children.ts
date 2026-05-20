import type { VercelRequest, VercelResponse } from '@vercel/node';
import bcrypt from 'bcryptjs';
import getDb from '../_lib/db.js';
import { requireAuth, signToken } from '../_lib/auth.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const sql = getDb();

  // No-auth lookup by parent email — used by child login screen
  if (req.method === 'GET' && req.query.email) {
    const email = req.query.email as string;
    const [row] = await sql`
      SELECT f.id, f.name FROM families f
      JOIN users u ON u.family_id = f.id
      WHERE u.email = ${email.toLowerCase()} AND u.role = 'parent'
    `;
    if (!row) return res.status(404).json({ error: 'No family found for that email' });
    return res.status(200).json({ familyId: row.id, familyName: row.name });
  }

  const payload = requireAuth(req, res as never);
  if (!payload) return;
  if (payload.role !== 'parent') return res.status(403).json({ error: 'Parents only' });

  if (req.method === 'GET') {
    const children = await sql`
      SELECT u.id, u.display_name, u.username, u.xp, u.streak_days, u.gems, u.hearts, u.league_tier, u.created_at,
             COUNT(up.id) FILTER (WHERE up.mastered) AS mastered_count,
             COUNT(up.id) AS total_attempted,
             MAX(ls.created_at) AS last_active_at
      FROM users u
      LEFT JOIN user_progress up ON up.user_id = u.id
      LEFT JOIN lesson_sessions ls ON ls.user_id = u.id
      WHERE u.family_id = ${payload.familyId} AND u.role = 'child'
      GROUP BY u.id
      ORDER BY u.created_at ASC
    `;
    return res.status(200).json({ children });
  }

  if (req.method === 'POST') {
    const { displayName, username, pin } = req.body as {
      displayName: string; username: string; pin: string;
    };
    if (!displayName || !username || !pin) {
      return res.status(400).json({ error: 'Missing displayName, username, or pin' });
    }
    if (!/^\d{4,6}$/.test(pin)) {
      return res.status(400).json({ error: 'PIN must be 4–6 digits' });
    }

    const rounds = parseInt(process.env.BCRYPT_ROUNDS ?? '12', 10);
    const pinHash = await bcrypt.hash(pin, rounds);

    try {
      const [child] = await sql`
        INSERT INTO users (family_id, role, display_name, username, pin_hash)
        VALUES (${payload.familyId}, 'child', ${displayName}, ${username.toLowerCase()}, ${pinHash})
        RETURNING id, family_id, role, display_name, username, xp, streak_days, gems, hearts, league_tier
      `;
      const token = signToken({ userId: child.id, role: 'child', familyId: payload.familyId });
      return res.status(201).json({ token, child });
    } catch (err: unknown) {
      const pg = err as { code?: string };
      if (pg.code === '23505') return res.status(409).json({ error: 'Username already taken in this family' });
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
