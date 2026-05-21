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
      SELECT u.id, u.display_name, u.username, u.xp, u.streak_days, u.hearts, u.created_at,
             COUNT(up.id) FILTER (WHERE up.mastered) AS mastered_count,
             MAX(ls.created_at) AS last_active_at
      FROM users u
      LEFT JOIN user_progress up ON up.user_id = u.id
      LEFT JOIN lesson_sessions ls ON ls.user_id = u.id
      WHERE u.family_id = ${payload.familyId} AND u.role = 'child'
      GROUP BY u.id
      ORDER BY u.created_at ASC
    `;

    if (children.length === 0) return res.status(200).json({ children: [] });

    const childIds = (children as any[]).map((c: any) => c.id);
    const plans = await sql`
      SELECT
        sp.user_id,
        sp.catechism_id,
        c.name        AS catechism_name,
        c.abbreviation,
        c.question_count,
        COUNT(up.id)                            AS answered,
        COUNT(up.id) FILTER (WHERE up.mastered) AS mastered
      FROM user_study_plans sp
      JOIN catechisms c ON c.id = sp.catechism_id
      LEFT JOIN user_progress up
        ON up.user_id = sp.user_id
        AND up.content_type = 'catechism'
        AND up.content_id IN (
          SELECT id FROM catechism_questions WHERE catechism_id = sp.catechism_id
        )
      WHERE sp.user_id = ANY(${childIds}) AND sp.is_active = true
      GROUP BY sp.user_id, sp.catechism_id, c.name, c.abbreviation, c.question_count
      ORDER BY sp.user_id, c.name
    `;

    const plansByChild: Record<string, any[]> = {};
    for (const p of plans as any[]) {
      if (!plansByChild[p.user_id]) plansByChild[p.user_id] = [];
      plansByChild[p.user_id].push(p);
    }

    const badges = await sql`
      SELECT user_id, achievement_id
      FROM user_achievements
      WHERE user_id = ANY(${childIds})
    `;
    const badgesByChild: Record<string, string[]> = {};
    for (const b of badges as any[]) {
      if (!badgesByChild[b.user_id]) badgesByChild[b.user_id] = [];
      badgesByChild[b.user_id].push(b.achievement_id);
    }

    const result = (children as any[]).map((c: any) => ({
      ...c,
      plans:            plansByChild[c.id]  ?? [],
      earnedAchievements: badgesByChild[c.id] ?? [],
    }));

    return res.status(200).json({ children: result });
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

  if (req.method === 'PATCH') {
    const { childId, displayName, username, pin } = req.body as {
      childId: string; displayName?: string; username?: string; pin?: string;
    };
    if (!childId) return res.status(400).json({ error: 'Missing childId' });
    if (pin && !/^\d{4,6}$/.test(pin)) return res.status(400).json({ error: 'PIN must be 4–6 digits' });

    const rounds = parseInt(process.env.BCRYPT_ROUNDS ?? '12', 10);
    const pinHash = pin ? await bcrypt.hash(pin, rounds) : null;

    try {
      const [child] = await sql`
        UPDATE users SET
          display_name = COALESCE(${displayName ?? null}, display_name),
          username     = COALESCE(${username?.toLowerCase() ?? null}, username),
          pin_hash     = COALESCE(${pinHash}, pin_hash)
        WHERE id = ${childId} AND family_id = ${payload.familyId} AND role = 'child'
        RETURNING id, display_name, username, xp, streak_days, hearts, gems, league_tier
      `;
      if (!child) return res.status(404).json({ error: 'Child not found' });
      return res.status(200).json({ child });
    } catch (err: unknown) {
      const pg = err as { code?: string };
      if (pg.code === '23505') return res.status(409).json({ error: 'Username already taken in this family' });
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  if (req.method === 'DELETE') {
    const childId = req.query.childId as string | undefined;
    if (!childId) return res.status(400).json({ error: 'Missing childId' });
    await sql`
      DELETE FROM users
      WHERE id = ${childId} AND family_id = ${payload.familyId} AND role = 'child'
    `;
    return res.status(200).json({ ok: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
