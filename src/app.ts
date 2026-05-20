import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { auth } from './store/auth.js';
import './pages/auth-page.js';

type Screen = 'path' | 'lesson' | 'parent' | 'league';

@customElement('catechumen-app')
export class CatechumenApp extends LitElement {
  @state() screen: Screen = 'path';
  @state() loggedIn = auth.isLoggedIn;

  private _unsub: () => void = () => {};

  connectedCallback() {
    super.connectedCallback();
    this._unsub = auth.subscribe(() => {
      this.loggedIn = auth.isLoggedIn;
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
      padding: 20px 0;
      display: flex; align-items: center; justify-content: space-between;
      border-bottom: 1px solid rgba(31,41,32,.08);
    }
    .logo {
      display: flex; align-items: center; gap: 10px;
      font-family: 'Fraunces', Georgia, serif; font-size: 22px; font-weight: 600;
      letter-spacing: -.01em; color: #1B3024; cursor: pointer;
    }
    .logo-mark {
      width: 36px; height: 36px; background: #2D4A3A; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      color: #F5EFE0; font-family: 'Fraunces', serif; font-style: italic; font-weight: 500; font-size: 18px;
    }
    .nav-links { display: flex; gap: 8px; align-items: center; }
    .nav-link {
      font-size: 14px; font-weight: 500; color: #4A554A;
      padding: 8px 14px; border-radius: 10px; transition: all .15s; cursor: pointer;
    }
    .nav-link:hover { color: #1B3024; background: rgba(45,74,58,.06); }
    .nav-link.active { color: #1B3024; background: rgba(45,74,58,.08); }

    .user-pill {
      display: flex; align-items: center; gap: 8px;
      padding: 6px 14px 6px 8px;
      background: rgba(45,74,58,.07); border-radius: 999px;
      font-size: 13px; font-weight: 600; color: #1B3024;
    }
    .user-avatar {
      width: 28px; height: 28px; background: #2D4A3A; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-family: 'Fraunces', serif; font-size: 12px; font-weight: 600; color: #F5EFE0;
    }
    .logout-btn {
      font-size: 13px; font-weight: 500; color: #7A8278; padding: 8px 10px;
      border-radius: 8px; cursor: pointer; transition: all .15s;
    }
    .logout-btn:hover { color: #9B2C2C; background: rgba(155,44,44,.06); }

    .hero { padding: 48px 0 28px; text-align: center; }
    .hero-eyebrow { font-family: 'Fraunces', serif; font-style: italic; font-size: 15px; color: #7E2F11; letter-spacing: .02em; margin-bottom: 14px; }
    .hero-title {
      font-family: 'Fraunces', serif; font-weight: 500;
      font-size: clamp(32px, 5vw, 56px); line-height: 1.08;
      letter-spacing: -.02em; color: #1B3024; max-width: 700px; margin: 0 auto 16px;
    }
    .hero-title em { font-style: italic; color: #B5481E; }
    .hero-sub { font-size: 16px; color: #4A554A; max-width: 500px; margin: 0 auto; line-height: 1.55; }

    .tabs {
      display: flex; justify-content: center; gap: 6px;
      margin: 36px auto 20px; padding: 6px;
      background: #EDE3CC; border-radius: 24px; width: fit-content;
      border: 1px solid rgba(31,41,32,.06);
    }
    .tab {
      padding: 10px 18px; font-size: 13px; font-weight: 600; color: #4A554A;
      border-radius: 18px; transition: all .2s; white-space: nowrap; cursor: pointer;
    }
    .tab:hover { color: #1F2920; }
    .tab.active { background: #2D4A3A; color: #F5EFE0; }

    .stage { padding: 20px 0 80px; min-height: 700px; }
    .screen { display: none; animation: fadeIn .3s ease; }
    .screen.active { display: block; }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .footer {
      padding: 32px 0; text-align: center; font-size: 13px; color: #7A8278;
      border-top: 1px solid rgba(31,41,32,.08); margin-top: 40px;
    }
    .footer em { font-family: 'Fraunces', serif; font-style: italic; color: #4A554A; }
  `;

  private setScreen(s: Screen) { this.screen = s; }
  private logout() { auth.logout(); this.screen = 'path'; }

  private renderNav() {
    const user = auth.user;
    const initial = user?.display_name?.[0]?.toUpperCase() ?? '?';
    return html`
      <nav class="nav">
        <div class="logo" @click=${() => this.setScreen('path')}>
          <div class="logo-mark">C</div>
          <span>Catechumen</span>
        </div>
        <div class="nav-links">
          <span class="nav-link ${this.screen === 'path'   ? 'active' : ''}" @click=${() => this.setScreen('path')}>Learn</span>
          ${user?.role === 'parent' ? html`<span class="nav-link ${this.screen === 'parent' ? 'active' : ''}" @click=${() => this.setScreen('parent')}>Family</span>` : ''}
          <span class="nav-link ${this.screen === 'league' ? 'active' : ''}" @click=${() => this.setScreen('league')}>League</span>
          <span class="nav-link ${this.screen === 'lesson' ? 'active' : ''}" @click=${() => this.setScreen('lesson')}>Lesson</span>
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
    if (!this.loggedIn) {
      return html`<auth-page></auth-page>`;
    }

    const user = auth.user!;
    const TAB_LABELS: Record<Screen, string> = {
      path: 'Learning path', lesson: 'Lesson',
      parent: 'Parent dashboard', league: 'Weekly league',
    };
    const tabs: Screen[] = user.role === 'parent'
      ? ['path', 'lesson', 'parent', 'league']
      : ['path', 'lesson', 'league'];

    return html`
      <div class="container">
        ${this.renderNav()}

        <section class="hero">
          <div class="hero-eyebrow">Westminster Shorter Catechism · 107 questions</div>
          <h1 class="hero-title">The Shorter Catechism,<br />made to <em>stick</em>.</h1>
          <p class="hero-sub">Daily quests, spaced repetition, and a streak you don't want to break.</p>
        </section>

        <div class="tabs">
          ${tabs.map(s => html`
            <button class="tab ${this.screen === s ? 'active' : ''}" @click=${() => this.setScreen(s)}>
              ${TAB_LABELS[s]}
            </button>
          `)}
        </div>

        <main class="stage">
          <div class="screen ${this.screen === 'path'   ? 'active' : ''}">
            <catechumen-path
              name=${user.display_name}
              streak=${user.streak_days}
              xp=${user.xp}
              hearts=${user.hearts}
              gems=${user.gems}
            ></catechumen-path>
          </div>
          <div class="screen ${this.screen === 'lesson' ? 'active' : ''}"><catechumen-lesson></catechumen-lesson></div>
          <div class="screen ${this.screen === 'parent' ? 'active' : ''}"><catechumen-parent></catechumen-parent></div>
          <div class="screen ${this.screen === 'league' ? 'active' : ''}"><catechumen-league></catechumen-league></div>
        </main>

        <footer class="footer">
          <em>"It is worth while to be a Shorter Catechism boy. They grow to be men. And better than that, they are exceedingly apt to grow to be men of God."</em><br />
          — B.B. Warfield
        </footer>
      </div>
    `;
  }
}
