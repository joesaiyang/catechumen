import postgres from 'postgres';

let _sql: ReturnType<typeof postgres> | null = null;

export function getDb() {
  if (!_sql) {
    if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
    _sql = postgres(process.env.DATABASE_URL, { ssl: 'require', max: 5 });
  }
  return _sql;
}

export const sql = new Proxy({} as ReturnType<typeof postgres>, {
  get(_, prop) {
    return (getDb() as unknown as Record<string | symbol, unknown>)[prop];
  },
  apply(_, __, args) {
    return (getDb() as unknown as (...a: unknown[]) => unknown)(...args);
  },
});

export default getDb;
