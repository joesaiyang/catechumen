import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { auth, apiFetch } from '../store/auth.js';

interface ApiQuestion {
  id: string;
  number?: number;
  catechism_id?: string;
  unit?: number;
  unit_name?: string;
  section?: string;
  section_name?: string;
  section_total?: number;
  question: string;
  answer: string;
  proof_texts: { reference: string; text: string }[];
  is_new?: boolean;
}

interface Blank   { word: string; filled: string | null; chipIdx: number | null; }
interface Chip    { word: string; used: boolean; }
interface Segment { type: 'text' | 'blank'; text?: string; blankIdx?: number; }

type Phase = 'loading' | 'error' | 'studying' | 'filling' | 'correct' | 'incorrect' | 'complete' | 'out_of_hearts' | 'caught_up';

const STOP = new Set([
  'a','an','the','and','or','but','if','in','on','at','to','for','of','with','by',
  'from','as','is','was','are','were','be','been','being','have','has','had','do',
  'does','did','will','would','could','should','may','might','must','shall','that',
  'this','these','those','it','its','he','his','she','her','they','their','we','our',
  'you','your','him','them','us','not','no','nor','so','yet','all','each','every',
  'more','most','other','some','such','only','same','than','then','when','where',
  'while','who','which','what','how','there','both','either','neither','any','also',
  'into','upon','unto','hath','doth','thou','thee','thine','thy','ye','god','christ',
  'lord','jesus','man','men','one','two','three','four','five','six','seven',
]);

const DISTRACTORS = [
  'glorify','justify','sanctify','redeem','reconcile','atone','believe','repent',
  'obey','worship','praise','honor','enjoy','eternal','temporal','righteous','divine',
  'infinite','covenant','promise','salvation','redemption','justification',
  'sanctification','adoption','resurrection','ascension','incarnation','atonement',
  'sacrament','prayer','preaching','mediator','sovereign','prophet','priest',
  'faithful','perfect','sinless','merciful','gracious','immutable','foreordained',
  'everlasting','unchangeable','appointed','preserve','govern','transgress','confess',
  'effectual','spiritual','temporal','humiliation','exaltation','intercession',
  'imputed','ordained','appointed','revealed','manifested','declared','proclaimed',
];

function clean(w: string): string {
  return w.replace(/[^a-zA-Z]/g, '').toLowerCase();
}

function blankCount(answer: string): number {
  if (answer.length < 30) return 1;
  return Math.min(Math.floor((answer.length - 30) / 19) + 2, 6);
}

// Short but theologically important words that should be preferred as blanks
// even over longer generic words.
const PRIORITY_BLANK_WORDS = new Set([
  'free','sin','obey','pray','dead','holy','born','good','evil','love',
  'soul','word','king','lamb','true','life','hope','faith',
  'misery','mercy','grace','truth','light','glory','blood','wrath',
  'glorify','enjoy','believe','repent','worship','sanctify','justify',
]);

function buildExercise(answer: string) {
  const tokens = answer.split(/(\s+)/);
  const count  = blankCount(answer);

  // Try progressively looser filters until we have enough candidates
  let rawCandidates = tokens
    .map((t, i) => ({ i, c: clean(t) }))
    .filter(({ c }) => c.length >= 4 && !STOP.has(c));

  if (rawCandidates.length < count) {
    rawCandidates = tokens
      .map((t, i) => ({ i, c: clean(t) }))
      .filter(({ c }) => c.length >= 3 && !STOP.has(c));
  }

  if (rawCandidates.length === 0) {
    rawCandidates = tokens
      .map((t, i) => ({ i, c: clean(t) }))
      .filter(({ c }) => c.length >= 2);
  }

  // Deduplicate by word (keep first occurrence) so the same word isn't
  // blanked twice, then sort: priority theological words score length+10.
  const seenWords = new Set<string>();
  const candidates = rawCandidates.filter(({ c }) => {
    if (seenWords.has(c)) return false;
    seenWords.add(c);
    return true;
  });

  candidates.sort((a, b) => {
    const aScore = PRIORITY_BLANK_WORDS.has(a.c) ? a.c.length + 10 : a.c.length;
    const bScore = PRIORITY_BLANK_WORDS.has(b.c) ? b.c.length + 10 : b.c.length;
    return bScore - aScore;
  });

  const chosen = new Set(candidates.slice(0, count).map(x => x.i));

  const segments: Segment[] = [];
  const blanks: Blank[] = [];
  let buf = '';

  tokens.forEach((token, i) => {
    if (chosen.has(i)) {
      if (buf) { segments.push({ type: 'text', text: buf }); buf = ''; }
      const idx = blanks.length;
      segments.push({ type: 'blank', blankIdx: idx });
      blanks.push({ word: clean(token), filled: null, chipIdx: null });
    } else {
      buf += token;
    }
  });
  if (buf) segments.push({ type: 'text', text: buf });

  const chosenWords = blanks.map(b => b.word);
  const chosenSet   = new Set(chosenWords);
  const ansLower    = answer.toLowerCase();
  const distractors = DISTRACTORS
    .filter(w => !chosenSet.has(w) && !ansLower.includes(w))
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.max(3, chosenWords.length + 2));

  const bank: Chip[] = [...chosenWords, ...distractors]
    .sort(() => Math.random() - 0.5)
    .map(w => ({ word: w, used: false }));

  return { segments, blanks, bank };
}

@customElement('catechumen-lesson')
export class CatechumenLesson extends LitElement {
  @property({ type: String,  attribute: 'content-type'   }) contentType   = 'catechism';
  @property({ type: String,  attribute: 'content-source' }) contentSource = 'wsc';
  @property({ type: String,  attribute: 'quiz-mode'      }) quizMode      = 'fill_blank';
  @property({ type: Boolean, attribute: 'review-mode'    }) reviewMode    = false;
  @property({ type: Number,  attribute: 'session-key'    }) sessionKey    = 0;
  @property({ type: Boolean, attribute: 'child-mode'     }) childMode     = false;

  @state() phase: Phase = 'loading';
  @state() questions: ApiQuestion[] = [];
  @state() qIdx = 0;
  @state() studyReveal = 0;
  @state() blanks: Blank[] = [];
  @state() bank: Chip[] = [];
  @state() segments: Segment[] = [];
  @state() currentIdx = 0;
  @state() dragChipIdx: number | null = null;
  @state() dragOverBlankIdx: number | null = null;
  @state() hearts = auth.user?.hearts ?? 5;
  @state() heartsRefillAt: string | null = auth.user?.hearts_refill_at ?? null;
  @state() _tick = 0;
  @state() xp = auth.user?.xp ?? 0;
  @state() sessionXp = 0;
  @state() sessionCorrect = 0;
  @state() startTime = 0;
  @state() errorMsg = '';

  private get nextHeartLabel(): string {
    if (this.hearts >= 5 || !this.heartsRefillAt) return '';
    const ms = new Date(this.heartsRefillAt).getTime() - Date.now();
    if (ms <= 0) return '';
    const min = Math.ceil(ms / 60_000);
    return min >= 60 ? `${Math.floor(min / 60)}h ${min % 60}m` : `${min}m`;
  }

  private _loadedSource = '';
  private _loadedType   = '';
  private _loadedReview = false;
  private _loadedMode   = '';
  private _loadedKey    = -1;
  private _loadSeq      = 0;
  private _tickInterval = 0;

  connectedCallback() {
    super.connectedCallback();
    this._tickInterval = window.setInterval(() => { this._tick++; }, 60_000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this._tickInterval);
  }

  updated(changed: Map<string, unknown>) {
    const watched = ['contentSource', 'contentType', 'reviewMode', 'quizMode', 'sessionKey'];
    if (watched.some(k => changed.has(k))) {
      if (this.contentSource !== this._loadedSource ||
          this.contentType   !== this._loadedType   ||
          this.reviewMode    !== this._loadedReview  ||
          this.quizMode      !== this._loadedMode    ||
          this.sessionKey    !== this._loadedKey) {
        this._loadedSource = this.contentSource;
        this._loadedType   = this.contentType;
        this._loadedReview = this.reviewMode;
        this._loadedMode   = this.quizMode;
        this._loadedKey    = this.sessionKey;
        this.loadQuestions();
      }
    }
  }

  async loadQuestions() {
    // Sync hearts from auth store — may have regenerated since component init
    this.hearts       = auth.user?.hearts       ?? this.hearts;
    this.heartsRefillAt = auth.user?.hearts_refill_at ?? this.heartsRefillAt;
    this.xp           = auth.user?.xp           ?? this.xp;
    if (this.hearts === 0) { this.phase = 'out_of_hearts'; return; }
    const seq = ++this._loadSeq;
    this.phase = 'loading';
    this.qIdx = 0; this.sessionXp = 0; this.sessionCorrect = 0;
    try {
      const reviewParam = this.reviewMode ? '&mode=review' : '';
      const res = await apiFetch(`/api/lessons?limit=5&type=${this.contentType}&source=${this.contentSource}${reviewParam}`);
      if (seq !== this._loadSeq) return;
      if (!res.ok) throw new Error('Failed');
      const data = await res.json();
      if (seq !== this._loadSeq) return;
      this.questions = data.questions ?? [];
      if (!this.questions.length) { this.phase = 'caught_up'; return; }
      this.setupQuestion(0);
    } catch {
      if (seq !== this._loadSeq) return;
      this.phase = 'error';
      this.errorMsg = 'Could not load questions. Check your connection and try again.';
    }
  }

  setupQuestion(idx: number) {
    const q = this.questions[idx];
    if (q.is_new) {
      // New question — show the full answer first before quizzing
      this.studyReveal = q.answer.split(/\s+/).filter(Boolean).length;
      this.phase       = 'studying';
      this.startTime   = Date.now();
    } else {
      this.beginQuiz(idx);
    }
  }

  beginQuiz(idx = this.qIdx) {
    const q = this.questions[idx];
    const { segments, blanks, bank } = buildExercise(q.answer);
    this.segments   = segments;
    this.blanks     = blanks;
    this.bank       = bank;
    this.currentIdx = 0;
    this.phase      = 'filling';
    this.startTime  = Date.now();
  }

  pickChip(idx: number) {
    if (this.phase !== 'filling') return;
    const chip = this.bank[idx];
    if (chip.used || this.currentIdx >= this.blanks.length) return;
    this.blanks[this.currentIdx].filled   = chip.word;
    this.blanks[this.currentIdx].chipIdx  = idx;
    this.bank[idx].used = true;
    this.currentIdx++;
    this.requestUpdate();
  }

  clearBlank(idx: number) {
    if (this.phase !== 'filling') return;
    const b = this.blanks[idx];
    if (!b.filled || b.chipIdx === null) return;
    this.bank[b.chipIdx].used = false;
    b.filled = null; b.chipIdx = null;
    this.currentIdx = this.blanks.findIndex(x => !x.filled);
    if (this.currentIdx === -1) this.currentIdx = this.blanks.length;
    this.requestUpdate();
  }

  dropOnBlank(blankIdx: number) {
    if (this.phase !== 'filling' || this.dragChipIdx === null) return;
    const b = this.blanks[blankIdx];
    // Return the previous chip if the blank was already filled
    if (b.chipIdx !== null) this.bank[b.chipIdx].used = false;
    b.filled = this.bank[this.dragChipIdx].word;
    b.chipIdx = this.dragChipIdx;
    this.bank[this.dragChipIdx].used = true;
    this.dragChipIdx = null;
    this.dragOverBlankIdx = null;
    this.currentIdx = this.blanks.findIndex(x => !x.filled);
    if (this.currentIdx === -1) this.currentIdx = this.blanks.length;
    this.requestUpdate();
  }

  async check() {
    const correct = this.blanks.every(b => b.filled === b.word);
    const timeMs  = Date.now() - this.startTime;
    const q       = this.questions[this.qIdx];
    this.phase    = correct ? 'correct' : 'incorrect';

    try {
      const res = await apiFetch('/api/lessons/answer', {
        method: 'POST',
        body: JSON.stringify({
          contentId: q.id, contentType: this.contentType,
          correct, timeMs, mode: this.quizMode,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        if (correct) {
          this.xp += data.xpEarned;
          this.sessionXp += data.xpEarned;
          this.sessionCorrect++;
          auth.patch({ xp: this.xp });
        } else {
          this.hearts = Math.max(0, this.hearts - 1);
          this.heartsRefillAt = data.heartsRefillAt ?? this.heartsRefillAt;
          auth.patch({ hearts: this.hearts, hearts_refill_at: this.heartsRefillAt });
          if (this.hearts === 0) this.phase = 'out_of_hearts';
        }
      }
    } catch { /* best-effort */ }
  }

  advance() {
    const next = this.qIdx + 1;
    if (next >= this.questions.length) { this.phase = 'complete'; }
    else { this.qIdx = next; this.setupQuestion(next); }
  }

  tryAgain() {
    this.blanks.forEach(b => { b.filled = null; b.chipIdx = null; });
    this.bank.forEach(c => c.used = false);
    this.currentIdx = 0;
    this.phase = 'filling';
    this.startTime = Date.now();
    this.requestUpdate();
  }

  static styles = css`
    .lesson-frame { max-width: 720px; margin: 0 auto; }

    /* ── top bar ── */
    .top { display: flex; align-items: center; gap: 14px; margin-bottom: 28px; }
    .exit {
      width: 36px; height: 36px; border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      background: rgba(31,41,32,.05); color: #4A554A; font-size: 18px; cursor: pointer;
    }
    .exit:hover { background: rgba(31,41,32,.1); }
    .prog-wrap { flex: 1; display: flex; flex-direction: column; gap: 4px; }
    .prog-label { font-size: 11px; font-weight: 600; color: #7A8278; letter-spacing: .06em; text-transform: uppercase; }
    .prog-bar  { height: 14px; background: rgba(31,41,32,.07); border-radius: 7px; overflow: hidden; }
    .prog-fill { height: 100%; background: linear-gradient(90deg, #5A7A65, #2D4A3A); border-radius: 7px; transition: width .5s; }
    .hearts-mini { display: flex; align-items: center; gap: 6px; padding: 6px 12px; background: #E8D0CE; color: #9B2C2C; border-radius: 999px; font-weight: 700; font-size: 14px; }
    .hearts-mini i { font-size: 18px; }
    .xp-mini { display: flex; align-items: center; gap: 6px; padding: 6px 12px; background: #E1EBE5; color: #1B3024; border-radius: 999px; font-weight: 700; font-size: 14px; }

    /* ── lesson card ── */
    .lesson-card {
      background: #FFFCF5; border: 1px solid rgba(31,41,32,.08); border-radius: 20px;
      padding: 32px 36px; box-shadow: 0 2px 4px rgba(31,41,32,.08), 0 4px 16px rgba(31,41,32,.06);
      margin-bottom: 24px; position: relative; overflow: hidden;
    }
    .lesson-card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 6px;
      background: linear-gradient(90deg, #2D4A3A, #B5481E);
    }
    .meta { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
    .pill { display: inline-flex; align-items: center; gap: 6px; padding: 5px 12px; background: #E1EBE5; color: #1B3024; border-radius: 999px; font-size: 12px; font-weight: 600; }
    .unit-pill { background: #F0E1B8; color: #8A6620; }
    .prompt     { font-family: 'Fraunces', serif; font-style: italic; font-size: 14px; color: #B5481E; margin-bottom: 6px; }
    .instruction { font-family: 'Fraunces', serif; font-size: 24px; font-weight: 500; color: #1B3024; margin-bottom: 24px; }
    .qa-label   { font-size: 11px; font-weight: 700; color: #7A8278; text-transform: uppercase; letter-spacing: .1em; margin-bottom: 8px; }
    .question   { font-family: 'Fraunces', serif; font-size: 20px; font-weight: 500; color: #1F2920; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px dashed rgba(31,41,32,.15); }
    .answer     { font-family: 'Fraunces', serif; font-size: 22px; line-height: 2.1; color: #1F2920; margin-bottom: 28px; }

    /* ── study card (new question intro) ── */
    .new-badge {
      display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px;
      background: #F0E1B8; color: #8A6620; border-radius: 999px;
      font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
      margin-bottom: 20px;
    }
    .study-answer {
      font-family: 'Fraunces', serif; font-size: 20px; line-height: 1.75; color: #1B3024;
      margin-bottom: 24px; min-height: 2em;
    }
    .reveal-wrap { margin-bottom: 24px; }
    .reveal-label {
      font-size: 12px; font-weight: 600; color: #7A8278;
      text-transform: uppercase; letter-spacing: .06em; margin-bottom: 10px;
      display: flex; justify-content: space-between;
    }
    .reveal-slider {
      width: 100%; height: 4px; appearance: none; -webkit-appearance: none;
      background: linear-gradient(to right, #2D4A3A var(--pct, 100%), rgba(31,41,32,.15) var(--pct, 100%));
      border-radius: 2px; outline: none; cursor: pointer;
    }
    .reveal-slider::-webkit-slider-thumb {
      appearance: none; -webkit-appearance: none;
      width: 20px; height: 20px; border-radius: 50%;
      background: #2D4A3A; border: 3px solid #FFFCF5;
      box-shadow: 0 1px 4px rgba(31,41,32,.3); cursor: pointer;
    }
    .reveal-slider::-moz-range-thumb {
      width: 20px; height: 20px; border-radius: 50%;
      background: #2D4A3A; border: 3px solid #FFFCF5;
      box-shadow: 0 1px 4px rgba(31,41,32,.3); cursor: pointer; border: none;
    }
    .hide-all-btn {
      font-size: 11px; font-weight: 700; color: #B5481E; cursor: pointer;
      text-transform: uppercase; letter-spacing: .06em;
    }
    .hide-all-btn:hover { text-decoration: underline; }

    /* ── blanks ── */
    .blank {
      display: inline-block; min-width: 140px; padding: 2px 10px; margin: 0 8px;
      background: transparent; border: none;
      border-bottom: 2px solid rgba(45,74,58,.4);
      text-align: center; font-style: italic; color: rgba(31,41,32,.35);
      cursor: pointer; transition: all .2s; vertical-align: middle;
    }
    .blank.filled    { border-bottom: 2px solid #2D4A3A; color: #1B3024; font-style: normal; font-weight: 600; }
    .blank.correct   { border-bottom: 2px solid #2D4A3A; color: #1B3024; font-style: normal; font-weight: 600; animation: pop .4s ease; }
    .blank.incorrect { border-bottom: 2px solid #9B2C2C; color: #9B2C2C; font-style: normal; font-weight: 600; animation: shake .4s ease; }
    @keyframes pop   { 0%{transform:scale(1)} 50%{transform:scale(1.08)} 100%{transform:scale(1)} }
    @keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-5px)} 75%{transform:translateX(5px)} }

    /* ── word bank ── */
    .bank-label { font-size: 12px; font-weight: 600; color: #7A8278; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 10px; }
    .bank       { display: flex; flex-wrap: wrap; gap: 10px; }
    .chip {
      padding: 11px 20px; background: #FFFCF5;
      border: 1px solid rgba(31,41,32,.15); border-bottom: 3px solid rgba(31,41,32,.2); border-radius: 12px;
      font-family: 'Fraunces', serif; font-size: 17px; font-weight: 500; color: #1F2920;
      cursor: pointer; transition: all .1s; user-select: none;
    }
    .chip:hover:not(.used) { border-color: #2D4A3A; background: #F5EFE0; transform: translateY(-1px); }
    .chip:active:not(.used) { transform: translateY(1px); border-bottom-width: 1px; }
    .chip.used { opacity: .25; cursor: not-allowed; border-bottom-width: 1px; }
    .chip.dragging { opacity: .35; }
    .blank.drag-over { border-bottom: 2px solid #2D4A3A; background: rgba(45,74,58,.08); }

    /* ── feedback ── */
    .feedback {
      border-radius: 16px; padding: 18px 22px; margin-bottom: 16px;
      display: flex; align-items: center; gap: 14px; animation: slideUp .3s ease;
    }
    @keyframes slideUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
    .feedback.success { background: #E1EBE5; border: 1px solid #5A7A65; }
    .feedback.error   { background: #E8D0CE; border: 1px solid #C5878A; }
    .fb-icon { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0; }
    .feedback.success .fb-icon { background: #2D4A3A; color: #F0E1B8; }
    .feedback.error   .fb-icon { background: #9B2C2C; color: #F5EFE0; }
    .fb-title { font-family: 'Fraunces', serif; font-size: 18px; font-weight: 600; margin-bottom: 2px; }
    .feedback.success .fb-title { color: #1B3024; }
    .feedback.error   .fb-title { color: #7E1F1F; }
    .fb-sub { font-size: 13px; color: #4A554A; }

    /* ── actions ── */
    .actions { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
    .skip { padding: 14px 20px; color: #7A8278; font-weight: 600; font-size: 14px; cursor: pointer; border-radius: 12px; }
    .skip:hover { color: #1F2920; }
    .check-btn {
      flex: 1; padding: 16px 24px; background: #2D4A3A; color: #F5EFE0;
      border: none; border-bottom: 4px solid #1B3024; border-radius: 14px;
      font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700; font-size: 15px;
      letter-spacing: .04em; text-transform: uppercase; cursor: pointer; transition: all .1s;
    }
    .check-btn:hover:not(:disabled) { background: #1B3024; }
    .check-btn:active:not(:disabled) { transform: translateY(2px); border-bottom-width: 2px; }
    .check-btn:disabled { background: rgba(31,41,32,.08); color: rgba(31,41,32,.3); border-bottom-color: transparent; cursor: not-allowed; }
    .check-btn.continue  { background: #B5481E; border-bottom-color: #7E2F11; }
    .check-btn.continue:hover { background: #7E2F11; }
    .check-btn.try-again { background: #9B2C2C; border-bottom-color: #6B1F1F; }

    /* ── proof text ── */
    details { padding: 12px 16px; background: #FFFCF5; border: 1px solid rgba(31,41,32,.08); border-radius: 12px; font-size: 14px; }
    summary { cursor: pointer; color: #4A554A; font-weight: 500; list-style: none; display: flex; align-items: center; gap: 8px; }
    summary::-webkit-details-marker { display: none; }
    summary::before { content: '+'; font-weight: 600; color: #B5481E; }
    details[open] summary::before { content: '−'; }
    details p { margin-top: 10px; font-family: 'Fraunces', serif; font-style: italic; color: #1F2920; line-height: 1.6; }

    /* ── loading / error / complete ── */
    .center { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 400px; text-align: center; gap: 16px; }
    .spinner { width: 40px; height: 40px; border: 3px solid rgba(45,74,58,.15); border-top-color: #2D4A3A; border-radius: 50%; animation: spin 0.8s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .complete-card {
      background: #FFFCF5; border: 1px solid rgba(31,41,32,.08); border-radius: 20px;
      padding: 48px 36px; text-align: center; box-shadow: 0 2px 4px rgba(31,41,32,.08), 0 4px 16px rgba(31,41,32,.06);
    }
    .complete-icon { font-size: 48px; color: #C89B3C; margin-bottom: 16px; }
    .complete-title { font-family: 'Fraunces', serif; font-size: 32px; font-weight: 500; color: #1B3024; margin-bottom: 8px; }
    .complete-sub   { font-size: 15px; color: #4A554A; margin-bottom: 32px; }
    .complete-stats { display: flex; justify-content: center; gap: 32px; margin-bottom: 36px; }
    .cs-item { text-align: center; }
    .cs-num  { font-family: 'Fraunces', serif; font-size: 36px; font-weight: 600; color: #1B3024; line-height: 1; }
    .cs-lbl  { font-size: 12px; color: #7A8278; text-transform: uppercase; letter-spacing: .06em; font-weight: 600; margin-top: 4px; }
    .error-msg { font-size: 15px; color: #7E1F1F; }

  `;

  private renderBlank(idx: number): TemplateResult {
    const b = this.blanks[idx];
    const cls = this.phase === 'correct'   ? 'correct'
              : this.phase === 'incorrect' ? (b.filled === b.word ? 'correct' : 'incorrect')
              : b.filled ? 'filled' : '';
    const dropCls = this.dragOverBlankIdx === idx ? 'drag-over' : '';
    return html`<span
      class="blank ${cls} ${dropCls}"
      @click=${() => this.clearBlank(idx)}
      @dragover=${(e: DragEvent) => { e.preventDefault(); this.dragOverBlankIdx = idx; }}
      @dragleave=${() => { if (this.dragOverBlankIdx === idx) this.dragOverBlankIdx = null; }}
      @drop=${(e: DragEvent) => { e.preventDefault(); this.dropOnBlank(idx); }}
    >${b.filled || '      '}</span>`;
  }

  private renderAnswer(): TemplateResult {
    return html`${this.segments.map(s =>
      s.type === 'text'
        ? html`${s.text}`
        : this.renderBlank(s.blankIdx!)
    )}`;
  }

  private renderStudy(): TemplateResult {
    const q        = this.questions[this.qIdx];
    const progress = ((this.qIdx) / this.questions.length) * 100;
    const proofText = q.proof_texts?.[0];
    const words = q.answer.split(/\s+/).filter(Boolean);
    const pct   = words.length > 0 ? (this.studyReveal / words.length) * 100 : 100;
    const allHidden = this.studyReveal === 0;
    return html`
      <div class="lesson-frame">
        <div class="top">
          <div class="exit" @click=${() => this.dispatchEvent(new CustomEvent("exit-lesson", { bubbles: true, composed: true }))}>←</div>
          <div class="prog-wrap">
            <div class="prog-label">${(() => { const q = this.questions[this.qIdx]; return q.number != null ? `Question ${q.number}${q.section_total ? ` of ${q.section_total}` : ''}` : `Question ${this.qIdx + 1}`; })()}</div>
            <div class="prog-bar"><div class="prog-fill" style="width:${progress}%"></div></div>
          </div>
          <div class="xp-mini">◆${this.xp} XP</div>
          <div class="hearts-mini">
            ♥${this.hearts}
            ${this.nextHeartLabel ? html`<span style="font-size:11px;font-weight:500;opacity:.75">+1 in ${this.nextHeartLabel}</span>` : ''}
          </div>
        </div>

        <div class="lesson-card">
          <div class="meta">
            <span class="pill">${q.number != null ? `Q${q.number}` : 'Question'}</span>
            <span class="pill unit-pill">${q.section_name ?? q.unit_name ?? ''}</span>
          </div>
          <div class="qa-label">Question</div>
          <p class="question">${q.question}</p>
          <div class="qa-label">Answer</div>
          <div class="study-answer">${words.map((w, i) => html`<span style="opacity:${i < this.studyReveal ? '1' : '0'};transition:opacity .15s">${w} </span>`)}</div>
          <div class="reveal-wrap">
            <div class="reveal-label">
              <span>Reveal</span>
              <div style="display:flex;align-items:center;gap:10px">
                <span>${this.studyReveal} of ${words.length} words</span>
                <span class="hide-all-btn" @click=${() => { this.studyReveal = allHidden ? words.length : 0; }}>
                  ${allHidden ? 'Show all' : 'Hide all'}
                </span>
              </div>
            </div>
            <input class="reveal-slider" type="range"
              min="0" max="${words.length}"
              .value=${String(this.studyReveal)}
              style="--pct:${pct}%"
              @input=${(e: Event) => { this.studyReveal = parseInt((e.target as HTMLInputElement).value); }}
            />
          </div>
        </div>

        ${proofText ? html`
          <details>
            <summary>Scripture proof text</summary>
            <p>"${proofText.text}" — ${proofText.reference}</p>
          </details>
        ` : ''}

        <div class="actions" style="margin-top:16px">
          <button class="check-btn continue" @click=${() => this.beginQuiz()}>
            Got it — test me →
          </button>
        </div>
      </div>
    `;
  }

  private renderLoading(): TemplateResult {
    return html`<div class="center"><div class="spinner"></div><div style="color:#7A8278;font-size:14px">Loading your questions…</div></div>`;
  }

  private renderError(): TemplateResult {
    return html`
      <div class="center">
        ⚠
        <div class="error-msg">${this.errorMsg}</div>
        <button class="check-btn" style="flex:unset;padding:14px 28px" @click=${this.loadQuestions}>Try again</button>
      </div>
    `;
  }

  private renderComplete(): TemplateResult {
    return html`
      <div class="lesson-frame">
        <div class="complete-card">
          <div class="complete-icon">★</div>
          <div class="complete-title">${this.reviewMode ? 'Review complete!' : 'Session complete!'}</div>
          <div class="complete-sub">Great work — your progress has been saved.</div>
          <div class="complete-stats">
            <div class="cs-item">
              <div class="cs-num">+${this.sessionXp}</div>
              <div class="cs-lbl">XP earned</div>
            </div>
            <div class="cs-item">
              <div class="cs-num">${this.sessionCorrect}</div>
              <div class="cs-lbl">Correct</div>
            </div>
          </div>
          <button class="check-btn continue" style="max-width:280px;margin:0 auto 12px;display:block"
            @click=${this.loadQuestions}>
            Keep going →
          </button>
          <button class="check-btn" style="max-width:280px;margin:0 auto;display:block;background:transparent;color:#4A554A;border:1px solid rgba(31,41,32,.2);border-bottom-width:1px"
            @click=${() => this.dispatchEvent(new CustomEvent('exit-lesson', { bubbles: true, composed: true }))}>
            ← Back to home
          </button>
        </div>
      </div>
    `;
  }

  private async purchaseHearts() {
    const res = await apiFetch('/api/hearts', { method: 'POST' });
    if (!res.ok) {
      const data = await res.json();
      alert(data.error ?? 'Purchase failed');
      return;
    }
    const data = await res.json();
    this.hearts = data.hearts;
    this.heartsRefillAt = null;
    this.xp = data.xp;
    auth.patch({ hearts: data.hearts, xp: data.xp, hearts_refill_at: null });
    this.loadQuestions();
  }

  private renderOutOfHearts(): TemplateResult {
    const label    = this.nextHeartLabel;
    const canBuy   = (auth.user?.xp ?? 0) >= 100;
    const showStats = this.sessionCorrect > 0 || this.sessionXp > 0;
    return html`
      <div class="lesson-frame">
        <div class="complete-card">
          <div class="complete-icon" style="color:#9B2C2C">♥</div>
          <div class="complete-title">Out of hearts</div>
          <div class="complete-sub">
            ${label ? html`Next heart in <strong>${label}</strong> — or spend XP to continue now.` : 'Come back later to keep going.'}
          </div>
          ${showStats ? html`
            <div class="complete-stats">
              <div class="cs-item"><div class="cs-num">+${this.sessionXp}</div><div class="cs-lbl">XP earned</div></div>
              <div class="cs-item"><div class="cs-num">${this.sessionCorrect}</div><div class="cs-lbl">Correct</div></div>
            </div>` : ''}
          ${canBuy ? html`
            <button class="check-btn continue" style="max-width:300px;margin:0 auto 12px;display:block"
              @click=${this.purchaseHearts}>
              Spend 100 XP → Refill hearts
            </button>` : ''}
          <button class="check-btn" style="max-width:300px;margin:0 auto;display:block;background:transparent;color:#4A554A;border:1px solid rgba(31,41,32,.2);border-bottom-width:1px"
            @click=${() => this.dispatchEvent(new CustomEvent('exit-lesson', { bubbles: true, composed: true }))}>
            ← Back to home
          </button>
        </div>
      </div>
    `;
  }

  private renderCaughtUp(): TemplateResult {
    return html`
      <div class="lesson-frame">
        <div class="complete-card">
          <div class="complete-icon">★</div>
          <div class="complete-title">All caught up!</div>
          <div class="complete-sub">No questions are due right now. Come back tomorrow for your next review session.</div>
          <button class="check-btn continue" style="max-width:280px;margin:0 auto;display:block"
            @click=${() => this.dispatchEvent(new CustomEvent('exit-lesson', { bubbles: true, composed: true }))}>
            ← Back to home
          </button>
        </div>
      </div>
    `;
  }

  private renderLesson(): TemplateResult {
    const q         = this.questions[this.qIdx];
    const allFilled = this.blanks.every(b => b.filled);
    const progress  = ((this.qIdx + (this.phase === 'correct' ? 1 : 0)) / this.questions.length) * 100;
    const proofText = q.proof_texts?.[0];

    return html`
      <div class="lesson-frame">
        <div class="top">
          <div class="exit" @click=${() => this.dispatchEvent(new CustomEvent("exit-lesson", { bubbles: true, composed: true }))}>←</div>
          <div class="prog-wrap">
            <div class="prog-label">${this.reviewMode ? 'Review' : q.number != null ? `Question ${q.number}${q.section_total ? ` of ${q.section_total}` : ''}` : `Question ${this.qIdx + 1}`}</div>
            <div class="prog-bar"><div class="prog-fill" style="width:${progress}%"></div></div>
          </div>
          <div class="xp-mini">◆${this.xp} XP</div>
          <div class="hearts-mini">
            ♥${this.hearts}
            ${this.nextHeartLabel ? html`<span style="font-size:11px;font-weight:500;opacity:.75">+1 in ${this.nextHeartLabel}</span>` : ''}
          </div>
        </div>

        <div class="lesson-card">
          <div class="meta">
            <span class="pill">${q.number != null ? `Q${q.number}` : 'Question'}</span>
            <span class="pill unit-pill">${q.section_name ?? q.unit_name ?? ''}</span>
          </div>
          <div class="qa-label">Question</div>
          <p class="question">${q.question}</p>
          <div class="qa-label">Answer</div>
          <p class="answer">${this.renderAnswer()}</p>
          <div class="bank-label">Tap the words in order</div>
          <div class="bank">
            ${this.bank.map((c, i) => html`
              <button class="chip ${c.used ? 'used' : ''} ${this.dragChipIdx === i ? 'dragging' : ''}"
                @click=${() => this.pickChip(i)}
                ?disabled=${c.used}
                draggable="true"
                @dragstart=${(e: DragEvent) => { e.dataTransfer?.setData('text/plain', String(i)); this.dragChipIdx = i; }}
                @dragend=${() => { this.dragChipIdx = null; this.dragOverBlankIdx = null; }}
              >${c.word}</button>
            `)}
          </div>
        </div>

        ${this.phase === 'correct' ? html`
          <div class="feedback success">
            <div class="fb-icon">${this.childMode ? '🌟' : '✓'}</div>
            <div>
              <div class="fb-title">${this.childMode ? 'Amazing! 🎉' : 'Excellent!'}</div>
              <div class="fb-sub">${this.childMode ? 'You got it! +15 XP ⭐' : '+15 XP earned · Keep it up'}</div>
            </div>
          </div>
        ` : ''}
        ${this.phase === 'incorrect' ? html`
          <div class="feedback error">
            <div class="fb-icon">${this.childMode ? '💪' : '←'}</div>
            <div>
              <div class="fb-title">${this.childMode ? 'Almost! Try again.' : 'Not quite — you lost a heart.'}</div>
              <div class="fb-sub">${this.childMode ? 'Tap a word to clear it and try again.' : 'Tap a filled blank to clear it and try again.'}</div>
            </div>
          </div>
        ` : ''}

        <div class="actions">
          <button class="skip" @click=${this.advance}>Skip</button>
          ${this.phase === 'filling'   ? html`<button class="check-btn" @click=${this.check} ?disabled=${!allFilled}>Check answer</button>` : ''}
          ${this.phase === 'correct'   ? html`<button class="check-btn continue"  @click=${this.advance}>Continue →</button>` : ''}
          ${this.phase === 'incorrect' ? html`<button class="check-btn try-again" @click=${this.tryAgain}>Try again</button>` : ''}
        </div>

        ${proofText ? html`
          <details>
            <summary>Scripture proof text</summary>
            <p>"${proofText.text}" — ${proofText.reference}</p>
          </details>
        ` : ''}
      </div>
    `;
  }

  render(): TemplateResult {
    if (this.phase === 'loading')       return this.renderLoading();
    if (this.phase === 'error')         return this.renderError();
    if (this.phase === 'complete')      return this.renderComplete();
    if (this.phase === 'caught_up')     return this.renderCaughtUp();
    if (this.phase === 'out_of_hearts') return this.renderOutOfHearts();
    if (this.phase === 'studying')      return this.renderStudy();
    return this.renderLesson();
  }
}
