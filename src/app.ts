import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { auth } from './store/auth.js';
import './pages/auth-page.js';

type Screen = 'path' | 'library' | 'lesson' | 'parent' | 'league';

interface LessonConfig { type: string; source: string; mode: string; reviewMode?: boolean; }

@customElement('catechumen-app')
export class CatechumenApp extends LitElement {
  @state() screen: Screen = 'path';
  @state() loggedIn = auth.isLoggedIn;
  @state() lessonConfig: LessonConfig = { type: 'catechism', source: 'wsc', mode: 'fill_blank' };
  @state() lessonKey = 0;

  private _unsub: () => void = () => {};

  connectedCallback() {
    super.connectedCallback();
    this._unsub = auth.subscribe(() => { this.loggedIn = auth.isLoggedIn; });
    // Listen for start-lesson events bubbled from library-page
    this.addEventListener('start-lesson', (e: Event) => {
      const detail = (e as CustomEvent<LessonConfig>).detail;
      this.lessonConfig = detail;
      this.lessonKey++;
      this.screen = 'lesson';
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._unsub();
  }

  static styles = css`
    :host { display: block; }
    .container { max-width: 1120px; margin: 0 auto; padding: 0 24px; }

    .nav {
      padding: 20px 0; display: flex; align-items: center; justify-content: space-between;
      border-bottom: 1px solid rgba(31,41,32,.08);
    }
    .logo {
      display: flex; align-items: center; gap: 10px; cursor: pointer;
      font-family: 'Fraunces', Georgia, serif; font-size: 22px; font-weight: 600;
      letter-spacing: -.01em; color: #1B3024;
    }
    .logo-mark {
      width: 36px; height: 36px; background: #2D4A3A; border-radius: 50%;
      overflow: hidden; flex-shrink: 0;
    }
    .nav-links { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
    .nav-link {
      font-size: 14px; font-weight: 500; color: #4A554A;
      padding: 7px 13px; border-radius: 10px; transition: all .15s; cursor: pointer;
    }
    .nav-link:hover  { color: #1B3024; background: rgba(45,74,58,.06); }
    .nav-link.active { color: #1B3024; background: rgba(45,74,58,.08); }
    .user-pill {
      display: flex; align-items: center; gap: 8px; padding: 5px 12px 5px 7px;
      background: rgba(45,74,58,.07); border-radius: 999px;
      font-size: 13px; font-weight: 600; color: #1B3024;
    }
    .user-avatar {
      width: 26px; height: 26px; background: #2D4A3A; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-family: 'Fraunces', serif; font-size: 12px; font-weight: 600; color: #F5EFE0;
    }
    .logout-btn { padding: 7px 10px; font-size: 13px; color: #7A8278; border-radius: 8px; cursor: pointer; }
    .logout-btn:hover { color: #9B2C2C; background: rgba(155,44,44,.06); }

    .stage { padding: 32px 0 80px; min-height: 600px; }
    .screen { display: none; animation: fadeIn .3s ease; }
    .screen.active { display: block; }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .footer {
      padding: 28px 0; text-align: center; font-size: 13px; color: #7A8278;
      border-top: 1px solid rgba(31,41,32,.08); margin-top: 40px;
    }
    .footer em { font-family: 'Fraunces', serif; font-style: italic; color: #4A554A; }
  `;

  private setScreen(s: Screen) { this.screen = s; }
  private logout() { auth.logout(); this.screen = 'path'; }

  private renderNav() {
    const user = auth.user;
    const initial = user?.display_name?.[0]?.toUpperCase() ?? '?';
    const links: { id: Screen; label: string }[] = [
      { id: 'path',    label: 'Learn' },
      { id: 'library', label: 'Library' },
      { id: 'lesson',  label: 'Lesson' },
      ...(user?.role === 'parent' ? [{ id: 'parent' as Screen, label: 'Family' }] : []),
      { id: 'league',  label: 'League' },
    ];
    return html`
      <nav class="nav">
        <div class="logo" @click=${() => this.setScreen('path')}>
          <div class="logo-mark"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%" style="display:block"><path fill="#F5EFE0" d="M 230,80 C 160,80 120,130 120,200 C 120,225 125,245 135,260 C 125,263 115,255 105,245 C 100,240 98,235 98,230 C 95,230 92,225 92,220 C 95,215 97,212 95,208 C 90,202 85,200 88,190 C 91,180 97,175 97,165 C 97,150 90,135 102,110 C 88,125 90,140 90,145 C 87,105 110,85 135,90 C 150,95 160,105 165,115 C 185,90 210,85 230,85 L 260,85 L 260,100 L 250,95 C 240,92 230,92 220,95 C 170,110 150,150 150,200 C 150,250 170,290 220,305 C 230,308 240,308 250,305 L 260,300 L 260,315 L 230,315 C 210,315 185,310 165,285 C 150,295 140,315 130,315 C 145,315 155,302 160,295 C 145,280 140,265 140,250 C 140,150 175,100 230,100 Z"/></svg></div>
          <span>Catechumen</span>
        </div>
        <div class="nav-links">
          ${links.map(l => html`
            <span class="nav-link ${this.screen === l.id ? 'active' : ''}" @click=${() => this.setScreen(l.id)}>
              ${l.label}
            </span>
          `)}
          <div class="user-pill">
            <div class="user-avatar">${initial}</div>
            ${user?.display_name}
          </div>
          <span class="logout-btn" @click=${this.logout} title="Sign out">
            <i class="ti ti-logout"></i>
          </span>
        </div>
      </nav>
    `;
  }

  render() {
    if (!this.loggedIn) return html`<auth-page></auth-page>`;

    const user = auth.user!;
    return html`
      <div class="container">
        ${this.renderNav()}
        <main class="stage">
          <div class="screen ${this.screen === 'path'    ? 'active' : ''}">
            <catechumen-path
              name=${user.display_name} streak=${user.streak_days}
              xp=${user.xp} hearts=${user.hearts} gems=${user.gems}
            ></catechumen-path>
          </div>
          <div class="screen ${this.screen === 'library' ? 'active' : ''}">
            <library-page></library-page>
          </div>
          <div class="screen ${this.screen === 'lesson'  ? 'active' : ''}">
            <catechumen-lesson
              content-type=${this.lessonConfig.type}
              content-source=${this.lessonConfig.source}
              quiz-mode=${this.lessonConfig.mode}
              ?review-mode=${this.lessonConfig.reviewMode ?? false}
              session-key=${this.lessonKey}
            ></catechumen-lesson>
          </div>
          <div class="screen ${this.screen === 'parent'  ? 'active' : ''}">
            <catechumen-parent></catechumen-parent>
          </div>
          <div class="screen ${this.screen === 'league'  ? 'active' : ''}">
            <catechumen-league></catechumen-league>
          </div>
        </main>
        <footer class="footer">
          <em>"Train up a child in the way he should go; even when he is old he will not depart from it."</em>
          — Proverbs 22:6
        </footer>
      </div>
    `;
  }
}
