import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

interface Blank { word: string; filled: string | null; chipIdx: number | null; }
interface Chip  { word: string; used: boolean; }
type Phase = 'filling' | 'correct' | 'incorrect';

@customElement('catechumen-lesson')
export class CatechumenLesson extends LitElement {
  @state() blanks: Blank[] = [
    { word: 'glorify', filled: null, chipIdx: null },
    { word: 'enjoy',   filled: null, chipIdx: null },
  ];
  @state() bank: Chip[] = [
    { word: 'worship', used: false },
    { word: 'glorify', used: false },
    { word: 'serve',   used: false },
    { word: 'enjoy',   used: false },
    { word: 'praise',  used: false },
  ];
  @state() currentIdx = 0;
  @state() phase: Phase = 'filling';
  @state() hearts = 4;
  @state() xp = 340;

  static styles = css`
    .lesson-frame { max-width: 720px; margin: 0 auto; }

    .top { display: flex; align-items: center; gap: 14px; margin-bottom: 28px; }
    .exit {
      width: 36px; height: 36px; border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      background: rgba(31,41,32,.05); color: #4A554A; font-size: 18px; cursor: pointer;
    }
    .exit:hover { background: rgba(31,41,32,.1); }
    .prog-bar { flex: 1; height: 14px; background: rgba(31,41,32,.07); border-radius: 7px; overflow: hidden; }
    .prog-fill { height: 100%; background: linear-gradient(90deg, #5A7A65, #2D4A3A); border-radius: 7px; width: 40%; transition: width .5s; }
    .hearts-mini { display: flex; align-items: center; gap: 6px; padding: 6px 12px; background: #E8D0CE; color: #9B2C2C; border-radius: 999px; font-weight: 700; font-size: 14px; }
    .hearts-mini i { font-size: 18px; }

    .lesson-card {
      background: #FFFCF5; border: 1px solid rgba(31,41,32,.08); border-radius: 20px;
      padding: 32px 36px; box-shadow: 0 2px 4px rgba(31,41,32,.08), 0 4px 16px rgba(31,41,32,.06);
      margin-bottom: 24px; position: relative; overflow: hidden;
    }
    .lesson-card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 6px;
      background: linear-gradient(90deg, #2D4A3A, #B5481E);
    }
    .meta { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
    .pill { display: inline-flex; align-items: center; gap: 6px; padding: 5px 12px; background: #E1EBE5; color: #1B3024; border-radius: 999px; font-size: 12px; font-weight: 600; letter-spacing: .03em; }
    .hint-btn { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; background: #F0E1B8; color: #8A6620; border-radius: 999px; font-size: 12px; font-weight: 600; cursor: pointer; border: none; }
    .hint-btn:hover { background: #E8D49A; }

    .prompt { font-family: 'Fraunces', serif; font-style: italic; font-size: 14px; color: #B5481E; letter-spacing: .02em; margin-bottom: 8px; }
    .instruction { font-family: 'Fraunces', serif; font-size: 26px; font-weight: 500; color: #1B3024; margin-bottom: 28px; letter-spacing: -.01em; }
    .qa-label { font-size: 11px; font-weight: 700; color: #7A8278; text-transform: uppercase; letter-spacing: .1em; margin-bottom: 8px; }
    .question { font-family: 'Fraunces', serif; font-size: 22px; font-weight: 500; color: #1F2920; margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px dashed rgba(31,41,32,.15); }
    .answer { font-family: 'Fraunces', serif; font-size: 24px; line-height: 2; color: #1F2920; margin-bottom: 32px; }

    .blank {
      display: inline-block; min-width: 140px; padding: 4px 16px; margin: 0 4px;
      background: #F5EFE0; border: 2px dashed rgba(45,74,58,.35); border-radius: 10px;
      text-align: center; font-style: italic; color: rgba(31,41,32,.3);
      cursor: pointer; transition: all .2s; vertical-align: middle;
    }
    .blank.filled { background: #E1EBE5; border: 2px solid #2D4A3A; color: #1B3024; font-style: normal; font-weight: 600; }
    .blank.correct { background: #E1EBE5; border: 2px solid #2D4A3A; color: #1B3024; font-style: normal; font-weight: 600; animation: pop .4s ease; }
    .blank.incorrect { background: #E8D0CE; border: 2px solid #9B2C2C; color: #9B2C2C; font-style: normal; font-weight: 600; animation: shake .4s ease; }
    @keyframes pop   { 0%{transform:scale(1)} 50%{transform:scale(1.08)} 100%{transform:scale(1)} }
    @keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-6px)} 75%{transform:translateX(6px)} }

    .bank-label { font-size: 12px; font-weight: 600; color: #7A8278; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 12px; }
    .bank { display: flex; flex-wrap: wrap; gap: 10px; }
    .chip {
      padding: 12px 22px; background: #FFFCF5;
      border: 1px solid rgba(31,41,32,.15); border-bottom: 3px solid rgba(31,41,32,.2); border-radius: 12px;
      font-family: 'Fraunces', serif; font-size: 18px; font-weight: 500; color: #1F2920;
      cursor: pointer; transition: all .1s; user-select: none;
    }
    .chip:hover:not(.used) { border-color: #2D4A3A; background: #F5EFE0; transform: translateY(-1px); }
    .chip:active:not(.used) { transform: translateY(1px); border-bottom-width: 1px; }
    .chip.used { opacity: .25; cursor: not-allowed; border-bottom-width: 1px; }

    .feedback {
      border-radius: 16px; padding: 20px 24px; margin-bottom: 16px;
      display: flex; align-items: center; gap: 14px; animation: slideUp .3s ease;
    }
    @keyframes slideUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
    .feedback.success { background: #E1EBE5; border: 1px solid #5A7A65; }
    .feedback.error   { background: #E8D0CE; border: 1px solid #C5878A; }
    .feedback-icon { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0; }
    .feedback.success .feedback-icon { background: #2D4A3A; color: #F0E1B8; }
    .feedback.error   .feedback-icon { background: #9B2C2C; color: #F5EFE0; }
    .feedback-title { font-family: 'Fraunces', serif; font-size: 18px; font-weight: 600; margin-bottom: 2px; }
    .feedback.success .feedback-title { color: #1B3024; }
    .feedback.error   .feedback-title { color: #7E1F1F; }
    .feedback-sub { font-size: 13px; color: #4A554A; }

    .actions { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
    .skip { padding: 14px 22px; background: transparent; color: #7A8278; font-weight: 600; font-size: 14px; cursor: pointer; border-radius: 12px; }
    .skip:hover { color: #1F2920; }
    .check-btn {
      flex: 1; padding: 18px 28px; background: #2D4A3A; color: #F5EFE0;
      border: none; border-bottom: 4px solid #1B3024; border-radius: 14px;
      font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700; font-size: 16px;
      letter-spacing: .04em; text-transform: uppercase; cursor: pointer; transition: all .1s;
    }
    .check-btn:hover:not(:disabled) { background: #1B3024; }
    .check-btn:active:not(:disabled) { transform: translateY(2px); border-bottom-width: 2px; }
    .check-btn:disabled { background: rgba(31,41,32,.08); color: rgba(31,41,32,.3); border-bottom-color: rgba(31,41,32,.1); cursor: not-allowed; }
    .check-btn.continue  { background: #B5481E; border-bottom-color: #7E2F11; }
    .check-btn.continue:hover { background: #7E2F11; }
    .check-btn.try-again { background: #9B2C2C; border-bottom-color: #6B1F1F; }

    details { padding: 14px 18px; background: #FFFCF5; border: 1px solid rgba(31,41,32,.08); border-radius: 12px; font-size: 14px; }
    summary { cursor: pointer; color: #4A554A; font-weight: 500; list-style: none; display: flex; align-items: center; gap: 8px; }
    summary::-webkit-details-marker { display: none; }
    summary::before { content: '+'; font-weight: 600; color: #B5481E; }
    details[open] summary::before { content: '−'; }
    details p { margin-top: 12px; font-family: 'Fraunces', serif; font-style: italic; color: #1F2920; line-height: 1.6; }
  `;

  pickChip(idx: number) {
    if (this.phase !== 'filling') return;
    const chip = this.bank[idx];
    if (chip.used || this.currentIdx >= this.blanks.length) return;
    this.blanks[this.currentIdx].filled = chip.word;
    this.blanks[this.currentIdx].chipIdx = idx;
    this.bank[idx].used = true;
    this.currentIdx++;
    this.requestUpdate();
  }

  clearBlank(idx: number) {
    if (this.phase !== 'filling') return;
    const blank = this.blanks[idx];
    if (!blank.filled || blank.chipIdx === null) return;
    this.bank[blank.chipIdx].used = false;
    blank.filled = null; blank.chipIdx = null;
    this.currentIdx = this.blanks.findIndex(b => !b.filled);
    if (this.currentIdx === -1) this.currentIdx = this.blanks.length;
    this.requestUpdate();
  }

  check() {
    const allCorrect = this.blanks.every(b => b.filled === b.word);
    this.phase = allCorrect ? 'correct' : 'incorrect';
    if (allCorrect) this.xp += 15;
    else this.hearts = Math.max(0, this.hearts - 1);
  }

  reset() {
    this.blanks.forEach(b => { b.filled = null; b.chipIdx = null; });
    this.bank.forEach(c => c.used = false);
    this.currentIdx = 0;
    this.phase = 'filling';
    this.requestUpdate();
  }

  renderBlank(idx: number) {
    const b = this.blanks[idx];
    const cls = this.phase === 'correct'   ? 'correct'
              : this.phase === 'incorrect' ? (b.filled === b.word ? 'correct' : 'incorrect')
              : b.filled ? 'filled' : '';
    return html`<span class="blank ${cls}" @click=${() => this.clearBlank(idx)}>${b.filled || '______'}</span>`;
  }

  render() {
    const allFilled = this.blanks.every(b => b.filled);
    return html`
      <div class="lesson-frame">
        <div class="top">
          <div class="exit"><i class="ti ti-x"></i></div>
          <div class="prog-bar"><div class="prog-fill"></div></div>
          <div class="hearts-mini"><i class="ti ti-heart-filled"></i><span>${this.hearts}</span></div>
        </div>

        <div class="lesson-card">
          <div class="meta">
            <span class="pill"><i class="ti ti-bookmark"></i> Question 1 · Unit I</span>
            <button class="hint-btn"><i class="ti ti-bulb"></i> Use a hint (5 gems)</button>
          </div>
          <div class="prompt">Fill in the blanks</div>
          <h2 class="instruction">Complete the answer using the words below.</h2>
          <div class="qa-label">Question</div>
          <p class="question">What is the chief end of man?</p>
          <div class="qa-label">Answer</div>
          <p class="answer">
            Man's chief end is to ${this.renderBlank(0)} God, and to ${this.renderBlank(1)} him for ever.
          </p>
          <div class="bank-label">Tap the words in order</div>
          <div class="bank">
            ${this.bank.map((c, i) => html`
              <button class="chip ${c.used ? 'used' : ''}" @click=${() => this.pickChip(i)} ?disabled=${c.used}>${c.word}</button>
            `)}
          </div>
        </div>

        ${this.phase === 'correct' ? html`
          <div class="feedback success">
            <div class="feedback-icon"><i class="ti ti-check"></i></div>
            <div>
              <div class="feedback-title">Excellent!</div>
              <div class="feedback-sub">+15 XP earned · Mastery on Q1 is growing</div>
            </div>
          </div>
        ` : ''}
        ${this.phase === 'incorrect' ? html`
          <div class="feedback error">
            <div class="feedback-icon"><i class="ti ti-x"></i></div>
            <div>
              <div class="feedback-title">Not quite — you lost a heart.</div>
              <div class="feedback-sub">Take another look. Tap any filled blank to clear it.</div>
            </div>
          </div>
        ` : ''}

        <div class="actions">
          <button class="skip">Skip</button>
          ${this.phase === 'filling'   ? html`<button class="check-btn" @click=${this.check} ?disabled=${!allFilled}>Check answer</button>` : ''}
          ${this.phase === 'correct'   ? html`<button class="check-btn continue"  @click=${this.reset}>Continue →</button>` : ''}
          ${this.phase === 'incorrect' ? html`<button class="check-btn try-again" @click=${this.reset}>Try again</button>` : ''}
        </div>

        <details>
          <summary>Scripture proof text</summary>
          <p>"Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God." — 1 Corinthians 10:31</p>
        </details>
      </div>
    `;
  }
}
