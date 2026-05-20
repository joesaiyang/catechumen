// Memory Verses seed — World English Bible (WEB) translation, public domain
// Run via the main seed runner or: npx tsx db/seeds/memory-verses.ts

interface Verse {
  reference: string;
  book: string;
  testament: 'OT' | 'NT';
  chapter: number;
  verse_start: number;
  verse_end: number | null;
  text_web: string;
  theme: string;
  difficulty: 1 | 2 | 3;
  tags: string[];
}

const VERSES: Verse[] = [
  // ── SALVATION ──────────────────────────────────────────────────────────────
  {
    reference: 'John 3:16',
    book: 'John', testament: 'NT', chapter: 3, verse_start: 16, verse_end: null,
    text_web: 'For God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.',
    theme: 'salvation', difficulty: 1,
    tags: ['love', 'gospel', 'eternal life', 'faith'],
  },
  {
    reference: 'John 3:17',
    book: 'John', testament: 'NT', chapter: 3, verse_start: 17, verse_end: null,
    text_web: 'For God didn\'t send his Son into the world to judge the world, but that the world should be saved through him.',
    theme: 'salvation', difficulty: 1,
    tags: ['gospel', 'judgment'],
  },
  {
    reference: 'Romans 3:23',
    book: 'Romans', testament: 'NT', chapter: 3, verse_start: 23, verse_end: null,
    text_web: 'for all have sinned, and fall short of the glory of God;',
    theme: 'salvation', difficulty: 1,
    tags: ['sin', 'depravity'],
  },
  {
    reference: 'Romans 6:23',
    book: 'Romans', testament: 'NT', chapter: 6, verse_start: 23, verse_end: null,
    text_web: 'For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.',
    theme: 'salvation', difficulty: 1,
    tags: ['sin', 'eternal life', 'grace', 'gospel'],
  },
  {
    reference: 'Ephesians 2:8-9',
    book: 'Ephesians', testament: 'NT', chapter: 2, verse_start: 8, verse_end: 9,
    text_web: 'for by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, that no one would boast.',
    theme: 'salvation', difficulty: 2,
    tags: ['grace', 'faith', 'works'],
  },
  {
    reference: 'Acts 4:12',
    book: 'Acts', testament: 'NT', chapter: 4, verse_start: 12, verse_end: null,
    text_web: 'There is salvation in no one else, for there is no other name under heaven that is given among men, by which we must be saved!',
    theme: 'salvation', difficulty: 1,
    tags: ['Jesus', 'exclusivity', 'gospel'],
  },
  {
    reference: 'Romans 5:8',
    book: 'Romans', testament: 'NT', chapter: 5, verse_start: 8, verse_end: null,
    text_web: 'But God commends his own love toward us, in that while we were yet sinners, Christ died for us.',
    theme: 'salvation', difficulty: 1,
    tags: ['love', 'atonement', 'grace'],
  },
  {
    reference: 'Romans 10:9',
    book: 'Romans', testament: 'NT', chapter: 10, verse_start: 9, verse_end: null,
    text_web: 'that if you will confess with your mouth that Jesus is Lord, and believe in your heart that God raised him from the dead, you will be saved.',
    theme: 'salvation', difficulty: 1,
    tags: ['confession', 'resurrection', 'faith'],
  },
  {
    reference: 'Titus 3:5',
    book: 'Titus', testament: 'NT', chapter: 3, verse_start: 5, verse_end: null,
    text_web: 'not by works of righteousness which we did ourselves, but according to his mercy, he saved us through the washing of regeneration and renewing by the Holy Spirit,',
    theme: 'salvation', difficulty: 2,
    tags: ['grace', 'regeneration', 'Holy Spirit'],
  },
  {
    reference: '2 Corinthians 5:21',
    book: '2 Corinthians', testament: 'NT', chapter: 5, verse_start: 21, verse_end: null,
    text_web: 'For him who knew no sin he made to be sin on our behalf; so that in him we might become the righteousness of God.',
    theme: 'salvation', difficulty: 1,
    tags: ['atonement', 'imputation', 'righteousness'],
  },

  // ── FAITH ──────────────────────────────────────────────────────────────────
  {
    reference: 'Hebrews 11:1',
    book: 'Hebrews', testament: 'NT', chapter: 11, verse_start: 1, verse_end: null,
    text_web: 'Now faith is assurance of things hoped for, proof of things not seen.',
    theme: 'faith', difficulty: 1,
    tags: ['hope', 'definition'],
  },
  {
    reference: 'Proverbs 3:5-6',
    book: 'Proverbs', testament: 'OT', chapter: 3, verse_start: 5, verse_end: 6,
    text_web: 'Trust in Yahweh with all your heart, and don\'t lean on your own understanding. In all your ways acknowledge him, and he will make your paths straight.',
    theme: 'faith', difficulty: 1,
    tags: ['trust', 'guidance', 'wisdom'],
  },
  {
    reference: 'Hebrews 11:6',
    book: 'Hebrews', testament: 'NT', chapter: 11, verse_start: 6, verse_end: null,
    text_web: 'Without faith it is impossible to be well pleasing to him, for he who comes to God must believe that he exists, and that he is a rewarder of those who seek him.',
    theme: 'faith', difficulty: 1,
    tags: ['pleasing God', 'seeking God'],
  },
  {
    reference: 'Romans 1:17',
    book: 'Romans', testament: 'NT', chapter: 1, verse_start: 17, verse_end: null,
    text_web: 'For in it is revealed God\'s righteousness from faith to faith. As it is written, "But the righteous shall live by faith."',
    theme: 'faith', difficulty: 1,
    tags: ['righteousness', 'gospel', 'Habakkuk'],
  },
  {
    reference: 'Galatians 2:20',
    book: 'Galatians', testament: 'NT', chapter: 2, verse_start: 20, verse_end: null,
    text_web: 'I have been crucified with Christ, and it is no longer I who live, but Christ lives in me. That life which I now live in the flesh, I live by faith in the Son of God, who loved me and gave himself up for me.',
    theme: 'faith', difficulty: 2,
    tags: ['union with Christ', 'crucified', 'love'],
  },
  {
    reference: 'Mark 11:22',
    book: 'Mark', testament: 'NT', chapter: 11, verse_start: 22, verse_end: null,
    text_web: 'Jesus answered them, "Have faith in God."',
    theme: 'faith', difficulty: 1,
    tags: ['Jesus', 'teaching'],
  },

  // ── PRAYER ─────────────────────────────────────────────────────────────────
  {
    reference: 'Philippians 4:6-7',
    book: 'Philippians', testament: 'NT', chapter: 4, verse_start: 6, verse_end: 7,
    text_web: 'In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your thoughts in Christ Jesus.',
    theme: 'prayer', difficulty: 2,
    tags: ['anxiety', 'peace', 'thanksgiving'],
  },
  {
    reference: 'Matthew 6:9-13',
    book: 'Matthew', testament: 'NT', chapter: 6, verse_start: 9, verse_end: 13,
    text_web: 'Pray like this: "Our Father in heaven, may your name be kept holy. Let your Kingdom come. Let your will be done on earth as it is in heaven. Give us today our daily bread. Forgive us our debts, as we also forgive our debtors. Bring us not into temptation, but deliver us from the evil one. For yours is the Kingdom, the power, and the glory forever. Amen."',
    theme: 'prayer', difficulty: 3,
    tags: ["Lord's Prayer", 'teaching', 'kingdom'],
  },
  {
    reference: 'James 5:16',
    book: 'James', testament: 'NT', chapter: 5, verse_start: 16, verse_end: null,
    text_web: 'Confess your offenses to one another, and pray for one another, that you may be healed. The effective, fervent prayer of a righteous man accomplishes much.',
    theme: 'prayer', difficulty: 1,
    tags: ['confession', 'healing', 'intercession'],
  },
  {
    reference: '1 Thessalonians 5:17',
    book: '1 Thessalonians', testament: 'NT', chapter: 5, verse_start: 17, verse_end: null,
    text_web: 'Pray without ceasing.',
    theme: 'prayer', difficulty: 1,
    tags: ['perseverance', 'command'],
  },
  {
    reference: 'Matthew 7:7-8',
    book: 'Matthew', testament: 'NT', chapter: 7, verse_start: 7, verse_end: 8,
    text_web: 'Ask, and it will be given you. Seek, and you will find. Knock, and it will be opened for you. For everyone who asks receives. He who seeks finds. To him who knocks it will be opened.',
    theme: 'prayer', difficulty: 2,
    tags: ['promise', 'seeking', 'asking'],
  },
  {
    reference: '1 John 5:14',
    book: '1 John', testament: 'NT', chapter: 5, verse_start: 14, verse_end: null,
    text_web: 'This is the boldness which we have toward him, that if we ask anything according to his will, he listens to us.',
    theme: 'prayer', difficulty: 1,
    tags: ['confidence', 'will of God'],
  },

  // ── CREATION ───────────────────────────────────────────────────────────────
  {
    reference: 'Genesis 1:1',
    book: 'Genesis', testament: 'OT', chapter: 1, verse_start: 1, verse_end: null,
    text_web: 'In the beginning, God created the heavens and the earth.',
    theme: 'creation', difficulty: 1,
    tags: ['beginning', 'Creator'],
  },
  {
    reference: 'Psalm 19:1',
    book: 'Psalms', testament: 'OT', chapter: 19, verse_start: 1, verse_end: null,
    text_web: 'The heavens declare the glory of God. The expanse shows his handiwork.',
    theme: 'creation', difficulty: 1,
    tags: ['glory', 'general revelation', 'nature'],
  },
  {
    reference: 'Colossians 1:16',
    book: 'Colossians', testament: 'NT', chapter: 1, verse_start: 16, verse_end: null,
    text_web: 'For by him all things were created in the heavens and on the earth, visible and invisible, whether thrones or dominions or principalities or powers. All things have been created through him and for him.',
    theme: 'creation', difficulty: 2,
    tags: ['Christ', 'preeminence', 'all things'],
  },
  {
    reference: 'Hebrews 11:3',
    book: 'Hebrews', testament: 'NT', chapter: 11, verse_start: 3, verse_end: null,
    text_web: 'By faith we understand that the universe has been framed by the word of God, so that what is seen has not been made out of things which are visible.',
    theme: 'creation', difficulty: 1,
    tags: ['faith', 'ex nihilo', 'word of God'],
  },
  {
    reference: 'Psalm 104:24',
    book: 'Psalms', testament: 'OT', chapter: 104, verse_start: 24, verse_end: null,
    text_web: 'Yahweh, how many are your works! In wisdom you have made them all. The earth is full of your riches.',
    theme: 'creation', difficulty: 1,
    tags: ['wisdom', 'providence', 'praise'],
  },
  {
    reference: 'Isaiah 45:18',
    book: 'Isaiah', testament: 'OT', chapter: 45, verse_start: 18, verse_end: null,
    text_web: 'For thus says Yahweh who created the heavens, the God who formed the earth and made it, who established it and didn\'t create it a waste, who formed it to be inhabited: "I am Yahweh, and there is no other."',
    theme: 'creation', difficulty: 2,
    tags: ['Creator', 'uniqueness of God'],
  },

  // ── LOVE ───────────────────────────────────────────────────────────────────
  {
    reference: '1 Corinthians 13:4-7',
    book: '1 Corinthians', testament: 'NT', chapter: 13, verse_start: 4, verse_end: 7,
    text_web: 'Love is patient and is kind. Love doesn\'t envy. Love doesn\'t brag, is not proud, doesn\'t behave itself inappropriately, doesn\'t seek its own way, is not provoked, takes no account of evil; doesn\'t rejoice in unrighteousness, but rejoices with the truth; bears all things, believes all things, hopes all things, and endures all things.',
    theme: 'love', difficulty: 3,
    tags: ['character', 'definition', 'virtue'],
  },
  {
    reference: 'John 15:13',
    book: 'John', testament: 'NT', chapter: 15, verse_start: 13, verse_end: null,
    text_web: 'Greater love has no one than this, that someone lay down his life for his friends.',
    theme: 'love', difficulty: 1,
    tags: ['sacrifice', 'Jesus', 'friendship'],
  },
  {
    reference: 'Romans 8:38-39',
    book: 'Romans', testament: 'NT', chapter: 8, verse_start: 38, verse_end: 39,
    text_web: 'For I am persuaded that neither death, nor life, nor angels, nor principalities, nor things present, nor things to come, nor powers, nor height, nor depth, nor any other created thing will be able to separate us from God\'s love which is in Christ Jesus our Lord.',
    theme: 'love', difficulty: 2,
    tags: ['assurance', 'security', 'God\'s love'],
  },
  {
    reference: '1 John 4:8',
    book: '1 John', testament: 'NT', chapter: 4, verse_start: 8, verse_end: null,
    text_web: 'He who doesn\'t love doesn\'t know God, for God is love.',
    theme: 'love', difficulty: 1,
    tags: ['God\'s nature', 'character of God'],
  },
  {
    reference: '1 John 4:19',
    book: '1 John', testament: 'NT', chapter: 4, verse_start: 19, verse_end: null,
    text_web: 'We love him, because he first loved us.',
    theme: 'love', difficulty: 1,
    tags: ['response', 'prevenient love'],
  },
  {
    reference: 'John 13:34-35',
    book: 'John', testament: 'NT', chapter: 13, verse_start: 34, verse_end: 35,
    text_web: '"A new commandment I give to you, that you love one another. Just as I have loved you, you also love one another. By this everyone will know that you are my disciples, if you have love for one another."',
    theme: 'love', difficulty: 2,
    tags: ['commandment', 'discipleship', 'community'],
  },
  {
    reference: 'Matthew 22:37-39',
    book: 'Matthew', testament: 'NT', chapter: 22, verse_start: 37, verse_end: 39,
    text_web: 'Jesus said to him, "\'You shall love the Lord your God with all your heart, with all your soul, and with all your mind.\' This is the first and great commandment. A second likewise is this, \'You shall love your neighbor as yourself.\'"',
    theme: 'love', difficulty: 2,
    tags: ['Great Commandment', 'neighbor', 'law'],
  },

  // ── SCRIPTURE ──────────────────────────────────────────────────────────────
  {
    reference: '2 Timothy 3:16-17',
    book: '2 Timothy', testament: 'NT', chapter: 3, verse_start: 16, verse_end: 17,
    text_web: 'Every Scripture is God-breathed and profitable for teaching, for reproof, for correction, and for instruction in righteousness, that each person who belongs to God may be complete, thoroughly equipped for every good work.',
    theme: 'scripture', difficulty: 2,
    tags: ['inspiration', 'authority', 'sufficiency'],
  },
  {
    reference: 'Psalm 119:105',
    book: 'Psalms', testament: 'OT', chapter: 119, verse_start: 105, verse_end: null,
    text_web: 'Your word is a lamp to my feet, and a light for my path.',
    theme: 'scripture', difficulty: 1,
    tags: ['guidance', 'light', 'word of God'],
  },
  {
    reference: 'Psalm 119:11',
    book: 'Psalms', testament: 'OT', chapter: 119, verse_start: 11, verse_end: null,
    text_web: 'I have hidden your word in my heart, that I might not sin against you.',
    theme: 'scripture', difficulty: 1,
    tags: ['memorization', 'sin', 'heart'],
  },
  {
    reference: 'Hebrews 4:12',
    book: 'Hebrews', testament: 'NT', chapter: 4, verse_start: 12, verse_end: null,
    text_web: 'For the word of God is living and active, and sharper than any two-edged sword, piercing even to the dividing of soul and spirit, of both joints and marrow, and is able to discern the thoughts and intentions of the heart.',
    theme: 'scripture', difficulty: 2,
    tags: ['power', 'discernment', 'living word'],
  },
  {
    reference: 'Romans 15:4',
    book: 'Romans', testament: 'NT', chapter: 15, verse_start: 4, verse_end: null,
    text_web: 'For whatever things were written before were written for our learning, that through perseverance and through encouragement of the Scriptures we might have hope.',
    theme: 'scripture', difficulty: 1,
    tags: ['hope', 'Old Testament', 'encouragement'],
  },
  {
    reference: 'Joshua 1:8',
    book: 'Joshua', testament: 'OT', chapter: 1, verse_start: 8, verse_end: null,
    text_web: 'This book of the law shall not depart from your mouth, but you shall meditate on it day and night, that you may observe to do according to all that is written in it; for then you shall make your way prosperous, and then you shall have good success.',
    theme: 'scripture', difficulty: 2,
    tags: ['meditation', 'obedience', 'prosperity'],
  },

  // ── GOSPEL ─────────────────────────────────────────────────────────────────
  {
    reference: 'Romans 1:16',
    book: 'Romans', testament: 'NT', chapter: 1, verse_start: 16, verse_end: null,
    text_web: 'For I am not ashamed of the Good News of Christ, for it is the power of God for salvation for everyone who believes, for the Jew first, and also for the Greek.',
    theme: 'gospel', difficulty: 1,
    tags: ['power', 'salvation', 'unashamed'],
  },
  {
    reference: '1 Corinthians 15:3-4',
    book: '1 Corinthians', testament: 'NT', chapter: 15, verse_start: 3, verse_end: 4,
    text_web: 'For I delivered to you first of all that which I also received: that Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day according to the Scriptures,',
    theme: 'gospel', difficulty: 2,
    tags: ['death', 'resurrection', 'kerygma'],
  },
  {
    reference: 'Mark 1:15',
    book: 'Mark', testament: 'NT', chapter: 1, verse_start: 15, verse_end: null,
    text_web: '"The time is fulfilled, and God\'s Kingdom is at hand! Repent, and believe in the Good News."',
    theme: 'gospel', difficulty: 1,
    tags: ['repentance', 'kingdom', 'Jesus teaching'],
  },
  {
    reference: 'Isaiah 53:5',
    book: 'Isaiah', testament: 'OT', chapter: 53, verse_start: 5, verse_end: null,
    text_web: 'But he was pierced for our transgressions. He was crushed for our iniquities. The punishment that brought our peace was on him; and by his wounds we are healed.',
    theme: 'gospel', difficulty: 2,
    tags: ['atonement', 'substitution', 'prophecy'],
  },
  {
    reference: 'John 14:6',
    book: 'John', testament: 'NT', chapter: 14, verse_start: 6, verse_end: null,
    text_web: 'Jesus said to him, "I am the way, the truth, and the life. No one comes to the Father, except through me."',
    theme: 'gospel', difficulty: 1,
    tags: ['exclusivity', 'Jesus', 'I AM'],
  },
  {
    reference: '2 Corinthians 5:19',
    book: '2 Corinthians', testament: 'NT', chapter: 5, verse_start: 19, verse_end: null,
    text_web: 'namely, that God was in Christ reconciling the world to himself, not reckoning to them their trespasses, and having committed to us the word of reconciliation.',
    theme: 'gospel', difficulty: 2,
    tags: ['reconciliation', 'forgiveness', 'ministry'],
  },

  // ── WISDOM ─────────────────────────────────────────────────────────────────
  {
    reference: 'Proverbs 1:7',
    book: 'Proverbs', testament: 'OT', chapter: 1, verse_start: 7, verse_end: null,
    text_web: 'The fear of Yahweh is the beginning of wisdom. The foolish despise wisdom and instruction.',
    theme: 'wisdom', difficulty: 1,
    tags: ['fear of God', 'instruction', 'fool'],
  },
  {
    reference: 'James 1:5',
    book: 'James', testament: 'NT', chapter: 1, verse_start: 5, verse_end: null,
    text_web: 'But if any of you lacks wisdom, let him ask of God, who gives to all liberally and without reproach, and it will be given to him.',
    theme: 'wisdom', difficulty: 1,
    tags: ['prayer', 'generosity', 'asking'],
  },
  {
    reference: 'Proverbs 4:7',
    book: 'Proverbs', testament: 'OT', chapter: 4, verse_start: 7, verse_end: null,
    text_web: 'Wisdom is supreme. Get wisdom. Yes, though it costs all your possessions, get understanding.',
    theme: 'wisdom', difficulty: 1,
    tags: ['value', 'priority', 'understanding'],
  },
  {
    reference: 'Colossians 2:3',
    book: 'Colossians', testament: 'NT', chapter: 2, verse_start: 3, verse_end: null,
    text_web: 'in whom all the treasures of wisdom and knowledge are hidden.',
    theme: 'wisdom', difficulty: 1,
    tags: ['Christ', 'knowledge', 'treasure'],
  },
  {
    reference: 'Proverbs 9:10',
    book: 'Proverbs', testament: 'OT', chapter: 9, verse_start: 10, verse_end: null,
    text_web: 'The fear of Yahweh is the beginning of wisdom. The knowledge of the Holy One is understanding.',
    theme: 'wisdom', difficulty: 1,
    tags: ['fear of God', 'holy', 'knowledge'],
  },
  {
    reference: 'Ecclesiastes 12:13',
    book: 'Ecclesiastes', testament: 'OT', chapter: 12, verse_start: 13, verse_end: null,
    text_web: 'This is the end of the matter. All has been heard. Fear God and keep his commandments; for this is the whole duty of man.',
    theme: 'wisdom', difficulty: 1,
    tags: ['fear of God', 'obedience', 'duty'],
  },

  // ── COMFORT ────────────────────────────────────────────────────────────────
  {
    reference: 'Psalm 23:1-6',
    book: 'Psalms', testament: 'OT', chapter: 23, verse_start: 1, verse_end: 6,
    text_web: 'Yahweh is my shepherd; I shall lack nothing. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul. He guides me in the paths of righteousness for his name\'s sake. Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me. Your rod and your staff, they comfort me. You prepare a table before me in the presence of my enemies. You anoint my head with oil. My cup runs over. Surely goodness and loving kindness shall follow me all the days of my life, and I will dwell in Yahweh\'s house forever.',
    theme: 'comfort', difficulty: 3,
    tags: ['shepherd', 'peace', 'presence', 'David', 'trust'],
  },
  {
    reference: 'Romans 8:28',
    book: 'Romans', testament: 'NT', chapter: 8, verse_start: 28, verse_end: null,
    text_web: 'We know that all things work together for good for those who love God, for those who are called according to his purpose.',
    theme: 'comfort', difficulty: 1,
    tags: ['providence', 'purpose', 'assurance'],
  },
  {
    reference: 'Isaiah 40:31',
    book: 'Isaiah', testament: 'OT', chapter: 40, verse_start: 31, verse_end: null,
    text_web: 'but those who wait for Yahweh will renew their strength. They will mount up with wings like eagles. They will run, and not be weary. They will walk, and not faint.',
    theme: 'comfort', difficulty: 1,
    tags: ['strength', 'waiting', 'hope', 'eagles'],
  },
  {
    reference: 'Jeremiah 29:11',
    book: 'Jeremiah', testament: 'OT', chapter: 29, verse_start: 11, verse_end: null,
    text_web: 'For I know the plans that I have for you, says Yahweh, plans for your welfare and not for calamity, to give you a future and a hope.',
    theme: 'comfort', difficulty: 1,
    tags: ['plans', 'future', 'hope', 'exile'],
  },
  {
    reference: 'Matthew 11:28-30',
    book: 'Matthew', testament: 'NT', chapter: 11, verse_start: 28, verse_end: 30,
    text_web: '"Come to me, all you who labor and are heavily burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart; and you will find rest for your souls. For my yoke is easy, and my burden is light."',
    theme: 'comfort', difficulty: 2,
    tags: ['rest', 'yoke', 'burdens', 'Jesus'],
  },
  {
    reference: 'Psalm 46:1',
    book: 'Psalms', testament: 'OT', chapter: 46, verse_start: 1, verse_end: null,
    text_web: 'God is our refuge and strength, a very present help in trouble.',
    theme: 'comfort', difficulty: 1,
    tags: ['refuge', 'strength', 'help', 'trouble'],
  },
  {
    reference: '2 Corinthians 1:3-4',
    book: '2 Corinthians', testament: 'NT', chapter: 1, verse_start: 3, verse_end: 4,
    text_web: 'Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our affliction, that we may be able to comfort those who are in any affliction, through the comfort with which we ourselves are comforted by God.',
    theme: 'comfort', difficulty: 2,
    tags: ['affliction', 'mercies', 'ministry', 'blessing'],
  },
  {
    reference: 'John 14:27',
    book: 'John', testament: 'NT', chapter: 14, verse_start: 27, verse_end: null,
    text_web: 'Peace I leave with you. My peace I give to you. I don\'t give to you as the world gives. Don\'t let your heart be troubled, neither let it be fearful.',
    theme: 'comfort', difficulty: 1,
    tags: ['peace', 'troubled', 'Jesus', 'fear'],
  },

  // ── HOLINESS ───────────────────────────────────────────────────────────────
  {
    reference: '1 Peter 1:15-16',
    book: '1 Peter', testament: 'NT', chapter: 1, verse_start: 15, verse_end: 16,
    text_web: 'but just as he who called you is holy, you yourselves also be holy in all of your behavior, because it is written, "You shall be holy; for I am holy."',
    theme: 'holiness', difficulty: 1,
    tags: ['command', 'calling', 'Leviticus'],
  },
  {
    reference: 'Romans 12:1-2',
    book: 'Romans', testament: 'NT', chapter: 12, verse_start: 1, verse_end: 2,
    text_web: 'Therefore I urge you, brothers, by the mercies of God, to present your bodies a living sacrifice, holy, acceptable to God, which is your spiritual service. Don\'t be conformed to this age, but be transformed by the renewing of your mind, so that you may prove what is the good, well-pleasing, and perfect will of God.',
    theme: 'holiness', difficulty: 2,
    tags: ['sacrifice', 'transformation', 'mind', 'will of God'],
  },
  {
    reference: 'Hebrews 12:14',
    book: 'Hebrews', testament: 'NT', chapter: 12, verse_start: 14, verse_end: null,
    text_web: 'Follow after peace with all men, and the sanctification without which no man will see the Lord.',
    theme: 'holiness', difficulty: 1,
    tags: ['sanctification', 'peace', 'pursuit'],
  },
  {
    reference: 'Leviticus 20:26',
    book: 'Leviticus', testament: 'OT', chapter: 20, verse_start: 26, verse_end: null,
    text_web: 'You shall be holy to me, for I, Yahweh, am holy, and have set you apart from the peoples, that you should be mine.',
    theme: 'holiness', difficulty: 1,
    tags: ['set apart', 'chosen', 'Yahweh'],
  },
  {
    reference: '2 Corinthians 7:1',
    book: '2 Corinthians', testament: 'NT', chapter: 7, verse_start: 1, verse_end: null,
    text_web: 'Having therefore these promises, beloved, let\'s cleanse ourselves from all defilement of flesh and spirit, perfecting holiness in the fear of God.',
    theme: 'holiness', difficulty: 1,
    tags: ['cleansing', 'fear of God', 'perfecting'],
  },
  {
    reference: 'Galatians 5:22-23',
    book: 'Galatians', testament: 'NT', chapter: 5, verse_start: 22, verse_end: 23,
    text_web: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faith, gentleness, and self-control. Against such things there is no law.',
    theme: 'holiness', difficulty: 2,
    tags: ['fruit of the Spirit', 'character', 'virtue'],
  },

  // ── ADDITIONAL HIGH-VALUE VERSES (MIXED THEMES) ───────────────────────────
  {
    reference: 'Psalm 1:1-2',
    book: 'Psalms', testament: 'OT', chapter: 1, verse_start: 1, verse_end: 2,
    text_web: 'Blessed is the man who doesn\'t walk in the counsel of the wicked, nor stand on the path of sinners, nor sit in the seat of scoffers; but his delight is in Yahweh\'s law. On his law he meditates day and night.',
    theme: 'scripture', difficulty: 2,
    tags: ['meditation', 'blessed', 'righteousness'],
  },
  {
    reference: 'John 1:1',
    book: 'John', testament: 'NT', chapter: 1, verse_start: 1, verse_end: null,
    text_web: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
    theme: 'gospel', difficulty: 1,
    tags: ['logos', 'Christ', 'deity', 'creation'],
  },
  {
    reference: 'John 1:14',
    book: 'John', testament: 'NT', chapter: 1, verse_start: 14, verse_end: null,
    text_web: 'The Word became flesh and lived among us. We saw his glory, such glory as of the one and only Son of the Father, full of grace and truth.',
    theme: 'gospel', difficulty: 1,
    tags: ['incarnation', 'glory', 'grace', 'truth'],
  },
  {
    reference: 'Micah 6:8',
    book: 'Micah', testament: 'OT', chapter: 6, verse_start: 8, verse_end: null,
    text_web: 'He has shown you, O man, what is good. What does Yahweh require of you, but to act justly, to love mercy, and to walk humbly with your God?',
    theme: 'holiness', difficulty: 1,
    tags: ['justice', 'mercy', 'humility', 'ethics'],
  },
  {
    reference: 'Isaiah 53:6',
    book: 'Isaiah', testament: 'OT', chapter: 53, verse_start: 6, verse_end: null,
    text_web: 'All we like sheep have gone astray. Everyone has turned to his own way; and Yahweh has laid on him the iniquity of us all.',
    theme: 'salvation', difficulty: 1,
    tags: ['substitution', 'sin', 'atonement', 'sheep'],
  },
  {
    reference: 'Revelation 21:4',
    book: 'Revelation', testament: 'NT', chapter: 21, verse_start: 4, verse_end: null,
    text_web: 'He will wipe away every tear from their eyes. Death will be no more; neither will there be mourning, nor crying, nor pain, any more. The first things have passed away.',
    theme: 'comfort', difficulty: 1,
    tags: ['heaven', 'new creation', 'hope', 'eschatology'],
  },
  {
    reference: 'Psalm 139:13-14',
    book: 'Psalms', testament: 'OT', chapter: 139, verse_start: 13, verse_end: 14,
    text_web: 'For you formed my inmost being. You knit me together in my mother\'s womb. I will give thanks to you, for I am fearfully and wonderfully made. Your works are wonderful. My soul knows that very well.',
    theme: 'creation', difficulty: 2,
    tags: ['image of God', 'worth', 'praise', 'David'],
  },
  {
    reference: 'Philippians 4:13',
    book: 'Philippians', testament: 'NT', chapter: 4, verse_start: 13, verse_end: null,
    text_web: 'I can do all things through Christ who strengthens me.',
    theme: 'faith', difficulty: 1,
    tags: ['strength', 'Christ', 'contentment'],
  },
  {
    reference: 'Romans 8:1',
    book: 'Romans', testament: 'NT', chapter: 8, verse_start: 1, verse_end: null,
    text_web: 'There is therefore now no condemnation to those who are in Christ Jesus, who don\'t walk according to the flesh, but according to the Spirit.',
    theme: 'salvation', difficulty: 1,
    tags: ['condemnation', 'union with Christ', 'Spirit'],
  },
  {
    reference: 'Deuteronomy 6:4-5',
    book: 'Deuteronomy', testament: 'OT', chapter: 6, verse_start: 4, verse_end: 5,
    text_web: 'Hear, Israel: Yahweh is our God. Yahweh is one. You shall love Yahweh your God with all your heart, with all your soul, and with all your might.',
    theme: 'love', difficulty: 1,
    tags: ['Shema', 'monotheism', 'Great Commandment'],
  },
  {
    reference: 'Isaiah 40:8',
    book: 'Isaiah', testament: 'OT', chapter: 40, verse_start: 8, verse_end: null,
    text_web: 'The grass withers, the flower fades; but the word of our God stands forever.',
    theme: 'scripture', difficulty: 1,
    tags: ['eternal', 'word of God', 'contrast'],
  },
  {
    reference: '1 Peter 2:24',
    book: '1 Peter', testament: 'NT', chapter: 2, verse_start: 24, verse_end: null,
    text_web: 'who his own self bore our sins in his body on the tree, that we, having died to sins, might live to righteousness. By his wounds you were healed.',
    theme: 'salvation', difficulty: 1,
    tags: ['atonement', 'substitution', 'healing', 'Isaiah 53'],
  },
  {
    reference: 'Lamentations 3:22-23',
    book: 'Lamentations', testament: 'OT', chapter: 3, verse_start: 22, verse_end: 23,
    text_web: 'It is because of Yahweh\'s loving kindnesses that we are not consumed, because his compassion doesn\'t fail. They are new every morning. Great is your faithfulness.',
    theme: 'comfort', difficulty: 2,
    tags: ['faithfulness', 'mercy', 'morning', 'steadfast love'],
  },
  {
    reference: 'Ephesians 6:10-11',
    book: 'Ephesians', testament: 'NT', chapter: 6, verse_start: 10, verse_end: 11,
    text_web: 'Finally, be strong in the Lord, and in the strength of his might. Put on the whole armor of God, that you may be able to stand against the wiles of the devil.',
    theme: 'holiness', difficulty: 2,
    tags: ['spiritual warfare', 'armor', 'strength'],
  },
  {
    reference: 'Numbers 6:24-26',
    book: 'Numbers', testament: 'OT', chapter: 6, verse_start: 24, verse_end: 26,
    text_web: '"Yahweh bless you, and keep you. Yahweh make his face to shine on you, and be gracious to you. Yahweh lift up his face toward you, and give you peace."',
    theme: 'comfort', difficulty: 2,
    tags: ['blessing', 'Aaronic blessing', 'peace', 'grace'],
  },
  {
    reference: 'Acts 1:8',
    book: 'Acts', testament: 'NT', chapter: 1, verse_start: 8, verse_end: null,
    text_web: 'But you will receive power when the Holy Spirit has come upon you. You will be witnesses to me in Jerusalem, in all Judea and Samaria, and to the uttermost parts of the earth.',
    theme: 'gospel', difficulty: 1,
    tags: ['Holy Spirit', 'mission', 'Great Commission', 'power'],
  },
];

export default async function seedVerses(sql: any): Promise<void> {
  console.log(`Seeding ${VERSES.length} memory verses (WEB translation)…`);

  for (const v of VERSES) {
    await sql`
      INSERT INTO memory_verses
        (reference, book, testament, chapter, verse_start, verse_end,
         text_web, theme, difficulty, tags)
      VALUES
        (${v.reference}, ${v.book}, ${v.testament}, ${v.chapter},
         ${v.verse_start}, ${v.verse_end ?? null}, ${v.text_web},
         ${v.theme}, ${v.difficulty}, ${v.tags})
      ON CONFLICT (reference) DO NOTHING
    `;
  }

  console.log(`Done! ${VERSES.length} memory verses seeded.`);
}
