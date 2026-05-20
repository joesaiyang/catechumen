import type { VercelRequest, VercelResponse } from '@vercel/node';
import bcrypt from 'bcryptjs';
import getDb from '../_lib/db.js';
import { signToken } from '../_lib/auth.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, password } = req.body as { email: string; password: string };
  if (!email || !password) return res.status(400).json({ error: 'Missing email or password' });

  const sql = getDb();
  const [user] = await sql`
    SELECT id, family_id, role, display_name, password_hash, xp, streak_days, gems, hearts, league_tier
    FROM users WHERE email = ${email.toLowerCase()} AND role = 'parent'
  `;

  if (!user || !user.password_hash) return res.status(401).json({ error: 'Invalid credentials' });

  const ok = await bcrypt.compare(password, user.password_hash);
  if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

  const token = signToken({ userId: user.id, role: 'parent', familyId: user.family_id });
  const { password_hash: _, ...safeUser } = user;
  return res.status(200).json({ token, user: safeUser });
}
