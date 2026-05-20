import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

interface ChildData {
  name: string; age: number; initial: string; color: string;
  streak: number; mastered: number; xp: number; progress: number;
  lastActive: string; warn: boolean;
}

const CHILDREN: ChildData[] = [
  { name: 'Samuel', age: 11, initial: 'S', color: 'green',  streak: 12, mastered: 8, xp: 340, progress: 67, lastActive: 'Practiced 2h ago',          warn: false },
  { name: 'Eden',   age:  9, initial: 'E', color: 'rust',   streak:  7, mastered: 6, xp: 220, progress: 50, lastActive: 'Practiced today',            warn: false },
  { name: 'Lydia',  age:  6, initial: 'L', color: 'gold',   streak:  3, mastered: 5, xp: 145, progress: 42, lastActive: "Hasn't practiced today",     warn: true  },
];

const WEEK_DATA = [
  { day: 'M', values: [6, 4, 3] }, { day: 'T', values: [8, 5, 4] },
  { day: 'W', values: [5, 6, 2] }, { day: 'T', values: [7, 3, 5] },
  { day: 'F', values: [9, 7, 4] }, { day: 'S', values: [4, 8, 6] },
  { day: 'S', values: [10, 5, 3] },
];

@customElement('catechumen-parent')
export class CatechumenParent extends LitElement {
  static styles = css`
    .ph-eyebrow { font-family: 'Fraunces', serif; font-style: italic; font-size: 14px; color: #B5481E; margin-bottom: 6px; }
    .ph-title   { font-family: 'Fraunces', serif; font-size: 36px; font-weight: 500; color: #1B3024; letter-spacing: -.01em; }
    .ph-sub     { font-size: 15px; color: #4A554A; margin-top: 4px; margin-bottom: 28px; }

    .overview { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 32px; }
    @media (max-width: 720px) { .overview { grid-template-columns: repeat(2, 1fr); } }
    .stat-card { background: #FFFCF5; border: 1px solid rgba(31,41,32,.08); border-radius: 14px; padding: 18px 20px; position: relative; }
    .stat-card-icon { position: absolute; top: 18px; right: 18px; font-size: 22px; color: rgba(31,41,32,.2); }
    .stat-card-label { font-size: 12px; font-weight: 600; color: #7A8278; text-transform: uppercase; letter-spacing: .06em; margin-bottom: 8px; }
    .stat-card-num   { font-family: 'Fraunces', serif; font-size: 32px; font-weight: 600; color: #1B3024; line-height: 1; }
    .stat-card-trend { font-size: 12px; color: #2D4A3A; margin-top: 6px; display: flex; align-items: center; gap: 4px; font-weight: 600; }

    .section-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px dashed rgba(31,41,32,.15); }
    .section-title { font-family: 'Fraunces', serif; font-size: 24px; font-weight: 500; color: #1B3024; }
    .add-btn { display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; background: #2D4A3A; color: #F5EFE0; border-radius: 10px; font-weight: 600; font-size: 13px; cursor: pointer; border: none; }
    .add-btn:hover { background: #1B3024; }

    .chart-card { background: #FFFCF5; border: 1px solid rgba(31,41,32,.08); border-radius: 16px; padding: 24px; margin-bottom: 24px; }
    .chart-title { font-family: 'Fraunces', serif; font-size: 18px; font-weight: 600; color: #1B3024; margin-bottom: 4px; }
    .chart-sub   { font-size: 13px; color: #7A8278; margin-bottom: 20px; }
    .chart { display: flex; align-items: flex-end; gap: 8px; height: 140px; padding-bottom: 24px; border-bottom: 1px dashed rgba(31,41,32,.15); position: relative; }
    .bar-group { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px; height: 100%; justify-content: flex-end; position: relative; }
    .bar-stack  { width: 100%; max-width: 32px; display: flex; flex-direction: column; gap: 2px; }
    .bar        { width: 100%; border-radius: 4px; }
    .bar.samuel { background: #2D4A3A; }
    .bar.eden   { background: #B5481E; }
    .bar.lydia  { background: #C89B3C; }
    .day-label  { position: absolute; bottom: -20px; font-size: 11px; color: #7A8278; font-weight: 600; }
    .legend     { display: flex; gap: 20px; margin-top: 18px; font-size: 13px; }
    .leg-item   { display: flex; align-items: center; gap: 6px; color: #4A554A; }
    .leg-dot    { width: 12px; height: 12px; border-radius: 3px; }

    .children-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px; margin-bottom: 36px; }
    .child-card { background: #FFFCF5; border: 1px solid rgba(31,41,32,.08); border-radius: 16px; padding: 22px; transition: all .15s; }
    .child-card:hover { border-color: rgba(45,74,58,.3); transform: translateY(-2px); box-shadow: 0 2px 4px rgba(31,41,32,.08), 0 4px 16px rgba(31,41,32,.06); }
    .child-head  { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
    .avatar { width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Fraunces', serif; font-size: 22px; font-weight: 600; color: #F5EFE0; flex-shrink: 0; }
    .avatar.green { background: linear-gradient(135deg, #2D4A3A, #5A7A65); }
    .avatar.rust  { background: linear-gradient(135deg, #B5481E, #E89773); }
    .avatar.gold  { background: linear-gradient(135deg, #C89B3C, #E8C875); color: #1F2920; }
    .child-name  { font-family: 'Fraunces', serif; font-size: 20px; font-weight: 600; color: #1F2920; }
    .child-age   { font-size: 13px; color: #7A8278; }
    .child-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 16px; }
    .cs          { text-align: center; padding: 10px 8px; background: #F5EFE0; border-radius: 10px; }
    .cs-num      { font-family: 'Fraunces', serif; font-size: 18px; font-weight: 600; color: #1B3024; }
    .cs-label    { font-size: 10px; color: #7A8278; text-transform: uppercase; letter-spacing: .06em; font-weight: 600; margin-top: 2px; }
    .progress-row { margin-bottom: 12px; }
    .progress-row-label { display: flex; justify-content: space-between; font-size: 12px; color: #4A554A; margin-bottom: 4px; font-weight: 500; }
    .progress-row-bar  { height: 8px; background: rgba(31,41,32,.07); border-radius: 4px; overflow: hidden; }
    .progress-row-fill { height: 100%; background: #2D4A3A; border-radius: 4px; }
    .last-active      { font-size: 12px; color: #7A8278; display: flex; align-items: center; gap: 6px; }
    .last-active.warn { color: #B5481E; }
  `;

  private renderDay(day: string, values: number[]): TemplateResult {
    const max = 12;
    return html`
      <div class="bar-group">
        <div class="bar-stack">
          <div class="bar samuel" style="height:${values[0] / max * 100}px"></div>
          <div class="bar eden"   style="height:${values[1] / max * 100}px"></div>
          <div class="bar lydia"  style="height:${values[2] / max * 100}px"></div>
        </div>
        <div class="day-label">${day}</div>
      </div>
    `;
  }

  private renderChild(c: ChildData): TemplateResult {
    return html`
      <div class="child-card">
        <div class="child-head">
          <div class="avatar ${c.color}">${c.initial}</div>
          <div>
            <div class="child-name">${c.name}</div>
            <div class="child-age">Age ${c.age} · Unit I in progress</div>
          </div>
        </div>
        <div class="child-stats">
          <div class="cs"><div class="cs-num">${c.streak}</div><div class="cs-label">Streak</div></div>
          <div class="cs"><div class="cs-num">${c.mastered}</div><div class="cs-label">Mastered</div></div>
          <div class="cs"><div class="cs-num">${c.xp}</div><div class="cs-label">XP</div></div>
        </div>
        <div class="progress-row">
          <div class="progress-row-label"><span>Unit I progress</span><span>${c.progress}%</span></div>
          <div class="progress-row-bar"><div class="progress-row-fill" style="width:${c.progress}%"></div></div>
        </div>
        <div class="last-active ${c.warn ? 'warn' : ''}">
          <i class="ti ti-${c.warn ? 'alert-circle' : 'clock'}"></i>
          ${c.lastActive}
        </div>
      </div>
    `;
  }

  render() {
    return html`
      <div class="ph-eyebrow">Family · The Halverson household</div>
      <h1 class="ph-title">Watching over their growth</h1>
      <p class="ph-sub">All three are progressing through Unit I together this month.</p>

      <div class="overview">
        <div class="stat-card">
          <i class="ti ti-users stat-card-icon"></i>
          <div class="stat-card-label">Children</div>
          <div class="stat-card-num">3</div>
        </div>
        <div class="stat-card">
          <i class="ti ti-book-2 stat-card-icon"></i>
          <div class="stat-card-label">Questions mastered</div>
          <div class="stat-card-num">19</div>
          <div class="stat-card-trend"><i class="ti ti-trending-up"></i> +4 this week</div>
        </div>
        <div class="stat-card">
          <i class="ti ti-flame stat-card-icon"></i>
          <div class="stat-card-label">Combined streak days</div>
          <div class="stat-card-num">28</div>
        </div>
        <div class="stat-card">
          <i class="ti ti-clock stat-card-icon"></i>
          <div class="stat-card-label">Time this week</div>
          <div class="stat-card-num">42<span style="font-size:18px;color:#7A8278">m</span></div>
          <div class="stat-card-trend"><i class="ti ti-trending-up"></i> +12m vs last</div>
        </div>
      </div>

      <div class="chart-card">
        <div class="chart-title">Practice this week</div>
        <div class="chart-sub">Minutes of practice per child, by day</div>
        <div class="chart">${WEEK_DATA.map(d => this.renderDay(d.day, d.values))}</div>
        <div class="legend">
          <div class="leg-item"><span class="leg-dot" style="background:#2D4A3A"></span> Samuel</div>
          <div class="leg-item"><span class="leg-dot" style="background:#B5481E"></span> Eden</div>
          <div class="leg-item"><span class="leg-dot" style="background:#C89B3C"></span> Lydia</div>
        </div>
      </div>

      <div class="section-head">
        <h2 class="section-title">Your children</h2>
        <button class="add-btn"><i class="ti ti-plus"></i> Add child</button>
      </div>
      <div class="children-grid">${CHILDREN.map(c => this.renderChild(c))}</div>
    `;
  }
}
