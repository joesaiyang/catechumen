# Future Quiz Modes

Currently the app only supports **Fill in the Blank**. The two modes below are planned for a future release.

---

## Multiple Choice

The user sees the question and picks one of four answers.

**How it was implemented:**
- `setupQuestion()` built `mcOptions: string[]` — the correct answer plus 3 answers pulled from other questions in the same session batch, padded with random entries from `DISTRACTORS` if the session had fewer than 4 questions.
- `mcSelected: string | null` tracked the user's pick.
- `check()` compared `mcSelected === questions[qIdx].answer`.
- `tryAgain()` cleared `mcSelected` and re-enabled the options.

**What to restore:**
- `@state() mcOptions: string[] = []` and `@state() mcSelected: string | null = null` in `lesson-page.ts`.
- The MC branch inside `setupQuestion`, `check`, and `tryAgain`.
- The MC option list template and CSS (`.mc-options`, `.mc-option`, `.mc-option.selected/correct/wrong/dim`).
- Mode selector UI in `library-page.ts` (the modal with three mode options and the mode pill on each card).

---

## Free Recall

The user sees the question and types the full answer from memory — the hardest mode.

**Design notes:**
- Show a `<textarea>` below the question.
- On "Check answer", normalise both the typed input and the correct answer (lowercase, strip punctuation, collapse whitespace) and compare. Accept if similarity is above a threshold (e.g. Levenshtein distance < 10% of answer length), or do a word-overlap check.
- Give partial credit feedback ("Good — you got 8 of 12 key words") rather than strict correct/wrong.
- On incorrect, reveal the correct answer alongside the user's attempt.

**What to add:**
- A `freeRecallInput: string` state for the textarea value.
- A normalise + compare utility function.
- A new template branch in `renderLesson` for free recall.
- CSS for the textarea input and partial-match feedback UI.
