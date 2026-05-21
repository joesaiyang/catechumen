export interface User {
  id: string;
  family_id: string;
  role: 'parent' | 'child';
  display_name: string;
  email?: string;
  username?: string;
  xp: number;
  streak_days: number;
  gems: number;
  hearts: number;
  hearts_refill_at?: string | null;
  league_tier: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  earnedAchievements: string[];
}

const STORAGE_KEY = 'catechumen_auth';

function load(): AuthState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as AuthState;
  } catch { /* ignore */ }
  return { token: null, user: null, earnedAchievements: [] };
}

let _state = load();
const _listeners = new Set<() => void>();

export const auth = {
  get token()              { return _state.token; },
  get user()               { return _state.user; },
  get isLoggedIn()         { return !!_state.token && !!_state.user; },
  get earnedAchievements() { return _state.earnedAchievements; },

  login(token: string, user: User, earnedAchievements: string[] = []) {
    _state = { token, user, earnedAchievements };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(_state));
    _listeners.forEach(fn => fn());
  },

  addAchievements(ids: string[]) {
    if (!ids.length) return;
    _state = { ..._state, earnedAchievements: [...new Set([..._state.earnedAchievements, ...ids])] };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(_state));
    _listeners.forEach(fn => fn());
  },

  logout() {
    _state = { token: null, user: null, earnedAchievements: [] };
    localStorage.removeItem(STORAGE_KEY);
    _listeners.forEach(fn => fn());
  },

  subscribe(fn: () => void): () => void {
    _listeners.add(fn);
    return () => _listeners.delete(fn);
  },

  patch(updates: Partial<User>) {
    if (!_state.user) return;
    _state = { ..._state, user: { ..._state.user, ...updates } };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(_state));
    _listeners.forEach(fn => fn());
  },
};

export async function apiFetch(path: string, options: RequestInit = {}): Promise<Response> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> ?? {}),
  };
  if (auth.token) headers['Authorization'] = `Bearer ${auth.token}`;
  const res = await fetch(path, { ...options, headers });
  if (res.status === 401) auth.logout();
  return res;
}
