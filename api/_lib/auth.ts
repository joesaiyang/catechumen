import jwt from 'jsonwebtoken';
import type { IncomingMessage, ServerResponse } from 'http';

const JWT_SECRET = process.env.JWT_SECRET ?? 'dev-secret-change-me';

export interface TokenPayload {
  userId: string;
  role: 'parent' | 'child';
  familyId: string;
}

export function signToken(payload: TokenPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '30d' });
}

export function verifyToken(token: string): TokenPayload {
  return jwt.verify(token, JWT_SECRET) as TokenPayload;
}

export function getToken(req: IncomingMessage): string | null {
  const auth = req.headers.authorization;
  if (auth?.startsWith('Bearer ')) return auth.slice(7);
  return null;
}

export function requireAuth(req: IncomingMessage, res: ServerResponse): TokenPayload | null {
  const token = getToken(req);
  if (!token) {
    res.statusCode = 401;
    res.end(JSON.stringify({ error: 'Unauthorized' }));
    return null;
  }
  try {
    return verifyToken(token);
  } catch {
    res.statusCode = 401;
    res.end(JSON.stringify({ error: 'Invalid token' }));
    return null;
  }
}

export function json(res: ServerResponse, status: number, body: unknown) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(body));
}

export async function parseBody<T>(req: IncomingMessage): Promise<T> {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => { data += chunk; });
    req.on('end', () => {
      try { resolve(JSON.parse(data)); }
      catch { reject(new Error('Invalid JSON')); }
    });
    req.on('error', reject);
  });
}
