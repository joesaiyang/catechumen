// POST /api/lessons/answer — record an answer, update SM-2, award XP
import type { VercelRequest, VercelResponse } from '@vercel/node';
import getDb from '../_lib/db.js';
import { requireAuth } from '../_lib/auth.js';

function sm2(ef: number, n: number, intervalDays: number, quality: number) {
  // quality: 0–5 (0–2 = fail, 3–5 = pass)
  const newEf = Math.max(1.3, ef + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (quality < 3) {
    return { ef: newEf, n: 0, interval: 1 };
  }
  const newN = n + 1;
  let newInterval: number;
  if (newN === 1) newInterval = 1;
  else if (newN === 2) newInterval = 6;
  else newInterval = Math.round(intervalDays * newEf);
  return { ef: newEf, n: newN, interval: newInterval };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const payload = requireAuth(req, res as never);
  if (!payload) return;

  const { questionId, correct, timeMs, mode } = req.body as {
    questionId: number; correct: boolean; timeMs: number; mode: string;
  };
  if (!questionId || correct === undefined) {
    return res.status(400).json({ error: 'Missing questionId or correct' });
  }

  const sql = getDb();
  const quality = correct ? (timeMs < 5000 ? 5 : timeMs < 15000 ? 4 : 3) : 1;
  const xpEarned = correct ? 15 : 0;
  const heartsLost = correct ? 0 : 1;

  // Upsert progress
  const existing = await sql`
    SELECT * FROM user_progress WHERE user_id = ${payload.userId} AND question_id = ${questionId}
  `;

  let newN = 0, newEf = 2.5, newInterval = 1;
  if (existing.length) {
    const r = sm2(existing[0].ease_factor, existing[0].repetitions, existing[0].interval_days, quality);
    newN = r.n; newEf = r.ef; newInterval = r.interval;
  } else {
    const r = sm2(2.5, 0, 1, quality);
    newN = r.n; newEf = r.ef; newInterval = r.interval;
  }

  const dueAt = new Date(Date.now() + newInterval * 24 * 60 * 60 * 1000);
  const mastered = newN >= 5 && newEf >= 2.0;

  await sql`
    INSERT INTO user_progress (user_id, question_id, repetitions, ease_factor, interval_days, due_at, mastered, last_answer_at, correct_streak, total_attempts, total_correct)
    VALUES (
      ${payload.userId}, ${questionId}, ${newN}, ${newEf}, ${newInterval}, ${dueAt}, ${mastered},
      now(),
      ${correct ? 1 : 0},
      1,
      ${correct ? 1 : 0}
    )
    ON CONFLICT (user_id, question_id) DO UPDATE SET
      repetitions    = ${newN},
      ease_factor    = ${newEf},
      interval_days  = ${newInterval},
      due_at         = ${dueAt},
      mastered       = ${mastered},
      last_answer_at = now(),
      correct_streak = CASE WHEN ${correct} THEN user_progress.correct_streak + 1 ELSE 0 END,
      total_attempts = user_progress.total_attempts + 1,
      total_correct  = user_progress.total_correct + ${correct ? 1 : 0}
  `;

  // Record session
  await sql`
    INSERT INTO lesson_sessions (user_id, question_id, mode, correct, time_ms, xp_earned, hearts_lost)
    VALUES (${payload.userId}, ${questionId}, ${mode ?? 'fill_blank'}, ${correct}, ${timeMs ?? null}, ${xpEarned}, ${heartsLost})
  `;

  // Award XP & deduct hearts
  if (correct) {
    await sql`UPDATE users SET xp = xp + ${xpEarned} WHERE id = ${payload.userId}`;
    // Update streak
    await sql`
      UPDATE users SET
        streak_days    = CASE WHEN streak_last_at = current_date - 1 THEN streak_days + 1
                              WHEN streak_last_at = current_date THEN streak_days
                              ELSE 1 END,
        streak_last_at = current_date
      WHERE id = ${payload.userId}
    `;
  } else {
    await sql`UPDATE users SET hearts = GREATEST(0, hearts - 1) WHERE id = ${payload.userId}`;
  }

  // Update league entry
  await sql`
    INSERT INTO league_entries (league_week_id, user_id, xp_earned)
    SELECT lw.id, ${payload.userId}, ${xpEarned}
    FROM league_weeks lw
    WHERE lw.tier = (SELECT league_tier FROM users WHERE id = ${payload.userId})
      AND lw.week_start <= current_date AND lw.week_end >= current_date
    ON CONFLICT (league_week_id, user_id) DO UPDATE SET
      xp_earned = league_entries.xp_earned + ${xpEarned}
  `;

  return res.status(200).json({ xpEarned, heartsLost, mastered, nextDue: dueAt });
}
