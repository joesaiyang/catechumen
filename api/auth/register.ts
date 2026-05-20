import type { VercelRequest, VercelResponse } from '@vercel/node';
import bcrypt from 'bcryptjs';
import getDb from '../_lib/db.js';
import { signToken } from '../_lib/auth.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, password, familyName, displayName } = req.body as {
    email: string; password: string; familyName: string; displayName: string;
  };

  if (!email || !password || !familyName || !displayName) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const sql = getDb();
  const rounds = parseInt(process.env.BCRYPT_ROUNDS ?? '12', 10);
  const passwordHash = await bcrypt.hash(password, rounds);

  try {
    const [family] = await sql`
      INSERT INTO families (name) VALUES (${familyName}) RETURNING id
    `;
    const [user] = await sql`
      INSERT INTO users (family_id, role, display_name, email, password_hash)
      VALUES (${family.id}, 'parent', ${displayName}, ${email.toLowerCase()}, ${passwordHash})
      RETURNING id, family_id, role, display_name, xp, streak_days, gems, hearts, league_tier
    `;
    const token = signToken({ userId: user.id, role: 'parent', familyId: family.id });
    return res.status(201).json({ token, user });
  } catch (err: unknown) {
    const pg = err as { code?: string };
    if (pg.code === '23505') return res.status(409).json({ error: 'Email already in use' });
    const msg = err instanceof Error ? err.message : String(err);
    console.error(err);
    return res.status(500).json({ error: msg });
  }
}
