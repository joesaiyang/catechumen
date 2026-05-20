import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

interface Player {
  rank: number; name: string; meta: string; xp: number; color: string; initial: string; you?: boolean;
}

const PLAYERS: Player[] = [
  { rank: 1,  name: 'Theodora R.',  meta: 'Tampa, FL',         xp: 1240, color: '#2D4A3A', initial: 'T' },
  { rank: 2,  name: 'Marcus J.',    meta: 'Greenville, SC',    xp:  980, color: '#B5481E', initial: 'M' },
  { rank: 3,  name: 'Hannah L.',    meta: 'Tulsa, OK',         xp:  870, color: '#C89B3C', initial: 'H' },
  { rank: 4,  name: 'Caleb W.',     meta: 'Boise, ID',         xp:  740, color: '#5A7A65', initial: 'C' },
  { rank: 5,  name: 'Samuel H.',    meta: 'You · Loganville, GA', xp: 680, color: '#1B3024', initial: 'S', you: true },
  { rank: 6,  name: 'Priscilla K.', meta: 'Knoxville, TN',    xp:  540, color: '#9B2C2C', initial: 'P' },
  { rank: 7,  name: 'Benjamin O.',  meta: 'Lincoln, NE',       xp:  480, color: '#2D4A3A', initial: 'B' },
  { rank: 26, name: 'Eleanor P.',   meta: 'Spokane, WA',       xp:  110, color: '#7A8278', initial: 'E' },
];

@customElement('catechumen-league')
export class CatechumenLeague extends LitElement {
  static styles = css`
    .league-frame { max-width: 720px; margin: 0 auto; }

    .league-banner {
      background: linear-gradient(135deg, #1B3024 0%, #2D4A3A 100%);
      color: #F5EFE0; border-radius: 20px; padding: 32px;
      margin-bottom: 24px; position: relative; overflow: hidden; text-align: center;
    }
    .league-banner::before {
      content: ''; position: absolute; inset: 0;
      background: radial-gradient(circle at 20% 30%, rgba(200,155,60,.12) 0%, transparent 40%),
                  radial-gradient(circle at 80% 70%, rgba(181,72,30,.12) 0%, transparent 40%);
    }
    .league-banner > * { position: relative; }
    .league-eyebrow { font-family: 'Fraunces', serif; font-style: italic; font-size: 14px; color: #F0E1B8; margin-bottom: 8px; }
    .league-title   { font-family: 'Fraunces', serif; font-size: 38px; font-weight: 500; letter-spacing: -.01em; margin-bottom: 4px; }
    .league-sub     { font-size: 14px; color: rgba(245,239,224,.8); margin-bottom: 20px; }
    .league-medals  { display: flex; justify-content: center; gap: 32px; margin-top: 24px; }
    .medal { display: flex; flex-direction: column; align-items: center; gap: 6px; }
    .medal-circle { width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; }
    .medal.gold   .medal-circle { background: #C89B3C; color: #1F2920; }
    .medal.silver .medal-circle { background: #C0C7C5; color: #1F2920; }
    .medal.bronze .medal-circle { background: #B5481E; color: #F5EFE0; }
    .medal-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; color: rgba(245,239,224,.8); }

    .leaderboard { background: #FFFCF5; border: 1px solid rgba(31,41,32,.08); border-radius: 16px; overflow: hidden; }
    .lb-header { display: flex; align-items: center; justify-content: space-between; padding: 18px 24px; border-bottom: 1px solid rgba(31,41,32,.08); }
    .lb-title  { font-family: 'Fraunces', serif; font-size: 20px; font-weight: 600; color: #1B3024; }
    .lb-timer  { display: flex; align-items: center; gap: 6px; padding: 6px 12px; background: #F4DCC9; color: #7E2F11; border-radius: 999px; font-size: 12px; font-weight: 600; }

    .promo-zone, .demo-zone {
      padding: 8px 24px; font-size: 11px; font-weight: 600; text-transform: uppercase;
      letter-spacing: .1em; display: flex; align-items: center; gap: 6px;
    }
    .promo-zone { background: rgba(45,74,58,.06); color: #2D4A3A; border-bottom: 1px dashed rgba(45,74,58,.3); }
    .demo-zone  { background: rgba(155,44,44,.05); color: #9B2C2C; border-top: 1px dashed rgba(155,44,44,.3); }

    .row {
      display: grid; grid-template-columns: 50px 1fr auto auto;
      gap: 16px; align-items: center; padding: 14px 24px;
      border-bottom: 1px solid rgba(31,41,32,.06); transition: background .15s;
    }
    .row:last-child { border-bottom: none; }
    .row.you { background: linear-gradient(90deg, rgba(45,74,58,.08), rgba(45,74,58,.02)); border-left: 3px solid #2D4A3A; padding-left: 21px; }
    .rank { font-family: 'Fraunces', serif; font-size: 22px; font-weight: 600; color: #7A8278; text-align: center; }
    .rank-medal { display: inline-block; width: 32px; height: 32px; border-radius: 50%; line-height: 32px; color: #1F2920; font-weight: 700; }
    .rank-medal.gold   { background: #F0E1B8; }
    .rank-medal.silver { background: #DCDFDE; }
    .rank-medal.bronze { background: #F4DCC9; color: #7E2F11; }
    .row-user   { display: flex; align-items: center; gap: 12px; }
    .row-avatar { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Fraunces', serif; font-weight: 600; font-size: 14px; color: #F5EFE0; }
    .row-name   { font-weight: 600; font-size: 14px; color: #1F2920; }
    .row-meta   { font-size: 11px; color: #7A8278; }
    .row-xp     { font-family: 'Fraunces', serif; font-size: 17px; font-weight: 600; color: #1B3024; }
    .row-xp-label { font-size: 11px; color: #7A8278; text-transform: uppercase; letter-spacing: .06em; margin-left: 4px; }
  `;

  private renderRow(p: Player): TemplateResult {
    const rankCls = p.rank === 1 ? 'gold' : p.rank === 2 ? 'silver' : p.rank === 3 ? 'bronze' : '';
    return html`
      <div class="row ${p.you ? 'you' : ''}">
        <div class="rank">
          ${p.rank <= 3
            ? html`<span class="rank-medal ${rankCls}">${p.rank}</span>`
            : p.rank}
        </div>
        <div class="row-user">
          <div class="row-avatar" style="background:${p.color}">${p.initial}</div>
          <div>
            <div class="row-name">${p.name}</div>
            <div class="row-meta">${p.meta}</div>
          </div>
        </div>
        <div><span class="row-xp">${p.xp.toLocaleString()}</span><span class="row-xp-label">XP</span></div>
        <div></div>
      </div>
    `;
  }

  render() {
    return html`
      <div class="league-frame">
        <div class="league-banner">
          <div class="league-eyebrow">Week 12 · Sept 2 — Sept 8</div>
          <h1 class="league-title">Sapphire League</h1>
          <div class="league-sub">Top 7 advance to Emerald · Bottom 5 fall to Citrine</div>
          <div class="league-medals">
            <div class="medal gold">  <div class="medal-circle"><i class="ti ti-medal-2"></i></div><div class="medal-label">Gold</div></div>
            <div class="medal silver"><div class="medal-circle"><i class="ti ti-medal-2"></i></div><div class="medal-label">Silver</div></div>
            <div class="medal bronze"><div class="medal-circle"><i class="ti ti-medal-2"></i></div><div class="medal-label">Bronze</div></div>
          </div>
        </div>

        <div class="leaderboard">
          <div class="lb-header">
            <div class="lb-title">This week's standings</div>
            <div class="lb-timer"><i class="ti ti-clock"></i> 3 days · 14 hrs left</div>
          </div>
          <div class="promo-zone"><i class="ti ti-arrow-up"></i> Promotion zone — top 7</div>
          ${PLAYERS.slice(0, 7).map(p => this.renderRow(p))}
          <div class="demo-zone"><i class="ti ti-arrow-down"></i> Demotion zone — bottom 5</div>
          ${this.renderRow(PLAYERS[7])}
        </div>
      </div>
    `;
  }
}
