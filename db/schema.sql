-- =============================================================
-- Catechumen — full schema v2
-- Run: npm run db:migrate
-- =============================================================

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Drop changed/new tables so they can be cleanly recreated
DROP TABLE IF EXISTS league_entries      CASCADE;
DROP TABLE IF EXISTS league_weeks        CASCADE;
DROP TABLE IF EXISTS user_achievements   CASCADE;
DROP TABLE IF EXISTS user_progress       CASCADE;
DROP TABLE IF EXISTS lesson_sessions     CASCADE;
DROP TABLE IF EXISTS user_study_plans    CASCADE;
DROP TABLE IF EXISTS custom_quiz_items   CASCADE;
DROP TABLE IF EXISTS custom_quizzes      CASCADE;
DROP TABLE IF EXISTS catechism_questions CASCADE;
DROP TABLE IF EXISTS catechisms          CASCADE;
DROP TABLE IF EXISTS memory_verses       CASCADE;
DROP TABLE IF EXISTS bible_quiz_questions CASCADE;
DROP TABLE IF EXISTS questions           CASCADE;

-- =============================================================
-- FAMILIES & USERS
-- =============================================================
CREATE TABLE IF NOT EXISTS families (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name       TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS users (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  family_id       UUID REFERENCES families(id) ON DELETE CASCADE,
  role            TEXT NOT NULL CHECK (role IN ('parent', 'child')),
  display_name    TEXT NOT NULL,
  email           TEXT UNIQUE,
  password_hash   TEXT,
  username        TEXT,
  pin_hash        TEXT,
  xp              INTEGER NOT NULL DEFAULT 0,
  streak_days     INTEGER NOT NULL DEFAULT 0,
  streak_last_at  DATE,
  gems            INTEGER NOT NULL DEFAULT 50,
  hearts          INTEGER NOT NULL DEFAULT 5,
  hearts_reset_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  league_tier     TEXT NOT NULL DEFAULT 'Citrine',
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (family_id, username)
);

-- =============================================================
-- CONTENT: CATECHISMS
-- =============================================================
CREATE TABLE IF NOT EXISTS catechisms (
  id             TEXT PRIMARY KEY,
  name           TEXT NOT NULL,
  abbreviation   TEXT NOT NULL,
  description    TEXT,
  year           INTEGER,
  tradition      TEXT,
  question_count INTEGER NOT NULL DEFAULT 0,
  copyright_note TEXT,
  is_active      BOOLEAN NOT NULL DEFAULT true
);

CREATE TABLE IF NOT EXISTS catechism_questions (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  catechism_id TEXT NOT NULL REFERENCES catechisms(id),
  number       INTEGER NOT NULL,
  section      TEXT,       -- "Unit I", "Lord's Day 1", "Week 1"
  section_name TEXT,       -- "God as Creator", "Of Man's Misery"
  question     TEXT NOT NULL,
  answer       TEXT NOT NULL,
  proof_texts  JSONB NOT NULL DEFAULT '[]',
  UNIQUE (catechism_id, number)
);

-- =============================================================
-- CONTENT: MEMORY VERSES (World English Bible — public domain)
-- =============================================================
CREATE TABLE IF NOT EXISTS memory_verses (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reference   TEXT NOT NULL UNIQUE,
  book        TEXT NOT NULL,
  testament   TEXT NOT NULL CHECK (testament IN ('OT', 'NT')),
  chapter     INTEGER NOT NULL,
  verse_start INTEGER NOT NULL,
  verse_end   INTEGER,
  text_web    TEXT NOT NULL,
  theme       TEXT,
  difficulty  INTEGER NOT NULL DEFAULT 1 CHECK (difficulty BETWEEN 1 AND 3),
  tags        TEXT[] NOT NULL DEFAULT '{}'
);

-- =============================================================
-- CONTENT: BIBLE QUIZ QUESTIONS
-- =============================================================
CREATE TABLE IF NOT EXISTS bible_quiz_questions (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  testament  TEXT NOT NULL CHECK (testament IN ('OT', 'NT')),
  book       TEXT,
  reference  TEXT,
  category   TEXT, -- 'people', 'places', 'events', 'doctrine', 'prophecy'
  difficulty INTEGER NOT NULL DEFAULT 1 CHECK (difficulty BETWEEN 1 AND 3),
  question   TEXT NOT NULL,
  answer     TEXT NOT NULL,
  options    JSONB NOT NULL DEFAULT '[]'  -- ["correct", "wrong1", "wrong2", "wrong3"]
);

-- =============================================================
-- CONTENT: PARENT CUSTOM QUIZZES
-- =============================================================
CREATE TABLE IF NOT EXISTS custom_quizzes (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  family_id   UUID NOT NULL REFERENCES families(id) ON DELETE CASCADE,
  created_by  UUID NOT NULL REFERENCES users(id),
  name        TEXT NOT NULL,
  description TEXT,
  is_active   BOOLEAN NOT NULL DEFAULT true,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS custom_quiz_items (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quiz_id         UUID NOT NULL REFERENCES custom_quizzes(id) ON DELETE CASCADE,
  sort_order      INTEGER NOT NULL DEFAULT 0,
  custom_question TEXT,
  custom_answer   TEXT,
  ref_type        TEXT CHECK (ref_type IN ('catechism', 'verse', 'bible_quiz')),
  ref_id          UUID,
  CONSTRAINT has_content CHECK (
    (custom_question IS NOT NULL AND custom_answer IS NOT NULL)
    OR (ref_type IS NOT NULL AND ref_id IS NOT NULL)
  )
);

-- =============================================================
-- USER STUDY PLANS (what + how they study)
-- =============================================================
CREATE TABLE IF NOT EXISTS user_study_plans (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  plan_type      TEXT NOT NULL CHECK (plan_type IN ('catechism', 'verses', 'bible_quiz', 'custom')),
  catechism_id   TEXT REFERENCES catechisms(id),
  custom_quiz_id UUID REFERENCES custom_quizzes(id),
  quiz_mode      TEXT NOT NULL DEFAULT 'fill_blank'
                   CHECK (quiz_mode IN ('fill_blank', 'multiple_choice', 'free_recall')),
  is_active      BOOLEAN NOT NULL DEFAULT true,
  started_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, plan_type, catechism_id, custom_quiz_id)
);

-- =============================================================
-- USER PROGRESS (SM-2 spaced repetition, generic across content)
-- =============================================================
CREATE TABLE IF NOT EXISTS user_progress (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  content_type   TEXT NOT NULL CHECK (content_type IN ('catechism', 'verse', 'bible_quiz', 'custom')),
  content_id     UUID NOT NULL,
  repetitions    INTEGER NOT NULL DEFAULT 0,
  ease_factor    NUMERIC(4,2) NOT NULL DEFAULT 2.5,
  interval_days  INTEGER NOT NULL DEFAULT 1,
  due_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
  mastered       BOOLEAN NOT NULL DEFAULT false,
  last_answer_at TIMESTAMPTZ,
  correct_streak INTEGER NOT NULL DEFAULT 0,
  total_attempts INTEGER NOT NULL DEFAULT 0,
  total_correct  INTEGER NOT NULL DEFAULT 0,
  UNIQUE (user_id, content_type, content_id)
);

-- =============================================================
-- LESSON SESSIONS
-- =============================================================
CREATE TABLE IF NOT EXISTS lesson_sessions (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  content_type TEXT NOT NULL,
  content_id   UUID NOT NULL,
  mode         TEXT NOT NULL CHECK (mode IN ('fill_blank', 'multiple_choice', 'free_recall')),
  correct      BOOLEAN NOT NULL,
  time_ms      INTEGER,
  xp_earned    INTEGER NOT NULL DEFAULT 0,
  hearts_lost  INTEGER NOT NULL DEFAULT 0,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
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
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tier       TEXT NOT NULL,
  week_start DATE NOT NULL,
  week_end   DATE NOT NULL,
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
CREATE INDEX IF NOT EXISTS idx_catechism_questions_cat  ON catechism_questions(catechism_id, number);
CREATE INDEX IF NOT EXISTS idx_user_progress_due        ON user_progress(user_id, due_at);
CREATE INDEX IF NOT EXISTS idx_user_progress_type       ON user_progress(user_id, content_type);
CREATE INDEX IF NOT EXISTS idx_lesson_sessions_user     ON lesson_sessions(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_custom_quiz_items_quiz   ON custom_quiz_items(quiz_id, sort_order);

-- =============================================================
-- SEED: Catechism registry
-- =============================================================
INSERT INTO catechisms (id, name, abbreviation, description, year, tradition, question_count) VALUES
  ('wsc',        'Westminster Shorter Catechism',  'WSC',  'The foundational catechism of the Westminster Standards, covering essential Christian doctrine in 107 questions.',       1647, 'Reformed Presbyterian', 107),
  ('heidelberg', 'Heidelberg Catechism',           'HC',   'A warm, personal catechism organized around comfort, misery, deliverance, and gratitude. 129 questions.',              1563, 'Reformed',              129),
  ('baptist1695','The Baptist Catechism (1695)',   'BC',   'Benjamin Keach''s catechism for Baptist churches, closely following the WSC with distinctions on baptism. 107 questions.', 1695, 'Reformed Baptist',  107)
ON CONFLICT (id) DO NOTHING;

-- =============================================================
-- SEED: Achievements
-- =============================================================
INSERT INTO achievements (id, name, description, icon, xp_reward) VALUES
  ('first_answer',   'First steps',        'Answer your first question correctly',        'ti-check',    10),
  ('streak_3',       '3-day streak',       'Practice 3 days in a row',                    'ti-flame',    25),
  ('streak_7',       '7-day streak',       'Practice 7 days in a row',                    'ti-flame',    75),
  ('streak_30',      '30-day streak',      'Practice 30 days in a row',                   'ti-flame',   300),
  ('first_mastery',  'First mastery',      'Master your first question',                  'ti-star',     50),
  ('unit_complete',  'Unit conqueror',     'Complete an entire unit',                     'ti-trophy',  200),
  ('all_wsc',        'WSC Complete',       'Master all 107 Westminster Shorter Catechism questions', 'ti-crown', 2000),
  ('perfect_lesson', 'Perfect lesson',     'Complete a session without losing a heart',   'ti-heart',    30),
  ('speed_demon',    'Speed demon',        'Answer correctly in under 5 seconds',         'ti-bolt',     20),
  ('league_gold',    'League champion',    'Finish a week in 1st place',                  'ti-medal-2', 100),
  ('verse_master',   'Word hidden',        'Memorize 10 Bible verses',                    'ti-book-2',  150),
  ('quiz_ace',       'Bible scholar',      'Answer 50 Bible quiz questions correctly',    'ti-school',  200)
ON CONFLICT (id) DO NOTHING;
