import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('stats-bar')
export class StatsBar extends LitElement {
  @property({ type: String }) name = 'Samuel';
  @property({ type: Number }) streak = 12;
  @property({ type: Number }) xp = 340;
  @property({ type: Number }) hearts = 4;
  @property({ type: Number }) gems = 86;

  static styles = css`
    .bar {
      display: flex; gap: 12px; align-items: center; flex-wrap: wrap;
      padding: 14px 20px;
      background: #FFFCF5;
      border: 1px solid rgba(31,41,32,.08);
      border-radius: 16px;
      margin-bottom: 24px;
    }
    .greet { font-family: 'Fraunces', serif; font-style: italic; font-size: 17px; color: #4A554A; }
    .greet strong { font-weight: 600; font-style: normal; color: #1F2920; }
    .spacer { flex: 1; }
    .stat { display: flex; align-items: center; gap: 8px; padding: 4px 8px; }
    .stat-icon {
      width: 36px; height: 36px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center; font-size: 18px;
    }
    .stat-icon.flame { background: #F4DCC9; color: #B5481E; }
    .stat-icon.gem   { background: #E1EBE5; color: #2D4A3A; }
    .stat-icon.heart { background: #E8D0CE; color: #9B2C2C; }
    .stat-icon.gold  { background: #F0E1B8; color: #8A6620; }
    .stat-num { font-family: 'Fraunces', serif; font-size: 20px; font-weight: 600; color: #1F2920; line-height: 1; }
    .stat-label { font-size: 11px; color: #7A8278; text-transform: uppercase; letter-spacing: .06em; font-weight: 600; }
    .divider { width: 1px; height: 28px; background: rgba(31,41,32,.1); }
  `;

  render() {
    return html`
      <div class="bar">
        <div class="greet">Welcome back, <strong>${this.name}</strong></div>
        <div class="spacer"></div>
        <div class="stat">
          <div class="stat-icon flame"><i class="ti ti-flame"></i></div>
          <div><div class="stat-num">${this.streak}</div><div class="stat-label">streak</div></div>
        </div>
        <div class="divider"></div>
        <div class="stat">
          <div class="stat-icon gem"><i class="ti ti-diamond"></i></div>
          <div><div class="stat-num">${this.xp}</div><div class="stat-label">XP this week</div></div>
        </div>
        <div class="divider"></div>
        <div class="stat">
          <div class="stat-icon heart"><i class="ti ti-heart-filled"></i></div>
          <div><div class="stat-num">${this.hearts}/5</div><div class="stat-label">hearts</div></div>
        </div>
        <div class="divider"></div>
        <div class="stat">
          <div class="stat-icon gold"><i class="ti ti-coin"></i></div>
          <div><div class="stat-num">${this.gems}</div><div class="stat-label">gems</div></div>
        </div>
      </div>
    `;
  }
}
