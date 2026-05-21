import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('stats-bar')
export class StatsBar extends LitElement {
  @property({ type: String })  name      = 'Samuel';
  @property({ type: Number })  streak    = 12;
  @property({ type: Number })  xp        = 340;
  @property({ type: Number })  hearts    = 4;
  @property({ type: Number })  gems      = 86;
  @property({ type: Boolean, attribute: 'child-mode' }) childMode = false;

  static styles = css`
    /* ── Parent mode ── */
    .bar {
      display: flex; gap: 12px; align-items: center; flex-wrap: wrap;
      padding: 14px 20px; background: #FFFCF5;
      border: 1px solid rgba(31,41,32,.08); border-radius: 16px; margin-bottom: 24px;
    }
    .greet { font-family: 'Fraunces', serif; font-style: italic; font-size: 17px; color: #4A554A; }
    .greet strong { font-weight: 600; font-style: normal; color: #1F2920; }
    .spacer { flex: 1; }
    .stat { display: flex; align-items: center; gap: 8px; padding: 4px 8px; }
    .stat-icon { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; }
    .stat-icon.flame { background: #F4DCC9; color: #B5481E; }
    .stat-icon.gem   { background: #E1EBE5; color: #2D4A3A; }
    .stat-icon.heart { background: #E8D0CE; color: #9B2C2C; }
    .stat-icon.gold  { background: #F0E1B8; color: #8A6620; }
    .stat-num   { font-family: 'Fraunces', serif; font-size: 20px; font-weight: 600; color: #1F2920; line-height: 1; }
    .stat-label { font-size: 11px; color: #7A8278; text-transform: uppercase; letter-spacing: .06em; font-weight: 600; }
    .divider    { width: 1px; height: 28px; background: rgba(31,41,32,.1); }

    /* ── Child / game mode ── */
    .kid-bar {
      display: grid; grid-template-columns: 1fr repeat(4, auto);
      align-items: center; gap: 8px;
      padding: 16px 22px;
      background: linear-gradient(135deg, #1B3024 0%, #2D4A3A 60%, #3D6B52 100%);
      border-radius: 20px; margin-bottom: 24px;
      box-shadow: 0 4px 20px rgba(31,41,32,.25);
    }
    .kid-greeting {
      font-family: 'Fraunces', serif; font-size: 20px; font-weight: 600;
      color: #F5EFE0; letter-spacing: -.01em;
    }
    .kid-greeting span { font-style: italic; color: #C89B3C; }
    .kid-stat {
      display: flex; flex-direction: column; align-items: center; gap: 2px;
      padding: 10px 14px; border-radius: 14px; min-width: 64px;
    }
    .kid-stat.streak { background: rgba(245,159,11,.15); }
    .kid-stat.xp     { background: rgba(200,155,60,.15); }
    .kid-stat.hearts { background: rgba(239,68,68,.15); }
    .kid-stat.gems   { background: rgba(59,130,246,.15); }
    .kid-emoji { font-size: 22px; line-height: 1; }
    .kid-num   { font-family: 'Fraunces', serif; font-size: 22px; font-weight: 700; color: #F5EFE0; line-height: 1; }
    .kid-lbl   { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; }
    .kid-stat.streak .kid-lbl { color: #FCD34D; }
    .kid-stat.xp     .kid-lbl { color: #C89B3C; }
    .kid-stat.hearts .kid-lbl { color: #FCA5A5; }
    .kid-stat.gems   .kid-lbl { color: #93C5FD; }

    @media (max-width: 600px) {
      .kid-bar { grid-template-columns: 1fr 1fr; row-gap: 8px; }
      .kid-greeting { grid-column: 1 / -1; }
    }
  `;

  render() {
    if (this.childMode) {
      const hearts = Array.from({ length: 5 }, (_, i) => i < this.hearts ? '❤️' : '🖤').join('');
      return html`
        <div class="kid-bar">
          <div class="kid-greeting">Hey, <span>${this.name}!</span> 👋</div>
          <div class="kid-stat streak">
            <span class="kid-emoji">🔥</span>
            <span class="kid-num">${this.streak}</span>
            <span class="kid-lbl">Streak</span>
          </div>
          <div class="kid-stat xp">
            <span class="kid-emoji">⭐</span>
            <span class="kid-num">${this.xp}</span>
            <span class="kid-lbl">XP</span>
          </div>
          <div class="kid-stat hearts">
            <span style="font-size:16px;line-height:1">${hearts}</span>
            <span class="kid-lbl" style="color:#FCA5A5;margin-top:4px">Hearts</span>
          </div>
          <div class="kid-stat gems">
            <span class="kid-emoji">💎</span>
            <span class="kid-num">${this.gems}</span>
            <span class="kid-lbl">Gems</span>
          </div>
        </div>
      `;
    }

    return html`
      <div class="bar">
        <div class="greet">Welcome back, <strong>${this.name}</strong></div>
        <div class="spacer"></div>
        <div class="stat">
          <div class="stat-icon flame">🔥</div>
          <div><div class="stat-num">${this.streak}</div><div class="stat-label">streak</div></div>
        </div>
        <div class="divider"></div>
        <div class="stat">
          <div class="stat-icon gem">◆</div>
          <div><div class="stat-num">${this.xp}</div><div class="stat-label">XP this week</div></div>
        </div>
        <div class="divider"></div>
        <div class="stat">
          <div class="stat-icon heart">♥</div>
          <div><div class="stat-num">${this.hearts}/5</div><div class="stat-label">hearts</div></div>
        </div>
        <div class="divider"></div>
        <div class="stat">
          <div class="stat-icon gold">💎</div>
          <div><div class="stat-num">${this.gems}</div><div class="stat-label">gems</div></div>
        </div>
      </div>
    `;
  }
}
