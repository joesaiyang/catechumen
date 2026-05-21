import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { apiFetch, auth } from '../store/auth.js';
import { BADGES } from '../data/achievements.js';
import '../components/stats-bar.js';

interface StudyPlan {
  id: string; plan_type: string; catechism_id?: string;
  catechism_name?: string; abbreviation?: string; quiz_mode: string;
}

interface QuestionProgress {
  id: string; number: number; section: string; section_name: string;
  mastered: boolean | null; repetitions: number | null; due_at: string | null;
}

interface PathNode {
  num: string; state: string; x: number; y: number; r: number; label: string | null;
}

const CENTER_X  = 180;
const SVG_W     = 360;
const SPACING   = 90;
const FIRST_Y   = 58;
const ZIGZAG    = [0, 64, 90, 64, 0, -64, -90, -64];

function nodeX(i: number) { return CENTER_X + ZIGZAG[i % ZIGZAG.length]; }
function nodeY(i: number) { return FIRST_Y + i * SPACING; }

@customElement('catechumen-path')
export class CatechumenPath extends LitElement {
  @property({ type: String })  name      = 'Samuel';
  @property({ type: Number })  streak    = 0;
  @property({ type: Number })  xp        = 0;
  @property({ type: Number })  hearts    = 5;
  @property({ type: Number })  gems      = 0;
  @property({ type: Number, attribute: 'path-key' })   pathKey   = 0;
  @property({ type: Boolean, attribute: 'child-mode' }) childMode = false;

  @state() plans: StudyPlan[] = [];
  @state() selectedId = '';
  @state() allProgress: QuestionProgress[] = [];
  @state() plansLoading = true;
  @state() progressLoading = false;

  connectedCallback() {
    super.connectedCallback();
    this.loadPlans();
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('selectedId') && this.selectedId) this.loadProgress();
    if (changed.has('pathKey') && this.selectedId)    this.loadProgress();
  }

  async loadPlans() {
    const res = await apiFetch('/api/study-plans');
    if (res.ok) {
      const data = await res.json();
      this.plans = (data.plans as StudyPlan[]).filter(p => p.plan_type === 'catechism' && p.catechism_id);
      if (this.plans.length > 0 && !this.selectedId) this.selectedId = this.plans[0].catechism_id!;
    }
    this.plansLoading = false;
  }

  async loadProgress() {
    this.progressLoading = true;
    const res = await apiFetch(`/api/study-plans?catechismId=${encodeURIComponent(this.selectedId)}`);
    if (res.ok) {
      const data = await res.json();
      this.allProgress = data.questions ?? [];
    }
    this.progressLoading = false;
  }

  // ── computed helpers ──────────────────────────────────────────────────────

  private get selected(): StudyPlan | undefined {
    return this.plans.find(p => p.catechism_id === this.selectedId);
  }

  private get currentSection(): string {
    // Advance to the section of the first unseen question (repetitions IS NULL).
    // Fall back to the last section if everything has been seen.
    const first = this.allProgress.find(q => q.repetitions === null);
    return first?.section ?? this.allProgress.at(-1)?.section ?? '';
  }

  private get sectionQs(): QuestionProgress[] {
    return this.allProgress.filter(q => q.section === this.currentSection);
  }

  private get masteredCount(): number {
    return this.sectionQs.filter(q => q.mastered).length;
  }

  private get pathNodes(): PathNode[] {
    const qs = this.sectionQs;
    const allMastered = qs.every(q => q.mastered);

    // A question is "seen" if it has any user_progress record (repetitions !== null).
    // "done" = seen (regardless of mastery — mastery adds the gold star badge).
    // "current" = first unseen question (repetitions IS NULL).
    // "locked" = unseen but not yet the next one.
    const firstUnseenIdx = qs.findIndex(q => q.repetitions === null);

    const nodes: PathNode[] = qs.map((q, i) => {
      let nodeState: string;
      if (q.mastered)                nodeState = 'done';
      else if (q.repetitions !== null) nodeState = 'done';   // seen, in SRS review
      else if (i === firstUnseenIdx)  nodeState = 'current'; // next new question
      else                           nodeState = 'locked';

      const r = this.childMode ? 40 : 34;
      return {
        num: `Q${q.number}`, state: nodeState,
        x: nodeX(i), y: nodeY(i), r,
        label: nodeState === 'current' ? (this.childMode ? '⚡ Go!' : 'Up next') : null,
      };
    });

    // Milestone at end of section
    nodes.push({
      num: 'REVIEW',
      state: allMastered ? 'milestone' : 'milestone-locked',
      x: CENTER_X, y: nodeY(qs.length), r: this.childMode ? 50 : 42,
      label: this.childMode ? (allMastered ? 'Level up! 🏆' : 'Unit review') : 'Unit review',
    });

    return nodes;
  }

  private get svgH(): number {
    return nodeY(this.sectionQs.length) + 42 + 30;
  }

  // ── styles ────────────────────────────────────────────────────────────────

  static styles = css`
    .layout { display: grid; grid-template-columns: 1fr 320px; gap: 24px; }
    @media (max-width: 880px) { .layout { grid-template-columns: 1fr; } }

    .quest {
      background: linear-gradient(135deg, #2D4A3A 0%, #1B3024 100%);
      color: #F5EFE0; border-radius: 16px; padding: 22px 24px;
      margin-bottom: 24px; display: flex; align-items: center; gap: 18px;
      position: relative; overflow: hidden;
    }
    .quest::before {
      content: ''; position: absolute; right: -40px; top: -40px;
      width: 180px; height: 180px; background: rgba(245,239,224,.05); border-radius: 50%;
    }
    .quest-icon {
      width: 56px; height: 56px; background: rgba(245,239,224,.12);
      border-radius: 14px; display: flex; align-items: center; justify-content: center;
      font-size: 28px; color: #F0E1B8; flex-shrink: 0;
    }
    .quest-text { flex: 1; }
    .quest-eyebrow { font-family: 'Fraunces', serif; font-style: italic; font-size: 13px; color: #F0E1B8; margin-bottom: 4px; }
    .quest-title  { font-family: 'Fraunces', serif; font-size: 22px; font-weight: 500; margin-bottom: 6px; }
    .quest-progress { display: flex; align-items: center; gap: 10px; font-size: 13px; color: rgba(245,239,224,.8); }
    .quest-bar  { flex: 1; max-width: 200px; height: 6px; background: rgba(245,239,224,.15); border-radius: 3px; overflow: hidden; }
    .quest-fill { height: 100%; width: 33%; background: #C89B3C; border-radius: 3px; }
    .quest button {
      background: #F5EFE0; color: #1B3024; padding: 12px 22px; border-radius: 10px;
      font-weight: 700; font-size: 14px; cursor: pointer; letter-spacing: .02em;
      position: relative; z-index: 1; border: none;
    }
    .quest button:hover { background: #FFFCF5; }

    /* Catechism selector */
    .path-selector { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
    .path-selector label { font-size: 13px; font-weight: 600; color: #4A554A; }
    .path-select {
      padding: 7px 12px; font-size: 13px; font-weight: 600; color: #1B3024;
      border: 1.5px solid rgba(31,41,32,.2); border-radius: 10px;
      background: #FFFCF5; cursor: pointer; outline: none;
      font-family: 'Plus Jakarta Sans', sans-serif;
      appearance: none; -webkit-appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%234A554A' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
      background-repeat: no-repeat; background-position: right 10px center;
      padding-right: 30px;
    }
    .path-select:focus { border-color: #2D4A3A; }

    /* Unit header */
    .unit-header {
      display: flex; align-items: baseline; gap: 16px;
      margin-bottom: 24px; padding-bottom: 14px;
      border-bottom: 1px dashed rgba(31,41,32,.15);
    }
    .unit-number { font-family: 'Fraunces', serif; font-style: italic; font-size: 14px; color: #B5481E; letter-spacing: .02em; }
    .unit-title  { font-family: 'Fraunces', serif; font-size: 28px; font-weight: 500; color: #1B3024; letter-spacing: -.01em; }
    .unit-status { margin-left: auto; font-size: 13px; color: #7A8278; font-weight: 500; white-space: nowrap; }

    /* Path */
    .path-wrap  { position: relative; max-width: 360px; margin: 0 auto; padding: 12px 0; user-select: none; }
    .path-svg   { display: block; width: 100%; }
    .path-nodes { position: absolute; inset: 0; }
    .node-pos   { position: absolute; transform: translate(-50%, -50%); }

    /* Nodes */
    .node {
      border-radius: 50%;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      position: relative; cursor: pointer;
      transition: transform .2s, box-shadow .2s;
      font-family: 'Fraunces', serif; font-weight: 600;
    }
    .node:hover:not(.locked) { transform: scale(1.06) translateY(-2px); }

    .node.done {
      background: #2D4A3A; color: #F0E1B8;
      box-shadow: 0 4px 12px rgba(45,74,58,.25);
    }
    .node.done .num { font-size: 15px; }
    .node.done .badge {
      position: absolute; bottom: -3px; right: -3px;
      width: 22px; height: 22px; background: #C89B3C; color: #1F2920;
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      font-size: 11px; font-weight: bold; border: 2px solid #FFFCF5;
    }

    .node.current {
      background: #FFFCF5; color: #B5481E; border: 3px solid #B5481E;
      box-shadow: 0 6px 20px rgba(181,72,30,.25);
      animation: pulse 2.5s infinite;
    }
    .node.current .num  { font-size: 18px; }
    .node.current .play { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .05em; margin-top: -2px; }
    @keyframes pulse {
      0%, 100% { box-shadow: 0 6px 20px rgba(181,72,30,.25); }
      50%       { box-shadow: 0 6px 20px rgba(181,72,30,.4), 0 0 0 10px rgba(181,72,30,0); }
    }

    .node.locked {
      background: rgba(31,41,32,.05); color: rgba(31,41,32,.3);
      cursor: not-allowed; border: 1px dashed rgba(31,41,32,.2);
    }
    .node.locked .num { font-size: 14px; }

    .node.milestone {
      background: #F0E1B8; color: #8A6620; border: 2px solid #C89B3C;
      box-shadow: 0 4px 14px rgba(200,155,60,.25);
    }
    .node.milestone.locked {
      background: rgba(31,41,32,.05); color: rgba(31,41,32,.3);
      border-color: rgba(31,41,32,.15); box-shadow: none;
    }
    .node.milestone .trophy { font-size: 26px; line-height: 1; }

    /* ── Child / game-mode node overrides ── */
    .child-mode .node.done {
      background: linear-gradient(135deg, #10B981, #059669);
      box-shadow: 0 4px 16px rgba(16,185,129,.35);
    }
    .child-mode .node.current {
      background: linear-gradient(135deg, #F59E0B, #D97706);
      color: #fff; border-color: #F59E0B;
      box-shadow: 0 6px 24px rgba(245,159,11,.4);
      animation: kidpulse 2s infinite;
    }
    .child-mode .node.current .num  { font-size: 20px; }
    .child-mode .node.current .play { font-size: 12px; text-transform: uppercase; letter-spacing: .06em; }
    @keyframes kidpulse {
      0%,100% { box-shadow: 0 6px 24px rgba(245,159,11,.4); }
      50%      { box-shadow: 0 6px 24px rgba(245,159,11,.6), 0 0 0 12px rgba(245,159,11,.08); }
    }
    .child-mode .node.milestone {
      background: linear-gradient(135deg, #C89B3C, #F0E1B8);
      border-color: #C89B3C;
      box-shadow: 0 4px 20px rgba(200,155,60,.4);
    }
    .child-mode .node.milestone .trophy { font-size: 32px; }
    .child-mode .node-label { font-size: 12px; font-weight: 700; }
    .child-mode .node.current .node-label { color: #D97706; }

    .node-label {
      position: absolute; top: calc(100% + 6px); left: 50%; transform: translateX(-50%);
      font-family: 'Plus Jakarta Sans', sans-serif; font-size: 11px; font-weight: 600;
      color: #7A8278; white-space: nowrap; pointer-events: none;
    }
    .node.current .node-label { color: #B5481E; }

    /* ── Badge shelf (child mode) ── */
    .badge-shelf { margin-top: 32px; }
    .badge-shelf-title {
      font-family: 'Fraunces', serif; font-size: 20px; font-weight: 600;
      color: #1B3024; margin-bottom: 14px;
    }
    .badge-grid { display: flex; flex-wrap: wrap; gap: 10px; }
    .badge-item {
      display: flex; flex-direction: column; align-items: center; gap: 4px;
      padding: 12px 14px; border-radius: 14px; min-width: 72px; text-align: center;
      transition: transform .15s;
    }
    .badge-item.earned {
      background: #F0E1B8; border: 1.5px solid #C89B3C;
      box-shadow: 0 2px 8px rgba(200,155,60,.2);
    }
    .badge-item.earned:hover { transform: translateY(-2px); }
    .badge-item.locked { background: rgba(31,41,32,.04); border: 1.5px dashed rgba(31,41,32,.12); }
    .badge-emoji  { font-size: 28px; line-height: 1; }
    .badge-name   { font-size: 11px; font-weight: 700; color: #1B3024; }
    .badge-locked-emoji { font-size: 24px; line-height: 1; filter: grayscale(1); opacity: .35; }

    /* Loading skeleton */
    .skeleton { display: flex; flex-direction: column; align-items: center; gap: 18px; padding: 12px 0; }
    .skel-node { border-radius: 50%; background: rgba(31,41,32,.07); animation: shimmer 1.4s infinite; }
    @keyframes shimmer { 0%,100% { opacity:.5 } 50% { opacity:1 } }

    /* Empty state */
    .empty-path {
      text-align: center; padding: 60px 24px; color: #7A8278;
      border: 1.5px dashed rgba(31,41,32,.15); border-radius: 16px;
    }
    .empty-path p { font-size: 15px; margin-bottom: 8px; }
    .empty-path strong { color: #1B3024; }

    /* Sidebar */
    .side { display: flex; flex-direction: column; gap: 16px; }
    .side-card { background: #FFFCF5; border: 1px solid rgba(31,41,32,.08); border-radius: 16px; padding: 20px; }
    .side-card h3 { font-family: 'Fraunces', serif; font-size: 18px; font-weight: 600; margin-bottom: 12px; color: #1B3024; }

    .achievement-row { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px dashed rgba(31,41,32,.08); }
    .achievement-row:last-child { border-bottom: none; }
    .ach-icon { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0; }
    .ach-icon.gold   { background: #F0E1B8; color: #8A6620; }
    .ach-icon.green  { background: #E1EBE5; color: #2D4A3A; }
    .ach-icon.locked { background: rgba(31,41,32,.05); color: rgba(31,41,32,.25); }
    .ach-name { font-size: 13px; font-weight: 600; color: #1F2920; margin-bottom: 2px; }
    .ach-name.dim { color: rgba(31,41,32,.4); }
    .ach-desc { font-size: 12px; color: #7A8278; line-height: 1.4; }

    .verse-card { background: #1B3024; color: #F5EFE0; border-radius: 16px; padding: 20px; }
    .verse-eyebrow { font-family: 'Fraunces', serif; font-style: italic; font-size: 13px; color: #C89B3C; letter-spacing: .02em; margin-bottom: 8px; }
    .verse-card blockquote { font-family: 'Fraunces', serif; font-style: italic; font-size: 15px; line-height: 1.55; margin: 0 0 10px; color: #F5EFE0; }
    .verse-card cite { font-size: 12px; font-style: normal; color: rgba(245,239,224,.7); font-weight: 500; letter-spacing: .04em; }
  `;

  private startFromNode(state: string) {
    if (!this.selectedId || state.includes('locked') || state.startsWith('milestone')) return;
    this.dispatchEvent(new CustomEvent('start-lesson', {
      bubbles: true, composed: true,
      detail: {
        type: 'catechism',
        source: this.selectedId,
        mode: 'fill_blank',
        reviewMode: state === 'done',
      },
    }));
  }

  // ── render helpers ────────────────────────────────────────────────────────

  private renderBadgeShelf(): TemplateResult {
    const earned = new Set(auth.earnedAchievements);
    return html`
      <div class="badge-shelf">
        <div class="badge-shelf-title">🏅 My Badges</div>
        <div class="badge-grid">
          ${BADGES.map(b => earned.has(b.id) ? html`
            <div class="badge-item earned" title="${b.desc}">
              <span class="badge-emoji">${b.emoji}</span>
              <span class="badge-name">${b.name}</span>
            </div>
          ` : html`
            <div class="badge-item locked" title="${b.desc}">
              <span class="badge-locked-emoji">${b.emoji}</span>
              <span class="badge-name" style="color:rgba(31,41,32,.3)">${b.name}</span>
            </div>
          `)}
        </div>
      </div>
    `;
  }

  private renderPath(): TemplateResult {
    if (this.progressLoading || (this.plansLoading && !this.allProgress.length)) {
      return html`
        <div class="skeleton">
          ${[68, 68, 68, 80, 68, 68].map(s => html`<div class="skel-node" style="width:${s}px;height:${s}px"></div>`)}
        </div>
      `;
    }

    const nodes = this.pathNodes;
    const svgH  = this.svgH;
    const qs    = this.sectionQs;

    const firstQ = qs[0]?.number ?? 1;
    const lastQ  = qs.at(-1)?.number ?? 1;
    const sectionLabel = qs[0]?.section ?? '';
    const sectionName  = qs[0]?.section_name ?? this.selected?.catechism_name ?? '';

    return html`
      <div class="unit-header">
        <div>
          <div class="unit-number">${this.childMode ? sectionName : `${sectionLabel} · Questions ${firstQ}–${lastQ}`}</div>
          ${this.childMode ? '' : html`<div class="unit-title">${sectionName}</div>`}
        </div>
        ${this.childMode ? html`
          <div style="text-align:right">
            <div style="font-family:'Fraunces',serif;font-size:28px;font-weight:700;color:#10B981;line-height:1">${this.masteredCount}</div>
            <div style="font-size:11px;font-weight:700;color:#7A8278;text-transform:uppercase;letter-spacing:.06em">⭐ mastered</div>
          </div>
        ` : html`
          <div class="unit-status">${this.masteredCount} of ${qs.length} mastered</div>
        `}
      </div>

      <div class="path-wrap ${this.childMode ? 'child-mode' : ''}">
        <svg class="path-svg" viewBox="0 0 ${SVG_W} ${svgH}" xmlns="http://www.w3.org/2000/svg"></svg>
        <div class="path-nodes">
          ${nodes.map(n => {
            const isMilestone = n.state.startsWith('milestone');
            const isLocked    = n.state.includes('locked');
            const isCurrent   = n.state === 'current';
            const isDone      = n.state === 'done';
            const top  = `${(n.y / svgH  * 100).toFixed(3)}%`;
            const left = `${(n.x / SVG_W * 100).toFixed(3)}%`;
            const title = isCurrent ? 'Start lesson'
                        : isDone    ? 'Review this question'
                        : undefined;
            return html`
              <div class="node-pos" style="top:${top};left:${left}">
                <div class="node
                  ${isMilestone ? 'milestone' : ''}
                  ${isLocked    ? 'locked'    : ''}
                  ${isCurrent   ? 'current'   : ''}
                  ${isDone      ? 'done'      : ''}"
                  style="width:${n.r * 2}px;height:${n.r * 2}px"
                  title=${title ?? ''}
                  @click=${() => this.startFromNode(n.state)}>
                  ${isMilestone ? html`
                    <span class="trophy">★</span>
                    <span class="node-label">${n.label}</span>
                  ` : isCurrent ? html`
                    <span class="play">Begin</span>
                    <span class="num">${n.num}</span>
                    <span class="node-label">${n.label}</span>
                  ` : isDone ? html`
                    <span class="num">${n.num}</span>
                    <span class="badge">★</span>
                  ` : html`
                    <span class="num">${n.num}</span>
                  `}
                </div>
              </div>
            `;
          })}
        </div>
      </div>
    `;
  }

  render() {
    return html`
      <stats-bar name=${this.name} streak=${this.streak} xp=${this.xp} hearts=${this.hearts} gems=${this.gems}
        ?child-mode=${this.childMode}></stats-bar>

      <div class="quest">
        <div class="quest-icon">🎯</div>
        <div class="quest-text">
          <div class="quest-eyebrow">Today's quest</div>
          <div class="quest-title">Master 3 questions</div>
          <div class="quest-progress">
            <div class="quest-bar"><div class="quest-fill"></div></div>
            <span>1 of 3 · +50 XP on completion</span>
          </div>
        </div>
        <button>Continue →</button>
      </div>

      <div class="${this.childMode ? '' : 'layout'}">
        <div>
          ${this.plans.length > 1 ? html`
            <div class="path-selector">
              <label>Path</label>
              <select class="path-select"
                .value=${this.selectedId}
                @change=${(e: Event) => this.selectedId = (e.target as HTMLSelectElement).value}>
                ${this.plans.map(p => html`
                  <option value=${p.catechism_id} ?selected=${p.catechism_id === this.selectedId}>
                    ${p.abbreviation} — ${p.catechism_name}
                  </option>
                `)}
              </select>
            </div>
          ` : ''}

          ${!this.plansLoading && this.plans.length === 0 ? html`
            <div class="empty-path">
              <p>You haven't enrolled in any catechism yet.</p>
              <p>Head to the <strong>${this.childMode ? 'Books' : 'Library'}</strong> to get started.</p>
            </div>
          ` : this.renderPath()}

          ${this.childMode ? this.renderBadgeShelf() : ''}
        </div>

        ${this.childMode ? '' : html`<aside class="side">
          <div class="verse-card">
            <div class="verse-eyebrow">Verse of the day</div>
            <blockquote>"Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God."</blockquote>
            <cite>— 1 Corinthians 10:31</cite>
          </div>

          <div class="side-card">
            <h3>Recent achievements</h3>
            <div class="achievement-row">
              <div class="ach-icon gold">🔥</div>
              <div><div class="ach-name">10-day streak</div><div class="ach-desc">Practiced 10 days in a row</div></div>
            </div>
            <div class="achievement-row">
              <div class="ach-icon green">📖</div>
              <div><div class="ach-name">First mastery</div><div class="ach-desc">Mastered your first question</div></div>
            </div>
            <div class="achievement-row">
              <div class="ach-icon locked">🔒</div>
              <div>
                <div class="ach-name dim">Unit conqueror</div>
                <div class="ach-desc">Complete an entire unit · ${this.masteredCount}/${this.sectionQs.length}</div>
              </div>
            </div>
          </div>

          <div class="side-card">
            <h3>Up next in review</h3>
            <div style="font-size:13px;color:#7A8278;line-height:1.6">
              ${this.sectionQs.filter(q => q.mastered).length === 0
                ? 'Answer questions to start building your review schedule.'
                : html`Spaced repetition will surface your answered questions for review based on how well you know them.`
              }
            </div>
          </div>
        </aside>`}
      </div>
    `;
  }
}
