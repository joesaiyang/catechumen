// POST /api/family/child-login — child enters family name + username + PIN
import type { VercelRequest, VercelResponse } from '@vercel/node';
import bcrypt from 'bcryptjs';
import getDb from '../_lib/db.js';
import { signToken } from '../_lib/auth.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { familyId, username, pin } = req.body as {
    familyId: string; username: string; pin: string;
  };
  if (!familyId || !username || !pin) {
    return res.status(400).json({ error: 'Missing familyId, username, or pin' });
  }

  const sql = getDb();
  const [child] = await sql`
    SELECT id, family_id, role, display_name, username, pin_hash, xp, streak_days, gems, hearts, league_tier
    FROM users
    WHERE family_id = ${familyId} AND username = ${username.toLowerCase()} AND role = 'child'
  `;

  if (!child || !child.pin_hash) return res.status(401).json({ error: 'Invalid credentials' });

  const ok = await bcrypt.compare(pin, child.pin_hash);
  if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

  const token = signToken({ userId: child.id, role: 'child', familyId: child.family_id });
  const { pin_hash: _, ...safeChild } = child;
  return res.status(200).json({ token, user: safeChild });
}
