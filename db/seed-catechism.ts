// Run: npm run db:seed
import postgres from 'postgres';

const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });

const UNITS: Record<number, { unit: number; name: string }> = {
  // Unit I: God as Creator (Q1–12)
  ...Object.fromEntries([1,2,3,4,5,6,7,8,9,10,11,12].map(n => [n, { unit: 1, name: 'God as Creator' }])),
  // Unit II: The Fall of Man (Q13–20)
  ...Object.fromEntries([13,14,15,16,17,18,19,20].map(n => [n, { unit: 2, name: 'The Fall of Man' }])),
  // Unit III: Christ the Redeemer (Q21–28)
  ...Object.fromEntries([21,22,23,24,25,26,27,28].map(n => [n, { unit: 3, name: 'Christ the Redeemer' }])),
  // Unit IV: Salvation Applied (Q29–38)
  ...Object.fromEntries([29,30,31,32,33,34,35,36,37,38].map(n => [n, { unit: 4, name: 'Salvation Applied' }])),
  // Unit V: The Moral Law (Q39–62)
  ...Object.fromEntries([39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62].map(n => [n, { unit: 5, name: 'The Moral Law' }])),
  // Unit VI: Our Duty to Others (Q63–81)
  ...Object.fromEntries([63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81].map(n => [n, { unit: 6, name: 'Our Duty to Others' }])),
  // Unit VII: Sin and Grace (Q82–87)
  ...Object.fromEntries([82,83,84,85,86,87].map(n => [n, { unit: 7, name: 'Sin and Grace' }])),
  // Unit VIII: The Means of Grace (Q88–97)
  ...Object.fromEntries([88,89,90,91,92,93,94,95,96,97].map(n => [n, { unit: 8, name: 'The Means of Grace' }])),
  // Unit IX: Prayer (Q98–107)
  ...Object.fromEntries([98,99,100,101,102,103,104,105,106,107].map(n => [n, { unit: 9, name: 'Prayer' }])),
};

interface Question {
  number: number;
  question: string;
  answer: string;
  proof_texts: { reference: string; text: string }[];
}

const QUESTIONS: Question[] = [
  {
    number: 1,
    question: "What is the chief end of man?",
    answer: "Man's chief end is to glorify God, and to enjoy him for ever.",
    proof_texts: [
      { reference: "1 Corinthians 10:31", text: "Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God." },
      { reference: "Psalm 73:25–26", text: "Whom have I in heaven but thee? and there is none upon earth that I desire beside thee." },
    ],
  },
  {
    number: 2,
    question: "What rule hath God given to direct us how we may glorify and enjoy him?",
    answer: "The Word of God, which is contained in the scriptures of the Old and New Testaments, is the only rule to direct us how we may glorify and enjoy him.",
    proof_texts: [
      { reference: "2 Timothy 3:16–17", text: "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness." },
      { reference: "Isaiah 8:20", text: "To the law and to the testimony: if they speak not according to this word, it is because there is no light in them." },
    ],
  },
  {
    number: 3,
    question: "What do the scriptures principally teach?",
    answer: "The scriptures principally teach what man is to believe concerning God, and what duty God requires of man.",
    proof_texts: [
      { reference: "2 Timothy 1:13", text: "Hold fast the form of sound words, which thou hast heard of me, in faith and love which is in Christ Jesus." },
      { reference: "Ecclesiastes 12:13", text: "Fear God, and keep his commandments: for this is the whole duty of man." },
    ],
  },
  {
    number: 4,
    question: "What is God?",
    answer: "God is a Spirit, infinite, eternal, and unchangeable, in his being, wisdom, power, holiness, justice, goodness, and truth.",
    proof_texts: [
      { reference: "John 4:24", text: "God is a Spirit: and they that worship him must worship him in spirit and in truth." },
      { reference: "Psalm 90:2", text: "Before the mountains were brought forth, or ever thou hadst formed the earth and the world, even from everlasting to everlasting, thou art God." },
    ],
  },
  {
    number: 5,
    question: "Are there more Gods than one?",
    answer: "There is but one only, the living and true God.",
    proof_texts: [
      { reference: "Deuteronomy 6:4", text: "Hear, O Israel: The LORD our God is one LORD." },
      { reference: "Jeremiah 10:10", text: "But the LORD is the true God, he is the living God, and an everlasting king." },
    ],
  },
  {
    number: 6,
    question: "How many persons are there in the Godhead?",
    answer: "There are three persons in the Godhead: the Father, the Son, and the Holy Ghost; and these three are one God, the same in substance, equal in power and glory.",
    proof_texts: [
      { reference: "Matthew 28:19", text: "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost." },
      { reference: "2 Corinthians 13:14", text: "The grace of the Lord Jesus Christ, and the love of God, and the communion of the Holy Ghost, be with you all." },
    ],
  },
  {
    number: 7,
    question: "What are the decrees of God?",
    answer: "The decrees of God are his eternal purpose, according to the counsel of his will, whereby, for his own glory, he hath foreordained whatsoever comes to pass.",
    proof_texts: [
      { reference: "Ephesians 1:11", text: "In whom also we have obtained an inheritance, being predestinated according to the purpose of him who worketh all things after the counsel of his own will." },
      { reference: "Romans 11:36", text: "For of him, and through him, and to him, are all things: to whom be glory for ever. Amen." },
    ],
  },
  {
    number: 8,
    question: "How doth God execute his decrees?",
    answer: "God executeth his decrees in the works of creation and providence.",
    proof_texts: [
      { reference: "Revelation 4:11", text: "Thou art worthy, O Lord, to receive glory and honour and power: for thou hast created all things, and for thy pleasure they are and were created." },
    ],
  },
  {
    number: 9,
    question: "What is the work of creation?",
    answer: "The work of creation is God's making all things of nothing, by the word of his power, in the space of six days, and all very good.",
    proof_texts: [
      { reference: "Genesis 1:1", text: "In the beginning God created the heaven and the earth." },
      { reference: "Hebrews 11:3", text: "Through faith we understand that the worlds were framed by the word of God, so that things which are seen were not made of things which do appear." },
    ],
  },
  {
    number: 10,
    question: "How did God create man?",
    answer: "God created man male and female, after his own image, in knowledge, righteousness, and holiness, with dominion over the creatures.",
    proof_texts: [
      { reference: "Genesis 1:27", text: "So God created man in his own image, in the image of God created he him; male and female created he them." },
      { reference: "Colossians 3:10", text: "And have put on the new man, which is renewed in knowledge after the image of him that created him." },
    ],
  },
  {
    number: 11,
    question: "What are God's works of providence?",
    answer: "God's works of providence are his most holy, wise, and powerful preserving and governing all his creatures, and all their actions.",
    proof_texts: [
      { reference: "Psalm 145:17", text: "The LORD is righteous in all his ways, and holy in all his works." },
      { reference: "Hebrews 1:3", text: "Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power." },
    ],
  },
  {
    number: 12,
    question: "What special act of providence did God exercise toward man in the estate wherein he was created?",
    answer: "When God had created man, he entered into a covenant of life with him, upon condition of perfect obedience; forbidding him to eat of the tree of the knowledge of good and evil, upon the pain of death.",
    proof_texts: [
      { reference: "Genesis 2:16–17", text: "And the LORD God commanded the man, saying, Of every tree of the garden thou mayest freely eat: But of the tree of the knowledge of good and evil, thou shalt not eat of it: for in the day that thou eatest thereof thou shalt surely die." },
    ],
  },
  {
    number: 13,
    question: "Did our first parents continue in the estate wherein they were created?",
    answer: "Our first parents, being left to the freedom of their own will, fell from the estate wherein they were created, by sinning against God.",
    proof_texts: [
      { reference: "Genesis 3:6–8", text: "And when the woman saw that the tree was good for food... she took of the fruit thereof, and did eat, and gave also unto her husband with her; and he did eat." },
      { reference: "Ecclesiastes 7:29", text: "Lo, this only have I found, that God hath made man upright; but they have sought out many inventions." },
    ],
  },
  {
    number: 14,
    question: "What is sin?",
    answer: "Sin is any want of conformity unto, or transgression of, the law of God.",
    proof_texts: [
      { reference: "1 John 3:4", text: "Whosoever committeth sin transgresseth also the law: for sin is the transgression of the law." },
      { reference: "Romans 3:23", text: "For all have sinned, and come short of the glory of God." },
    ],
  },
  {
    number: 15,
    question: "What was the sin whereby our first parents fell from the estate wherein they were created?",
    answer: "The sin of our first parents was the eating of the forbidden fruit.",
    proof_texts: [
      { reference: "Genesis 3:6", text: "And when the woman saw that the tree was good for food, and that it was pleasant to the eyes, and a tree to be desired to make one wise, she took of the fruit thereof, and did eat." },
    ],
  },
  {
    number: 16,
    question: "Did all mankind fall in Adam's first transgression?",
    answer: "The covenant being made with Adam, not only for himself, but for his posterity; all mankind, descending from him by ordinary generation, sinned in him, and fell with him, in his first transgression.",
    proof_texts: [
      { reference: "Romans 5:12", text: "Wherefore, as by one man sin entered into the world, and death by sin; and so death passed upon all men, for that all have sinned." },
      { reference: "1 Corinthians 15:22", text: "For as in Adam all die, even so in Christ shall all be made alive." },
    ],
  },
  {
    number: 17,
    question: "Into what estate did the fall bring mankind?",
    answer: "The fall brought mankind into an estate of sin and misery.",
    proof_texts: [
      { reference: "Romans 3:16", text: "Destruction and misery are in their ways." },
      { reference: "Galatians 3:10", text: "For as many as are of the works of the law are under the curse." },
    ],
  },
  {
    number: 18,
    question: "Wherein consists the sinfulness of that estate whereinto man fell?",
    answer: "The sinfulness of that estate whereinto man fell, consists in the guilt of Adam's first sin, the want of original righteousness, and the corruption of his whole nature, which is commonly called original sin; together with all actual transgressions which proceed from it.",
    proof_texts: [
      { reference: "Romans 5:19", text: "For as by one man's disobedience many were made sinners, so by the obedience of one shall many be made righteous." },
      { reference: "Psalm 51:5", text: "Behold, I was shapen in iniquity; and in sin did my mother conceive me." },
    ],
  },
  {
    number: 19,
    question: "What is the misery of that estate whereinto man fell?",
    answer: "All mankind by their fall lost communion with God, are under his wrath and curse, and so made liable to all miseries in this life, to death itself, and to the pains of hell for ever.",
    proof_texts: [
      { reference: "Genesis 3:17", text: "Cursed is the ground for thy sake; in sorrow shalt thou eat of it all the days of thy life." },
      { reference: "Matthew 25:41", text: "Then shall he say also unto them on the left hand, Depart from me, ye cursed, into everlasting fire, prepared for the devil and his angels." },
    ],
  },
  {
    number: 20,
    question: "Did God leave all mankind to perish in the estate of sin and misery?",
    answer: "God having, out of his mere good pleasure, from all eternity, elected some to everlasting life, did enter into a covenant of grace, to deliver them out of the estate of sin and misery, and to bring them into an estate of salvation by a Redeemer.",
    proof_texts: [
      { reference: "Ephesians 1:4", text: "According as he hath chosen us in him before the foundation of the world, that we should be holy and without blame before him in love." },
      { reference: "Romans 3:20–22", text: "Therefore by the deeds of the law there shall no flesh be justified in his sight... But now the righteousness of God without the law is manifested." },
    ],
  },
  {
    number: 21,
    question: "Who is the Redeemer of God's elect?",
    answer: "The only Redeemer of God's elect is the Lord Jesus Christ, who, being the eternal Son of God, became man, and so was, and continueth to be, God and man in two distinct natures, and one person, for ever.",
    proof_texts: [
      { reference: "1 Timothy 2:5", text: "For there is one God, and one mediator between God and men, the man Christ Jesus." },
      { reference: "John 1:14", text: "And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth." },
    ],
  },
  {
    number: 22,
    question: "How did Christ, being the Son of God, become man?",
    answer: "Christ, the Son of God, became man, by taking to himself a true body and a reasonable soul, being conceived by the power of the Holy Ghost in the womb of the Virgin Mary, and born of her, yet without sin.",
    proof_texts: [
      { reference: "Luke 1:31, 35", text: "And, behold, thou shalt conceive in thy womb, and bring forth a son, and shalt call his name JESUS. And the angel answered and said unto her, The Holy Ghost shall come upon thee, and the power of the Highest shall overshadow thee." },
      { reference: "Hebrews 4:15", text: "For we have not an high priest which cannot be touched with the feeling of our infirmities; but was in all points tempted like as we are, yet without sin." },
    ],
  },
  {
    number: 23,
    question: "What offices doth Christ execute as our Redeemer?",
    answer: "Christ, as our Redeemer, executeth the offices of a prophet, of a priest, and of a king, both in his estate of humiliation and exaltation.",
    proof_texts: [
      { reference: "Acts 3:22", text: "For Moses truly said unto the fathers, A prophet shall the Lord your God raise up unto you of your brethren, like unto me." },
      { reference: "Hebrews 5:5–6", text: "So also Christ glorified not himself to be made an high priest." },
    ],
  },
  {
    number: 24,
    question: "How doth Christ execute the office of a prophet?",
    answer: "Christ executeth the office of a prophet, in revealing to us, by his Word and Spirit, the will of God for our salvation.",
    proof_texts: [
      { reference: "John 1:18", text: "No man hath seen God at any time; the only begotten Son, which is in the bosom of the Father, he hath declared him." },
      { reference: "John 20:31", text: "But these are written, that ye might believe that Jesus is the Christ, the Son of God; and that believing ye might have life through his name." },
    ],
  },
  {
    number: 25,
    question: "How doth Christ execute the office of a priest?",
    answer: "Christ executeth the office of a priest, in his once offering up of himself a sacrifice to satisfy divine justice, and reconcile us to God; and in making continual intercession for us.",
    proof_texts: [
      { reference: "Hebrews 9:14", text: "How much more shall the blood of Christ, who through the eternal Spirit offered himself without spot to God, purge your conscience from dead works to serve the living God?" },
      { reference: "Romans 8:34", text: "Who is he that condemneth? It is Christ that died, yea rather, that is risen again, who is even at the right hand of God, who also maketh intercession for us." },
    ],
  },
  {
    number: 26,
    question: "How doth Christ execute the office of a king?",
    answer: "Christ executeth the office of a king, in subduing us to himself, in ruling and defending us, and in restraining and conquering all his and our enemies.",
    proof_texts: [
      { reference: "Psalm 110:1–3", text: "The LORD said unto my Lord, Sit thou at my right hand, until I make thine enemies thy footstool." },
      { reference: "Philippians 2:10–11", text: "That at the name of Jesus every knee should bow... and that every tongue should confess that Jesus Christ is Lord." },
    ],
  },
  {
    number: 27,
    question: "Wherein did Christ's humiliation consist?",
    answer: "Christ's humiliation consisted in his being born, and that in a low condition, made under the law, undergoing the miseries of this life, the wrath of God, and the cursed death of the cross; in being buried, and continuing under the power of death for a time.",
    proof_texts: [
      { reference: "Philippians 2:7–8", text: "But made himself of no reputation, and took upon him the form of a servant, and was made in the likeness of men... he humbled himself, and became obedient unto death, even the death of the cross." },
      { reference: "Galatians 4:4", text: "But when the fulness of the time was come, God sent forth his Son, made of a woman, made under the law." },
    ],
  },
  {
    number: 28,
    question: "Wherein consisteth Christ's exaltation?",
    answer: "Christ's exaltation consisteth in his rising again from the dead on the third day, in ascending up into heaven, in sitting at the right hand of God the Father, and in coming to judge the world at the last day.",
    proof_texts: [
      { reference: "1 Corinthians 15:4", text: "And that he was buried, and that he rose again the third day according to the scriptures." },
      { reference: "Acts 1:11", text: "This same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven." },
    ],
  },
  {
    number: 29,
    question: "How are we made partakers of the redemption purchased by Christ?",
    answer: "We are made partakers of the redemption purchased by Christ, by the effectual application of it to us by his Holy Spirit.",
    proof_texts: [
      { reference: "John 1:12–13", text: "But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name." },
      { reference: "Titus 3:5", text: "Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost." },
    ],
  },
  {
    number: 30,
    question: "How doth the Spirit apply to us the redemption purchased by Christ?",
    answer: "The Spirit applieth to us the redemption purchased by Christ, by working faith in us, and thereby uniting us to Christ in our effectual calling.",
    proof_texts: [
      { reference: "Ephesians 2:8", text: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God." },
      { reference: "1 Corinthians 1:9", text: "God is faithful, by whom ye were called unto the fellowship of his Son Jesus Christ our Lord." },
    ],
  },
  {
    number: 31,
    question: "What is effectual calling?",
    answer: "Effectual calling is the work of God's Spirit, whereby, convincing us of our sin and misery, enlightening our minds in the knowledge of Christ, and renewing our wills, he doth persuade and enable us to embrace Jesus Christ, freely offered to us in the gospel.",
    proof_texts: [
      { reference: "2 Timothy 1:9", text: "Who hath saved us, and called us with an holy calling, not according to our works, but according to his own purpose and grace." },
      { reference: "Acts 26:18", text: "To open their eyes, and to turn them from darkness to light, and from the power of Satan unto God, that they may receive forgiveness of sins." },
    ],
  },
  {
    number: 32,
    question: "What benefits do they that are effectually called partake of in this life?",
    answer: "They that are effectually called do in this life partake of justification, adoption, and sanctification, and the several other benefits which, in this life, do either accompany or flow from them.",
    proof_texts: [
      { reference: "Romans 8:30", text: "Moreover whom he did predestinate, them he also called: and whom he called, them he also justified: and whom he justified, them he also glorified." },
      { reference: "1 Corinthians 1:30", text: "But of him are ye in Christ Jesus, who of God is made unto us wisdom, and righteousness, and sanctification, and redemption." },
    ],
  },
  {
    number: 33,
    question: "What is justification?",
    answer: "Justification is an act of God's free grace, wherein he pardoneth all our sins, and accepteth us as righteous in his sight, only for the righteousness of Christ imputed to us, and received by faith alone.",
    proof_texts: [
      { reference: "Romans 3:24", text: "Being justified freely by his grace through the redemption that is in Christ Jesus." },
      { reference: "Romans 4:6–8", text: "Even as David also describeth the blessedness of the man, unto whom God imputeth righteousness without works." },
    ],
  },
  {
    number: 34,
    question: "What is adoption?",
    answer: "Adoption is an act of God's free grace, whereby we are received into the number, and have a right to all the privileges of the sons of God.",
    proof_texts: [
      { reference: "John 1:12", text: "But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name." },
      { reference: "1 John 3:1", text: "Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God." },
    ],
  },
  {
    number: 35,
    question: "What is sanctification?",
    answer: "Sanctification is the work of God's free grace, whereby we are renewed in the whole man after the image of God, and are enabled more and more to die unto sin, and live unto righteousness.",
    proof_texts: [
      { reference: "2 Thessalonians 2:13", text: "But we are bound to give thanks alway to God for you, brethren beloved of the Lord, because God hath from the beginning chosen you to salvation through sanctification of the Spirit and belief of the truth." },
      { reference: "Romans 6:11", text: "Likewise reckon ye also yourselves to be dead indeed unto sin, but alive unto God through Jesus Christ our Lord." },
    ],
  },
  {
    number: 36,
    question: "What are the benefits which in this life do accompany or flow from justification, adoption, and sanctification?",
    answer: "The benefits which in this life do accompany or flow from justification, adoption, and sanctification, are, assurance of God's love, peace of conscience, joy in the Holy Ghost, increase of grace, and perseverance therein to the end.",
    proof_texts: [
      { reference: "Romans 5:1–2", text: "Therefore being justified by faith, we have peace with God through our Lord Jesus Christ." },
      { reference: "Romans 14:17", text: "For the kingdom of God is not meat and drink; but righteousness, and peace, and joy in the Holy Ghost." },
    ],
  },
  {
    number: 37,
    question: "What benefits do believers receive from Christ at death?",
    answer: "The souls of believers are at their death made perfectly holy, and do immediately pass into glory; and their bodies, being still united to Christ, do rest in their graves till the resurrection.",
    proof_texts: [
      { reference: "Philippians 1:23", text: "For I am in a strait betwixt two, having a desire to depart, and to be with Christ; which is far better." },
      { reference: "Luke 23:43", text: "And Jesus said unto him, Verily I say unto thee, To day shalt thou be with me in paradise." },
    ],
  },
  {
    number: 38,
    question: "What benefits do believers receive from Christ at the resurrection?",
    answer: "At the resurrection, believers being raised up in glory, shall be openly acknowledged and acquitted in the day of judgment, and made perfectly blessed in the full enjoying of God to all eternity.",
    proof_texts: [
      { reference: "1 Corinthians 15:43", text: "It is sown in dishonour; it is raised in glory: it is sown in weakness; it is raised in power." },
      { reference: "Matthew 25:34", text: "Then shall the King say unto them on his right hand, Come, ye blessed of my Father, inherit the kingdom prepared for you from the foundation of the world." },
    ],
  },
  {
    number: 39,
    question: "What is the duty which God requireth of man?",
    answer: "The duty which God requireth of man, is obedience to his revealed will.",
    proof_texts: [
      { reference: "Micah 6:8", text: "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?" },
      { reference: "Deuteronomy 29:29", text: "The secret things belong unto the LORD our God: but those things which are revealed belong unto us and to our children for ever, that we may do all the words of this law." },
    ],
  },
  {
    number: 40,
    question: "What did God at first reveal to man for the rule of his obedience?",
    answer: "The rule which God at first revealed to man for his obedience, was the moral law.",
    proof_texts: [
      { reference: "Romans 2:14–15", text: "For when the Gentiles, which have not the law, do by nature the things contained in the law, these, having not the law, are a law unto themselves." },
    ],
  },
  {
    number: 41,
    question: "Where is the moral law summarily comprehended?",
    answer: "The moral law is summarily comprehended in the Ten Commandments.",
    proof_texts: [
      { reference: "Deuteronomy 10:4", text: "And he wrote on the tables, according to the first writing, the ten commandments, which the LORD spake unto you in the mount out of the midst of the fire in the day of the assembly." },
      { reference: "Matthew 19:17", text: "But if thou wilt enter into life, keep the commandments." },
    ],
  },
  {
    number: 42,
    question: "What is the sum of the Ten Commandments?",
    answer: "The sum of the Ten Commandments is, To love the Lord our God with all our heart, with all our soul, with all our strength, and with all our mind; and our neighbour as ourselves.",
    proof_texts: [
      { reference: "Matthew 22:37–40", text: "Jesus said unto him, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind. This is the first and great commandment. And the second is like unto it, Thou shalt love thy neighbour as thyself." },
    ],
  },
  {
    number: 43,
    question: "What is the preface to the Ten Commandments?",
    answer: "The preface to the Ten Commandments is in these words, I am the Lord thy God, which have brought thee out of the land of Egypt, out of the house of bondage.",
    proof_texts: [
      { reference: "Exodus 20:2", text: "I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of bondage." },
    ],
  },
  {
    number: 44,
    question: "What doth the preface to the Ten Commandments teach us?",
    answer: "The preface to the Ten Commandments teacheth us, that because God is the Lord, and our God and Redeemer, therefore we are bound to keep all his commandments.",
    proof_texts: [
      { reference: "Luke 1:74–75", text: "That he would grant unto us, that we being delivered out of the hand of our enemies might serve him without fear, in holiness and righteousness before him, all the days of our life." },
    ],
  },
  {
    number: 45,
    question: "Which is the first commandment?",
    answer: "The first commandment is, Thou shalt have no other gods before me.",
    proof_texts: [
      { reference: "Exodus 20:3", text: "Thou shalt have no other gods before me." },
    ],
  },
  {
    number: 46,
    question: "What is required in the first commandment?",
    answer: "The first commandment requireth us to know and acknowledge God to be the only true God, and our God; and to worship and glorify him accordingly.",
    proof_texts: [
      { reference: "1 Chronicles 28:9", text: "And thou, Solomon my son, know thou the God of thy father, and serve him with a perfect heart and with a willing mind." },
      { reference: "Matthew 4:10", text: "Then saith Jesus unto him, Get thee hence, Satan: for it is written, Thou shalt worship the Lord thy God, and him only shalt thou serve." },
    ],
  },
  {
    number: 47,
    question: "What is forbidden in the first commandment?",
    answer: "The first commandment forbiddeth the denying, or not worshiping and glorifying, the true God as God, and our God; and the giving of that worship and glory to any other, which is due to him alone.",
    proof_texts: [
      { reference: "Psalm 14:1", text: "The fool hath said in his heart, There is no God." },
      { reference: "Romans 1:21", text: "Because that, when they knew God, they glorified him not as God, neither were thankful; but became vain in their imaginations, and their foolish heart was darkened." },
    ],
  },
  {
    number: 48,
    question: "What are we specially taught by these words, \"before me,\" in the first commandment?",
    answer: "These words, before me, in the first commandment teach us, that God, who seeth all things, taketh notice of, and is much displeased with, the sin of having any other God.",
    proof_texts: [
      { reference: "Psalm 44:20–21", text: "If we have forgotten the name of our God, or stretched out our hands to a strange god; shall not God search this out? for he knoweth the secrets of the heart." },
    ],
  },
  {
    number: 49,
    question: "Which is the second commandment?",
    answer: "The second commandment is, Thou shalt not make unto thee any graven image, or any likeness of any thing that is in heaven above, or that is in the earth beneath, or that is in the water under the earth: thou shalt not bow down thyself to them, nor serve them.",
    proof_texts: [
      { reference: "Exodus 20:4–6", text: "Thou shalt not make unto thee any graven image, or any likeness of any thing that is in heaven above, or that is in the earth beneath, or that is in the water under the earth." },
    ],
  },
  {
    number: 50,
    question: "What is required in the second commandment?",
    answer: "The second commandment requireth the receiving, observing, and keeping pure and entire, all such religious worship and ordinances as God hath appointed in his word.",
    proof_texts: [
      { reference: "Deuteronomy 32:46", text: "Set your hearts unto all the words which I testify among you this day, which ye shall command your children to observe to do, all the words of this law." },
      { reference: "Matthew 28:20", text: "Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you always, even unto the end of the world." },
    ],
  },
  {
    number: 51,
    question: "What is forbidden in the second commandment?",
    answer: "The second commandment forbiddeth the worshiping of God by images, or any other way not appointed in his word.",
    proof_texts: [
      { reference: "Deuteronomy 4:15–19", text: "Take ye therefore good heed unto yourselves; for ye saw no manner of similitude on the day that the LORD spake unto you in Horeb out of the midst of the fire." },
    ],
  },
  {
    number: 52,
    question: "What are the reasons annexed to the second commandment?",
    answer: "The reasons annexed to the second commandment are, God's sovereignty over us, his propriety in us, and the zeal he hath to his own worship.",
    proof_texts: [
      { reference: "Exodus 20:5–6", text: "For I the LORD thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me; and shewing mercy unto thousands of them that love me, and keep my commandments." },
    ],
  },
  {
    number: 53,
    question: "Which is the third commandment?",
    answer: "The third commandment is, Thou shalt not take the name of the Lord thy God in vain: for the Lord will not hold him guiltless that taketh his name in vain.",
    proof_texts: [
      { reference: "Exodus 20:7", text: "Thou shalt not take the name of the LORD thy God in vain: for the LORD will not hold him guiltless that taketh his name in vain." },
    ],
  },
  {
    number: 54,
    question: "What is required in the third commandment?",
    answer: "The third commandment requireth the holy and reverend use of God's names, titles, attributes, ordinances, Word, and works.",
    proof_texts: [
      { reference: "Matthew 6:9", text: "After this manner therefore pray ye: Our Father which art in heaven, Hallowed be thy name." },
      { reference: "Psalm 29:2", text: "Give unto the LORD the glory due unto his name; worship the LORD in the beauty of holiness." },
    ],
  },
  {
    number: 55,
    question: "What is forbidden in the third commandment?",
    answer: "The third commandment forbiddeth all profaning or abusing of any thing whereby God maketh himself known.",
    proof_texts: [
      { reference: "Malachi 1:6–7", text: "A son honoureth his father, and a servant his master: if then I be a father, where is mine honour? and if I be a master, where is my fear? saith the LORD of hosts unto you, O priests, that despise my name." },
    ],
  },
  {
    number: 56,
    question: "What is the reason annexed to the third commandment?",
    answer: "The reason annexed to the third commandment is, that however the breakers of this commandment may escape punishment from men, yet the Lord our God will not suffer them to escape his righteous judgment.",
    proof_texts: [
      { reference: "Deuteronomy 28:58–59", text: "If thou wilt not observe to do all the words of this law that are written in this book, that thou mayest fear this glorious and fearful name, THE LORD THY GOD; then the LORD will make thy plagues wonderful." },
    ],
  },
  {
    number: 57,
    question: "Which is the fourth commandment?",
    answer: "The fourth commandment is, Remember the sabbath day, to keep it holy. Six days shalt thou labour, and do all thy work; but the seventh day is the sabbath of the Lord thy God.",
    proof_texts: [
      { reference: "Exodus 20:8–11", text: "Remember the sabbath day, to keep it holy. Six days shalt thou labour, and do all thy work." },
    ],
  },
  {
    number: 58,
    question: "What is required in the fourth commandment?",
    answer: "The fourth commandment requireth the keeping holy to God such set times as he hath appointed in his word; expressly one whole day in seven, to be a holy sabbath to himself.",
    proof_texts: [
      { reference: "Leviticus 19:30", text: "Ye shall keep my sabbaths, and reverence my sanctuary: I am the LORD." },
    ],
  },
  {
    number: 59,
    question: "Which day of the seven hath God appointed to be the weekly sabbath?",
    answer: "From the beginning of the world to the resurrection of Christ, God appointed the seventh day of the week to be the weekly sabbath; and the first day of the week ever since, to continue to the end of the world, which is the Christian sabbath.",
    proof_texts: [
      { reference: "Revelation 1:10", text: "I was in the Spirit on the Lord's day, and heard behind me a great voice, as of a trumpet." },
      { reference: "Acts 20:7", text: "And upon the first day of the week, when the disciples came together to break bread, Paul preached unto them." },
    ],
  },
  {
    number: 60,
    question: "How is the sabbath to be sanctified?",
    answer: "The sabbath is to be sanctified by a holy resting all that day, even from such worldly employments and recreations as are lawful on other days; and spending the whole time in the public and private exercises of God's worship, except so much as is to be taken up in the works of necessity and mercy.",
    proof_texts: [
      { reference: "Isaiah 58:13–14", text: "If thou turn away thy foot from the sabbath, from doing thy pleasure on my holy day; and call the sabbath a delight, the holy of the LORD." },
    ],
  },
  {
    number: 61,
    question: "What is forbidden in the fourth commandment?",
    answer: "The fourth commandment forbiddeth the omission, or careless performance, of the duties required, and the profaning the day by idleness, or doing that which is in itself sinful, or by unnecessary thoughts, words, or works, about our worldly employments or recreations.",
    proof_texts: [
      { reference: "Ezekiel 22:26", text: "Her priests have violated my law, and have profaned mine holy things: they have put no difference between the holy and profane, neither have they shewed difference between the unclean and the clean, and have hid their eyes from my sabbaths, and I am profaned among them." },
    ],
  },
  {
    number: 62,
    question: "What are the reasons annexed to the fourth commandment?",
    answer: "The reasons annexed to the fourth commandment are, God's allowing us six days of the week for our own employments, his challenging a special propriety in the seventh, his own example, and his blessing the sabbath day.",
    proof_texts: [
      { reference: "Exodus 20:9–11", text: "Six days shalt thou labour, and do all thy work: but the seventh day is the sabbath of the LORD thy God... for in six days the LORD made heaven and earth, the sea, and all that in them is, and rested the seventh day." },
    ],
  },
  {
    number: 63,
    question: "Which is the fifth commandment?",
    answer: "The fifth commandment is, Honour thy father and thy mother: that thy days may be long upon the land which the Lord thy God giveth thee.",
    proof_texts: [
      { reference: "Exodus 20:12", text: "Honour thy father and thy mother: that thy days may be long upon the land which the LORD thy God giveth thee." },
    ],
  },
  {
    number: 64,
    question: "What is required in the fifth commandment?",
    answer: "The fifth commandment requireth the preserving the honor, and performing the duties, belonging to everyone in their several places and relations, as superiors, inferiors, or equals.",
    proof_texts: [
      { reference: "Romans 13:1", text: "Let every soul be subject unto the higher powers. For there is no power but of God: the powers that be are ordained of God." },
      { reference: "Ephesians 5:21", text: "Submitting yourselves one to another in the fear of God." },
    ],
  },
  {
    number: 65,
    question: "What is forbidden in the fifth commandment?",
    answer: "The fifth commandment forbiddeth the neglecting of, or doing anything against, the honor and duty which belongeth to everyone in their several places and relations.",
    proof_texts: [
      { reference: "Matthew 15:4–6", text: "For God commanded, saying, Honour thy father and mother: and, He that curseth father or mother, let him die the death." },
    ],
  },
  {
    number: 66,
    question: "What is the reason annexed to the fifth commandment?",
    answer: "The reason annexed to the fifth commandment is, a promise of long life and prosperity (as far as it shall serve for God's glory and their own good) to all such as keep this commandment.",
    proof_texts: [
      { reference: "Ephesians 6:2–3", text: "Honour thy father and mother; (which is the first commandment with promise;) that it may be well with thee, and thou mayest live long on the earth." },
    ],
  },
  {
    number: 67,
    question: "Which is the sixth commandment?",
    answer: "The sixth commandment is, Thou shalt not kill.",
    proof_texts: [
      { reference: "Exodus 20:13", text: "Thou shalt not kill." },
    ],
  },
  {
    number: 68,
    question: "What is required in the sixth commandment?",
    answer: "The sixth commandment requireth all lawful endeavors to preserve our own life, and the life of others.",
    proof_texts: [
      { reference: "Ephesians 5:29", text: "For no man ever yet hated his own flesh; but nourisheth and cherisheth it, even as the Lord the church." },
      { reference: "Psalm 82:3–4", text: "Defend the poor and fatherless: do justice to the afflicted and needy. Deliver the poor and needy: rid them out of the hand of the wicked." },
    ],
  },
  {
    number: 69,
    question: "What is forbidden in the sixth commandment?",
    answer: "The sixth commandment forbiddeth the taking away of our own life, or the life of our neighbor unjustly, or whatsoever tendeth thereunto.",
    proof_texts: [
      { reference: "Acts 16:28", text: "But Paul cried with a loud voice, saying, Do thyself no harm: for we are all here." },
      { reference: "Genesis 9:6", text: "Whoso sheddeth man's blood, by man shall his blood be shed: for in the image of God made he man." },
    ],
  },
  {
    number: 70,
    question: "Which is the seventh commandment?",
    answer: "The seventh commandment is, Thou shalt not commit adultery.",
    proof_texts: [
      { reference: "Exodus 20:14", text: "Thou shalt not commit adultery." },
    ],
  },
  {
    number: 71,
    question: "What is required in the seventh commandment?",
    answer: "The seventh commandment requireth the preservation of our own and our neighbor's chastity, in heart, speech, and behavior.",
    proof_texts: [
      { reference: "1 Thessalonians 4:4", text: "That every one of you should know how to possess his vessel in sanctification and honour." },
      { reference: "1 Corinthians 7:2", text: "Nevertheless, to avoid fornication, let every man have his own wife, and let every woman have her own husband." },
    ],
  },
  {
    number: 72,
    question: "What is forbidden in the seventh commandment?",
    answer: "The seventh commandment forbiddeth all unchaste thoughts, words, and actions.",
    proof_texts: [
      { reference: "Matthew 5:28", text: "But I say unto you, That whosoever looketh on a woman to lust after her hath committed adultery with her already in his heart." },
      { reference: "Ephesians 5:3", text: "But fornication, and all uncleanness, or covetousness, let it not be once named among you, as becometh saints." },
    ],
  },
  {
    number: 73,
    question: "Which is the eighth commandment?",
    answer: "The eighth commandment is, Thou shalt not steal.",
    proof_texts: [
      { reference: "Exodus 20:15", text: "Thou shalt not steal." },
    ],
  },
  {
    number: 74,
    question: "What is required in the eighth commandment?",
    answer: "The eighth commandment requireth the lawful procuring and furthering the wealth and outward estate of ourselves and others.",
    proof_texts: [
      { reference: "Ephesians 4:28", text: "Let him that stole steal no more: but rather let him labour, working with his hands the thing which is good, that he may have to give to him that needeth." },
      { reference: "Proverbs 27:23", text: "Be thou diligent to know the state of thy flocks, and look well to thy herds." },
    ],
  },
  {
    number: 75,
    question: "What is forbidden in the eighth commandment?",
    answer: "The eighth commandment forbiddeth whatsoever doth or may unjustly hinder our own or our neighbor's wealth or outward estate.",
    proof_texts: [
      { reference: "Proverbs 21:17", text: "He that loveth pleasure shall be a poor man: he that loveth wine and oil shall not be rich." },
      { reference: "Luke 16:10–12", text: "He that is faithful in that which is least is faithful also in much: and he that is unjust in the least is unjust also in much." },
    ],
  },
  {
    number: 76,
    question: "Which is the ninth commandment?",
    answer: "The ninth commandment is, Thou shalt not bear false witness against thy neighbor.",
    proof_texts: [
      { reference: "Exodus 20:16", text: "Thou shalt not bear false witness against thy neighbour." },
    ],
  },
  {
    number: 77,
    question: "What is required in the ninth commandment?",
    answer: "The ninth commandment requireth the maintaining and promoting of truth between man and man, and of our own and our neighbor's good name, especially in witness-bearing.",
    proof_texts: [
      { reference: "Zechariah 8:16", text: "These are the things that ye shall do; Speak ye every man the truth to his neighbour; execute the judgment of truth and peace in your gates." },
      { reference: "3 John 12", text: "Demetrius hath good report of all men, and of the truth itself: yea, and we also bear record; and ye know that our record is true." },
    ],
  },
  {
    number: 78,
    question: "What is forbidden in the ninth commandment?",
    answer: "The ninth commandment forbiddeth whatsoever is prejudicial to truth, or injurious to our own or our neighbor's good name.",
    proof_texts: [
      { reference: "Proverbs 19:5", text: "A false witness shall not be unpunished, and he that speaketh lies shall not escape." },
      { reference: "Ephesians 4:25", text: "Wherefore putting away lying, speak every man truth with his neighbour: for we are members one of another." },
    ],
  },
  {
    number: 79,
    question: "Which is the tenth commandment?",
    answer: "The tenth commandment is, Thou shalt not covet thy neighbor's house, thou shalt not covet thy neighbor's wife, nor his manservant, nor his maidservant, nor his ox, nor his ass, nor any thing that is thy neighbor's.",
    proof_texts: [
      { reference: "Exodus 20:17", text: "Thou shalt not covet thy neighbour's house, thou shalt not covet thy neighbour's wife, nor his manservant, nor his maidservant, nor his ox, nor his ass, nor any thing that is thy neighbour's." },
    ],
  },
  {
    number: 80,
    question: "What is required in the tenth commandment?",
    answer: "The tenth commandment requireth full contentment with our own condition, with a right and charitable frame of spirit toward our neighbor, and all that is his.",
    proof_texts: [
      { reference: "Hebrews 13:5", text: "Let your conversation be without covetousness; and be content with such things as ye have: for he hath said, I will never leave thee, nor forsake thee." },
      { reference: "Philippians 4:11", text: "Not that I speak in respect of want: for I have learned, in whatsoever state I am, therewith to be content." },
    ],
  },
  {
    number: 81,
    question: "What is forbidden in the tenth commandment?",
    answer: "The tenth commandment forbiddeth all discontentment with our own estate, envying or grieving at the good of our neighbor, and all inordinate motions and affections to anything that is his.",
    proof_texts: [
      { reference: "1 Corinthians 10:10", text: "Neither murmur ye, as some of them also murmured, and were destroyed of the destroyer." },
      { reference: "Galatians 5:26", text: "Let us not be desirous of vain glory, provoking one another, envying one another." },
    ],
  },
  {
    number: 82,
    question: "Is any man able perfectly to keep the commandments of God?",
    answer: "No mere man since the fall is able in this life perfectly to keep the commandments of God, but doth daily break them in thought, word, and deed.",
    proof_texts: [
      { reference: "Ecclesiastes 7:20", text: "For there is not a just man upon earth, that doeth good, and sinneth not." },
      { reference: "Romans 3:10", text: "As it is written, There is none righteous, no, not one." },
    ],
  },
  {
    number: 83,
    question: "Are all transgressions of the law equally heinous?",
    answer: "Some sins in themselves, and by reason of several aggravations, are more heinous in the sight of God than others.",
    proof_texts: [
      { reference: "John 19:11", text: "Jesus answered, Thou couldest have no power at all against me, except it were given thee from above: therefore he that delivered me unto thee hath the greater sin." },
      { reference: "Ezekiel 8:6", text: "He said furthermore unto me, Son of man, seest thou what they do? even the great abominations that the house of Israel committeth here, that I should go far off from my sanctuary?" },
    ],
  },
  {
    number: 84,
    question: "What doth every sin deserve?",
    answer: "Every sin deserveth God's wrath and curse, both in this life, and that which is to come.",
    proof_texts: [
      { reference: "Ephesians 5:6", text: "Let no man deceive you with vain words: for because of these things cometh the wrath of God upon the children of disobedience." },
      { reference: "Galatians 3:10", text: "For as many as are of the works of the law are under the curse: for it is written, Cursed is every one that continueth not in all things which are written in the book of the law to do them." },
    ],
  },
  {
    number: 85,
    question: "What doth God require of us, that we may escape his wrath and curse, due to us for sin?",
    answer: "To escape the wrath and curse of God, due to us for sin, God requireth of us faith in Jesus Christ, repentance unto life, with the diligent use of all the outward means whereby Christ communicateth to us the benefits of redemption.",
    proof_texts: [
      { reference: "Acts 20:21", text: "Testifying both to the Jews, and also to the Greeks, repentance toward God, and faith toward our Lord Jesus Christ." },
      { reference: "Proverbs 2:1–5", text: "My son, if thou wilt receive my words, and hide my commandments with thee; so that thou incline thine ear unto wisdom, and apply thine heart to understanding." },
    ],
  },
  {
    number: 86,
    question: "What is faith in Jesus Christ?",
    answer: "Faith in Jesus Christ is a saving grace, whereby we receive and rest upon him alone for salvation, as he is offered to us in the gospel.",
    proof_texts: [
      { reference: "Hebrews 10:39", text: "But we are not of them who draw back unto perdition; but of them that believe to the saving of the soul." },
      { reference: "John 1:12", text: "But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name." },
    ],
  },
  {
    number: 87,
    question: "What is repentance unto life?",
    answer: "Repentance unto life is a saving grace, whereby a sinner, out of a true sense of his sin, and apprehension of the mercy of God in Christ, doth, with grief and hatred of his sin, turn from it unto God, with full purpose of, and endeavor after, new obedience.",
    proof_texts: [
      { reference: "Acts 2:37–38", text: "Now when they heard this, they were pricked in their heart, and said unto Peter and to the rest of the apostles, Men and brethren, what shall we do? Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins." },
      { reference: "2 Corinthians 7:10", text: "For godly sorrow worketh repentance to salvation not to be repented of: but the sorrow of the world worketh death." },
    ],
  },
  {
    number: 88,
    question: "What are the outward and ordinary means whereby Christ communicateth to us the benefits of redemption?",
    answer: "The outward and ordinary means whereby Christ communicateth to us the benefits of redemption, are his ordinances, especially the Word, sacraments, and prayer; all which are made effectual to the elect for salvation.",
    proof_texts: [
      { reference: "Matthew 28:19–20", text: "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: teaching them to observe all things whatsoever I have commanded you." },
      { reference: "Acts 2:42", text: "And they continued stedfastly in the apostles' doctrine and fellowship, and in breaking of bread, and in prayers." },
    ],
  },
  {
    number: 89,
    question: "How is the Word made effectual to salvation?",
    answer: "The Spirit of God maketh the reading, but especially the preaching, of the Word an effectual means of convincing and converting sinners, and of building them up in holiness and comfort, through faith, unto salvation.",
    proof_texts: [
      { reference: "Romans 10:14–15", text: "How then shall they call on him in whom they have not believed? and how shall they believe in him of whom they have not heard? and how shall they hear without a preacher?" },
      { reference: "1 Corinthians 1:21", text: "For after that in the wisdom of God the world by wisdom knew not God, it pleased God by the foolishness of preaching to save them that believe." },
    ],
  },
  {
    number: 90,
    question: "How is the Word to be read and heard, that it may become effectual to salvation?",
    answer: "That the Word may become effectual to salvation, we must attend thereunto with diligence, preparation, and prayer; receive it with faith and love, lay it up in our hearts, and practice it in our lives.",
    proof_texts: [
      { reference: "Proverbs 8:34", text: "Blessed is the man that heareth me, watching daily at my gates, waiting at the posts of my doors." },
      { reference: "James 1:22", text: "But be ye doers of the word, and not hearers only, deceiving your own selves." },
    ],
  },
  {
    number: 91,
    question: "How do the sacraments become effectual means of salvation?",
    answer: "The sacraments become effectual means of salvation, not from any virtue in them or in him that doth administer them; but only by the blessing of Christ, and the working of his Spirit in them that by faith receive them.",
    proof_texts: [
      { reference: "1 Corinthians 3:7", text: "So then neither is he that planteth any thing, neither he that watereth; but God that giveth the increase." },
      { reference: "1 Peter 3:21", text: "The like figure whereunto even baptism doth also now save us (not the putting away of the filth of the flesh, but the answer of a good conscience toward God,) by the resurrection of Jesus Christ." },
    ],
  },
  {
    number: 92,
    question: "What is a sacrament?",
    answer: "A sacrament is an holy ordinance instituted by Christ; wherein, by sensible signs, Christ and the benefits of the new covenant are represented, sealed, and applied to believers.",
    proof_texts: [
      { reference: "Genesis 17:10–11", text: "This is my covenant, which ye shall keep, between me and you and thy seed after thee; Every man child among you shall be circumcised. And ye shall circumcise the flesh of your foreskin; and it shall be a token of the covenant betwixt me and you." },
      { reference: "Romans 4:11", text: "And he received the sign of circumcision, a seal of the righteousness of the faith which he had yet being uncircumcised." },
    ],
  },
  {
    number: 93,
    question: "Which are the sacraments of the New Testament?",
    answer: "The sacraments of the New Testament are Baptism and the Lord's Supper.",
    proof_texts: [
      { reference: "Matthew 28:19", text: "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost." },
      { reference: "1 Corinthians 11:23–26", text: "For I have received of the Lord that which also I delivered unto you, That the Lord Jesus the same night in which he was betrayed took bread." },
    ],
  },
  {
    number: 94,
    question: "What is baptism?",
    answer: "Baptism is a sacrament, wherein the washing with water in the name of the Father, and of the Son, and of the Holy Ghost, doth signify and seal our ingrafting into Christ, and partaking of the benefits of the covenant of grace, and our engagement to be the Lord's.",
    proof_texts: [
      { reference: "Romans 6:3–4", text: "Know ye not, that so many of us as were baptized into Jesus Christ were baptized into his death? Therefore we are buried with him by baptism into death." },
      { reference: "Galatians 3:27", text: "For as many of you as have been baptized into Christ have put on Christ." },
    ],
  },
  {
    number: 95,
    question: "To whom is baptism to be administered?",
    answer: "Baptism is not to be administered to any that are out of the visible church, till they profess their faith in Christ and obedience to him; but the infants of such as are members of the visible church are to be baptized.",
    proof_texts: [
      { reference: "Acts 2:38–39", text: "Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins... For the promise is unto you, and to your children." },
      { reference: "Genesis 17:7", text: "And I will establish my covenant between me and thee and thy seed after thee in their generations for an everlasting covenant, to be a God unto thee, and to thy seed after thee." },
    ],
  },
  {
    number: 96,
    question: "What is the Lord's Supper?",
    answer: "The Lord's Supper is a sacrament, wherein, by giving and receiving bread and wine according to Christ's appointment, his death is showed forth; and the worthy receivers are, not after a corporal and carnal manner, but by faith, made partakers of his body and blood, with all his benefits, to their spiritual nourishment and growth in grace.",
    proof_texts: [
      { reference: "1 Corinthians 11:23–26", text: "For I have received of the Lord that which also I delivered unto you, That the Lord Jesus the same night in which he was betrayed took bread... For as often as ye eat this bread, and drink this cup, ye do shew the Lord's death till he come." },
    ],
  },
  {
    number: 97,
    question: "What is required for the worthy receiving of the Lord's Supper?",
    answer: "It is required of them that would worthily partake of the Lord's Supper, that they examine themselves of their knowledge to discern the Lord's body, of their faith to feed upon him, of their repentance, love, and new obedience; lest, coming unworthily, they eat and drink judgment to themselves.",
    proof_texts: [
      { reference: "1 Corinthians 11:27–29", text: "Wherefore whosoever shall eat this bread, and drink this cup of the Lord, unworthily, shall be guilty of the body and blood of the Lord. But let a man examine himself." },
    ],
  },
  {
    number: 98,
    question: "What is prayer?",
    answer: "Prayer is an offering up of our desires unto God, for things agreeable to his will, in the name of Christ, with confession of our sins, and thankful acknowledgment of his mercies.",
    proof_texts: [
      { reference: "Psalm 62:8", text: "Trust in him at all times; ye people, pour out your heart before him: God is a refuge for us." },
      { reference: "John 16:23", text: "And in that day ye shall ask me nothing. Verily, verily, I say unto you, Whatsoever ye shall ask the Father in my name, he will give it you." },
    ],
  },
  {
    number: 99,
    question: "What rule hath God given for our direction in prayer?",
    answer: "The whole Word of God is of use to direct us in prayer; but the special rule of direction is that form of prayer which Christ taught his disciples, commonly called the Lord's Prayer.",
    proof_texts: [
      { reference: "Matthew 6:9–13", text: "After this manner therefore pray ye: Our Father which art in heaven, Hallowed be thy name..." },
      { reference: "Luke 11:2–4", text: "And he said unto them, When ye pray, say, Our Father which art in heaven, Hallowed be thy name. Thy kingdom come." },
    ],
  },
  {
    number: 100,
    question: "What doth the preface of the Lord's Prayer teach us?",
    answer: "The preface of the Lord's Prayer, which is, Our Father which art in heaven, teacheth us to draw near to God with all holy reverence and confidence, as children to a father able and ready to help us; and that we should pray with and for others.",
    proof_texts: [
      { reference: "Romans 8:15", text: "For ye have not received the spirit of bondage again to fear; but ye have received the Spirit of adoption, whereby we cry, Abba, Father." },
      { reference: "Isaiah 64:9", text: "Be not wroth very sore, O LORD, neither remember iniquity for ever: behold, see, we beseech thee, we are all thy people." },
    ],
  },
  {
    number: 101,
    question: "What do we pray for in the first petition?",
    answer: "In the first petition, which is, Hallowed be thy name, we pray that God would enable us and others to glorify him in all that whereby he maketh himself known; and that he would dispose all things to his own glory.",
    proof_texts: [
      { reference: "Psalm 67:1–3", text: "God be merciful unto us, and bless us; and cause his face to shine upon us; that thy way may be known upon earth, thy saving health among all nations. Let the people praise thee, O God." },
    ],
  },
  {
    number: 102,
    question: "What do we pray for in the second petition?",
    answer: "In the second petition, which is, Thy kingdom come, we pray that Satan's kingdom may be destroyed; and that the kingdom of grace may be advanced, ourselves and others brought into it, and kept in it; and that the kingdom of glory may be hastened.",
    proof_texts: [
      { reference: "Psalm 68:1", text: "Let God arise, let his enemies be scattered: let them also that hate him flee before him." },
      { reference: "2 Thessalonians 3:1", text: "Finally, brethren, pray for us, that the word of the Lord may have free course, and be glorified, even as it is with you." },
    ],
  },
  {
    number: 103,
    question: "What do we pray for in the third petition?",
    answer: "In the third petition, which is, Thy will be done in earth, as it is in heaven, we pray that God, by his grace, would make us able and willing to know, obey, and submit to his will in all things, as the angels do in heaven.",
    proof_texts: [
      { reference: "Psalm 103:20–21", text: "Bless the LORD, ye his angels, that excel in strength, that do his commandments, hearkening unto the voice of his word. Bless ye the LORD, all ye his hosts." },
    ],
  },
  {
    number: 104,
    question: "What do we pray for in the fourth petition?",
    answer: "In the fourth petition, which is, Give us this day our daily bread, we pray that of God's free gift we may receive a competent portion of the good things of this life, and enjoy his blessing with them.",
    proof_texts: [
      { reference: "Proverbs 30:8–9", text: "Remove far from me vanity and lies: give me neither poverty nor riches; feed me with food convenient for me: lest I be full, and deny thee, and say, Who is the LORD?" },
    ],
  },
  {
    number: 105,
    question: "What do we pray for in the fifth petition?",
    answer: "In the fifth petition, which is, And forgive us our debts, as we forgive our debtors, we pray that God, for Christ's sake, would freely pardon all our sins; which we are the rather encouraged to ask, because by his grace we are enabled to forgive others.",
    proof_texts: [
      { reference: "Matthew 6:14–15", text: "For if ye forgive men their trespasses, your heavenly Father will also forgive you: but if ye forgive not men their trespasses, neither will your Father forgive your trespasses." },
    ],
  },
  {
    number: 106,
    question: "What do we pray for in the sixth petition?",
    answer: "In the sixth petition, which is, And lead us not into temptation, but deliver us from evil, we pray that God would either keep us from being tempted to sin, or support and deliver us when we are tempted.",
    proof_texts: [
      { reference: "Matthew 26:41", text: "Watch and pray, that ye enter not into temptation: the spirit indeed is willing, but the flesh is weak." },
      { reference: "1 Corinthians 10:13", text: "There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able." },
    ],
  },
  {
    number: 107,
    question: "What doth the conclusion of the Lord's Prayer teach us?",
    answer: "The conclusion of the Lord's Prayer, which is, For thine is the kingdom, and the power, and the glory, for ever, Amen, teacheth us to take our encouragement in prayer from God only, and in our prayers to praise him, ascribing kingdom, power, and glory to him; and, in testimony of our desire, and assurance to be heard, we say, Amen.",
    proof_texts: [
      { reference: "1 Chronicles 29:13", text: "Now therefore, our God, we thank thee, and praise thy glorious name." },
      { reference: "Revelation 22:20", text: "He which testifieth these things saith, Surely I come quickly. Amen. Even so, come, Lord Jesus." },
    ],
  },
];

async function main() {
  console.log(`Seeding ${QUESTIONS.length} Westminster Shorter Catechism questions...`);

  for (const q of QUESTIONS) {
    const { unit, name } = UNITS[q.number];
    await sql`
      INSERT INTO questions (number, unit, unit_name, question, answer, proof_texts)
      VALUES (${q.number}, ${unit}, ${name}, ${q.question}, ${q.answer}, ${JSON.stringify(q.proof_texts)})
      ON CONFLICT (number) DO UPDATE SET
        unit = EXCLUDED.unit,
        unit_name = EXCLUDED.unit_name,
        question = EXCLUDED.question,
        answer = EXCLUDED.answer,
        proof_texts = EXCLUDED.proof_texts
    `;
  }

  console.log('Done! All 107 questions seeded.');
  await sql.end();
}

main().catch(err => { console.error(err); process.exit(1); });
