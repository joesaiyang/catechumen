-- =============================================================
-- Catechumen schema
-- Run: psql $DATABASE_URL -f db/schema.sql
-- =============================================================

-- Extensions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- =============================================================
-- FAMILIES & USERS
-- =============================================================
CREATE TABLE IF NOT EXISTS families (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS users (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  family_id       UUID REFERENCES families(id) ON DELETE CASCADE,
  role            TEXT NOT NULL CHECK (role IN ('parent', 'child')),
  display_name    TEXT NOT NULL,
  -- parent auth
  email           TEXT UNIQUE,
  password_hash   TEXT,
  -- child auth (username scoped to family)
  username        TEXT,
  pin_hash        TEXT,
  -- gamification
  xp              INTEGER NOT NULL DEFAULT 0,
  streak_days     INTEGER NOT NULL DEFAULT 0,
  streak_last_at  DATE,
  gems            INTEGER NOT NULL DEFAULT 50,
  hearts          INTEGER NOT NULL DEFAULT 5,
  hearts_reset_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  -- league
  league_tier     TEXT NOT NULL DEFAULT 'Citrine',
  -- meta
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (family_id, username)
);

-- =============================================================
-- CATECHISM CONTENT
-- =============================================================
CREATE TABLE IF NOT EXISTS questions (
  id          SERIAL PRIMARY KEY,
  number      INTEGER NOT NULL UNIQUE,
  unit        INTEGER NOT NULL,
  unit_name   TEXT NOT NULL,
  question    TEXT NOT NULL,
  answer      TEXT NOT NULL,
  proof_texts JSONB NOT NULL DEFAULT '[]'
  -- proof_texts: [{reference: "1 Cor 10:31", text: "Whether therefore..."}]
);

-- =============================================================
-- USER PROGRESS (SM-2 spaced repetition)
-- =============================================================
CREATE TABLE IF NOT EXISTS user_progress (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  question_id     INTEGER NOT NULL REFERENCES questions(number),
  -- SM-2 fields
  repetitions     INTEGER NOT NULL DEFAULT 0,   -- n
  ease_factor     NUMERIC(4,2) NOT NULL DEFAULT 2.5,  -- EF
  interval_days   INTEGER NOT NULL DEFAULT 1,   -- I
  due_at          TIMESTAMPTZ NOT NULL DEFAULT now(),
  -- progress bookkeeping
  mastered        BOOLEAN NOT NULL DEFAULT false,
  last_answer_at  TIMESTAMPTZ,
  correct_streak  INTEGER NOT NULL DEFAULT 0,
  total_attempts  INTEGER NOT NULL DEFAULT 0,
  total_correct   INTEGER NOT NULL DEFAULT 0,
  UNIQUE (user_id, question_id)
);

-- =============================================================
-- LESSON SESSIONS
-- =============================================================
CREATE TABLE IF NOT EXISTS lesson_sessions (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  question_id   INTEGER NOT NULL REFERENCES questions(number),
  mode          TEXT NOT NULL CHECK (mode IN ('fill_blank', 'multiple_choice', 'free_recall')),
  correct       BOOLEAN NOT NULL,
  time_ms       INTEGER,
  xp_earned     INTEGER NOT NULL DEFAULT 0,
  hearts_lost   INTEGER NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- =============================================================
-- ACHIEVEMENTS
-- =============================================================
CREATE TABLE IF NOT EXISTS achievements (
  id          TEXT PRIMARY KEY,
  name        TEXT NOT NULL,
  description TEXT NOT NULL,
  icon        TEXT NOT NULL,
  xp_reward   INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS user_achievements (
  user_id        UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  achievement_id TEXT NOT NULL REFERENCES achievements(id),
  earned_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, achievement_id)
);

-- =============================================================
-- LEAGUES
-- =============================================================
CREATE TABLE IF NOT EXISTS league_weeks (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tier        TEXT NOT NULL,
  week_start  DATE NOT NULL,
  week_end    DATE NOT NULL,
  UNIQUE (tier, week_start)
);

CREATE TABLE IF NOT EXISTS league_entries (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  league_week_id UUID NOT NULL REFERENCES league_weeks(id),
  user_id        UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  xp_earned      INTEGER NOT NULL DEFAULT 0,
  UNIQUE (league_week_id, user_id)
);

-- =============================================================
-- INDEXES
-- =============================================================
CREATE INDEX IF NOT EXISTS idx_user_progress_user_due ON user_progress(user_id, due_at);
CREATE INDEX IF NOT EXISTS idx_lesson_sessions_user ON lesson_sessions(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_league_entries_week ON league_entries(league_week_id, xp_earned DESC);

-- =============================================================
-- SEED: Achievements
-- =============================================================
INSERT INTO achievements (id, name, description, icon, xp_reward) VALUES
  ('first_answer',    'First steps',       'Answer your first question correctly',     'ti-check',        10),
  ('streak_3',        '3-day streak',      'Practice 3 days in a row',                 'ti-flame',        25),
  ('streak_7',        '7-day streak',      'Practice 7 days in a row',                 'ti-flame',        75),
  ('streak_30',       '30-day streak',     'Practice 30 days in a row',                'ti-flame',       300),
  ('first_mastery',   'First mastery',     'Master your first question',               'ti-star',         50),
  ('unit_complete',   'Unit conqueror',    'Complete an entire unit',                  'ti-trophy',      200),
  ('all_107',         'Catechumen',        'Master all 107 questions',                 'ti-crown',      2000),
  ('perfect_lesson',  'Perfect lesson',    'Complete a lesson without losing a heart', 'ti-heart',        30),
  ('speed_demon',     'Speed demon',       'Answer correctly in under 5 seconds',      'ti-bolt',         20),
  ('league_gold',     'League champion',   'Finish a week in 1st place',               'ti-medal-2',     100)
ON CONFLICT (id) DO NOTHING;
