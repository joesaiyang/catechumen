// GET /api/content/catechisms — list all active catechisms
import type { VercelRequest, VercelResponse } from '@vercel/node';
import getDb from '../_lib/db.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const sql = getDb();
  const catechisms = await sql`SELECT * FROM catechisms WHERE is_active = true ORDER BY year ASC`;
  return res.status(200).json({ catechisms });
}
