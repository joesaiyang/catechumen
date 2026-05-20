import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

type Screen = 'path' | 'lesson' | 'parent' | 'league';

@customElement('catechumen-app')
export class CatechumenApp extends LitElement {
  @state() screen: Screen = 'path';

  static styles = css`
    :host { display: block; }
    .container { max-width: 1120px; margin: 0 auto; padding: 0 24px; }

    .nav {
      padding: 24px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(31,41,32,.08);
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'Fraunces', Georgia, serif;
      font-size: 22px;
      font-weight: 600;
      letter-spacing: -.01em;
      color: #1B3024;
    }
    .logo-mark {
      width: 36px; height: 36px;
      background: #2D4A3A;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      color: #F5EFE0;
      font-family: 'Fraunces', serif;
      font-style: italic;
      font-weight: 500;
      font-size: 18px;
    }
    .nav-links { display: flex; gap: 8px; align-items: center; }
    .nav-link {
      font-size: 14px; font-weight: 500; color: #4A554A;
      padding: 8px 14px; border-radius: 10px; transition: all .15s; cursor: pointer;
    }
    .nav-link:hover { color: #1B3024; background: rgba(45,74,58,.06); }
    .nav-link.active { color: #1B3024; background: rgba(45,74,58,.08); }

    .hero { padding: 56px 0 32px; text-align: center; }
    .hero-eyebrow {
      font-family: 'Fraunces', serif; font-style: italic;
      font-size: 15px; color: #7E2F11; letter-spacing: .02em; margin-bottom: 16px;
    }
    .hero-title {
      font-family: 'Fraunces', serif; font-weight: 500;
      font-size: clamp(36px, 6vw, 64px); line-height: 1.05;
      letter-spacing: -.02em; color: #1B3024;
      max-width: 800px; margin: 0 auto 20px;
    }
    .hero-title em { font-style: italic; color: #B5481E; }
    .hero-sub { font-size: 17px; color: #4A554A; max-width: 540px; margin: 0 auto; line-height: 1.55; }

    .tabs {
      display: flex; justify-content: center; gap: 6px;
      margin: 40px auto 24px; padding: 6px;
      background: #EDE3CC; border-radius: 24px; width: fit-content;
      border: 1px solid rgba(31,41,32,.06);
    }
    .tab {
      padding: 10px 18px; font-size: 13px; font-weight: 600; color: #4A554A;
      border-radius: 18px; transition: all .2s; letter-spacing: .01em; white-space: nowrap; cursor: pointer;
    }
    .tab:hover { color: #1F2920; }
    .tab.active { background: #2D4A3A; color: #F5EFE0; box-shadow: 0 1px 2px rgba(31,41,32,.06); }

    .stage { padding: 24px 0 80px; min-height: 700px; }
    .screen { display: none; animation: fadeIn .35s ease; }
    .screen.active { display: block; }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .footer {
      padding: 32px 0; text-align: center; font-size: 13px; color: #7A8278;
      border-top: 1px solid rgba(31,41,32,.08); margin-top: 40px;
    }
    .footer em { font-family: 'Fraunces', serif; font-style: italic; color: #4A554A; }
  `;

  private setScreen(s: Screen) { this.screen = s; }

  render() {
    return html`
      <div class="container">
        <nav class="nav">
          <div class="logo">
            <div class="logo-mark">C</div>
            <span>Catechumen</span>
          </div>
          <div class="nav-links">
            <span class="nav-link ${this.screen === 'path' ? 'active' : ''}" @click=${() => this.setScreen('path')}>Learn</span>
            <span class="nav-link ${this.screen === 'parent' ? 'active' : ''}" @click=${() => this.setScreen('parent')}>Family</span>
            <span class="nav-link ${this.screen === 'league' ? 'active' : ''}" @click=${() => this.setScreen('league')}>League</span>
            <span class="nav-link ${this.screen === 'lesson' ? 'active' : ''}" @click=${() => this.setScreen('lesson')}>Lesson</span>
          </div>
        </nav>

        <section class="hero">
          <div class="hero-eyebrow">A prototype · click through the screens below</div>
          <h1 class="hero-title">The Shorter Catechism,<br />made to <em>stick</em>.</h1>
          <p class="hero-sub">
            A family-first approach to memorizing the Westminster Shorter Catechism —
            daily quests, spaced repetition, and the gentle pressure of a streak you don't want to break.
          </p>
        </section>

        <div class="tabs">
          ${(['path', 'lesson', 'parent', 'league'] as Screen[]).map(s => html`
            <button class="tab ${this.screen === s ? 'active' : ''}" @click=${() => this.setScreen(s)}>
              ${{ path: 'Learning path', lesson: 'Lesson', parent: 'Parent dashboard', league: 'Weekly league' }[s]}
            </button>
          `)}
        </div>

        <main class="stage">
          <div class="screen ${this.screen === 'path' ? 'active' : ''}"><catechumen-path></catechumen-path></div>
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
