import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { apiFetch } from '../store/auth.js';
import { BADGES } from '../data/achievements.js';

interface StoreItem {
  id: string; name: string; emoji: string; gem_cost: number; description?: string;
}
interface Redemption {
  id: string; status: string; child_name: string;
  item_name: string; emoji: string; gem_cost: number; created_at: string;
}

interface ChildPlan {
  catechism_id: string; catechism_name: string; abbreviation: string;
  question_count: number; answered: number; mastered: number;
}

interface Catechism {
  id: string; name: string; abbreviation: string; question_count: number;
}

interface Child {
  id: string; display_name: string; username: string;
  xp: number; streak_days: number; hearts: number;
  mastered_count: number; last_active_at: string | null;
  plans: ChildPlan[];
  earnedAchievements: string[];
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

  // Assign catechism modal
  @state() assignTarget: Child | null = null;

  // Award gems
  @state() awardTargetId: string | null = null;
  @state() awardAmount = 10;
  @state() awarding = false;

  // Gem store
  @state() storeItems: StoreItem[] = [];
  @state() redemptions: Redemption[] = [];
  @state() showStoreForm = false;
  @state() newItemName = '';
  @state() newItemEmoji = '🎁';
  @state() newItemCost = 50;
  @state() newItemDesc = '';
  @state() storeSubmitting = false;
  @state() catechisms: Catechism[] = [];
  @state() assigning: string | null = null; // catechism_id being assigned

  connectedCallback() {
    super.connectedCallback();
    this.loadChildren();
    this.loadCatechisms();
    this.loadStore();
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

  async awardGems(childId: string) {
    this.awarding = true;
    await apiFetch('/api/gems', {
      method: 'PATCH',
      body: JSON.stringify({ childId, amount: this.awardAmount }),
    });
    this.awarding = false;
    this.awardTargetId = null;
    this.awardAmount = 10;
    await this.loadChildren();
  }

  async loadStore() {
    const res = await apiFetch('/api/gems');
    if (res.ok) {
      const d = await res.json();
      this.storeItems   = d.items        ?? [];
      this.redemptions  = d.redemptions  ?? [];
    }
  }

  async addStoreItem(e: Event) {
    e.preventDefault();
    this.storeSubmitting = true;
    const res = await apiFetch('/api/gems', {
      method: 'POST',
      body: JSON.stringify({ name: this.newItemName, emoji: this.newItemEmoji, gemCost: this.newItemCost, description: this.newItemDesc }),
    });
    this.storeSubmitting = false;
    if (res.ok) {
      this.newItemName = ''; this.newItemEmoji = '🎁'; this.newItemCost = 50; this.newItemDesc = '';
      this.showStoreForm = false;
      await this.loadStore();
    }
  }

  async deleteStoreItem(itemId: string) {
    await apiFetch(`/api/gems?itemId=${itemId}`, { method: 'DELETE' });
    await this.loadStore();
  }

  async respondToRedemption(redemptionId: string, approved: boolean) {
    await apiFetch('/api/gems', { method: 'PATCH', body: JSON.stringify({ redemptionId, approved }) });
    await this.loadStore();
  }

  async loadCatechisms() {
    const res = await apiFetch('/api/content/catechisms');
    if (res.ok) { const d = await res.json(); this.catechisms = d.catechisms ?? []; }
  }

  async assignCatechism(catechismId: string) {
    if (!this.assignTarget) return;
    this.assigning = catechismId;
    await apiFetch('/api/study-plans', {
      method: 'POST',
      body: JSON.stringify({ planType: 'catechism', catechismId, childId: this.assignTarget.id }),
    });
    this.assigning = null;
    await this.loadChildren();
    // Refresh the assignTarget's plans from the freshly loaded kids
    this.assignTarget = this.kids.find(k => k.id === this.assignTarget!.id) ?? null;
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
    .last-active { font-size: 12px; color: #7A8278; margin-bottom: 14px; }
    .plans { display: flex; flex-direction: column; gap: 10px; border-top: 1px dashed rgba(31,41,32,.12); padding-top: 14px; }
    .plan-row { display: flex; flex-direction: column; gap: 4px; }
    .plan-top { display: flex; justify-content: space-between; align-items: baseline; }
    .plan-name { font-size: 12px; font-weight: 600; color: #1B3024; }
    .plan-pos  { font-size: 11px; color: #7A8278; }
    .plan-bar  { height: 6px; background: rgba(31,41,32,.07); border-radius: 3px; overflow: hidden; }
    .plan-fill { height: 100%; background: linear-gradient(90deg, #5A7A65, #2D4A3A); border-radius: 3px; transition: width .4s; }
    .no-plans  { font-size: 12px; color: #B0B8AE; font-style: italic; }
    .badges-row { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 12px; padding-top: 12px; border-top: 1px dashed rgba(31,41,32,.1); }
    .badge-chip {
      display: flex; align-items: center; gap: 4px;
      padding: 4px 10px; background: #F0E1B8; border: 1px solid #C89B3C;
      border-radius: 999px; font-size: 12px; font-weight: 600; color: #8A6620;
    }
    .no-badges { font-size: 12px; color: #B0B8AE; font-style: italic; margin-top: 10px; padding-top: 10px; border-top: 1px dashed rgba(31,41,32,.1); }
    .award-row { display: flex; align-items: center; gap: 8px; margin-top: 12px; padding-top: 12px; border-top: 1px dashed rgba(31,41,32,.1); }
    .award-input { width: 70px; padding: 7px 10px; box-sizing: border-box; border: 1.5px solid rgba(31,41,32,.2); border-radius: 8px; font-size: 14px; font-weight: 600; color: #1B3024; background: #F5EFE0; outline: none; text-align: center; }
    .award-input:focus { border-color: #2D4A3A; }
    .award-btn { padding: 7px 14px; background: #2D4A3A; color: #F5EFE0; border: none; border-radius: 8px; font-weight: 600; font-size: 13px; cursor: pointer; white-space: nowrap; }
    .award-btn:hover { background: #1B3024; }
    .award-btn:disabled { opacity: .5; cursor: not-allowed; }
    .award-cancel { font-size: 13px; color: #7A8278; cursor: pointer; padding: 4px; }
    .award-cancel:hover { color: #1B3024; }
    .gem-award-link { font-size: 12px; color: #2D4A3A; font-weight: 600; cursor: pointer; margin-top: 10px; padding-top: 10px; border-top: 1px dashed rgba(31,41,32,.1); display: inline-block; }
    .gem-award-link:hover { text-decoration: underline; }

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
    .catechism-list { display: flex; flex-direction: column; gap: 8px; }
    .catechism-row {
      display: flex; align-items: center; justify-content: space-between;
      padding: 12px 14px; border: 1px solid rgba(31,41,32,.1); border-radius: 10px;
    }
    .catechism-row.enrolled { background: rgba(45,74,58,.05); border-color: rgba(45,74,58,.25); }
    .cat-info { display: flex; flex-direction: column; gap: 2px; }
    .cat-name { font-size: 14px; font-weight: 600; color: #1B3024; }
    .cat-meta { font-size: 12px; color: #7A8278; }
    .cat-badge { font-size: 11px; font-weight: 700; color: #2D4A3A; background: rgba(45,74,58,.1); padding: 3px 9px; border-radius: 999px; }
    .cat-enroll { padding: 7px 14px; background: #2D4A3A; color: #F5EFE0; border: none; border-radius: 8px; font-weight: 600; font-size: 13px; cursor: pointer; white-space: nowrap; }
    .cat-enroll:hover { background: #1B3024; }
    .cat-enroll:disabled { opacity: .5; cursor: not-allowed; }

    /* Gem store */
    .store-section { margin-top: 40px; }
    .store-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
    .store-title { font-family: 'Fraunces', serif; font-size: 22px; font-weight: 500; color: #1B3024; }
    .store-item-row {
      display: flex; align-items: center; gap: 12px; padding: 12px 14px;
      border: 1px solid rgba(31,41,32,.08); border-radius: 12px; background: #FFFCF5; margin-bottom: 8px;
    }
    .store-emoji { font-size: 24px; }
    .store-item-info { flex: 1; }
    .store-item-name { font-size: 14px; font-weight: 600; color: #1B3024; }
    .store-item-desc { font-size: 12px; color: #7A8278; margin-top: 2px; }
    .gem-cost { font-size: 13px; font-weight: 700; color: #2D4A3A; white-space: nowrap; }
    .store-delete { font-size: 13px; color: #9B2C2C; cursor: pointer; padding: 4px 8px; border-radius: 6px; }
    .store-delete:hover { background: rgba(155,44,44,.08); }
    .redemption-row {
      display: flex; align-items: center; gap: 12px; padding: 12px 14px;
      border: 1px solid rgba(31,41,32,.08); border-radius: 12px; background: #FFFCF5; margin-bottom: 8px;
    }
    .redemption-info { flex: 1; }
    .redemption-name { font-size: 14px; font-weight: 600; color: #1B3024; }
    .redemption-meta { font-size: 12px; color: #7A8278; margin-top: 2px; }
    .redemption-status { font-size: 12px; font-weight: 700; padding: 3px 10px; border-radius: 999px; }
    .redemption-status.pending  { background: #F0E1B8; color: #8A6620; }
    .redemption-status.approved { background: #E1EBE5; color: #2D4A3A; }
    .redemption-status.declined { background: #E8D0CE; color: #9B2C2C; }
    .approve-btn { padding: 7px 12px; background: #2D4A3A; color: #F5EFE0; border: none; border-radius: 8px; font-weight: 600; font-size: 12px; cursor: pointer; }
    .decline-btn { padding: 7px 12px; background: transparent; border: 1.5px solid rgba(155,44,44,.3); color: #9B2C2C; border-radius: 8px; font-weight: 600; font-size: 12px; cursor: pointer; }

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
                <div class="dropdown-item" @click=${() => { this.assignTarget = c; this.openMenuId = null; }}>
                  + Assign catechism
                </div>
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
        ${c.earnedAchievements.length ? html`
          <div class="badges-row">
            ${c.earnedAchievements.map(id => {
              const def = BADGES.find(b => b.id === id);
              return def ? html`<span class="badge-chip">${def.emoji} ${def.name}</span>` : '';
            })}
          </div>
        ` : html`<div class="no-badges">No badges earned yet</div>`}

        ${this.awardTargetId === c.id ? html`
          <div class="award-row">
            <span style="font-size:13px;font-weight:600;color:#1B3024">💎 Award</span>
            <input class="award-input" type="number" min="1" max="9999"
              .value=${String(this.awardAmount)}
              @input=${(e: Event) => this.awardAmount = parseInt((e.target as HTMLInputElement).value) || 1} />
            <span style="font-size:13px;color:#4A554A">gems</span>
            <button class="award-btn" ?disabled=${this.awarding} @click=${() => this.awardGems(c.id)}>
              ${this.awarding ? '…' : 'Give'}
            </button>
            <span class="award-cancel" @click=${() => this.awardTargetId = null}>✕</span>
          </div>
        ` : html`
          <span class="gem-award-link" @click=${() => { this.awardTargetId = c.id; this.awardAmount = 10; }}>
            💎 Award gems
          </span>
        `}

        <div class="plans">
          ${c.plans.length === 0 ? html`<div class="no-plans">Not enrolled in any catechism yet</div>` :
            c.plans.map(p => {
              const pct = p.question_count > 0 ? Math.round((Number(p.answered) / p.question_count) * 100) : 0;
              const pos = Number(p.answered) + 1;
              return html`
                <div class="plan-row">
                  <div class="plan-top">
                    <span class="plan-name">${p.abbreviation} — ${p.catechism_name}</span>
                    <span class="plan-pos">Q${pos} of ${p.question_count} · ${Number(p.mastered)} mastered</span>
                  </div>
                  <div class="plan-bar"><div class="plan-fill" style="width:${pct}%"></div></div>
                </div>
              `;
            })
          }
        </div>
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

  private renderAssignModal(): TemplateResult {
    if (!this.assignTarget) return html``;
    const enrolled = new Set(this.assignTarget.plans.map(p => p.catechism_id));
    return html`
      <div class="modal-overlay" @click=${(e: Event) => { if (e.target === e.currentTarget) this.assignTarget = null; }}>
        <div class="modal" style="max-width:500px">
          <div class="modal-title">Assign catechism to ${this.assignTarget.display_name}</div>
          <div class="catechism-list">
            ${this.catechisms.map(cat => {
              const isEnrolled = enrolled.has(cat.id);
              const isAssigning = this.assigning === cat.id;
              return html`
                <div class="catechism-row ${isEnrolled ? 'enrolled' : ''}">
                  <div class="cat-info">
                    <div class="cat-name">${cat.name}</div>
                    <div class="cat-meta">${cat.question_count} questions</div>
                  </div>
                  ${isEnrolled
                    ? html`<span class="cat-badge">✓ Enrolled</span>`
                    : html`<button class="cat-enroll" ?disabled=${!!this.assigning} @click=${() => this.assignCatechism(cat.id)}>
                        ${isAssigning ? 'Adding…' : 'Enroll'}
                      </button>`
                  }
                </div>
              `;
            })}
          </div>
          <div class="modal-actions">
            <button class="btn-cancel" style="flex:unset" @click=${() => this.assignTarget = null}>Done</button>
          </div>
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

  private renderGemStore(): TemplateResult {
    const pending = this.redemptions.filter(r => r.status === 'pending');
    const past    = this.redemptions.filter(r => r.status !== 'pending');
    return html`
      <div class="store-section">
        <div class="store-head">
          <div class="store-title">💎 Gem Store</div>
          <button class="add-btn" @click=${() => this.showStoreForm = !this.showStoreForm}>+ Add reward</button>
        </div>

        ${this.showStoreForm ? html`
          <div class="form-card">
            <div class="form-title" style="font-size:16px;margin-bottom:12px">New reward item</div>
            <form @submit=${this.addStoreItem}>
              <div class="form-grid">
                <div class="field">
                  <label>Emoji</label>
                  <input type="text" maxlength="2" .value=${this.newItemEmoji}
                    @input=${(e: Event) => this.newItemEmoji = (e.target as HTMLInputElement).value} />
                </div>
                <div class="field">
                  <label>Reward name</label>
                  <input type="text" placeholder="Bookmark, treat, screen time…" required .value=${this.newItemName}
                    @input=${(e: Event) => this.newItemName = (e.target as HTMLInputElement).value} />
                </div>
                <div class="field">
                  <label>Gem cost 💎</label>
                  <input type="number" min="1" .value=${String(this.newItemCost)}
                    @input=${(e: Event) => this.newItemCost = parseInt((e.target as HTMLInputElement).value)} />
                </div>
                <div class="field">
                  <label>Description (optional)</label>
                  <input type="text" placeholder="Any details…" .value=${this.newItemDesc}
                    @input=${(e: Event) => this.newItemDesc = (e.target as HTMLInputElement).value} />
                </div>
              </div>
              <div class="form-actions">
                <button type="button" class="btn-cancel" @click=${() => this.showStoreForm = false}>Cancel</button>
                <button type="submit" class="btn-submit" ?disabled=${this.storeSubmitting}>
                  ${this.storeSubmitting ? 'Adding…' : 'Add reward'}
                </button>
              </div>
            </form>
          </div>
        ` : ''}

        ${this.storeItems.length === 0 && !this.showStoreForm ? html`
          <div style="color:#7A8278;font-size:14px;padding:12px 0">
            No rewards yet. Add something kids can redeem with their 💎 gems.
          </div>
        ` : this.storeItems.map(item => html`
          <div class="store-item-row">
            <span class="store-emoji">${item.emoji}</span>
            <div class="store-item-info">
              <div class="store-item-name">${item.name}</div>
              ${item.description ? html`<div class="store-item-desc">${item.description}</div>` : ''}
            </div>
            <span class="gem-cost">💎 ${item.gem_cost}</span>
            <span class="store-delete" @click=${() => this.deleteStoreItem(item.id)}>✕</span>
          </div>
        `)}

        ${pending.length > 0 ? html`
          <div style="font-family:'Fraunces',serif;font-size:16px;font-weight:600;color:#1B3024;margin:20px 0 10px">
            ⏳ Pending redemptions
          </div>
          ${pending.map(r => html`
            <div class="redemption-row">
              <span class="store-emoji">${r.emoji}</span>
              <div class="redemption-info">
                <div class="redemption-name">${r.child_name} wants <strong>${r.item_name}</strong></div>
                <div class="redemption-meta">💎 ${r.gem_cost} gems</div>
              </div>
              <button class="approve-btn" @click=${() => this.respondToRedemption(r.id, true)}>✓ Approve</button>
              <button class="decline-btn" @click=${() => this.respondToRedemption(r.id, false)}>✕</button>
            </div>
          `)}
        ` : ''}

        ${past.length > 0 ? html`
          <div style="font-family:'Fraunces',serif;font-size:16px;font-weight:600;color:#1B3024;margin:20px 0 10px">
            Recent
          </div>
          ${past.slice(0, 5).map(r => html`
            <div class="redemption-row">
              <span class="store-emoji">${r.emoji}</span>
              <div class="redemption-info">
                <div class="redemption-name">${r.child_name} — ${r.item_name}</div>
              </div>
              <span class="redemption-status ${r.status}">${r.status}</span>
            </div>
          `)}
        ` : ''}
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

      ${this.renderGemStore()}
      ${this.renderAssignModal()}
      ${this.renderEditModal()}
      ${this.renderDeleteModal()}
    `;
  }
}
