export interface AwardedAchievement {
  id: string; name: string; description: string; xp_reward: number;
}

// Checks DB state and awards any newly-earned achievements.
// Only handles the achievements that can be evaluated per-answer.
export async function checkAndAward(
  userId: string,
  sql: any,
  opts: { streakDays: number; newlyMastered: boolean; timeMs: number },
): Promise<AwardedAchievement[]> {
  // Achievements we can evaluate here (skip league/unit-complete/all-wsc for now)
  const checkable = ['first_answer', 'streak_3', 'streak_7', 'streak_30', 'first_mastery', 'speed_demon'];

  const pending = await sql`
    SELECT id, name, description, xp_reward FROM achievements
    WHERE id = ANY(${checkable})
      AND id NOT IN (SELECT achievement_id FROM user_achievements WHERE user_id = ${userId})
  `;

  if (pending.length === 0) return [];

  const [counts] = await sql`
    SELECT COUNT(*) FILTER (WHERE correct) AS total_correct
    FROM lesson_sessions WHERE user_id = ${userId}
  `;
  const totalCorrect = Number(counts?.total_correct ?? 0);

  const toAward = (pending as AwardedAchievement[]).filter(a => {
    switch (a.id) {
      case 'first_answer':  return totalCorrect >= 1;
      case 'streak_3':      return opts.streakDays >= 3;
      case 'streak_7':      return opts.streakDays >= 7;
      case 'streak_30':     return opts.streakDays >= 30;
      case 'first_mastery': return opts.newlyMastered;
      case 'speed_demon':   return opts.timeMs < 5000;
      default:              return false;
    }
  });

  if (toAward.length === 0) return [];

  for (const a of toAward) {
    await sql`
      INSERT INTO user_achievements (user_id, achievement_id)
      VALUES (${userId}, ${a.id})
      ON CONFLICT DO NOTHING
    `;
    if (a.xp_reward > 0) {
      await sql`UPDATE users SET xp = xp + ${a.xp_reward} WHERE id = ${userId}`;
    }
  }

  return toAward;
}

export async function earnedIds(userId: string, sql: any): Promise<string[]> {
  const rows = await sql`SELECT achievement_id FROM user_achievements WHERE user_id = ${userId}`;
  return rows.map((r: { achievement_id: string }) => r.achievement_id);
}
