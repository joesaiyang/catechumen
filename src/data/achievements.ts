export interface BadgeDef {
  id: string; name: string; emoji: string; desc: string;
}

export const BADGES: BadgeDef[] = [
  { id: 'first_answer',   name: 'First Steps',     emoji: '✅', desc: 'Answer your first question correctly' },
  { id: 'speed_demon',    name: 'Speed Demon',      emoji: '⚡', desc: 'Answer correctly in under 5 seconds' },
  { id: 'first_mastery',  name: 'First Star',       emoji: '⭐', desc: 'Master your first question' },
  { id: 'streak_3',       name: '3-Day Streak',     emoji: '🔥', desc: 'Practice 3 days in a row' },
  { id: 'streak_7',       name: '7-Day Streak',     emoji: '🔥', desc: 'A whole week of practice!' },
  { id: 'streak_30',      name: '30-Day Streak',    emoji: '🏆', desc: '30 days! You\'re unstoppable!' },
  { id: 'perfect_lesson', name: 'Perfect Round',    emoji: '💎', desc: 'Finish a session without losing a heart' },
  { id: 'unit_complete',  name: 'Unit Hero',        emoji: '🛡️', desc: 'Complete an entire unit' },
  { id: 'all_wsc',        name: 'WSC Master',       emoji: '👑', desc: 'Master all 107 WSC questions' },
  { id: 'verse_master',   name: 'Verse Champion',   emoji: '📖', desc: 'Memorize 10 Bible verses' },
  { id: 'quiz_ace',       name: 'Bible Scholar',    emoji: '🎓', desc: 'Answer 50 quiz questions correctly' },
];
