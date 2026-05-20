import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../components/stats-bar.js';

const NODES = [
  { num: 'Q1', state: 'done', shift: '' },
  { num: 'Q2', state: 'done', shift: 'shift-r' },
  { num: 'Q3', state: 'done', shift: 'shift-rr' },
  { num: 'Q4', state: 'done', shift: 'shift-r' },
  { num: 'Q5', state: 'current', shift: '' },
  { num: 'Q6', state: 'locked', shift: 'shift-l' },
  { num: 'Q7', state: 'locked', shift: 'shift-ll' },
  { num: 'REVIEW', state: 'milestone-locked', shift: '' },
];

@customElement('catechumen-path')
export class CatechumenPath extends LitElement {
  @property({ type: String }) name = 'Samuel';
  @property({ type: Number }) streak = 0;
  @property({ type: Number }) xp = 0;
  @property({ type: Number }) hearts = 5;
  @property({ type: Number }) gems = 0;
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
    .quest-bar { flex: 1; max-width: 200px; height: 6px; background: rgba(245,239,224,.15); border-radius: 3px; overflow: hidden; }
    .quest-fill { height: 100%; width: 33%; background: #C89B3C; border-radius: 3px; }
    .quest button {
      background: #F5EFE0; color: #1B3024; padding: 12px 22px; border-radius: 10px;
      font-weight: 700; font-size: 14px; cursor: pointer; letter-spacing: .02em; position: relative; z-index: 1;
    }
    .quest button:hover { background: #FFFCF5; }

    .unit-header {
      display: flex; align-items: baseline; gap: 16px;
      margin-bottom: 24px; padding-bottom: 14px;
      border-bottom: 1px dashed rgba(31,41,32,.15);
    }
    .unit-number { font-family: 'Fraunces', serif; font-style: italic; font-size: 14px; color: #B5481E; letter-spacing: .02em; }
    .unit-title  { font-family: 'Fraunces', serif; font-size: 28px; font-weight: 500; color: #1B3024; letter-spacing: -.01em; }
    .unit-status { margin-left: auto; font-size: 13px; color: #7A8278; font-weight: 500; }

    .path { display: flex; flex-direction: column; align-items: center; gap: 18px; padding: 12px 0; }
    .node-row { display: flex; align-items: center; gap: 14px; }
    .node-row.shift-l  { margin-right: 100px; }
    .node-row.shift-r  { margin-left: 100px; }
    .node-row.shift-ll { margin-right: 180px; }
    .node-row.shift-rr { margin-left: 180px; }

    .node {
      width: 68px; height: 68px; border-radius: 50%;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      position: relative; cursor: pointer; transition: transform .2s, box-shadow .2s;
      font-family: 'Fraunces', serif; font-weight: 600; flex-shrink: 0;
    }
    .node:hover:not(.locked) { transform: scale(1.06) translateY(-2px); }

    .node.done { background: #2D4A3A; color: #F0E1B8; box-shadow: 0 4px 12px rgba(45,74,58,.25); }
    .node.done .num { font-size: 15px; }
    .node.done .badge {
      position: absolute; bottom: -3px; right: -3px;
      width: 22px; height: 22px; background: #C89B3C; color: #1F2920;
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      font-size: 11px; font-weight: bold; border: 2px solid #FFFCF5;
    }
    .node.current {
      background: #FFFCF5; color: #B5481E; border: 3px solid #B5481E;
      width: 80px; height: 80px; box-shadow: 0 6px 20px rgba(181,72,30,.25);
      animation: pulse 2.5s infinite;
    }
    .node.current .num { font-size: 18px; }
    .node.current .play { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .05em; margin-top: -2px; }
    @keyframes pulse {
      0%, 100% { box-shadow: 0 6px 20px rgba(181,72,30,.25); }
      50% { box-shadow: 0 6px 20px rgba(181,72,30,.4), 0 0 0 10px rgba(181,72,30,0); }
    }
    .node.locked {
      background: rgba(31,41,32,.05); color: rgba(31,41,32,.3);
      cursor: not-allowed; border: 1px dashed rgba(31,41,32,.2);
    }
    .node.locked .num { font-size: 14px; }
    .node.milestone {
      width: 84px; height: 84px;
      background: #F0E1B8; color: #8A6620; border: 2px solid #C89B3C;
      box-shadow: 0 4px 14px rgba(200,155,60,.25);
    }
    .node.milestone.locked {
      background: rgba(31,41,32,.05); color: rgba(31,41,32,.3);
      border-color: rgba(31,41,32,.15); box-shadow: none;
    }
    .node.milestone i { font-size: 32px; }
    .node-label {
      position: absolute; top: 100%; margin-top: 6px;
      font-family: 'Plus Jakarta Sans', sans-serif; font-size: 11px; font-weight: 500;
      color: #7A8278; white-space: nowrap;
    }

    .connector { width: 2px; height: 24px; background: linear-gradient(to bottom, #2D4A3A 50%, transparent 50%); background-size: 2px 6px; }
    .connector.dim { background: linear-gradient(to bottom, rgba(31,41,32,.2) 50%, transparent 50%); background-size: 2px 6px; }

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

  private renderNode(n: typeof NODES[0], i: number) {
    const isMilestone = n.state.startsWith('milestone');
    const isLocked    = n.state.includes('locked');
    const isCurrent   = n.state === 'current';
    const isDone      = n.state === 'done';
    const dim         = isLocked || isMilestone;

    return html`
      ${i > 0 ? html`<div class="connector ${dim && i > 4 ? 'dim' : ''}"></div>` : ''}
      <div class="node-row ${n.shift}">
        <div class="node ${isMilestone ? 'milestone' : ''} ${isLocked ? 'locked' : ''} ${isCurrent ? 'current' : ''} ${isDone ? 'done' : ''}">
          ${isMilestone
            ? html`<i class="ti ti-trophy"></i><span class="node-label">Unit review</span>`
            : isCurrent
              ? html`<span class="play">Begin</span><span class="num">${n.num}</span><span class="node-label" style="color:#B5481E;font-weight:600">Up next</span>`
              : isDone
                ? html`<span class="num">${n.num}</span><span class="badge">★</span>${i < 2 ? html`<span class="node-label">Mastered</span>` : ''}`
                : html`<span class="num">${n.num}</span>`
          }
        </div>
      </div>
    `;
  }

  render() {
    return html`
      <stats-bar name=${this.name} streak=${this.streak} xp=${this.xp} hearts=${this.hearts} gems=${this.gems}></stats-bar>

      <div class="quest">
        <div class="quest-icon"><i class="ti ti-target-arrow"></i></div>
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

      <div class="layout">
        <div>
          <div class="unit-header">
            <div>
              <div class="unit-number">Unit I · Questions 1–12</div>
              <div class="unit-title">God as Creator</div>
            </div>
            <div class="unit-status">8 of 12 mastered</div>
          </div>
          <div class="path">
            ${NODES.map((n, i) => this.renderNode(n, i))}
          </div>
        </div>

        <aside class="side">
          <div class="verse-card">
            <div class="verse-eyebrow">Verse of the day</div>
            <blockquote>"Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God."</blockquote>
            <cite>— 1 Corinthians 10:31</cite>
          </div>

          <div class="side-card">
            <h3>Recent achievements</h3>
            <div class="achievement-row">
              <div class="ach-icon gold"><i class="ti ti-flame"></i></div>
              <div><div class="ach-name">10-day streak</div><div class="ach-desc">Practiced 10 days in a row</div></div>
            </div>
            <div class="achievement-row">
              <div class="ach-icon green"><i class="ti ti-book-2"></i></div>
              <div><div class="ach-name">First mastery</div><div class="ach-desc">Mastered your first question</div></div>
            </div>
            <div class="achievement-row">
              <div class="ach-icon locked"><i class="ti ti-lock"></i></div>
              <div><div class="ach-name dim">Unit conqueror</div><div class="ach-desc">Complete an entire unit · 8/12</div></div>
            </div>
          </div>

          <div class="side-card">
            <h3>Up next in review</h3>
            <div style="font-size:13px;color:#7A8278;line-height:1.6">
              Spaced repetition will surface <strong style="color:#1F2920">Q1</strong> and <strong style="color:#1F2920">Q3</strong> for review tomorrow.
            </div>
          </div>
        </aside>
      </div>
    `;
  }
}
