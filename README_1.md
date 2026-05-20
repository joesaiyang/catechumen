# Catechumen — Demo

A single-file Lit prototype of the gamified Westminster Shorter Catechism app. Open `index.html` in any modern browser — no build step, no install.

## What's in here

Four interactive screens accessible from the tabs at the top:

1. **Learning path** — Duolingo-style unit map with completed/current/locked question nodes, daily quest banner, achievements sidebar, and verse of the day
2. **Lesson** — fully interactive fill-in-the-blank exercise for Q1 ("What is the chief end of man?"). Tap the word chips to fill in the blanks, then check your answer. Get it wrong and you lose a heart; get it right and earn XP
3. **Parent dashboard** — overview stats, weekly practice chart by child, and per-child progress cards (Samuel, Eden, Lydia)
4. **Weekly league** — Sapphire League leaderboard with promotion/demotion zones, showing where the logged-in user sits

## Design choices worth knowing

**Aesthetic**: warm parchment + deep evergreen + rust accents. Fraunces (serif) for display, Plus Jakarta Sans for UI. The goal was something that feels like an heirloom illustrated Bible crossed with a modern learning app — dignified enough for Scripture, playful enough for kids.

**Architecture**: five Lit custom elements (`stats-bar`, `catechumen-path`, `catechumen-lesson`, `catechumen-parent`, `catechumen-league`) loaded via importmap from CDN. This is exactly the component pattern the real app should use — each screen is a self-contained custom element with its own styles in `static styles` and reactive state via `static properties`.

**No backend yet**: all data is hardcoded in the components. The point of this demo is to validate the experience and have a visual reference, not to be production-ready.

## Taking this into Claude Code

When you start the real build, give Claude Code these pointers in your initial prompt:

1. **Stack**: Vite + Lit SPA on the frontend, Vercel serverless functions in `/api`, Neon Postgres (or Vercel Postgres) for the database
2. **Reference this file** for visual design, component patterns, and the four core screens
3. **Start with the schema and seed data** for all 107 catechism questions — that's the foundation everything else builds on
4. **Then build auth** (parent signup with email/password, child accounts with username + PIN under a parent)
5. **Then port one screen at a time**, starting with the lesson screen (it's the highest-value, most interactive piece)

Suggested first prompt for Claude Code:

> I'm building Catechumen, a gamified Westminster Shorter Catechism app for families. Stack: Vite + Lit SPA, Vercel serverless functions, Neon Postgres. I have a working visual prototype in `catechumen-demo/index.html` that shows the four core screens and the aesthetic direction. Please scaffold the project: set up Vite + Lit + TypeScript, create the Vercel-compatible folder structure with `/api` for serverless functions, set up Neon Postgres connection, and write the initial database schema for users, families, questions, user_progress (with SM-2 spaced repetition fields), lesson_sessions, leagues, and achievements. Then write a seed script that loads all 107 Westminster Shorter Catechism questions with their proof texts. Don't build any UI yet — just the foundation.

That keeps the scope manageable and gets you to a working backend before the UI work starts.

## File layout (when you build it for real)

```
catechumen/
├── api/                    # Vercel serverless functions
│   ├── auth/
│   ├── lessons/
│   ├── family/
│   ├── leagues/
│   └── _lib/
├── src/                    # Lit SPA
│   ├── components/
│   ├── pages/
│   └── styles/
├── db/
│   ├── schema.sql
│   └── seed-catechism.ts
├── public/
├── vite.config.ts
├── vercel.json
└── package.json
```

## Known limitations of this demo

- Only Q1 is interactive in the lesson screen; the rest are mock data
- No persistence — refreshing the page resets your "progress"
- The path only shows Unit I (12 of 107 questions)
- No actual spaced repetition logic; the SRS scheduling lives in your head for now
- Mobile responsive is reasonable but not perfect; phones smaller than 380px will be cramped

These are all things to address in the real build, not flaws in the prototype.
