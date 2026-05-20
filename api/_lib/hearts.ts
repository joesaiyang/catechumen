// Heart regeneration: 1 heart every 30 minutes, max 5
const REGEN_MS  = 30 * 60 * 1000;
const MAX_HEARTS = 5;

export async function refreshHearts(
  userId: string,
  sql: any,
): Promise<{ hearts: number; hearts_refill_at: Date | null }> {
  const [user] = await sql`
    SELECT hearts, hearts_refill_at FROM users WHERE id = ${userId}
  `;
  if (!user) return { hearts: MAX_HEARTS, hearts_refill_at: null };

  let { hearts, hearts_refill_at } = user;

  if (hearts >= MAX_HEARTS || !hearts_refill_at) {
    if (hearts >= MAX_HEARTS && hearts_refill_at) {
      await sql`UPDATE users SET hearts_refill_at = NULL WHERE id = ${userId}`;
    }
    return { hearts, hearts_refill_at: null };
  }

  const now       = Date.now();
  const refillMs  = new Date(hearts_refill_at).getTime();

  if (now < refillMs) {
    return { hearts, hearts_refill_at: new Date(hearts_refill_at) };
  }

  // How many hearts have come back since hearts_refill_at?
  const toAdd    = Math.floor((now - refillMs) / REGEN_MS) + 1;
  const newHearts = Math.min(MAX_HEARTS, hearts + toAdd);

  let newRefillAt: Date | null = null;
  if (newHearts < MAX_HEARTS) {
    const added = newHearts - hearts;
    newRefillAt = new Date(refillMs + added * REGEN_MS);
  }

  await sql`
    UPDATE users SET hearts = ${newHearts}, hearts_refill_at = ${newRefillAt}
    WHERE id = ${userId}
  `;

  return { hearts: newHearts, hearts_refill_at: newRefillAt };
}
