// GET  /api/gems           — list store items + pending redemptions for current user
// POST /api/gems           — create item (parent) or redeem item (child)
// PATCH /api/gems          — approve/decline redemption (parent) or update item (parent)
// DELETE /api/gems?itemId= — delete item (parent)
import type { VercelRequest, VercelResponse } from '@vercel/node';
import getDb from '../_lib/db.js';
import { requireAuth } from '../_lib/auth.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const payload = requireAuth(req, res as never);
  if (!payload) return;
  const sql = getDb();

  if (req.method === 'GET') {
    const items = await sql`
      SELECT * FROM gem_store_items
      WHERE family_id = ${payload.familyId} AND is_active = true
      ORDER BY gem_cost ASC
    `;

    if (payload.role === 'parent') {
      const redemptions = await sql`
        SELECT gr.id, gr.status, gr.created_at,
               u.display_name AS child_name,
               gsi.name AS item_name, gsi.emoji, gsi.gem_cost
        FROM gem_redemptions gr
        JOIN users u ON u.id = gr.user_id
        JOIN gem_store_items gsi ON gsi.id = gr.item_id
        WHERE gsi.family_id = ${payload.familyId}
        ORDER BY gr.created_at DESC
        LIMIT 50
      `;
      return res.status(200).json({ items, redemptions });
    }

    const [{ gems }] = await sql`SELECT gems FROM users WHERE id = ${payload.userId}`;
    const myRedemptions = await sql`
      SELECT gr.id, gr.status, gr.created_at, gsi.name AS item_name, gsi.emoji, gsi.gem_cost
      FROM gem_redemptions gr
      JOIN gem_store_items gsi ON gsi.id = gr.item_id
      WHERE gr.user_id = ${payload.userId}
      ORDER BY gr.created_at DESC
      LIMIT 20
    `;
    return res.status(200).json({ items, myRedemptions, gems });
  }

  if (req.method === 'POST') {
    const body = req.body as Record<string, unknown>;

    // Parent creates a store item
    if (payload.role === 'parent') {
      const { name, emoji, gemCost, description } = body as {
        name: string; emoji: string; gemCost: number; description?: string;
      };
      if (!name || !gemCost) return res.status(400).json({ error: 'Missing name or gemCost' });
      const [item] = await sql`
        INSERT INTO gem_store_items (family_id, name, emoji, gem_cost, description)
        VALUES (${payload.familyId}, ${name}, ${emoji ?? '🎁'}, ${gemCost}, ${description ?? null})
        RETURNING *
      `;
      return res.status(201).json({ item });
    }

    // Child redeems an item
    const { itemId } = body as { itemId: string };
    if (!itemId) return res.status(400).json({ error: 'Missing itemId' });

    const [item] = await sql`
      SELECT * FROM gem_store_items WHERE id = ${itemId} AND family_id = ${payload.familyId} AND is_active = true
    `;
    if (!item) return res.status(404).json({ error: 'Item not found' });

    const [user] = await sql`SELECT gems FROM users WHERE id = ${payload.userId}`;
    if (user.gems < item.gem_cost) return res.status(400).json({ error: 'Not enough gems' });

    await sql`UPDATE users SET gems = gems - ${item.gem_cost} WHERE id = ${payload.userId}`;
    const [redemption] = await sql`
      INSERT INTO gem_redemptions (user_id, item_id) VALUES (${payload.userId}, ${itemId}) RETURNING *
    `;
    const [{ gems }] = await sql`SELECT gems FROM users WHERE id = ${payload.userId}`;
    return res.status(201).json({ redemption, gems });
  }

  if (req.method === 'PATCH') {
    if (payload.role !== 'parent') return res.status(403).json({ error: 'Parents only' });
    const body = req.body as Record<string, unknown>;

    // Award gems directly to a child
    if (body.childId) {
      const { childId, amount } = body as { childId: string; amount: number };
      if (!amount || amount < 1) return res.status(400).json({ error: 'amount must be at least 1' });
      const [child] = await sql`
        SELECT id FROM users WHERE id = ${childId} AND family_id = ${payload.familyId} AND role = 'child'
      `;
      if (!child) return res.status(404).json({ error: 'Child not found' });
      const [{ gems }] = await sql`UPDATE users SET gems = gems + ${amount} WHERE id = ${childId} RETURNING gems`;
      return res.status(200).json({ gems });
    }

    // Approve / decline a redemption
    const { redemptionId, approved } = body as { redemptionId: string; approved: boolean };
    if (!redemptionId || approved === undefined) return res.status(400).json({ error: 'Missing fields' });
    await sql`
      UPDATE gem_redemptions SET status = ${approved ? 'approved' : 'declined'}
      WHERE id = ${redemptionId}
        AND item_id IN (SELECT id FROM gem_store_items WHERE family_id = ${payload.familyId})
    `;
    return res.status(200).json({ ok: true });
  }

  if (req.method === 'DELETE') {
    if (payload.role !== 'parent') return res.status(403).json({ error: 'Parents only' });
    const itemId = req.query.itemId as string;
    if (!itemId) return res.status(400).json({ error: 'Missing itemId' });
    await sql`
      UPDATE gem_store_items SET is_active = false
      WHERE id = ${itemId} AND family_id = ${payload.familyId}
    `;
    return res.status(200).json({ ok: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
