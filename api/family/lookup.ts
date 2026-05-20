// GET /api/family/lookup?email=... — find a family by parent email (for child login)
import type { VercelRequest, VercelResponse } from '@vercel/node';
import getDb from '../_lib/db.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const email = req.query.email as string;
  if (!email) return res.status(400).json({ error: 'Missing email' });

  const sql = getDb();
  const [row] = await sql`
    SELECT f.id, f.name
    FROM families f
    JOIN users u ON u.family_id = f.id
    WHERE u.email = ${email.toLowerCase()} AND u.role = 'parent'
  `;

  if (!row) return res.status(404).json({ error: 'No family found for that email' });
  return res.status(200).json({ familyId: row.id, familyName: row.name });
}
