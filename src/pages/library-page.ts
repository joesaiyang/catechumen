import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { apiFetch, auth } from '../store/auth.js';

interface Catechism {
  id: string; name: string; abbreviation: string; description: string;
  year: number; tradition: string; question_count: number; copyright_note?: string;
}

interface StudyPlan {
  id: string; plan_type: string; catechism_id?: string;
  catechism_name?: string; abbreviation?: string; quiz_mode: string;
}

interface CustomQuiz {
  id: string; name: string; description?: string; item_count: number;
}

type QuizMode = 'fill_blank' | 'multiple_choice' | 'free_recall';
type ActiveTab = 'catechisms' | 'bible' | 'verses' | 'custom';

const MODE_LABELS: Record<QuizMode, string> = {
  fill_blank:       'Fill in the blank',
  multiple_choice:  'Multiple choice',
  free_recall:      'Free recall',
};

const MODE_ICONS: Record<QuizMode, string> = {
  fill_blank:       'ti-pencil',
  multiple_choice:  'ti-list-check',
  free_recall:      'ti-writing',
};

@customElement('library-page')
export class LibraryPage extends LitElement {
  @state() tab: ActiveTab = 'catechisms';
  @state() catechisms: Catechism[] = [];
  @state() plans: StudyPlan[] = [];
  @state() customQuizzes: CustomQuiz[] = [];
  @state() loading = true;
  @state() showModeModal = false;
  @state() modalCatechism: Catechism | null = null;
  @state() selectedMode: QuizMode = 'fill_blank';
  @state() newQuizName = '';
  @state() newQuizDesc = '';
  @state() showNewQuizForm = false;
  @state() openMenuId: string | null = null;
  @state() showResetModal = false;
  @state() resetTarget: Catechism | null = null;
  @state() toastMsg = '';

  private _toastTimer: ReturnType<typeof setTimeout> | null = null;

  connectedCallback() {
    super.connectedCallback();
    this.loadData();
  }

  async loadData() {
    this.loading = true;
    try {
      const [catRes, planRes, quizRes] = await Promise.all([
        apiFetch('/api/content/catechisms'),
        apiFetch('/api/study-plans'),
        apiFetch('/api/custom-quizzes'),
      ]);
      if (catRes.ok)  { const d = await catRes.json();  this.catechisms   = d.catechisms; }
      if (planRes.ok) { const d = await planRes.json(); this.plans        = d.plans; }
      if (quizRes.ok) { const d = await quizRes.json(); this.customQuizzes = d.quizzes; }
    } finally { this.loading = false; }
  }

  private getPlan(catId: string) {
    return this.plans.find(p => p.catechism_id === catId);
  }

  private async startOrConfigure(cat: Catechism) {
    const existing = this.getPlan(cat.id);
    this.modalCatechism = cat;
    this.selectedMode   = (existing?.quiz_mode as QuizMode) ?? 'fill_blank';
    this.showModeModal  = true;
  }

  private async confirmStart() {
    if (!this.modalCatechism) return;
    await apiFetch('/api/study-plans', {
      method: 'POST',
      body: JSON.stringify({
        planType: 'catechism',
        catechismId: this.modalCatechism.id,
        quizMode: this.selectedMode,
      }),
    });
    this.showModeModal = false;
    this.dispatchEvent(new CustomEvent('start-lesson', {
      bubbles: true, composed: true,
      detail: { type: 'catechism', source: this.modalCatechism.id, mode: this.selectedMode },
    }));
  }

  private startReview(cat: Catechism) {
    const plan = this.getPlan(cat.id);
    this.dispatchEvent(new CustomEvent('start-lesson', {
      bubbles: true, composed: true,
      detail: {
        type: 'catechism',
        source: cat.id,
        mode: plan?.quiz_mode ?? 'fill_blank',
        reviewMode: true,
      },
    }));
  }

  private async resetProgress(cat: Catechism) {
    await apiFetch('/api/study-plans', {
      method: 'DELETE',
      body: JSON.stringify({ catechismId: cat.id }),
    });
    this.showResetModal = false;
    this.resetTarget = null;
    this._toast('Progress reset — all questions cleared.');
    await this.loadData();
  }

  private _toast(msg: string) {
    this.toastMsg = msg;
    if (this._toastTimer) clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => { this.toastMsg = ''; }, 3000);
  }

  private async startBibleQuiz(mode: QuizMode) {
    await apiFetch('/api/study-plans', {
      method: 'POST',
      body: JSON.stringify({ planType: 'bible_quiz', quizMode: mode }),
    });
    this.dispatchEvent(new CustomEvent('start-lesson', {
      bubbles: true, composed: true,
      detail: { type: 'bible_quiz', source: 'bible_quiz', mode },
    }));
  }

  private async startVerses(mode: QuizMode) {
    await apiFetch('/api/study-plans', {
      method: 'POST',
      body: JSON.stringify({ planType: 'verses', quizMode: mode }),
    });
    this.dispatchEvent(new CustomEvent('start-lesson', {
      bubbles: true, composed: true,
      detail: { type: 'verse', source: 'verses', mode },
    }));
  }

  private async createCustomQuiz() {
    if (!this.newQuizName.trim()) return;
    const res = await apiFetch('/api/custom-quizzes', {
      method: 'POST',
      body: JSON.stringify({ name: this.newQuizName, description: this.newQuizDesc }),
    });
    if (res.ok) {
      this.newQuizName = ''; this.newQuizDesc = ''; this.showNewQuizForm = false;
      await this.loadData();
    }
  }

  static styles = css`
    :host { display: block; }

    .header { margin-bottom: 28px; }
    .header-title { font-family: 'Fraunces', serif; font-size: 32px; font-weight: 500; color: #1B3024; }
    .header-sub   { font-size: 15px; color: #4A554A; margin-top: 4px; }

    .section-tabs { display: flex; gap: 6px; margin-bottom: 28px; flex-wrap: wrap; }
    .stab {
      padding: 9px 18px; font-size: 13px; font-weight: 600; color: #4A554A;
      border-radius: 999px; cursor: pointer; transition: all .15s;
      border: 1.5px solid rgba(31,41,32,.15);
    }
    .stab:hover { color: #1B3024; border-color: rgba(31,41,32,.35); }
    .stab.active { background: #2D4A3A; color: #F5EFE0; border-color: #2D4A3A; }

    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; margin-bottom: 32px; }

    .card {
      background: #FFFCF5; border: 1px solid rgba(31,41,32,.08); border-radius: 16px; padding: 22px;
      transition: all .15s; cursor: pointer;
    }
    .card:hover { border-color: rgba(45,74,58,.3); transform: translateY(-2px); box-shadow: 0 2px 4px rgba(31,41,32,.08), 0 4px 16px rgba(31,41,32,.06); }
    .card.enrolled { border-color: rgba(45,74,58,.4); border-width: 2px; }

    .card-head { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 12px; }
    .card-head-right { display: flex; align-items: center; gap: 8px; }
    .abbrev {
      font-family: 'Fraunces', serif; font-weight: 600; font-size: 13px;
      padding: 4px 10px; background: #E1EBE5; color: #1B3024; border-radius: 6px;
    }
    .enrolled-badge {
      display: flex; align-items: center; gap: 4px;
      font-size: 11px; font-weight: 600; color: #2D4A3A;
      padding: 4px 10px; background: rgba(45,74,58,.08); border-radius: 999px;
    }
    .card-name { font-family: 'Fraunces', serif; font-size: 19px; font-weight: 500; color: #1B3024; margin-bottom: 6px; }
    .card-desc { font-size: 13px; color: #7A8278; line-height: 1.5; margin-bottom: 14px; }
    .card-meta { display: flex; gap: 16px; font-size: 12px; color: #4A554A; font-weight: 500; }
    .card-meta span { display: flex; align-items: center; gap: 4px; }

    .mode-pill {
      display: inline-flex; align-items: center; gap: 5px;
      padding: 4px 10px; background: #F0E1B8; color: #8A6620;
      border-radius: 999px; font-size: 11px; font-weight: 600; margin-top: 12px;
    }

    .start-btn {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      width: 100%; margin-top: 14px; padding: 12px;
      background: #2D4A3A; color: #F5EFE0;
      border: none; border-radius: 10px; font-weight: 600; font-size: 14px; cursor: pointer;
      transition: background .15s;
    }
    .start-btn:hover { background: #1B3024; }
    .start-btn.configure { background: transparent; color: #2D4A3A; border: 1.5px solid rgba(45,74,58,.3); }
    .start-btn.configure:hover { background: rgba(45,74,58,.05); }

    /* Kebab menu */
    .menu-wrap { position: relative; }
    .kebab-btn {
      width: 30px; height: 30px; border-radius: 8px; border: none; background: none;
      color: #4A554A; cursor: pointer; display: flex; align-items: center; justify-content: center;
      font-size: 18px; transition: all .15s; padding: 0; flex-shrink: 0;
    }
    .kebab-btn:hover { background: rgba(45,74,58,.1); color: #1B3024; }
    .dropdown {
      position: absolute; top: calc(100% + 6px); right: 0; min-width: 220px;
      background: #FFFCF5; border: 1px solid rgba(31,41,32,.12);
      border-radius: 12px; padding: 6px;
      box-shadow: 0 4px 16px rgba(31,41,32,.18), 0 1px 4px rgba(31,41,32,.1);
      z-index: 200;
    }
    .dropdown-item {
      display: flex; align-items: center; gap: 10px; padding: 10px 12px;
      border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 500; color: #1F2920;
      transition: background .1s; white-space: nowrap;
    }
    .dropdown-item:hover { background: rgba(45,74,58,.06); }
    .dropdown-item.destructive { color: #9B2C2C; }
    .dropdown-item.destructive:hover { background: rgba(155,44,44,.07); }
    .dropdown-item i { font-size: 16px; width: 20px; text-align: center; flex-shrink: 0; }
    .dropdown-divider { height: 1px; background: rgba(31,41,32,.09); margin: 4px 6px; }

    /* Click-away backdrop */
    .menu-backdrop { position: fixed; inset: 0; z-index: 150; }

    /* Mode selection modal */
    .modal-overlay {
      position: fixed; inset: 0; background: rgba(31,41,32,.4); backdrop-filter: blur(4px);
      display: flex; align-items: center; justify-content: center; z-index: 100; padding: 24px;
    }
    .modal {
      background: #FFFCF5; border-radius: 20px; padding: 32px; max-width: 440px; width: 100%;
      box-shadow: 0 8px 32px rgba(31,41,32,.2);
    }
    .modal-title { font-family: 'Fraunces', serif; font-size: 24px; font-weight: 500; color: #1B3024; margin-bottom: 6px; }
    .modal-sub   { font-size: 14px; color: #7A8278; margin-bottom: 24px; }
    .mode-options { display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; }
    .mode-option {
      display: flex; align-items: center; gap: 14px; padding: 14px 16px;
      border: 1.5px solid rgba(31,41,32,.12); border-radius: 12px; cursor: pointer; transition: all .15s;
    }
    .mode-option.selected { border-color: #2D4A3A; background: rgba(45,74,58,.04); }
    .mode-icon { width: 40px; height: 40px; background: #E1EBE5; color: #2D4A3A; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
    .mode-option.selected .mode-icon { background: #2D4A3A; color: #F5EFE0; }
    .mode-name  { font-weight: 600; font-size: 14px; color: #1F2920; }
    .mode-desc  { font-size: 12px; color: #7A8278; margin-top: 2px; }
    .radio { width: 18px; height: 18px; border-radius: 50%; border: 2px solid rgba(31,41,32,.2); margin-left: auto; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
    .mode-option.selected .radio { border-color: #2D4A3A; background: #2D4A3A; }
    .mode-option.selected .radio::after { content: ''; width: 8px; height: 8px; border-radius: 50%; background: #F5EFE0; }
    .modal-actions { display: flex; gap: 10px; }
    .btn-cancel  { flex: 1; padding: 13px; background: transparent; border: 1.5px solid rgba(31,41,32,.15); border-radius: 10px; font-weight: 600; font-size: 14px; cursor: pointer; }
    .btn-confirm { flex: 2; padding: 13px; background: #2D4A3A; color: #F5EFE0; border: none; border-radius: 10px; font-weight: 600; font-size: 14px; cursor: pointer; }
    .btn-confirm:hover { background: #1B3024; }

    /* Reset confirmation modal */
    .reset-modal { max-width: 400px; }
    .reset-modal .modal-title { color: #7E1F1F; }
    .reset-warning {
      background: rgba(155,44,44,.08); border: 1px solid rgba(155,44,44,.2);
      border-radius: 10px; padding: 12px 14px; font-size: 13px; color: #7E1F1F;
      margin-bottom: 20px; display: flex; align-items: flex-start; gap: 8px; line-height: 1.6;
    }
    .reset-warning i { margin-top: 2px; flex-shrink: 0; }
    .btn-destroy {
      flex: 2; padding: 13px; background: #9B2C2C; color: #FFF; border: none;
      border-radius: 10px; font-weight: 700; font-size: 14px; cursor: pointer;
    }
    .btn-destroy:hover { background: #7E1F1F; }

    /* Toast */
    .toast {
      position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%);
      background: #1B3024; color: #F5EFE0; padding: 12px 22px;
      border-radius: 10px; font-size: 14px; font-weight: 500;
      box-shadow: 0 4px 16px rgba(31,41,32,.25); pointer-events: none; z-index: 400;
      white-space: nowrap;
    }

    /* Custom quiz */
    .section-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
    .section-title { font-family: 'Fraunces', serif; font-size: 22px; font-weight: 500; color: #1B3024; }
    .add-btn { display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; background: #2D4A3A; color: #F5EFE0; border-radius: 10px; font-weight: 600; font-size: 13px; cursor: pointer; border: none; }
    .add-btn:hover { background: #1B3024; }

    .new-quiz-form { background: #FFFCF5; border: 1.5px dashed rgba(45,74,58,.3); border-radius: 14px; padding: 20px; margin-bottom: 16px; }
    .field { margin-bottom: 14px; }
    .field label { display: block; font-size: 12px; font-weight: 600; color: #4A554A; text-transform: uppercase; letter-spacing: .06em; margin-bottom: 6px; }
    .field input, .field textarea {
      width: 100%; padding: 11px 14px;
      background: #F5EFE0; border: 1.5px solid rgba(31,41,32,.15); border-radius: 10px;
      font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; color: #1F2920; outline: none;
    }
    .field input:focus, .field textarea:focus { border-color: #2D4A3A; }
    .field textarea { resize: vertical; min-height: 72px; }
    .form-actions { display: flex; gap: 8px; }

    .copyright-note { font-size: 11px; color: #B5481E; margin-top: 8px; display: flex; align-items: center; gap: 4px; }

    .empty-state { text-align: center; padding: 48px 24px; color: #7A8278; }
    .empty-state i { font-size: 48px; margin-bottom: 12px; display: block; opacity: .4; }
    .empty-state p { font-size: 15px; }
  `;

  private renderModeModal(): TemplateResult {
    if (!this.showModeModal || !this.modalCatechism) return html``;
    const cat = this.modalCatechism;
    const modes: { id: QuizMode; desc: string }[] = [
      { id: 'fill_blank',      desc: 'Tap the right words to fill in missing parts of the answer.' },
      { id: 'multiple_choice', desc: 'Choose the correct answer from four options.' },
      { id: 'free_recall',     desc: 'Type the full answer from memory — the hardest mode.' },
    ];
    return html`
      <div class="modal-overlay" @click=${(e: Event) => { if (e.target === e.currentTarget) this.showModeModal = false; }}>
        <div class="modal">
          <div class="modal-title">${cat.name}</div>
          <div class="modal-sub">Choose how you want to be tested on this material.</div>
          <div class="mode-options">
            ${modes.map(m => html`
              <div class="mode-option ${this.selectedMode === m.id ? 'selected' : ''}"
                   @click=${() => this.selectedMode = m.id}>
                <div class="mode-icon"><i class="ti ${MODE_ICONS[m.id]}"></i></div>
                <div>
                  <div class="mode-name">${MODE_LABELS[m.id]}</div>
                  <div class="mode-desc">${m.desc}</div>
                </div>
                <div class="radio"></div>
              </div>
            `)}
          </div>
          <div class="modal-actions">
            <button class="btn-cancel" @click=${() => this.showModeModal = false}>Cancel</button>
            <button class="btn-confirm" @click=${this.confirmStart}>Start studying →</button>
          </div>
        </div>
      </div>
    `;
  }

  private renderResetModal(): TemplateResult {
    if (!this.showResetModal || !this.resetTarget) return html``;
    const cat = this.resetTarget;
    return html`
      <div class="modal-overlay" @click=${(e: Event) => { if (e.target === e.currentTarget) this.showResetModal = false; }}>
        <div class="modal reset-modal">
          <div class="modal-title">Reset progress?</div>
          <div class="modal-sub">You're about to wipe all your answers for <strong>${cat.name}</strong>.</div>
          <div class="reset-warning">
            <i class="ti ti-alert-triangle"></i>
            <span>All ${cat.question_count} questions will be marked as unanswered. Your spaced-repetition schedule and mastery data will be permanently lost. This cannot be undone.</span>
          </div>
          <div class="modal-actions">
            <button class="btn-cancel" @click=${() => this.showResetModal = false}>Cancel</button>
            <button class="btn-destroy" @click=${() => this.resetProgress(cat)}>Yes, reset everything</button>
          </div>
        </div>
      </div>
    `;
  }

  private renderCatechisms(): TemplateResult {
    if (this.loading) return html`<div style="color:#7A8278;padding:40px 0;text-align:center">Loading library…</div>`;
    return html`
      <div class="grid">
        ${this.catechisms.map(cat => {
          const plan = this.getPlan(cat.id);
          return html`
            <div class="card ${plan ? 'enrolled' : ''}">
              <div class="card-head">
                <span class="abbrev">${cat.abbreviation}</span>
                <div class="card-head-right">
                  ${plan ? html`<span class="enrolled-badge"><i class="ti ti-check"></i> Enrolled</span>` : ''}
                  ${plan ? html`
                    <div class="menu-wrap">
                      <button class="kebab-btn"
                        @click=${(e: Event) => {
                          e.stopPropagation();
                          this.openMenuId = this.openMenuId === cat.id ? null : cat.id;
                        }}
                        title="Options">
                        <i class="ti ti-dots-vertical"></i>
                      </button>
                      ${this.openMenuId === cat.id ? html`
                        <div class="dropdown">
                          <div class="dropdown-item" @click=${(e: Event) => { e.stopPropagation(); this.openMenuId = null; this.startReview(cat); }}>
                            <i class="ti ti-repeat"></i> Review answered questions
                          </div>
                          <div class="dropdown-item" @click=${(e: Event) => { e.stopPropagation(); this.openMenuId = null; this.startOrConfigure(cat); }}>
                            <i class="ti ti-settings"></i> Change mode
                          </div>
                          <div class="dropdown-divider"></div>
                          <div class="dropdown-item" @click=${(e: Event) => { e.stopPropagation(); this.openMenuId = null; this._toast('Reminders coming soon!'); }}>
                            <i class="ti ti-bell"></i> Set reminder
                          </div>
                          <div class="dropdown-item destructive" @click=${(e: Event) => { e.stopPropagation(); this.openMenuId = null; this.resetTarget = cat; this.showResetModal = true; }}>
                            <i class="ti ti-refresh-alert"></i> Reset progress
                          </div>
                        </div>
                      ` : ''}
                    </div>
                  ` : ''}
                </div>
              </div>
              <div class="card-name">${cat.name}</div>
              <div class="card-desc">${cat.description}</div>
              <div class="card-meta">
                <span><i class="ti ti-help-circle"></i> ${cat.question_count} questions</span>
                <span><i class="ti ti-calendar"></i> ${cat.year}</span>
                <span><i class="ti ti-church"></i> ${cat.tradition}</span>
              </div>
              ${plan ? html`
                <div class="mode-pill"><i class="ti ${MODE_ICONS[plan.quiz_mode as QuizMode]}"></i> ${MODE_LABELS[plan.quiz_mode as QuizMode]}</div>
              ` : ''}
              ${cat.copyright_note ? html`
                <div class="copyright-note"><i class="ti ti-info-circle"></i>${cat.copyright_note}</div>
              ` : ''}
              <button class="start-btn" @click=${() => this.startOrConfigure(cat)}>
                <i class="ti ti-${plan ? 'player-play' : 'plus'}"></i>
                ${plan ? 'Continue studying' : 'Start this catechism'}
              </button>
            </div>
          `;
        })}
      </div>
    `;
  }

  private renderBible(): TemplateResult {
    const planBQ = this.plans.find(p => p.plan_type === 'bible_quiz');
    const modes: QuizMode[] = ['fill_blank', 'multiple_choice', 'free_recall'];
    return html`
      <div class="grid">
        <div class="card ${planBQ ? 'enrolled' : ''}">
          <div class="card-head">
            <span class="abbrev">BQ</span>
            ${planBQ ? html`<span class="enrolled-badge"><i class="ti ti-check"></i> Enrolled</span>` : ''}
          </div>
          <div class="card-name">Bible Quiz</div>
          <div class="card-desc">Test your knowledge of people, places, events, and doctrine across both the Old and New Testaments.</div>
          <div class="card-meta">
            <span><i class="ti ti-help-circle"></i> 100+ questions</span>
            <span><i class="ti ti-book-2"></i> OT &amp; NT</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;margin-top:14px">
            ${modes.map(m => html`
              <button class="start-btn ${planBQ?.quiz_mode === m ? '' : 'configure'}" @click=${() => this.startBibleQuiz(m)}>
                <i class="ti ${MODE_ICONS[m]}"></i> ${MODE_LABELS[m]}
              </button>
            `)}
          </div>
        </div>
      </div>
    `;
  }

  private renderVerses(): TemplateResult {
    const planV = this.plans.find(p => p.plan_type === 'verses');
    const modes: QuizMode[] = ['fill_blank', 'multiple_choice', 'free_recall'];
    return html`
      <div class="grid">
        <div class="card ${planV ? 'enrolled' : ''}">
          <div class="card-head">
            <span class="abbrev">MV</span>
            ${planV ? html`<span class="enrolled-badge"><i class="ti ti-check"></i> Enrolled</span>` : ''}
          </div>
          <div class="card-name">Bible Memory Verses</div>
          <div class="card-desc">Memorize 80 key passages organized by theme — salvation, faith, prayer, wisdom, comfort, and more. World English Bible (public domain).</div>
          <div class="card-meta">
            <span><i class="ti ti-help-circle"></i> 80 verses</span>
            <span><i class="ti ti-tag"></i> 10 themes</span>
            <span><i class="ti ti-book"></i> WEB translation</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;margin-top:14px">
            ${modes.map(m => html`
              <button class="start-btn ${planV?.quiz_mode === m ? '' : 'configure'}" @click=${() => this.startVerses(m)}>
                <i class="ti ${MODE_ICONS[m]}"></i> ${MODE_LABELS[m]}
              </button>
            `)}
          </div>
        </div>
      </div>
    `;
  }

  private renderCustom(): TemplateResult {
    const isParent = auth.user?.role === 'parent';
    return html`
      <div class="section-head">
        <div class="section-title">Your custom quizzes</div>
        ${isParent ? html`
          <button class="add-btn" @click=${() => this.showNewQuizForm = !this.showNewQuizForm}>
            <i class="ti ti-plus"></i> New quiz
          </button>
        ` : ''}
      </div>

      ${this.showNewQuizForm ? html`
        <div class="new-quiz-form">
          <div class="field">
            <label>Quiz name</label>
            <input type="text" placeholder="e.g. Sunday School Review" .value=${this.newQuizName}
              @input=${(e: Event) => this.newQuizName = (e.target as HTMLInputElement).value} />
          </div>
          <div class="field">
            <label>Description (optional)</label>
            <textarea placeholder="What is this quiz about?" .value=${this.newQuizDesc}
              @input=${(e: Event) => this.newQuizDesc = (e.target as HTMLTextAreaElement).value}></textarea>
          </div>
          <div class="form-actions">
            <button class="btn-cancel" @click=${() => this.showNewQuizForm = false}>Cancel</button>
            <button class="btn-confirm" @click=${this.createCustomQuiz} ?disabled=${!this.newQuizName.trim()}>
              Create quiz
            </button>
          </div>
        </div>
      ` : ''}

      ${this.customQuizzes.length === 0 ? html`
        <div class="empty-state">
          <i class="ti ti-pencil-plus"></i>
          <p>${isParent
            ? 'Create a custom quiz to test your children on anything — your own Q&A, or questions pulled from the catechism library.'
            : 'Your parents haven\'t created any custom quizzes yet.'
          }</p>
        </div>
      ` : html`
        <div class="grid">
          ${this.customQuizzes.map(q => html`
            <div class="card">
              <div class="card-head">
                <span class="abbrev">CQ</span>
              </div>
              <div class="card-name">${q.name}</div>
              ${q.description ? html`<div class="card-desc">${q.description}</div>` : ''}
              <div class="card-meta">
                <span><i class="ti ti-help-circle"></i> ${q.item_count} items</span>
              </div>
              <button class="start-btn" @click=${() => this.dispatchEvent(new CustomEvent('start-lesson', {
                bubbles: true, composed: true,
                detail: { type: 'custom', source: q.id, mode: 'fill_blank' },
              }))}>
                <i class="ti ti-player-play"></i> Start quiz
              </button>
              ${isParent ? html`
                <button class="start-btn configure" style="margin-top:8px" @click=${() => this.dispatchEvent(new CustomEvent('edit-quiz', {
                  bubbles: true, composed: true, detail: { quizId: q.id },
                }))}>
                  <i class="ti ti-edit"></i> Edit questions
                </button>
              ` : ''}
            </div>
          `)}
        </div>
      `}
    `;
  }

  render(): TemplateResult {
    return html`
      <div class="header">
        <div class="header-title">Study Library</div>
        <div class="header-sub">Choose what to study and how you want to be tested.</div>
      </div>

      <div class="section-tabs">
        ${([['catechisms','Catechisms','ti-book-2'],['bible','Bible Quiz','ti-help-circle'],['verses','Memory Verses','ti-heart'],['custom','Custom Quizzes','ti-pencil']] as const).map(([id, label, icon]) => html`
          <button class="stab ${this.tab === id ? 'active' : ''}" @click=${() => this.tab = id as ActiveTab}>
            <i class="ti ${icon}"></i> ${label}
          </button>
        `)}
      </div>

      ${this.tab === 'catechisms' ? this.renderCatechisms() : ''}
      ${this.tab === 'bible'      ? this.renderBible()      : ''}
      ${this.tab === 'verses'     ? this.renderVerses()     : ''}
      ${this.tab === 'custom'     ? this.renderCustom()     : ''}

      ${this.renderModeModal()}
      ${this.renderResetModal()}
      ${this.openMenuId ? html`<div class="menu-backdrop" @click=${() => this.openMenuId = null}></div>` : ''}
      ${this.toastMsg ? html`<div class="toast">${this.toastMsg}</div>` : ''}
    `;
  }
}
