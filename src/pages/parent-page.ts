import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { apiFetch } from '../store/auth.js';

interface Child {
  id: string; display_name: string; username: string;
  xp: number; streak_days: number; hearts: number; gems: number;
  mastered_count: number; total_attempted: number; last_active_at: string | null;
}

@customElement('catechumen-parent')
export class CatechumenParent extends LitElement {
  @state() kids: Child[] = [];
  @state() loading = true;
  @state() showForm = false;
  @state() newName = '';
  @state() newUsername = '';
  @state() newPin = '';
  @state() submitting = false;
  @state() error = '';

  // Kebab menu
  @state() openMenuId: string | null = null;

  // Edit modal
  @state() editTarget: Child | null = null;
  @state() editName = '';
  @state() editUsername = '';
  @state() editPin = '';
  @state() editError = '';
  @state() editSubmitting = false;

  // Delete modal
  @state() deleteTarget: Child | null = null;
  @state() deleteSubmitting = false;

  connectedCallback() {
    super.connectedCallback();
    this.loadChildren();
  }

  async loadChildren() {
    this.loading = true;
    const res = await apiFetch('/api/family/children');
    if (res.ok) {
      const data = await res.json();
      this.kids = data.children ?? [];
    }
    this.loading = false;
  }

  async addChild(e: Event) {
    e.preventDefault();
    this.error = '';
    if (!/^\d{4,6}$/.test(this.newPin)) { this.error = 'PIN must be 4–6 digits.'; return; }
    this.submitting = true;
    const res = await apiFetch('/api/family/children', {
      method: 'POST',
      body: JSON.stringify({ displayName: this.newName, username: this.newUsername, pin: this.newPin }),
    });
    const data = await res.json();
    this.submitting = false;
    if (!res.ok) { this.error = data.error ?? 'Something went wrong.'; return; }
    this.newName = ''; this.newUsername = ''; this.newPin = '';
    this.showForm = false;
    await this.loadChildren();
  }

  private openEdit(c: Child) {
    this.editTarget = c;
    this.editName = c.display_name;
    this.editUsername = c.username;
    this.editPin = '';
    this.editError = '';
    this.openMenuId = null;
  }

  async saveEdit(e: Event) {
    e.preventDefault();
    if (!this.editTarget) return;
    if (this.editPin && !/^\d{4,6}$/.test(this.editPin)) { this.editError = 'PIN must be 4–6 digits.'; return; }
    this.editSubmitting = true;
    const body: Record<string, string> = { childId: this.editTarget.id };
    if (this.editName     !== this.editTarget.display_name) body.displayName = this.editName;
    if (this.editUsername !== this.editTarget.username)     body.username    = this.editUsername;
    if (this.editPin)                                       body.pin         = this.editPin;
    const res = await apiFetch('/api/family/children', { method: 'PATCH', body: JSON.stringify(body) });
    const data = await res.json();
    this.editSubmitting = false;
    if (!res.ok) { this.editError = data.error ?? 'Update failed.'; return; }
    this.editTarget = null;
    await this.loadChildren();
  }

  async deleteChild() {
    if (!this.deleteTarget) return;
    this.deleteSubmitting = true;
    await apiFetch(`/api/family/children?childId=${this.deleteTarget.id}`, { method: 'DELETE' });
    this.deleteSubmitting = false;
    this.deleteTarget = null;
    await this.loadChildren();
  }

  private lastActiveLabel(iso: string | null): string {
    if (!iso) return 'Never practiced';
    const diff = Date.now() - new Date(iso).getTime();
    const min  = Math.floor(diff / 60000);
    if (min < 60)   return `Active ${min}m ago`;
    const hr = Math.floor(min / 60);
    if (hr  < 24)   return `Active ${hr}h ago`;
    return `Active ${Math.floor(hr / 24)}d ago`;
  }

  private initial(name: string) { return name[0]?.toUpperCase() ?? '?'; }

  static styles = css`
    .ph-title { font-family: 'Fraunces', serif; font-size: 32px; font-weight: 500; color: #1B3024; margin-bottom: 4px; }
    .ph-sub   { font-size: 15px; color: #4A554A; margin-bottom: 28px; }

    .section-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
    .section-title { font-family: 'Fraunces', serif; font-size: 22px; font-weight: 500; color: #1B3024; }
    .add-btn {
      display: inline-flex; align-items: center; gap: 6px; padding: 9px 16px;
      background: #2D4A3A; color: #F5EFE0; border-radius: 10px;
      font-weight: 600; font-size: 13px; cursor: pointer; border: none;
    }
    .add-btn:hover { background: #1B3024; }

    /* Add-child form */
    .form-card {
      background: #FFFCF5; border: 1.5px dashed rgba(45,74,58,.3);
      border-radius: 16px; padding: 24px; margin-bottom: 20px;
    }
    .form-title { font-family: 'Fraunces', serif; font-size: 20px; font-weight: 500; color: #1B3024; margin-bottom: 16px; }
    .form-grid  { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }
    @media (max-width: 600px) { .form-grid { grid-template-columns: 1fr; } }
    .field label { display: block; font-size: 12px; font-weight: 600; color: #4A554A; text-transform: uppercase; letter-spacing: .06em; margin-bottom: 6px; }
    .field input {
      width: 100%; padding: 11px 14px; box-sizing: border-box;
      background: #F5EFE0; border: 1.5px solid rgba(31,41,32,.15); border-radius: 10px;
      font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; color: #1F2920; outline: none;
    }
    .field input:focus { border-color: #2D4A3A; background: #FFFCF5; }
    .field-hint { font-size: 11px; color: #7A8278; margin-top: 4px; }
    .form-actions { display: flex; gap: 10px; }
    .btn-cancel { padding: 11px 18px; background: transparent; border: 1.5px solid rgba(31,41,32,.15); border-radius: 10px; font-weight: 600; font-size: 14px; cursor: pointer; color: #4A554A; }
    .btn-submit { padding: 11px 22px; background: #2D4A3A; color: #F5EFE0; border: none; border-bottom: 3px solid #1B3024; border-radius: 10px; font-weight: 700; font-size: 14px; cursor: pointer; }
    .btn-submit:disabled { background: rgba(31,41,32,.1); color: rgba(31,41,32,.35); border-bottom-color: transparent; cursor: not-allowed; }
    .error { background: #E8D0CE; border: 1px solid #C5878A; color: #7E1F1F; border-radius: 10px; padding: 10px 14px; font-size: 13px; margin-bottom: 14px; }

    /* Child cards */
    .children-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; }
    .child-card {
      background: #FFFCF5; border: 1px solid rgba(31,41,32,.08); border-radius: 16px;
      padding: 22px; transition: all .15s;
    }
    .child-card:hover { border-color: rgba(45,74,58,.3); transform: translateY(-2px); box-shadow: 0 4px 16px rgba(31,41,32,.06); }
    .child-head { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
    .avatar {
      width: 52px; height: 52px; border-radius: 50%; flex-shrink: 0;
      background: #2D4A3A; display: flex; align-items: center; justify-content: center;
      font-family: 'Fraunces', serif; font-size: 20px; font-weight: 600; color: #F5EFE0;
    }
    .child-name     { font-family: 'Fraunces', serif; font-size: 19px; font-weight: 600; color: #1F2920; }
    .child-username { font-size: 12px; color: #7A8278; margin-top: 2px; }
    .child-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 14px; }
    .cs     { text-align: center; padding: 10px 6px; background: #F5EFE0; border-radius: 10px; }
    .cs-num { font-family: 'Fraunces', serif; font-size: 18px; font-weight: 600; color: #1B3024; }
    .cs-lbl { font-size: 10px; color: #7A8278; text-transform: uppercase; letter-spacing: .06em; font-weight: 600; margin-top: 2px; }
    .last-active { font-size: 12px; color: #7A8278; }

    /* Kebab menu */
    .card-head-right { display: flex; align-items: center; gap: 8px; }
    .menu-wrap { position: relative; }
    .kebab-btn {
      width: 28px; height: 28px; border-radius: 7px; border: none; background: none;
      color: #7A8278; cursor: pointer; display: flex; align-items: center; justify-content: center;
      font-size: 18px; font-weight: 700; line-height: 1; padding: 0; transition: all .15s;
    }
    .kebab-btn:hover { background: rgba(45,74,58,.1); color: #1B3024; }
    .dropdown {
      position: absolute; top: calc(100% + 6px); right: 0; min-width: 160px;
      background: #FFFCF5; border: 1px solid rgba(31,41,32,.1);
      border-radius: 12px; padding: 6px;
      box-shadow: 0 4px 16px rgba(31,41,32,.15), 0 1px 4px rgba(31,41,32,.08);
      z-index: 200;
    }
    .dropdown-item {
      display: flex; align-items: center; gap: 8px; padding: 9px 12px;
      border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 500; color: #1F2920;
      transition: background .1s;
    }
    .dropdown-item:hover { background: rgba(45,74,58,.06); }
    .dropdown-item.destructive { color: #9B2C2C; }
    .dropdown-item.destructive:hover { background: rgba(155,44,44,.07); }
    .menu-backdrop { position: fixed; inset: 0; z-index: 150; }

    /* Modals */
    .modal-overlay {
      position: fixed; inset: 0; background: rgba(31,41,32,.4); backdrop-filter: blur(4px);
      display: flex; align-items: center; justify-content: center; z-index: 400; padding: 24px;
    }
    .modal {
      background: #FFFCF5; border-radius: 20px; padding: 32px;
      max-width: 440px; width: 100%; box-shadow: 0 8px 32px rgba(31,41,32,.2);
    }
    .modal-title { font-family: 'Fraunces', serif; font-size: 24px; font-weight: 500; color: #1B3024; margin-bottom: 20px; }
    .modal-actions { display: flex; gap: 10px; margin-top: 20px; }
    .btn-cancel { padding: 11px 18px; background: transparent; border: 1.5px solid rgba(31,41,32,.15); border-radius: 10px; font-weight: 600; font-size: 14px; cursor: pointer; color: #4A554A; flex: 1; }
    .btn-submit { padding: 11px 22px; background: #2D4A3A; color: #F5EFE0; border: none; border-bottom: 3px solid #1B3024; border-radius: 10px; font-weight: 700; font-size: 14px; cursor: pointer; flex: 2; }
    .btn-submit:disabled { background: rgba(31,41,32,.1); color: rgba(31,41,32,.35); border-bottom-color: transparent; cursor: not-allowed; }
    .btn-destroy { padding: 11px 22px; background: #9B2C2C; color: #fff; border: none; border-bottom: 3px solid #6B1F1F; border-radius: 10px; font-weight: 700; font-size: 14px; cursor: pointer; flex: 2; }
    .btn-destroy:disabled { opacity: .5; cursor: not-allowed; }
    .delete-warning { background: rgba(155,44,44,.08); border: 1px solid rgba(155,44,44,.2); border-radius: 10px; padding: 12px 14px; font-size: 13px; color: #7E1F1F; margin-bottom: 4px; }

    /* Empty / loading */
    .empty { text-align: center; padding: 60px 24px; border: 1.5px dashed rgba(31,41,32,.15); border-radius: 16px; color: #7A8278; }
    .empty p { font-size: 15px; margin-bottom: 6px; }
    .spinner { width: 32px; height: 32px; border: 3px solid rgba(45,74,58,.15); border-top-color: #2D4A3A; border-radius: 50%; animation: spin .8s linear infinite; margin: 40px auto; }
    @keyframes spin { to { transform: rotate(360deg); } }
  `;

  private renderForm(): TemplateResult {
    return html`
      <div class="form-card">
        <div class="form-title">Add a child</div>
        ${this.error ? html`<div class="error">${this.error}</div>` : ''}
        <form @submit=${this.addChild}>
          <div class="form-grid">
            <div class="field">
              <label>Name</label>
              <input type="text" placeholder="Samuel" required .value=${this.newName}
                @input=${(e: Event) => this.newName = (e.target as HTMLInputElement).value} />
            </div>
            <div class="field">
              <label>Username</label>
              <input type="text" placeholder="samuel" required .value=${this.newUsername}
                @input=${(e: Event) => this.newUsername = (e.target as HTMLInputElement).value} />
              <div class="field-hint">Used to log in on shared devices</div>
            </div>
            <div class="field">
              <label>PIN</label>
              <input type="tel" placeholder="1234" maxlength="6" required .value=${this.newPin}
                @input=${(e: Event) => this.newPin = (e.target as HTMLInputElement).value} />
              <div class="field-hint">4–6 digits</div>
            </div>
          </div>
          <div class="form-actions">
            <button type="button" class="btn-cancel" @click=${() => { this.showForm = false; this.error = ''; }}>Cancel</button>
            <button type="submit" class="btn-submit" ?disabled=${this.submitting}>
              ${this.submitting ? 'Adding…' : 'Add child'}
            </button>
          </div>
        </form>
      </div>
    `;
  }

  private renderChild(c: Child): TemplateResult {
    const menuOpen = this.openMenuId === c.id;
    return html`
      <div class="child-card">
        <div class="child-head">
          <div class="avatar">${this.initial(c.display_name)}</div>
          <div style="flex:1">
            <div class="child-name">${c.display_name}</div>
            <div class="child-username">@${c.username}</div>
          </div>
          <div class="menu-wrap">
            <button class="kebab-btn"
              @click=${(e: Event) => { e.stopPropagation(); this.openMenuId = menuOpen ? null : c.id; }}>
              ⋮
            </button>
            ${menuOpen ? html`
              <div class="dropdown">
                <div class="dropdown-item" @click=${() => this.openEdit(c)}>
                  ✎ Edit
                </div>
                <div class="dropdown-item destructive" @click=${() => { this.deleteTarget = c; this.openMenuId = null; }}>
                  ✕ Delete
                </div>
              </div>
              <div class="menu-backdrop" @click=${() => this.openMenuId = null}></div>
            ` : ''}
          </div>
        </div>
        <div class="child-stats">
          <div class="cs"><div class="cs-num">${c.streak_days}</div><div class="cs-lbl">Streak</div></div>
          <div class="cs"><div class="cs-num">${c.mastered_count}</div><div class="cs-lbl">Mastered</div></div>
          <div class="cs"><div class="cs-num">${c.xp}</div><div class="cs-lbl">XP</div></div>
        </div>
        <div class="last-active">${this.lastActiveLabel(c.last_active_at)}</div>
      </div>
    `;
  }

  private renderEditModal(): TemplateResult {
    if (!this.editTarget) return html``;
    return html`
      <div class="modal-overlay" @click=${(e: Event) => { if (e.target === e.currentTarget) this.editTarget = null; }}>
        <div class="modal">
          <div class="modal-title">Edit ${this.editTarget.display_name}</div>
          ${this.editError ? html`<div class="error">${this.editError}</div>` : ''}
          <form @submit=${this.saveEdit}>
            <div class="form-grid">
              <div class="field">
                <label>Name</label>
                <input type="text" required .value=${this.editName}
                  @input=${(e: Event) => this.editName = (e.target as HTMLInputElement).value} />
              </div>
              <div class="field">
                <label>Username</label>
                <input type="text" required .value=${this.editUsername}
                  @input=${(e: Event) => this.editUsername = (e.target as HTMLInputElement).value} />
              </div>
              <div class="field">
                <label>New PIN</label>
                <input type="tel" placeholder="Leave blank to keep current" maxlength="6" .value=${this.editPin}
                  @input=${(e: Event) => this.editPin = (e.target as HTMLInputElement).value} />
                <div class="field-hint">4–6 digits, leave blank to keep current</div>
              </div>
            </div>
            <div class="modal-actions">
              <button type="button" class="btn-cancel" @click=${() => this.editTarget = null}>Cancel</button>
              <button type="submit" class="btn-submit" ?disabled=${this.editSubmitting}>
                ${this.editSubmitting ? 'Saving…' : 'Save changes'}
              </button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  private renderDeleteModal(): TemplateResult {
    if (!this.deleteTarget) return html``;
    return html`
      <div class="modal-overlay" @click=${(e: Event) => { if (e.target === e.currentTarget) this.deleteTarget = null; }}>
        <div class="modal">
          <div class="modal-title">Delete ${this.deleteTarget.display_name}?</div>
          <div class="delete-warning">
            This will permanently delete their account and all progress. This cannot be undone.
          </div>
          <div class="modal-actions">
            <button class="btn-cancel" @click=${() => this.deleteTarget = null}>Cancel</button>
            <button class="btn-destroy" ?disabled=${this.deleteSubmitting} @click=${this.deleteChild}>
              ${this.deleteSubmitting ? 'Deleting…' : 'Yes, delete'}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  render(): TemplateResult {
    return html`
      <div class="ph-title">Family</div>
      <p class="ph-sub">Manage your children's accounts and track their progress.</p>

      <div class="section-head">
        <div class="section-title">Your children</div>
        <button class="add-btn" @click=${() => { this.showForm = !this.showForm; this.error = ''; }}>
          + Add child
        </button>
      </div>

      ${this.showForm ? this.renderForm() : ''}

      ${this.loading ? html`<div class="spinner"></div>` :
        this.kids.length === 0 ? html`
          <div class="empty">
            <p>No children added yet.</p>
            <p>Click <strong>Add child</strong> to create their account.</p>
          </div>
        ` : html`
          <div class="children-grid">${this.kids.map(c => this.renderChild(c))}</div>
        `
      }

      ${this.renderEditModal()}
      ${this.renderDeleteModal()}
    `;
  }
}
