// Master seed runner — npm run db:seed
import postgres from 'postgres';
import seedWsc        from './seeds/wsc.js';
import seedWlc        from './seeds/wlc.js';
import seedHeidel     from './seeds/heidelberg.js';
import seedBaptist    from './seeds/baptist1695.js';
import seedVerses     from './seeds/memory-verses.js';
import seedBibleQuiz  from './seeds/bible-quiz.js';

const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });

async function main() {
  console.log('🌱 Seeding Catechumen database...\n');

  console.log('📖 Westminster Shorter Catechism (107 questions)...');
  await seedWsc(sql);

  console.log('📖 Westminster Larger Catechism (196 questions)...');
  await seedWlc(sql);

  console.log('📖 Heidelberg Catechism (129 questions)...');
  await seedHeidel(sql);

  console.log('📖 Baptist Catechism 1695 (107 questions)...');
  await seedBaptist(sql);

  console.log('✝️  Memory verses (WEB translation)...');
  await seedVerses(sql);

  console.log('🎯 Bible quiz questions...');
  await seedBibleQuiz(sql);

  // Update question_count on each catechism
  await sql`
    UPDATE catechisms c SET question_count = (
      SELECT COUNT(*) FROM catechism_questions WHERE catechism_id = c.id
    )
  `;

  console.log('\n✅ Seed complete!');
  await sql.end();
}

main().catch(err => { console.error(err); process.exit(1); });
