import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { auth } from '../store/auth.js';

type Tab = 'signin' | 'register' | 'child';

@customElement('auth-page')
export class AuthPage extends LitElement {
  @state() tab: Tab = 'signin';
  @state() loading = false;
  @state() error = '';

  // Sign in fields
  @state() siEmail = '';
  @state() siPassword = '';

  // Register fields
  @state() regFamily = '';
  @state() regName = '';
  @state() regEmail = '';
  @state() regPassword = '';

  // Child login fields
  @state() childParentEmail = '';
  @state() childUsername = '';
  @state() childPin = '';
  @state() childFamilyId = '';
  @state() childFamilyName = '';
  @state() childStep: 'lookup' | 'pin' = 'lookup';

  static styles = css`
    :host { display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 24px; }

    .wrap { width: 100%; max-width: 440px; }

    .logo {
      display: flex; align-items: center; justify-content: center;
      gap: 10px; margin-bottom: 36px;
      font-family: 'Fraunces', Georgia, serif;
      font-size: 26px; font-weight: 600; letter-spacing: -.01em; color: #1B3024;
    }
    .logo-mark {
      width: 44px; height: 44px; background: #2D4A3A; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      color: #F5EFE0; font-family: 'Fraunces', serif; font-style: italic; font-weight: 500; font-size: 22px;
    }
    .tagline { text-align: center; font-family: 'Fraunces', serif; font-style: italic; font-size: 15px; color: #7E2F11; margin-top: -28px; margin-bottom: 32px; }

    .card { background: #FFFCF5; border: 1px solid rgba(31,41,32,.08); border-radius: 20px; padding: 32px; box-shadow: 0 2px 4px rgba(31,41,32,.08), 0 4px 16px rgba(31,41,32,.06); }

    .tabs { display: flex; gap: 4px; margin-bottom: 28px; padding: 4px; background: #EDE3CC; border-radius: 12px; }
    .tab-btn {
      flex: 1; padding: 9px 8px; font-size: 12px; font-weight: 600; color: #4A554A;
      border-radius: 9px; transition: all .2s; cursor: pointer; background: none; border: none; white-space: nowrap;
    }
    .tab-btn:hover { color: #1F2920; }
    .tab-btn.active { background: #2D4A3A; color: #F5EFE0; }

    .form-title { font-family: 'Fraunces', serif; font-size: 24px; font-weight: 500; color: #1B3024; margin-bottom: 6px; }
    .form-sub   { font-size: 13px; color: #7A8278; margin-bottom: 24px; line-height: 1.5; }

    .field { margin-bottom: 16px; }
    .field label { display: block; font-size: 12px; font-weight: 600; color: #4A554A; text-transform: uppercase; letter-spacing: .06em; margin-bottom: 6px; }
    .field input {
      width: 100%; padding: 12px 14px;
      background: #F5EFE0; border: 1.5px solid rgba(31,41,32,.15); border-radius: 10px;
      font-family: 'Plus Jakarta Sans', sans-serif; font-size: 15px; color: #1F2920;
      transition: border-color .15s; outline: none;
    }
    .field input:focus { border-color: #2D4A3A; background: #FFFCF5; }
    .field input::placeholder { color: #B0B8AE; }

    .pin-row { display: flex; gap: 10px; }
    .pin-row input {
      width: 52px; height: 60px; text-align: center; font-size: 22px; font-weight: 700;
      font-family: 'Fraunces', serif; padding: 0; letter-spacing: .05em;
    }

    .submit {
      width: 100%; padding: 16px; margin-top: 8px;
      background: #2D4A3A; color: #F5EFE0; border: none; border-bottom: 4px solid #1B3024;
      border-radius: 12px; font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 700; font-size: 15px; letter-spacing: .03em; cursor: pointer;
      transition: all .1s; text-transform: uppercase;
    }
    .submit:hover:not(:disabled) { background: #1B3024; }
    .submit:active:not(:disabled) { transform: translateY(2px); border-bottom-width: 2px; }
    .submit:disabled { background: rgba(31,41,32,.1); color: rgba(31,41,32,.35); border-bottom-color: transparent; cursor: not-allowed; }

    .back-btn {
      display: inline-flex; align-items: center; gap: 6px;
      font-size: 13px; font-weight: 600; color: #4A554A; cursor: pointer;
      margin-bottom: 20px; background: none; border: none; padding: 0;
    }
    .back-btn:hover { color: #1B3024; }

    .error {
      background: #E8D0CE; border: 1px solid #C5878A; color: #7E1F1F;
      border-radius: 10px; padding: 12px 14px; font-size: 13px; margin-bottom: 16px;
      display: flex; align-items: center; gap: 8px;
    }

    .divider { border: none; border-top: 1px dashed rgba(31,41,32,.15); margin: 20px 0; }

    .family-found {
      background: #E1EBE5; border: 1px solid #5A7A65; border-radius: 10px;
      padding: 14px 16px; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;
    }
    .family-found i { font-size: 20px; color: #2D4A3A; }
    .family-found strong { font-size: 14px; font-weight: 600; color: #1B3024; display: block; }
    .family-found span { font-size: 12px; color: #4A554A; }

    .footer-note { text-align: center; font-size: 13px; color: #7A8278; margin-top: 20px; }
    .footer-note button { color: #2D4A3A; font-weight: 600; background: none; border: none; cursor: pointer; font-size: 13px; }
    .footer-note button:hover { text-decoration: underline; }
  `;

  private async handleSignIn(e: Event) {
    e.preventDefault();
    this.error = ''; this.loading = true;
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: this.siEmail, password: this.siPassword }),
      });
      const data = await res.json();
      if (!res.ok) { this.error = data.error ?? 'Login failed'; return; }
      auth.login(data.token, data.user);
    } catch { this.error = 'Network error — please try again.'; }
    finally { this.loading = false; }
  }

  private async handleRegister(e: Event) {
    e.preventDefault();
    this.error = ''; this.loading = true;
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: this.regEmail, password: this.regPassword,
          familyName: this.regFamily, displayName: this.regName,
        }),
      });
      const data = await res.json();
      if (!res.ok) { this.error = data.error ?? 'Registration failed'; return; }
      auth.login(data.token, data.user);
    } catch { this.error = 'Network error — please try again.'; }
    finally { this.loading = false; }
  }

  private async handleChildLookup(e: Event) {
    e.preventDefault();
    this.error = ''; this.loading = true;
    try {
      const res = await fetch(`/api/family/children?email=${encodeURIComponent(this.childParentEmail)}`);
      const data = await res.json();
      if (!res.ok) { this.error = data.error ?? 'Family not found'; return; }
      this.childFamilyId = data.familyId;
      this.childFamilyName = data.familyName;
      this.childStep = 'pin';
    } catch { this.error = 'Network error — please try again.'; }
    finally { this.loading = false; }
  }

  private async handleChildLogin(e: Event) {
    e.preventDefault();
    this.error = ''; this.loading = true;
    try {
      const res = await fetch('/api/family/child-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          familyId: this.childFamilyId,
          username: this.childUsername,
          pin: this.childPin,
        }),
      });
      const data = await res.json();
      if (!res.ok) { this.error = data.error ?? 'Login failed'; return; }
      auth.login(data.token, data.user);
    } catch { this.error = 'Network error — please try again.'; }
    finally { this.loading = false; }
  }

  private handlePinInput(e: Event, idx: number) {
    const input = e.target as HTMLInputElement;
    const val = input.value.replace(/\D/g, '').slice(-1);
    input.value = val;
    const pins = this.shadowRoot!.querySelectorAll<HTMLInputElement>('.pin-input');
    const digits = Array.from(pins).map(p => p.value);
    this.childPin = digits.join('');
    if (val && idx < pins.length - 1) pins[idx + 1].focus();
  }

  private renderError() {
    if (!this.error) return '';
    return html`<div class="error"><i class="ti ti-alert-circle"></i>${this.error}</div>`;
  }

  private renderSignIn() {
    return html`
      <div class="form-title">Welcome back</div>
      <div class="form-sub">Sign in to your parent account to continue.</div>
      ${this.renderError()}
      <form @submit=${this.handleSignIn}>
        <div class="field">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" .value=${this.siEmail}
            @input=${(e: Event) => this.siEmail = (e.target as HTMLInputElement).value} required />
        </div>
        <div class="field">
          <label>Password</label>
          <input type="password" placeholder="••••••••" .value=${this.siPassword}
            @input=${(e: Event) => this.siPassword = (e.target as HTMLInputElement).value} required />
        </div>
        <button class="submit" type="submit" ?disabled=${this.loading}>
          ${this.loading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
      <div class="footer-note">No account yet? <button @click=${() => this.tab = 'register'}>Create your family</button></div>
    `;
  }

  private renderRegister() {
    return html`
      <div class="form-title">Start your family</div>
      <div class="form-sub">Create a parent account. You can add children after signing up.</div>
      ${this.renderError()}
      <form @submit=${this.handleRegister}>
        <div class="field">
          <label>Family name</label>
          <input type="text" placeholder="The Smith Family" .value=${this.regFamily}
            @input=${(e: Event) => this.regFamily = (e.target as HTMLInputElement).value} required />
        </div>
        <div class="field">
          <label>Your name</label>
          <input type="text" placeholder="Jonathan" .value=${this.regName}
            @input=${(e: Event) => this.regName = (e.target as HTMLInputElement).value} required />
        </div>
        <div class="field">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" .value=${this.regEmail}
            @input=${(e: Event) => this.regEmail = (e.target as HTMLInputElement).value} required />
        </div>
        <div class="field">
          <label>Password</label>
          <input type="password" placeholder="At least 8 characters" .value=${this.regPassword}
            @input=${(e: Event) => this.regPassword = (e.target as HTMLInputElement).value} required minlength="8" />
        </div>
        <button class="submit" type="submit" ?disabled=${this.loading}>
          ${this.loading ? 'Creating…' : 'Create family'}
        </button>
      </form>
      <div class="footer-note">Already have an account? <button @click=${() => this.tab = 'signin'}>Sign in</button></div>
    `;
  }

  private renderChildLogin() {
    if (this.childStep === 'lookup') {
      return html`
        <div class="form-title">Child login</div>
        <div class="form-sub">Enter your parent's email address to find your family.</div>
        ${this.renderError()}
        <form @submit=${this.handleChildLookup}>
          <div class="field">
            <label>Parent's email</label>
            <input type="email" placeholder="mom@example.com" .value=${this.childParentEmail}
              @input=${(e: Event) => this.childParentEmail = (e.target as HTMLInputElement).value} required />
          </div>
          <button class="submit" type="submit" ?disabled=${this.loading}>
            ${this.loading ? 'Looking up…' : 'Find my family →'}
          </button>
        </form>
      `;
    }

    return html`
      <button class="back-btn" @click=${() => { this.childStep = 'lookup'; this.error = ''; }}>
        <i class="ti ti-arrow-left"></i> Back
      </button>
      <div class="family-found">
        <i class="ti ti-home"></i>
        <div><strong>${this.childFamilyName}</strong><span>Found your family</span></div>
      </div>
      ${this.renderError()}
      <form @submit=${this.handleChildLogin}>
        <div class="field">
          <label>Your username</label>
          <input type="text" placeholder="samuel" .value=${this.childUsername}
            @input=${(e: Event) => this.childUsername = (e.target as HTMLInputElement).value} required />
        </div>
        <div class="field">
          <label>Your PIN</label>
          <div class="pin-row">
            ${[0, 1, 2, 3].map(i => html`
              <input class="pin-input" type="tel" maxlength="1" inputmode="numeric"
                @input=${(e: Event) => this.handlePinInput(e, i)}
                @keydown=${(e: KeyboardEvent) => {
                  if (e.key === 'Backspace') {
                    const pins = this.shadowRoot!.querySelectorAll<HTMLInputElement>('.pin-input');
                    if (!(e.target as HTMLInputElement).value && i > 0) pins[i - 1].focus();
                  }
                }} />
            `)}
          </div>
        </div>
        <button class="submit" type="submit" ?disabled=${this.loading || this.childPin.length < 4}>
          ${this.loading ? 'Signing in…' : 'Let me in →'}
        </button>
      </form>
    `;
  }

  render() {
    return html`
      <div class="wrap">
        <div class="logo">
          <div class="logo-mark">C</div>
          <span>Catechumen</span>
        </div>
        <div class="tagline">The Shorter Catechism, made to stick.</div>

        <div class="card">
          <div class="tabs">
            <button class="tab-btn ${this.tab === 'signin'   ? 'active' : ''}" @click=${() => { this.tab = 'signin';   this.error = ''; }}>Sign in</button>
            <button class="tab-btn ${this.tab === 'register' ? 'active' : ''}" @click=${() => { this.tab = 'register'; this.error = ''; }}>Create family</button>
            <button class="tab-btn ${this.tab === 'child'    ? 'active' : ''}" @click=${() => { this.tab = 'child';    this.error = ''; this.childStep = 'lookup'; }}>I'm a child</button>
          </div>

          ${this.tab === 'signin'   ? this.renderSignIn()    : ''}
          ${this.tab === 'register' ? this.renderRegister()  : ''}
          ${this.tab === 'child'    ? this.renderChildLogin() : ''}
        </div>

        <div style="text-align:center;margin-top:24px;font-size:13px;color:#7A8278;font-family:'Fraunces',serif;font-style:italic">
          "Train up a child in the way he should go." — Proverbs 22:6
        </div>
      </div>
    `;
  }
}
