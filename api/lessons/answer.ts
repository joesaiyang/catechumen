// POST /api/lessons/answer — record answer, run SM-2, award XP
import type { VercelRequest, VercelResponse } from '@vercel/node';
import getDb from '../_lib/db.js';
import { requireAuth } from '../_lib/auth.js';
import { checkAndAward } from '../_lib/achievements.js';

function sm2(ef: number, n: number, intervalDays: number, quality: number) {
  const newEf = Math.max(1.3, ef + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (quality < 3) return { ef: newEf, n: 0, interval: 1 };
  const newN = n + 1;
  const newInterval = newN === 1 ? 1 : newN === 2 ? 6 : Math.round(intervalDays * newEf);
  return { ef: newEf, n: newN, interval: newInterval };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const payload = requireAuth(req, res as never);
  if (!payload) return;

  const { contentId, contentType, correct, timeMs, mode } = req.body as {
    contentId: string; contentType: string;
    correct: boolean; timeMs: number; mode: string;
  };

  if (!contentId || !contentType || correct === undefined) {
    return res.status(400).json({ error: 'Missing contentId, contentType, or correct' });
  }

  const sql = getDb();
  const quality   = correct ? (timeMs < 5000 ? 5 : timeMs < 15000 ? 4 : 3) : 1;
  const xpEarned  = correct ? 15 : 0;
  const heartsLost = correct ? 0 : 1;

  const [existing] = await sql`
    SELECT * FROM user_progress
    WHERE user_id = ${payload.userId}
      AND content_type = ${contentType}
      AND content_id = ${contentId}
  `;

  const base  = existing ?? { ease_factor: 2.5, repetitions: 0, interval_days: 1 };
  const { ef, n, interval } = sm2(base.ease_factor, base.repetitions, base.interval_days, quality);
  const dueAt  = new Date(Date.now() + interval * 86400000);
  const mastered = n >= 5 && ef >= 2.0;

  await sql`
    INSERT INTO user_progress
      (user_id, content_type, content_id, repetitions, ease_factor, interval_days,
       due_at, mastered, last_answer_at, correct_streak, total_attempts, total_correct)
    VALUES
      (${payload.userId}, ${contentType}, ${contentId},
       ${n}, ${ef}, ${interval}, ${dueAt}, ${mastered},
       now(), ${correct ? 1 : 0}, 1, ${correct ? 1 : 0})
    ON CONFLICT (user_id, content_type, content_id) DO UPDATE SET
      repetitions    = ${n},
      ease_factor    = ${ef},
      interval_days  = ${interval},
      due_at         = ${dueAt},
      mastered       = ${mastered},
      last_answer_at = now(),
      correct_streak = CASE WHEN ${correct}
                         THEN user_progress.correct_streak + 1
                         ELSE 0 END,
      total_attempts = user_progress.total_attempts + 1,
      total_correct  = user_progress.total_correct + ${correct ? 1 : 0}
  `;

  await sql`
    INSERT INTO lesson_sessions
      (user_id, content_type, content_id, mode, correct, time_ms, xp_earned, hearts_lost)
    VALUES
      (${payload.userId}, ${contentType}, ${contentId},
       ${mode ?? 'fill_blank'}, ${correct}, ${timeMs ?? null}, ${xpEarned}, ${heartsLost})
  `;

  if (correct) {
    await sql`UPDATE users SET xp = xp + ${xpEarned}, gems = gems + 1 WHERE id = ${payload.userId}`;
    await sql`
      UPDATE users SET
        streak_days    = CASE
          WHEN streak_last_at = current_date - 1 THEN streak_days + 1
          WHEN streak_last_at = current_date     THEN streak_days
          ELSE 1 END,
        streak_last_at = current_date
      WHERE id = ${payload.userId}
    `;
  } else {
    // Deduct heart and start refill timer if not already running
    await sql`
      UPDATE users
      SET hearts          = GREATEST(0, hearts - 1),
          hearts_refill_at = COALESCE(hearts_refill_at, now() + INTERVAL '30 minutes')
      WHERE id = ${payload.userId}
    `;
  }

  const [user] = await sql`SELECT hearts_refill_at, streak_days FROM users WHERE id = ${payload.userId}`;

  const newAchievements = correct ? await checkAndAward(payload.userId, sql, {
    streakDays:    user.streak_days,
    newlyMastered: mastered,
    timeMs:        timeMs ?? 0,
  }) : [];

  return res.status(200).json({
    xpEarned, heartsLost, mastered, nextDue: dueAt,
    heartsRefillAt: user.hearts_refill_at,
    newAchievements,
  });
}
