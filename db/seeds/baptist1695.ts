export default async function seedBaptist(sql: any): Promise<void> {
  const questions = [
    // ─── Unit I: God as Creator (Q1–12) ───────────────────────────────────────
    {
      catechism_id: 'baptist1695', number: 1,
      section: 'Unit I', section_name: 'God as Creator',
      question: 'What is the chief end of man?',
      answer: "Man's chief end is to glorify God, and to enjoy him forever.",
      proof_texts: [
        { reference: '1 Cor. 10:31', text: 'Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God.' },
        { reference: 'Ps. 73:25-28', text: 'Whom have I in heaven but thee? and there is none upon earth that I desire beside thee...it is good for me to draw near to God.' },
        { reference: 'Rom. 11:36', text: 'For of him, and through him, and to him, are all things: to whom be glory for ever.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 2,
      section: 'Unit I', section_name: 'God as Creator',
      question: 'What rule hath God given to direct us how we may glorify and enjoy him?',
      answer: 'The Word of God, which is contained in the Scriptures of the Old and New Testaments, is the only rule to direct us how we may glorify and enjoy him.',
      proof_texts: [
        { reference: '2 Tim. 3:16', text: 'All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness.' },
        { reference: '2 Tim. 3:17', text: 'That the man of God may be perfect, throughly furnished unto all good works.' },
        { reference: '1 John 1:3-4', text: 'That which we have seen and heard declare we unto you, that ye also may have fellowship with us...and these things write we unto you, that your joy may be full.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 3,
      section: 'Unit I', section_name: 'God as Creator',
      question: 'What do the Scriptures principally teach?',
      answer: 'The Scriptures principally teach what man is to believe concerning God, and what duty God requires of man.',
      proof_texts: [
        { reference: '2 Tim. 1:13', text: 'Hold fast the form of sound words, which thou hast heard of me, in faith and love which is in Christ Jesus.' },
        { reference: 'Eccl. 12:13', text: 'Fear God, and keep his commandments: for this is the whole duty of man.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 4,
      section: 'Unit I', section_name: 'God as Creator',
      question: 'What is God?',
      answer: 'God is a Spirit, infinite, eternal, and unchangeable, in his being, wisdom, power, holiness, justice, goodness, and truth.',
      proof_texts: [
        { reference: 'John 4:24', text: 'God is a Spirit: and they that worship him must worship him in spirit and in truth.' },
        { reference: 'Ps. 147:5', text: 'Great is our Lord, and of great power: his understanding is infinite.' },
        { reference: 'Ps. 90:2', text: 'Before the mountains were brought forth, or ever thou hadst formed the earth and the world, even from everlasting to everlasting, thou art God.' },
        { reference: 'Mal. 3:6', text: 'For I am the LORD, I change not.' },
        { reference: 'Rev. 4:8', text: 'Holy, holy, holy, Lord God Almighty, which was, and is, and is to come.' },
        { reference: 'Exod. 34:6-7', text: 'The LORD, The LORD God, merciful and gracious, longsuffering, and abundant in goodness and truth, keeping mercy for thousands, forgiving iniquity and transgression and sin.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 5,
      section: 'Unit I', section_name: 'God as Creator',
      question: 'Are there more Gods than one?',
      answer: 'There is but one only, the living and true God.',
      proof_texts: [
        { reference: 'Deut. 6:4', text: 'Hear, O Israel: The LORD our God is one LORD.' },
        { reference: 'Jer. 10:10', text: 'But the LORD is the true God, he is the living God, and an everlasting king.' },
        { reference: '1 Cor. 8:4', text: 'We know that an idol is nothing in the world, and that there is none other God but one.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 6,
      section: 'Unit I', section_name: 'God as Creator',
      question: 'How many persons are there in the Godhead?',
      answer: 'There are three persons in the Godhead: the Father, the Son, and the Holy Ghost; and these three are one God, the same in substance, equal in power and glory.',
      proof_texts: [
        { reference: '1 John 5:7', text: 'For there are three that bear record in heaven, the Father, the Word, and the Holy Ghost: and these three are one.' },
        { reference: 'Matt. 28:19', text: 'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost.' },
        { reference: '2 Cor. 13:14', text: 'The grace of the Lord Jesus Christ, and the love of God, and the communion of the Holy Ghost, be with you all.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 7,
      section: 'Unit I', section_name: 'God as Creator',
      question: 'What are the decrees of God?',
      answer: 'The decrees of God are his eternal purpose, according to the counsel of his will, whereby, for his own glory, he hath foreordained whatsoever comes to pass.',
      proof_texts: [
        { reference: 'Eph. 1:11', text: 'In whom also we have obtained an inheritance, being predestinated according to the purpose of him who worketh all things after the counsel of his own will.' },
        { reference: 'Rom. 11:36', text: 'For of him, and through him, and to him, are all things: to whom be glory for ever.' },
        { reference: 'Isa. 46:10', text: 'Declaring the end from the beginning, and from ancient times the things that are not yet done, saying, My counsel shall stand, and I will do all my pleasure.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 8,
      section: 'Unit I', section_name: 'God as Creator',
      question: 'How doth God execute his decrees?',
      answer: 'God executeth his decrees in the works of creation and providence.',
      proof_texts: [
        { reference: 'Rev. 4:11', text: 'Thou art worthy, O Lord, to receive glory and honour and power: for thou hast created all things, and for thy pleasure they are and were created.' },
        { reference: 'Dan. 4:35', text: 'And all the inhabitants of the earth are reputed as nothing: and he doeth according to his will in the army of heaven, and among the inhabitants of the earth.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 9,
      section: 'Unit I', section_name: 'God as Creator',
      question: 'What is the work of creation?',
      answer: "The work of creation is God's making all things of nothing, by the word of his power, in the space of six days, and all very good.",
      proof_texts: [
        { reference: 'Gen. 1:1', text: 'In the beginning God created the heaven and the earth.' },
        { reference: 'Heb. 11:3', text: 'Through faith we understand that the worlds were framed by the word of God, so that things which are seen were not made of things which do appear.' },
        { reference: 'Gen. 1:31', text: 'And God saw every thing that he had made, and, behold, it was very good.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 10,
      section: 'Unit I', section_name: 'God as Creator',
      question: 'How did God create man?',
      answer: 'God created man male and female, after his own image, in knowledge, righteousness, and holiness, with dominion over the creatures.',
      proof_texts: [
        { reference: 'Gen. 1:27', text: 'So God created man in his own image, in the image of God created he him; male and female created he them.' },
        { reference: 'Col. 3:10', text: 'And have put on the new man, which is renewed in knowledge after the image of him that created him.' },
        { reference: 'Eph. 4:24', text: 'And that ye put on the new man, which after God is created in righteousness and true holiness.' },
        { reference: 'Gen. 1:28', text: 'And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 11,
      section: 'Unit I', section_name: 'God as Creator',
      question: "What are God's works of providence?",
      answer: "God's works of providence are his most holy, wise, and powerful preserving and governing all his creatures, and all their actions.",
      proof_texts: [
        { reference: 'Ps. 145:17', text: 'The LORD is righteous in all his ways, and holy in all his works.' },
        { reference: 'Heb. 1:3', text: 'Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power.' },
        { reference: 'Matt. 10:29', text: 'Are not two sparrows sold for a farthing? and one of them shall not fall on the ground without your Father.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 12,
      section: 'Unit I', section_name: 'God as Creator',
      question: 'What special act of providence did God exercise toward man in the estate wherein he was created?',
      answer: 'When God had created man, he entered into a covenant of life with him, upon condition of perfect obedience; forbidding him to eat of the tree of the knowledge of good and evil, upon the pain of death.',
      proof_texts: [
        { reference: 'Gal. 3:12', text: 'And the law is not of faith: but, The man that doeth them shall live in them.' },
        { reference: 'Gen. 2:17', text: 'But of the tree of the knowledge of good and evil, thou shalt not eat of it: for in the day that thou eatest thereof thou shalt surely die.' }
      ]
    },

    // ─── Unit II: The Fall of Man (Q13–20) ────────────────────────────────────
    {
      catechism_id: 'baptist1695', number: 13,
      section: 'Unit II', section_name: 'The Fall of Man',
      question: 'Did our first parents continue in the estate wherein they were created?',
      answer: 'Our first parents, being left to the freedom of their own will, fell from the estate wherein they were created, by sinning against God.',
      proof_texts: [
        { reference: 'Gen. 3:6-8', text: 'And when the woman saw that the tree was good for food, and that it was pleasant to the eyes...she took of the fruit thereof, and did eat, and gave also unto her husband with her; and he did eat.' },
        { reference: 'Eccl. 7:29', text: 'Lo, this only have I found, that God hath made man upright; but they have sought out many inventions.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 14,
      section: 'Unit II', section_name: 'The Fall of Man',
      question: 'What is sin?',
      answer: 'Sin is any want of conformity unto, or transgression of, the law of God.',
      proof_texts: [
        { reference: '1 John 3:4', text: 'Whosoever committeth sin transgresseth also the law: for sin is the transgression of the law.' },
        { reference: 'Rom. 3:23', text: 'For all have sinned, and come short of the glory of God.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 15,
      section: 'Unit II', section_name: 'The Fall of Man',
      question: 'What was the sin whereby our first parents fell from the estate wherein they were created?',
      answer: 'The sin whereby our first parents fell from the estate wherein they were created was their eating the forbidden fruit.',
      proof_texts: [
        { reference: 'Gen. 3:6', text: 'And when the woman saw that the tree was good for food, and that it was pleasant to the eyes, and a tree to be desired to make one wise, she took of the fruit thereof, and did eat, and gave also unto her husband with her; and he did eat.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 16,
      section: 'Unit II', section_name: 'The Fall of Man',
      question: "Did all mankind fall in Adam's first transgression?",
      answer: 'The covenant being made with Adam, not only for himself, but for his posterity; all mankind, descending from him by ordinary generation, sinned in him, and fell with him, in his first transgression.',
      proof_texts: [
        { reference: 'Gen. 2:16-17', text: 'And the LORD God commanded the man, saying, Of every tree of the garden thou mayest freely eat: But of the tree of the knowledge of good and evil, thou shalt not eat of it.' },
        { reference: 'Rom. 5:12', text: 'Wherefore, as by one man sin entered into the world, and death by sin; and so death passed upon all men, for that all have sinned.' },
        { reference: '1 Cor. 15:22', text: 'For as in Adam all die, even so in Christ shall all be made alive.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 17,
      section: 'Unit II', section_name: 'The Fall of Man',
      question: 'Into what estate did the fall bring mankind?',
      answer: 'The fall brought mankind into an estate of sin and misery.',
      proof_texts: [
        { reference: 'Rom. 5:12', text: 'Wherefore, as by one man sin entered into the world, and death by sin; and so death passed upon all men, for that all have sinned.' },
        { reference: 'Rom. 3:23', text: 'For all have sinned, and come short of the glory of God.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 18,
      section: 'Unit II', section_name: 'The Fall of Man',
      question: 'Wherein consists the sinfulness of that estate whereinto man fell?',
      answer: "The sinfulness of that estate whereinto man fell consists in the guilt of Adam's first sin, the want of original righteousness, and the corruption of his whole nature, which is commonly called original sin; together with all actual transgressions which proceed from it.",
      proof_texts: [
        { reference: 'Rom. 5:12-19', text: 'Wherefore, as by one man sin entered into the world, and death by sin...so by the obedience of one shall many be made righteous.' },
        { reference: 'Eph. 2:1-3', text: 'And you hath he quickened, who were dead in trespasses and sins...and were by nature the children of wrath, even as others.' },
        { reference: 'James 1:14-15', text: 'But every man is tempted, when he is drawn away of his own lust, and enticed. Then when lust hath conceived, it bringeth forth sin: and sin, when it is finished, bringeth forth death.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 19,
      section: 'Unit II', section_name: 'The Fall of Man',
      question: 'What is the misery of that estate whereinto man fell?',
      answer: 'All mankind by their fall lost communion with God, are under his wrath and curse, and so made liable to all miseries in this life, to death itself, and to the pains of hell for ever.',
      proof_texts: [
        { reference: 'Gen. 3:8', text: 'And they heard the voice of the LORD God walking in the garden in the cool of the day: and Adam and his wife hid themselves from the presence of the LORD God.' },
        { reference: 'Eph. 2:2-3', text: '...the spirit that now worketh in the children of disobedience...and were by nature the children of wrath, even as others.' },
        { reference: 'Gal. 3:10', text: 'For as many as are of the works of the law are under the curse: for it is written, Cursed is every one that continueth not in all things which are written in the book of the law to do them.' },
        { reference: 'Rom. 6:23', text: 'For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.' },
        { reference: 'Matt. 25:41', text: 'Then shall he say also unto them on the left hand, Depart from me, ye cursed, into everlasting fire, prepared for the devil and his angels.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 20,
      section: 'Unit II', section_name: 'The Fall of Man',
      question: 'Did God leave all mankind to perish in the estate of sin and misery?',
      answer: 'God, having out of his mere good pleasure, from all eternity, elected some to everlasting life, did enter into a covenant of grace, to deliver them out of the estate of sin and misery, and to bring them into an estate of salvation by a Redeemer.',
      proof_texts: [
        { reference: 'Eph. 1:4', text: 'According as he hath chosen us in him before the foundation of the world, that we should be holy and without blame before him in love.' },
        { reference: 'Acts 13:48', text: 'And when the Gentiles heard this, they were glad, and glorified the word of the Lord: and as many as were ordained to eternal life believed.' },
        { reference: 'Rom. 3:20-22', text: 'Therefore by the deeds of the law there shall no flesh be justified in his sight...But now the righteousness of God without the law is manifested...even the righteousness of God which is by faith of Jesus Christ.' }
      ]
    },

    // ─── Unit III: Christ the Redeemer (Q21–28) ───────────────────────────────
    {
      catechism_id: 'baptist1695', number: 21,
      section: 'Unit III', section_name: 'Christ the Redeemer',
      question: "Who is the Redeemer of God's elect?",
      answer: "The only Redeemer of God's elect is the Lord Jesus Christ, who, being the eternal Son of God, became man, and so was, and continueth to be, God and man in two distinct natures, and one person, forever.",
      proof_texts: [
        { reference: '1 Tim. 2:5', text: 'For there is one God, and one mediator between God and men, the man Christ Jesus.' },
        { reference: 'John 1:14', text: 'And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.' },
        { reference: 'Luke 1:35', text: 'And the angel answered and said unto her, The Holy Ghost shall come upon thee, and the power of the Highest shall overshadow thee: therefore also that holy thing which shall be born of thee shall be called the Son of God.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 22,
      section: 'Unit III', section_name: 'Christ the Redeemer',
      question: 'How did Christ, being the Son of God, become man?',
      answer: 'Christ, the Son of God, became man, by taking to himself a true body and a reasonable soul, being conceived by the power of the Holy Ghost in the womb of the Virgin Mary, and born of her, yet without sin.',
      proof_texts: [
        { reference: 'Heb. 2:14', text: 'Forasmuch then as the children are partakers of flesh and blood, he also himself likewise took part of the same.' },
        { reference: 'Matt. 1:20', text: 'But while he thought on these things, behold, the angel of the Lord appeared unto him in a dream, saying, Joseph, thou son of David, fear not to take unto thee Mary thy wife: for that which is conceived in her is of the Holy Ghost.' },
        { reference: 'Heb. 4:15', text: 'For we have not an high priest which cannot be touched with the feeling of our infirmities; but was in all points tempted like as we are, yet without sin.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 23,
      section: 'Unit III', section_name: 'Christ the Redeemer',
      question: 'What offices doth Christ execute as our Redeemer?',
      answer: 'Christ, as our Redeemer, executeth the offices of a prophet, of a priest, and of a king, both in his estate of humiliation and exaltation.',
      proof_texts: [
        { reference: 'Acts 3:22', text: 'For Moses truly said unto the fathers, A prophet shall the Lord your God raise up unto you of your brethren, like unto me; him shall ye hear in all things whatsoever he shall say unto you.' },
        { reference: 'Heb. 5:5-6', text: 'So also Christ glorified not himself to be made an high priest; but he that said unto him, Thou art my Son...Thou art a priest for ever after the order of Melchisedec.' },
        { reference: 'Ps. 2:6', text: 'Yet have I set my king upon my holy hill of Zion.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 24,
      section: 'Unit III', section_name: 'Christ the Redeemer',
      question: 'How doth Christ execute the office of a prophet?',
      answer: 'Christ executeth the office of a prophet, in revealing to us, by his word and Spirit, the will of God for our salvation.',
      proof_texts: [
        { reference: 'John 15:15', text: 'Henceforth I call you not servants; for the servant knoweth not what his lord doeth: but I have called you friends; for all things that I have heard of my Father I have made known unto you.' },
        { reference: 'John 20:31', text: 'But these are written, that ye might believe that Jesus is the Christ, the Son of God; and that believing ye might have life through his name.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 25,
      section: 'Unit III', section_name: 'Christ the Redeemer',
      question: 'How doth Christ execute the office of a priest?',
      answer: 'Christ executeth the office of a priest, in his once offering up of himself a sacrifice to satisfy divine justice, and reconcile us to God; and in making continual intercession for us.',
      proof_texts: [
        { reference: 'Heb. 9:14', text: 'How much more shall the blood of Christ, who through the eternal Spirit offered himself without spot to God, purge your conscience from dead works to serve the living God?' },
        { reference: 'Heb. 7:25', text: 'Wherefore he is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 26,
      section: 'Unit III', section_name: 'Christ the Redeemer',
      question: 'How doth Christ execute the office of a king?',
      answer: 'Christ executeth the office of a king, in subduing us to himself, in ruling and defending us, and in restraining and conquering all his and our enemies.',
      proof_texts: [
        { reference: 'Ps. 110:3', text: 'Thy people shall be willing in the day of thy power, in the beauties of holiness from the womb of the morning: thou hast the dew of thy youth.' },
        { reference: 'Isa. 33:22', text: 'For the LORD is our judge, the LORD is our lawgiver, the LORD is our king; he will save us.' },
        { reference: '1 Cor. 15:25', text: 'For he must reign, till he hath put all enemies under his feet.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 27,
      section: 'Unit III', section_name: 'Christ the Redeemer',
      question: "Wherein did Christ's humiliation consist?",
      answer: "Christ's humiliation consisted in his being born, and that in a low condition, made under the law, undergoing the miseries of this life, the wrath of God, and the cursed death of the cross; in being buried, and continuing under the power of death for a time.",
      proof_texts: [
        { reference: 'Luke 2:7', text: 'And she brought forth her firstborn son, and wrapped him in swaddling clothes, and laid him in a manger; because there was no room for them in the inn.' },
        { reference: 'Gal. 4:4', text: 'But when the fulness of the time was come, God sent forth his Son, made of a woman, made under the law.' },
        { reference: 'Phil. 2:8', text: 'And being found in fashion as a man, he humbled himself, and became obedient unto death, even the death of the cross.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 28,
      section: 'Unit III', section_name: 'Christ the Redeemer',
      question: "Wherein consisteth Christ's exaltation?",
      answer: "Christ's exaltation consisteth in his rising again from the dead on the third day, in ascending up into heaven, in sitting at the right hand of God the Father, and in coming to judge the world at the last day.",
      proof_texts: [
        { reference: '1 Cor. 15:4', text: 'And that he was buried, and that he rose again the third day according to the scriptures.' },
        { reference: 'Acts 1:11', text: 'Ye men of Galilee, why stand ye gazing up into heaven? this same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven.' },
        { reference: 'Eph. 1:20', text: 'Which he wrought in Christ, when he raised him from the dead, and set him at his own right hand in the heavenly places.' },
        { reference: 'Acts 17:31', text: 'Because he hath appointed a day, in the which he will judge the world in righteousness by that man whom he hath ordained.' }
      ]
    },

    // ─── Unit IV: Salvation Applied (Q29–38) ──────────────────────────────────
    {
      catechism_id: 'baptist1695', number: 29,
      section: 'Unit IV', section_name: 'Salvation Applied',
      question: 'How are we made partakers of the redemption purchased by Christ?',
      answer: 'We are made partakers of the redemption purchased by Christ, by the effectual application of it to us by his Holy Spirit.',
      proof_texts: [
        { reference: 'Titus 3:5-6', text: 'Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost; which he shed on us abundantly through Jesus Christ our Saviour.' },
        { reference: 'John 3:5-6', text: 'Jesus answered, Verily, verily, I say unto thee, Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 30,
      section: 'Unit IV', section_name: 'Salvation Applied',
      question: 'How doth the Spirit apply to us the redemption purchased by Christ?',
      answer: 'The Spirit applieth to us the redemption purchased by Christ, by working faith in us, and thereby uniting us to Christ in our effectual calling.',
      proof_texts: [
        { reference: 'Eph. 2:8', text: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.' },
        { reference: '1 Cor. 1:9', text: 'God is faithful, by whom ye were called unto the fellowship of his Son Jesus Christ our Lord.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 31,
      section: 'Unit IV', section_name: 'Salvation Applied',
      question: 'What is effectual calling?',
      answer: "Effectual calling is the work of God's Spirit, whereby, convincing us of our sin and misery, enlightening our minds in the knowledge of Christ, and renewing our wills, he doth persuade and enable us to embrace Jesus Christ, freely offered to us in the gospel.",
      proof_texts: [
        { reference: '2 Tim. 1:9', text: 'Who hath saved us, and called us with an holy calling, not according to our works, but according to his own purpose and grace, which was given us in Christ Jesus before the world began.' },
        { reference: 'Acts 26:18', text: 'To open their eyes, and to turn them from darkness to light, and from the power of Satan unto God, that they may receive forgiveness of sins.' },
        { reference: 'Phil. 2:13', text: 'For it is God which worketh in you both to will and to do of his good pleasure.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 32,
      section: 'Unit IV', section_name: 'Salvation Applied',
      question: 'What benefits do they that are effectually called partake of in this life?',
      answer: 'They that are effectually called do in this life partake of justification, adoption, and sanctification, and the several benefits which in this life do either accompany or flow from them.',
      proof_texts: [
        { reference: 'Rom. 8:30', text: 'Moreover whom he did predestinate, them he also called: and whom he called, them he also justified: and whom he justified, them he also glorified.' },
        { reference: 'Eph. 1:5', text: 'Having predestinated us unto the adoption of children by Jesus Christ to himself, according to the good pleasure of his will.' },
        { reference: '1 Cor. 1:30', text: 'But of him are ye in Christ Jesus, who of God is made unto us wisdom, and righteousness, and sanctification, and redemption.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 33,
      section: 'Unit IV', section_name: 'Salvation Applied',
      question: 'What is justification?',
      answer: "Justification is an act of God's free grace, wherein he pardoneth all our sins, and accepteth us as righteous in his sight, only for the righteousness of Christ imputed to us, and received by faith alone.",
      proof_texts: [
        { reference: 'Rom. 3:24', text: 'Being justified freely by his grace through the redemption that is in Christ Jesus.' },
        { reference: 'Rom. 4:6-8', text: 'Even as David also describeth the blessedness of the man, unto whom God imputeth righteousness without works, saying, Blessed are they whose iniquities are forgiven.' },
        { reference: '2 Cor. 5:21', text: 'For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 34,
      section: 'Unit IV', section_name: 'Salvation Applied',
      question: 'What is adoption?',
      answer: "Adoption is an act of God's free grace, whereby we are received into the number, and have a right to all the privileges, of the sons of God.",
      proof_texts: [
        { reference: 'John 1:12', text: 'But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name.' },
        { reference: '1 John 3:1', text: 'Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 35,
      section: 'Unit IV', section_name: 'Salvation Applied',
      question: 'What is sanctification?',
      answer: "Sanctification is the work of God's free grace, whereby we are renewed in the whole man after the image of God, and are enabled more and more to die unto sin, and live unto righteousness.",
      proof_texts: [
        { reference: '2 Thess. 2:13', text: 'But we are bound to give thanks alway to God for you, brethren beloved of the Lord, because God hath from the beginning chosen you to salvation through sanctification of the Spirit and belief of the truth.' },
        { reference: 'Eph. 4:23-24', text: 'And be renewed in the spirit of your mind; and that ye put on the new man, which after God is created in righteousness and true holiness.' },
        { reference: 'Rom. 6:11', text: 'Likewise reckon ye also yourselves to be dead indeed unto sin, but alive unto God through Jesus Christ our Lord.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 36,
      section: 'Unit IV', section_name: 'Salvation Applied',
      question: 'What are the benefits which in this life do accompany or flow from justification, adoption, and sanctification?',
      answer: "The benefits which in this life do accompany or flow from justification, adoption, and sanctification, are, assurance of God's love, peace of conscience, joy in the Holy Ghost, increase of grace, and perseverance therein to the end.",
      proof_texts: [
        { reference: 'Rom. 5:1-2', text: 'Therefore being justified by faith, we have peace with God through our Lord Jesus Christ...and rejoice in hope of the glory of God.' },
        { reference: 'Rom. 5:5', text: 'And hope maketh not ashamed; because the love of God is shed abroad in our hearts by the Holy Ghost which is given unto us.' },
        { reference: '1 Pet. 1:5', text: 'Who are kept by the power of God through faith unto salvation ready to be revealed in the last time.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 37,
      section: 'Unit IV', section_name: 'Salvation Applied',
      question: 'What benefits do believers receive from Christ at death?',
      answer: 'The souls of believers are at their death made perfect in holiness, and do immediately pass into glory; and their bodies, being still united to Christ, do rest in their graves till the resurrection.',
      proof_texts: [
        { reference: 'Heb. 12:23', text: 'To the general assembly and church of the firstborn, which are written in heaven, and to God the Judge of all, and to the spirits of just men made perfect.' },
        { reference: '2 Cor. 5:8', text: 'We are confident, I say, and willing rather to be absent from the body, and to be present with the Lord.' },
        { reference: '1 Thess. 4:14', text: 'For if we believe that Jesus died and rose again, even so them also which sleep in Jesus will God bring with him.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 38,
      section: 'Unit IV', section_name: 'Salvation Applied',
      question: 'What benefits do believers receive from Christ at the resurrection?',
      answer: 'At the resurrection, believers being raised up in glory, shall be openly acknowledged and acquitted in the day of judgment, and made perfectly blessed in the full enjoying of God to all eternity.',
      proof_texts: [
        { reference: '1 Cor. 15:43', text: 'It is sown in dishonour; it is raised in glory: it is sown in weakness; it is raised in power.' },
        { reference: 'Matt. 10:32', text: 'Whosoever therefore shall confess me before men, him will I confess also before my Father which is in heaven.' },
        { reference: '1 John 3:2', text: 'Beloved, now are we the sons of God, and it doth not yet appear what we shall be: but we know that, when he shall appear, we shall be like him; for we shall see him as he is.' }
      ]
    },

    // ─── Unit V: The Moral Law (Q39–62) ───────────────────────────────────────
    {
      catechism_id: 'baptist1695', number: 39,
      section: 'Unit V', section_name: 'The Moral Law',
      question: 'What is the duty which God requireth of man?',
      answer: 'The duty which God requireth of man is obedience to his revealed will.',
      proof_texts: [
        { reference: 'Deut. 29:29', text: 'The secret things belong unto the LORD our God: but those things which are revealed belong unto us and to our children for ever, that we may do all the words of this law.' },
        { reference: 'Mic. 6:8', text: 'He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 40,
      section: 'Unit V', section_name: 'The Moral Law',
      question: 'What did God at first reveal to man for the rule of his obedience?',
      answer: 'The rule which God at first revealed to man for his obedience was the moral law.',
      proof_texts: [
        { reference: 'Rom. 2:14-15', text: 'For when the Gentiles, which have not the law, do by nature the things contained in the law, these, having not the law, are a law unto themselves: which shew the work of the law written in their hearts.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 41,
      section: 'Unit V', section_name: 'The Moral Law',
      question: 'Where is the moral law summarily comprehended?',
      answer: 'The moral law is summarily comprehended in the ten commandments.',
      proof_texts: [
        { reference: 'Deut. 10:4', text: 'And he wrote on the tables, according to the first writing, the ten commandments, which the LORD spake unto you in the mount out of the midst of the fire in the day of the assembly.' },
        { reference: 'Matt. 19:17', text: 'And he said unto him, Why callest thou me good? there is none good but one, that is, God: but if thou wilt enter into life, keep the commandments.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 42,
      section: 'Unit V', section_name: 'The Moral Law',
      question: 'What is the sum of the ten commandments?',
      answer: 'The sum of the ten commandments is to love the Lord our God with all our heart, with all our soul, with all our strength, and with all our mind; and our neighbor as ourselves.',
      proof_texts: [
        { reference: 'Matt. 22:37-40', text: 'Jesus said unto him, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind. This is the first and great commandment. And the second is like unto it, Thou shalt love thy neighbour as thyself.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 43,
      section: 'Unit V', section_name: 'The Moral Law',
      question: 'What is the preface to the ten commandments?',
      answer: 'The preface to the ten commandments is in these words: I am the Lord thy God, which have brought thee out of the land of Egypt, out of the house of bondage.',
      proof_texts: [
        { reference: 'Exod. 20:2', text: 'I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of bondage.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 44,
      section: 'Unit V', section_name: 'The Moral Law',
      question: 'What doth the preface to the ten commandments teach us?',
      answer: 'The preface to the ten commandments teacheth us that because God is the Lord, and our God, and Redeemer, therefore we are bound to keep all his commandments.',
      proof_texts: [
        { reference: 'Luke 1:74-75', text: 'That he would grant unto us, that we being delivered out of the hand of our enemies might serve him without fear, in holiness and righteousness before him, all the days of our life.' },
        { reference: '1 Pet. 1:15-19', text: 'But as he which hath called you is holy, so be ye holy in all manner of conversation...forasmuch as ye know that ye were not redeemed with corruptible things...but with the precious blood of Christ.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 45,
      section: 'Unit V', section_name: 'The Moral Law',
      question: 'Which is the first commandment?',
      answer: 'The first commandment is, Thou shalt have no other gods before me.',
      proof_texts: [
        { reference: 'Exod. 20:3', text: 'Thou shalt have no other gods before me.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 46,
      section: 'Unit V', section_name: 'The Moral Law',
      question: 'What is required in the first commandment?',
      answer: 'The first commandment requireth us to know and acknowledge God to be the only true God, and our God; and to worship and glorify him accordingly.',
      proof_texts: [
        { reference: '1 Chron. 28:9', text: 'And thou, Solomon my son, know thou the God of thy father, and serve him with a perfect heart and with a willing mind.' },
        { reference: 'Deut. 26:17', text: 'Thou hast avouched the LORD this day to be thy God, and to walk in his ways, and to keep his statutes, and his commandments, and his judgments, and to hearken unto his voice.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 47,
      section: 'Unit V', section_name: 'The Moral Law',
      question: 'What is forbidden in the first commandment?',
      answer: 'The first commandment forbiddeth the denying, or not worshiping and glorifying the true God as God, and our God; and the giving of that worship and glory to any other which is due to him alone.',
      proof_texts: [
        { reference: 'Ps. 14:1', text: 'The fool hath said in his heart, There is no God.' },
        { reference: 'Rom. 1:21', text: 'Because that, when they knew God, they glorified him not as God, neither were thankful; but became vain in their imaginations, and their foolish heart was darkened.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 48,
      section: 'Unit V', section_name: 'The Moral Law',
      question: 'What are we specially taught by these words, "before me," in the first commandment?',
      answer: 'These words, "before me," in the first commandment teach us that God, who seeth all things, taketh notice of, and is much displeased with, the sin of having any other god.',
      proof_texts: [
        { reference: 'Deut. 30:17-18', text: 'But if thine heart turn away, so that thou wilt not hear, but shalt be drawn away, and worship other gods, and serve them; I denounce unto you this day, that ye shall surely perish.' },
        { reference: 'Ps. 44:20-21', text: 'If we have forgotten the name of our God, or stretched out our hands to a strange god; Shall not God search this out? for he knoweth the secrets of the heart.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 49,
      section: 'Unit V', section_name: 'The Moral Law',
      question: 'Which is the second commandment?',
      answer: 'The second commandment is, Thou shalt not make unto thee any graven image, or any likeness of any thing that is in heaven above, or that is in the earth beneath, or that is in the water under the earth: thou shalt not bow down thyself to them, nor serve them: for I the Lord thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me; and shewing mercy unto thousands of them that love me, and keep my commandments.',
      proof_texts: [
        { reference: 'Exod. 20:4-6', text: 'Thou shalt not make unto thee any graven image, or any likeness of any thing that is in heaven above, or that is in the earth beneath, or that is in the water under the earth.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 50,
      section: 'Unit V', section_name: 'The Moral Law',
      question: 'What is required in the second commandment?',
      answer: 'The second commandment requireth the receiving, observing, and keeping pure and entire, all such religious worship and ordinances as God hath appointed in his word.',
      proof_texts: [
        { reference: 'Deut. 32:46', text: 'And he said unto them, Set your hearts unto all the words which I testify among you this day, which ye shall command your children to observe to do, all the words of this law.' },
        { reference: 'Matt. 28:20', text: 'Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 51,
      section: 'Unit V', section_name: 'The Moral Law',
      question: 'What is forbidden in the second commandment?',
      answer: 'The second commandment forbiddeth the worshiping of God by images, or any other way not appointed in his word.',
      proof_texts: [
        { reference: 'Deut. 4:15-16', text: 'Take ye therefore good heed unto yourselves; for ye saw no manner of similitude on the day that the LORD spake unto you in Horeb out of the midst of the fire: lest ye corrupt yourselves, and make you a graven image.' },
        { reference: 'Col. 2:18', text: 'Let no man beguile you of your reward in a voluntary humility and worshipping of angels, intruding into those things which he hath not seen.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 52,
      section: 'Unit V', section_name: 'The Moral Law',
      question: 'What are the reasons annexed to the second commandment?',
      answer: "The reasons annexed to the second commandment are, God's sovereignty over us, his propriety in us, and the zeal he hath to his own worship.",
      proof_texts: [
        { reference: 'Ps. 45:11', text: 'So shall the king greatly desire thy beauty: for he is thy Lord; and worship thou him.' },
        { reference: 'Exod. 34:14', text: 'For thou shalt worship no other god: for the LORD, whose name is Jealous, is a jealous God.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 53,
      section: 'Unit V', section_name: 'The Moral Law',
      question: 'Which is the third commandment?',
      answer: 'The third commandment is, Thou shalt not take the name of the Lord thy God in vain: for the Lord will not hold him guiltless that taketh his name in vain.',
      proof_texts: [
        { reference: 'Exod. 20:7', text: 'Thou shalt not take the name of the LORD thy God in vain; for the LORD will not hold him guiltless that taketh his name in vain.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 54,
      section: 'Unit V', section_name: 'The Moral Law',
      question: 'What is required in the third commandment?',
      answer: "The third commandment requireth the holy and reverent use of God's names, titles, attributes, ordinances, word, and works.",
      proof_texts: [
        { reference: 'Matt. 6:9', text: 'After this manner therefore pray ye: Our Father which art in heaven, Hallowed be thy name.' },
        { reference: 'Deut. 28:58', text: 'If thou wilt not observe to do all the words of this law that are written in this book, that thou mayest fear this glorious and fearful name, THE LORD THY GOD.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 55,
      section: 'Unit V', section_name: 'The Moral Law',
      question: 'What is forbidden in the third commandment?',
      answer: 'The third commandment forbiddeth all profaning or abusing of any thing whereby God maketh himself known.',
      proof_texts: [
        { reference: 'Mal. 1:6-7', text: 'A son honoureth his father, and a servant his master: if then I be a father, where is mine honour? and if I be a master, where is my fear? saith the LORD of hosts.' },
        { reference: 'Mal. 2:2', text: 'If ye will not hear, and if ye will not lay it to heart, to give glory unto my name, saith the LORD of hosts, I will even send a curse upon you.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 56,
      section: 'Unit V', section_name: 'The Moral Law',
      question: 'What is the reason annexed to the third commandment?',
      answer: 'The reason annexed to the third commandment is that however the breakers of this commandment may escape punishment from men, yet the Lord our God will not suffer them to escape his righteous judgment.',
      proof_texts: [
        { reference: 'Deut. 28:58-59', text: 'That thou mayest fear this glorious and fearful name, THE LORD THY GOD; Then the LORD will make thy plagues wonderful, and the plagues of thy seed, even great plagues.' },
        { reference: '1 Sam. 2:12', text: 'Now the sons of Eli were sons of Belial; they knew not the LORD.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 57,
      section: 'Unit V', section_name: 'The Moral Law',
      question: 'Which is the fourth commandment?',
      answer: 'The fourth commandment is, Remember the sabbath-day, to keep it holy. Six days shalt thou labor, and do all thy work: but the seventh day is the sabbath of the Lord thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, thy man-servant, nor thy maid-servant, nor thy cattle, nor thy stranger that is within thy gates: for in six days the Lord made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore the Lord blessed the sabbath-day, and hallowed it.',
      proof_texts: [
        { reference: 'Exod. 20:8-11', text: 'Remember the sabbath day, to keep it holy. Six days shalt thou labour, and do all thy work: But the seventh day is the sabbath of the LORD thy God: in it thou shalt not do any work.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 58,
      section: 'Unit V', section_name: 'The Moral Law',
      question: 'What is required in the fourth commandment?',
      answer: 'The fourth commandment requireth the keeping holy to God such set times as he hath appointed in his word; expressly one whole day in seven, to be a holy sabbath to himself.',
      proof_texts: [
        { reference: 'Lev. 19:30', text: 'Ye shall keep my sabbaths, and reverence my sanctuary: I am the LORD.' },
        { reference: 'Deut. 5:12', text: 'Keep the sabbath day to sanctify it, as the LORD thy God hath commanded thee.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 59,
      section: 'Unit V', section_name: 'The Moral Law',
      question: 'Which day of the seven hath God appointed to be the weekly sabbath?',
      answer: 'From the beginning of the world to the resurrection of Christ, God appointed the seventh day of the week to be the weekly sabbath; and the first day of the week ever since, to continue to the end of the world, which is the Christian sabbath.',
      proof_texts: [
        { reference: 'Gen. 2:3', text: 'And God blessed the seventh day, and sanctified it: because that in it he had rested from all his work which God created and made.' },
        { reference: 'Rev. 1:10', text: "I was in the Spirit on the Lord's day, and heard behind me a great voice, as of a trumpet." },
        { reference: 'Mark 16:2', text: 'And very early in the morning the first day of the week, they came unto the sepulchre at the rising of the sun.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 60,
      section: 'Unit V', section_name: 'The Moral Law',
      question: 'How is the sabbath to be sanctified?',
      answer: "The sabbath is to be sanctified by a holy resting all that day, even from such worldly employments and recreations as are lawful on other days; and spending the whole time in the public and private exercises of God's worship, except so much as is to be taken up in the works of necessity and mercy.",
      proof_texts: [
        { reference: 'Isa. 58:13-14', text: 'If thou turn away thy foot from the sabbath, from doing thy pleasure on my holy day; and call the sabbath a delight, the holy of the LORD, honourable...then shalt thou delight thyself in the LORD.' },
        { reference: 'Matt. 12:11-12', text: 'And he said unto them, What man shall there be among you, that shall have one sheep, and if it fall into a pit on the sabbath day, will he not lay hold on it, and lift it out?' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 61,
      section: 'Unit V', section_name: 'The Moral Law',
      question: 'What is forbidden in the fourth commandment?',
      answer: 'The fourth commandment forbiddeth the omission or careless performance of the duties required, and the profaning the day by idleness, or doing that which is in itself sinful, or by unnecessary thoughts, words, or works, about worldly employments or recreations.',
      proof_texts: [
        { reference: 'Ezek. 22:26', text: 'Her priests have violated my law, and have profaned mine holy things...and have hid their eyes from my sabbaths.' },
        { reference: 'Neh. 13:15', text: 'In those days saw I in Judah some treading wine presses on the sabbath.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 62,
      section: 'Unit V', section_name: 'The Moral Law',
      question: 'What are the reasons annexed to the fourth commandment?',
      answer: "The reasons annexed to the fourth commandment are, God's allowing us six days of the week for our own employments, his challenging a special propriety in the seventh, his own example, and his blessing the sabbath day.",
      proof_texts: [
        { reference: 'Exod. 20:9-11', text: 'Six days shalt thou labour, and do all thy work...for in six days the LORD made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore the LORD blessed the sabbath day, and hallowed it.' }
      ]
    },

    // ─── Unit VI: Our Duty to Others (Q63–81) ─────────────────────────────────
    {
      catechism_id: 'baptist1695', number: 63,
      section: 'Unit VI', section_name: 'Our Duty to Others',
      question: 'Which is the fifth commandment?',
      answer: 'The fifth commandment is, Honor thy father and thy mother: that thy days may be long upon the land which the Lord thy God giveth thee.',
      proof_texts: [
        { reference: 'Exod. 20:12', text: 'Honour thy father and thy mother: that thy days may be long upon the land which the LORD thy God giveth thee.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 64,
      section: 'Unit VI', section_name: 'Our Duty to Others',
      question: 'What is required in the fifth commandment?',
      answer: 'The fifth commandment requireth the preserving the honor, and performing the duties, belonging to every one in their several places and relations, as superiors, inferiors, or equals.',
      proof_texts: [
        { reference: 'Rom. 13:1', text: 'Let every soul be subject unto the higher powers. For there is no power but of God: the powers that be are ordained of God.' },
        { reference: 'Eph. 5:21', text: 'Submitting yourselves one to another in the fear of God.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 65,
      section: 'Unit VI', section_name: 'Our Duty to Others',
      question: 'What is forbidden in the fifth commandment?',
      answer: 'The fifth commandment forbiddeth the neglecting of, or doing any thing against, the honor and duty which belongeth to every one in their several places and relations.',
      proof_texts: [
        { reference: 'Matt. 15:4-6', text: 'For God commanded, saying, Honour thy father and mother: and, He that curseth father or mother, let him die the death.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 66,
      section: 'Unit VI', section_name: 'Our Duty to Others',
      question: 'What is the reason annexed to the fifth commandment?',
      answer: "The reason annexed to the fifth commandment is a promise of long life and prosperity (as far as it shall serve for God's glory and their own good) to all such as keep this commandment.",
      proof_texts: [
        { reference: 'Eph. 6:2-3', text: 'Honour thy father and mother; (which is the first commandment with promise;) That it may be well with thee, and thou mayest live long on the earth.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 67,
      section: 'Unit VI', section_name: 'Our Duty to Others',
      question: 'Which is the sixth commandment?',
      answer: 'The sixth commandment is, Thou shalt not kill.',
      proof_texts: [
        { reference: 'Exod. 20:13', text: 'Thou shalt not kill.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 68,
      section: 'Unit VI', section_name: 'Our Duty to Others',
      question: 'What is required in the sixth commandment?',
      answer: 'The sixth commandment requireth all lawful endeavors to preserve our own life, and the life of others.',
      proof_texts: [
        { reference: 'Eph. 5:28-29', text: 'So ought men to love their wives as their own bodies. He that loveth his wife loveth himself. For no man ever yet hated his own flesh; but nourisheth and cherisheth it.' },
        { reference: 'Ps. 82:3-4', text: 'Defend the poor and fatherless: do justice to the afflicted and needy. Deliver the poor and needy: rid them out of the hand of the wicked.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 69,
      section: 'Unit VI', section_name: 'Our Duty to Others',
      question: 'What is forbidden in the sixth commandment?',
      answer: 'The sixth commandment forbiddeth the taking away of our own life, or the life of our neighbor, unjustly, or whatsoever tendeth thereunto.',
      proof_texts: [
        { reference: 'Gen. 9:6', text: "Whoso sheddeth man's blood, by man shall his blood be shed: for in the image of God made he man." },
        { reference: 'Matt. 5:21-22', text: 'Ye have heard that it was said by them of old time, Thou shalt not kill...But I say unto you, That whosoever is angry with his brother without a cause shall be in danger of the judgment.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 70,
      section: 'Unit VI', section_name: 'Our Duty to Others',
      question: 'Which is the seventh commandment?',
      answer: 'The seventh commandment is, Thou shalt not commit adultery.',
      proof_texts: [
        { reference: 'Exod. 20:14', text: 'Thou shalt not commit adultery.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 71,
      section: 'Unit VI', section_name: 'Our Duty to Others',
      question: 'What is required in the seventh commandment?',
      answer: "The seventh commandment requireth the preservation of our own and our neighbor's chastity, in heart, speech, and behavior.",
      proof_texts: [
        { reference: '1 Cor. 7:2', text: 'Nevertheless, to avoid fornication, let every man have his own wife, and let every woman have her own husband.' },
        { reference: '1 Thess. 4:3-5', text: 'For this is the will of God, even your sanctification, that ye should abstain from fornication.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 72,
      section: 'Unit VI', section_name: 'Our Duty to Others',
      question: 'What is forbidden in the seventh commandment?',
      answer: 'The seventh commandment forbiddeth all unchaste thoughts, words, and actions.',
      proof_texts: [
        { reference: 'Matt. 5:28', text: 'But I say unto you, That whosoever looketh on a woman to lust after her hath committed adultery with her already in his heart.' },
        { reference: 'Eph. 5:3-4', text: 'But fornication, and all uncleanness, or covetousness, let it not be once named among you, as becometh saints; Neither filthiness, nor foolish talking, nor jesting, which are not convenient.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 73,
      section: 'Unit VI', section_name: 'Our Duty to Others',
      question: 'Which is the eighth commandment?',
      answer: 'The eighth commandment is, Thou shalt not steal.',
      proof_texts: [
        { reference: 'Exod. 20:15', text: 'Thou shalt not steal.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 74,
      section: 'Unit VI', section_name: 'Our Duty to Others',
      question: 'What is required in the eighth commandment?',
      answer: 'The eighth commandment requireth the lawful procuring and furthering the wealth and outward estate of ourselves and others.',
      proof_texts: [
        { reference: 'Eph. 4:28', text: 'Let him that stole steal no more: but rather let him labour, working with his hands the thing which is good, that he may have to give to him that needeth.' },
        { reference: 'Lev. 25:35', text: 'And if thy brother be waxen poor, and fallen in decay with thee; then thou shalt relieve him.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 75,
      section: 'Unit VI', section_name: 'Our Duty to Others',
      question: 'What is forbidden in the eighth commandment?',
      answer: "The eighth commandment forbiddeth whatsoever doth or may unjustly hinder our own or our neighbor's wealth or outward estate.",
      proof_texts: [
        { reference: 'Prov. 11:1', text: 'A false balance is abomination to the LORD: but a just weight is his delight.' },
        { reference: '1 Tim. 5:8', text: 'But if any provide not for his own, and specially for those of his own house, he hath denied the faith, and is worse than an infidel.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 76,
      section: 'Unit VI', section_name: 'Our Duty to Others',
      question: 'Which is the ninth commandment?',
      answer: 'The ninth commandment is, Thou shalt not bear false witness against thy neighbor.',
      proof_texts: [
        { reference: 'Exod. 20:16', text: 'Thou shalt not bear false witness against thy neighbour.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 77,
      section: 'Unit VI', section_name: 'Our Duty to Others',
      question: 'What is required in the ninth commandment?',
      answer: "The ninth commandment requireth the maintaining and promoting of truth between man and man, and of our own and our neighbor's good name, especially in witness-bearing.",
      proof_texts: [
        { reference: 'Zech. 8:16', text: 'These are the things that ye shall do; Speak ye every man the truth to his neighbour; execute the judgment of truth and peace in your gates.' },
        { reference: '3 John 1:12', text: 'Demetrius hath good report of all men, and of the truth itself: yea, and we also bear record; and ye know that our record is true.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 78,
      section: 'Unit VI', section_name: 'Our Duty to Others',
      question: 'What is forbidden in the ninth commandment?',
      answer: "The ninth commandment forbiddeth whatsoever is prejudicial to truth, or injurious to our own or our neighbor's good name.",
      proof_texts: [
        { reference: 'Prov. 19:5', text: 'A false witness shall not be unpunished, and he that speaketh lies shall not escape.' },
        { reference: 'Ps. 15:3', text: 'He that backbiteth not with his tongue, nor doeth evil to his neighbour, nor taketh up a reproach against his neighbour.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 79,
      section: 'Unit VI', section_name: 'Our Duty to Others',
      question: "Which is the tenth commandment?",
      answer: "The tenth commandment is, Thou shalt not covet thy neighbor's house, thou shalt not covet thy neighbor's wife, nor his man-servant, nor his maid-servant, nor his ox, nor his ass, nor any thing that is thy neighbor's.",
      proof_texts: [
        { reference: 'Exod. 20:17', text: "Thou shalt not covet thy neighbour's house, thou shalt not covet thy neighbour's wife, nor his manservant, nor his maidservant, nor his ox, nor his ass, nor any thing that is thy neighbour's." }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 80,
      section: 'Unit VI', section_name: 'Our Duty to Others',
      question: 'What is required in the tenth commandment?',
      answer: "The tenth commandment requireth full contentment with our own condition, with a right and charitable frame of spirit toward our neighbor, and all that is his.",
      proof_texts: [
        { reference: 'Heb. 13:5', text: 'Let your conversation be without covetousness; and be content with such things as ye have: for he hath said, I will never leave thee, nor forsake thee.' },
        { reference: 'Phil. 4:11', text: 'Not that I speak in respect of want: for I have learned, in whatsoever state I am, therewith to be content.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 81,
      section: 'Unit VI', section_name: 'Our Duty to Others',
      question: 'What is forbidden in the tenth commandment?',
      answer: 'The tenth commandment forbiddeth all discontentment with our own estate, envying or grieving at the good of our neighbor, and all inordinate motions and affections to any thing that is his.',
      proof_texts: [
        { reference: '1 Cor. 10:10', text: 'Neither murmur ye, as some of them also murmured, and were destroyed of the destroyer.' },
        { reference: 'Gal. 5:26', text: 'Let us not be desirous of vain glory, provoking one another, envying one another.' },
        { reference: 'Col. 3:5', text: 'Mortify therefore your members which are upon the earth; fornication, uncleanness, inordinate affection, evil concupiscence, and covetousness, which is idolatry.' }
      ]
    },

    // ─── Unit VII: Sin and Grace (Q82–87) ─────────────────────────────────────
    {
      catechism_id: 'baptist1695', number: 82,
      section: 'Unit VII', section_name: 'Sin and Grace',
      question: 'Is any man able perfectly to keep the commandments of God?',
      answer: 'No mere man since the fall is able in this life perfectly to keep the commandments of God, but doth daily break them in thought, word, and deed.',
      proof_texts: [
        { reference: 'Eccl. 7:20', text: 'For there is not a just man upon earth, that doeth good, and sinneth not.' },
        { reference: '1 John 1:8', text: 'If we say that we have no sin, we deceive ourselves, and the truth is not in us.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 83,
      section: 'Unit VII', section_name: 'Sin and Grace',
      question: 'Are all transgressions of the law equally heinous?',
      answer: 'Some sins in themselves, and by reason of several aggravations, are more heinous in the sight of God than others.',
      proof_texts: [
        { reference: 'John 19:11', text: 'Jesus answered, Thou couldest have no power at all against me, except it were given thee from above: therefore he that delivered me unto thee hath the greater sin.' },
        { reference: '1 John 5:16', text: 'If any man see his brother sin a sin which is not unto death, he shall ask, and he shall give him life for them that sin not unto death. There is a sin unto death.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 84,
      section: 'Unit VII', section_name: 'Sin and Grace',
      question: 'What doth every sin deserve?',
      answer: "Every sin deserveth God's wrath and curse, both in this life, and that which is to come.",
      proof_texts: [
        { reference: 'Eph. 5:6', text: 'Let no man deceive you with vain words: for because of these things cometh the wrath of God upon the children of disobedience.' },
        { reference: 'Gal. 3:10', text: 'For as many as are of the works of the law are under the curse: for it is written, Cursed is every one that continueth not in all things which are written in the book of the law to do them.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 85,
      section: 'Unit VII', section_name: 'Sin and Grace',
      question: 'What doth God require of us that we may escape his wrath and curse due to us for sin?',
      answer: 'To escape the wrath and curse of God due to us for sin, God requireth of us faith in Jesus Christ, repentance unto life, with the diligent use of all the outward means whereby Christ communicateth to us the benefits of redemption.',
      proof_texts: [
        { reference: 'Acts 20:21', text: 'Testifying both to the Jews, and also to the Greeks, repentance toward God, and faith toward our Lord Jesus Christ.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 86,
      section: 'Unit VII', section_name: 'Sin and Grace',
      question: 'What is faith in Jesus Christ?',
      answer: 'Faith in Jesus Christ is a saving grace, whereby we receive and rest upon him alone for salvation, as he is offered to us in the gospel.',
      proof_texts: [
        { reference: 'John 1:12', text: 'But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name.' },
        { reference: 'Phil. 3:9', text: 'And be found in him, not having mine own righteousness, which is of the law, but that which is through the faith of Christ, the righteousness which is of God by faith.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 87,
      section: 'Unit VII', section_name: 'Sin and Grace',
      question: 'What is repentance unto life?',
      answer: 'Repentance unto life is a saving grace, whereby a sinner, out of a true sense of his sin, and apprehension of the mercy of God in Christ, doth, with grief and hatred of his sin, turn from it unto God, with full purpose of, and endeavor after, new obedience.',
      proof_texts: [
        { reference: 'Acts 2:37-38', text: 'Now when they heard this, they were pricked in their heart...Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins.' },
        { reference: '2 Cor. 7:10', text: 'For godly sorrow worketh repentance to salvation not to be repented of: but the sorrow of the world worketh death.' }
      ]
    },

    // ─── Unit VIII: The Means of Grace (Q88–97) ───────────────────────────────
    {
      catechism_id: 'baptist1695', number: 88,
      section: 'Unit VIII', section_name: 'The Means of Grace',
      question: 'What are the outward and ordinary means whereby Christ communicateth to us the benefits of redemption?',
      answer: 'The outward and ordinary means whereby Christ communicateth to us the benefits of redemption are his ordinances, especially the word, sacraments, and prayer; all which are made effectual to the elect for salvation.',
      proof_texts: [
        { reference: 'Matt. 28:19-20', text: 'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you.' },
        { reference: 'Acts 2:42', text: "And they continued stedfastly in the apostles' doctrine and fellowship, and in breaking of bread, and in prayers." }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 89,
      section: 'Unit VIII', section_name: 'The Means of Grace',
      question: 'How is the word made effectual to salvation?',
      answer: 'The Spirit of God maketh the reading, but especially the preaching, of the word an effectual means of convincing and converting sinners, and of building them up in holiness and comfort through faith unto salvation.',
      proof_texts: [
        { reference: '1 Cor. 1:21', text: 'For after that in the wisdom of God the world by wisdom knew not God, it pleased God by the foolishness of preaching to save them that believe.' },
        { reference: 'Acts 20:32', text: 'And now, brethren, I commend you to God, and to the word of his grace, which is able to build you up, and to give you an inheritance among all them which are sanctified.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 90,
      section: 'Unit VIII', section_name: 'The Means of Grace',
      question: 'How is the word to be read and heard, that it may become effectual to salvation?',
      answer: 'That the word may become effectual to salvation, we must attend thereunto with diligence, preparation, and prayer; receive it with faith and love; lay it up in our hearts; and practice it in our lives.',
      proof_texts: [
        { reference: 'Prov. 8:34', text: 'Blessed is the man that heareth me, watching daily at my gates, waiting at the posts of my doors.' },
        { reference: 'James 1:19-25', text: 'Wherefore, my beloved brethren, let every man be swift to hear, slow to speak, slow to wrath...But whoso looketh into the perfect law of liberty, and continueth therein, he being not a forgetful hearer, but a doer of the work, this man shall be blessed in his deed.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 91,
      section: 'Unit VIII', section_name: 'The Means of Grace',
      question: 'How do the sacraments become effectual means of salvation?',
      answer: 'The sacraments become effectual means of salvation, not from any virtue in them, or in him that doth administer them; but only by the blessing of Christ, and the working of his Spirit in them that by faith receive them.',
      proof_texts: [
        { reference: '1 Pet. 3:21', text: 'The like figure whereunto even baptism doth also now save us (not the putting away of the filth of the flesh, but the answer of a good conscience toward God,) by the resurrection of Jesus Christ.' },
        { reference: '1 Cor. 3:6-7', text: 'I have planted, Apollos watered; but God gave the increase. So then neither is he that planteth any thing, neither he that watereth; but God that giveth the increase.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 92,
      section: 'Unit VIII', section_name: 'The Means of Grace',
      question: 'What is a sacrament?',
      answer: 'A sacrament is an holy ordinance instituted by Christ, wherein, by sensible signs, Christ and the benefits of the new covenant are represented, sealed, and applied to believers.',
      proof_texts: [
        { reference: 'Matt. 26:26-28', text: 'And as they were eating, Jesus took bread, and blessed it, and brake it, and gave it to the disciples...For this is my blood of the new testament, which is shed for many for the remission of sins.' },
        { reference: 'Matt. 28:19', text: 'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 93,
      section: 'Unit VIII', section_name: 'The Means of Grace',
      question: 'Which are the sacraments of the New Testament?',
      answer: "The sacraments of the New Testament are baptism and the Lord's supper.",
      proof_texts: [
        { reference: 'Matt. 28:19', text: 'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost.' },
        { reference: '1 Cor. 11:23-26', text: 'For I have received of the Lord that which also I delivered unto you, That the Lord Jesus the same night in which he was betrayed took bread...For as often as ye eat this bread, and drink this cup, ye do shew the Lord\'s death till he come.' }
      ]
    },
    // ─── Q94–97: Baptist modifications on baptism ─────────────────────────────
    {
      catechism_id: 'baptist1695', number: 94,
      section: 'Unit VIII', section_name: 'The Means of Grace',
      question: 'What is baptism?',
      answer: 'Baptism is an ordinance of the New Testament, ordained by Jesus Christ, to be unto the party baptized, a sign of his fellowship with him, in his death and resurrection; of his being engrafted into him; of remission of sins; and of giving up into God, through Jesus Christ, to live and walk in newness of life.',
      proof_texts: [
        { reference: 'Matt. 28:19', text: 'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost.' },
        { reference: 'Rom. 6:3-4', text: 'Know ye not, that so many of us as were baptized into Jesus Christ were baptized into his death? Therefore we are buried with him by baptism into death: that like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life.' },
        { reference: 'Acts 2:38', text: 'Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost.' },
        { reference: 'Gal. 3:27', text: 'For as many of you as have been baptized into Christ have put on Christ.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 95,
      section: 'Unit VIII', section_name: 'The Means of Grace',
      question: 'To whom is baptism to be administered?',
      answer: 'Baptism is not to be administered to any that are out of the visible church, and so strangers from the covenant of promise, till they profess their faith in Christ, and obedience to him, but to none other.',
      proof_texts: [
        { reference: 'Acts 2:38', text: 'Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins.' },
        { reference: 'Acts 8:36-38', text: 'And as they went on their way, they came unto a certain water: and the eunuch said, See, here is water; what doth hinder me to be baptized?...And he commanded the chariot to stand still: and they went down both into the water, both Philip and the eunuch; and he baptized him.' },
        { reference: 'Matt. 28:19', text: 'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 96,
      section: 'Unit VIII', section_name: 'The Means of Grace',
      question: 'Is the immersion of the person in water necessary for the due administration of baptism?',
      answer: 'Immersion, or dipping of the person in water, is necessary to the due administration of baptism.',
      proof_texts: [
        { reference: 'Matt. 3:16', text: 'And Jesus, when he was baptized, went up straightway out of the water.' },
        { reference: 'John 3:23', text: 'And John also was baptizing in Aenon near to Salim, because there was much water there: and they came, and were baptized.' },
        { reference: 'Rom. 6:4', text: 'Therefore we are buried with him by baptism into death: that like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 97,
      section: 'Unit VIII', section_name: 'The Means of Grace',
      question: "What is the Lord's Supper?",
      answer: "The Lord's Supper is an ordinance of the New Testament, ordained by Jesus Christ; wherein, by giving and receiving bread and wine, according to his appointment, his death is showed forth; and the worthy receivers are, not after a corporal and carnal manner, but by faith, made partakers of his body and blood, with all his benefits, to their spiritual nourishment and growth in grace.",
      proof_texts: [
        { reference: '1 Cor. 11:23-26', text: 'For I have received of the Lord that which also I delivered unto you, That the Lord Jesus the same night in which he was betrayed took bread...For as often as ye eat this bread, and drink this cup, ye do shew the Lord\'s death till he come.' },
        { reference: '1 Cor. 10:16', text: 'The cup of blessing which we bless, is it not the communion of the blood of Christ? The bread which we break, is it not the communion of the body of Christ?' }
      ]
    },

    // ─── Unit IX: Prayer (Q98–107) ────────────────────────────────────────────
    {
      catechism_id: 'baptist1695', number: 98,
      section: 'Unit IX', section_name: 'Prayer',
      question: 'What is prayer?',
      answer: 'Prayer is an offering up of our desires unto God, for things agreeable to his will, in the name of Christ, with confession of our sins, and thankful acknowledgment of his mercies.',
      proof_texts: [
        { reference: 'Phil. 4:6', text: 'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.' },
        { reference: '1 John 5:14', text: 'And this is the confidence that we have in him, that, if we ask any thing according to his will, he heareth us.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 99,
      section: 'Unit IX', section_name: 'Prayer',
      question: 'What rule hath God given for our direction in prayer?',
      answer: "The whole word of God is of use to direct us in prayer; but the special rule of direction is that form of prayer which Christ taught his disciples, commonly called the Lord's prayer.",
      proof_texts: [
        { reference: 'Matt. 6:9-13', text: 'After this manner therefore pray ye: Our Father which art in heaven, Hallowed be thy name. Thy kingdom come, Thy will be done in earth, as it is in heaven...' },
        { reference: 'Luke 11:2', text: 'And he said unto them, When ye pray, say, Our Father which art in heaven, Hallowed be thy name. Thy kingdom come. Thy will be done, as in heaven, so in earth.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 100,
      section: 'Unit IX', section_name: 'Prayer',
      question: "What doth the preface of the Lord's prayer teach us?",
      answer: "The preface of the Lord's prayer, which is, Our Father which art in heaven, teacheth us to draw near to God with all holy reverence and confidence, as children to a father, able and ready to help us; and that we should pray with and for others.",
      proof_texts: [
        { reference: 'Isa. 64:9', text: 'Be not wroth very sore, O LORD, neither remember iniquity for ever: behold, see, we beseech thee, we are all thy people.' },
        { reference: 'Luke 11:13', text: 'If ye then, being evil, know how to give good gifts unto your children: how much more shall your heavenly Father give the Holy Spirit to them that ask him?' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 101,
      section: 'Unit IX', section_name: 'Prayer',
      question: 'What do we pray for in the first petition?',
      answer: 'In the first petition, which is, Hallowed be thy name, we pray that God would enable us and others to glorify him in all that whereby he maketh himself known; and that he would dispose all things to his own glory.',
      proof_texts: [
        { reference: 'Ps. 67:1-3', text: 'God be merciful unto us, and bless us; and cause his face to shine upon us...Let the people praise thee, O God; let all the people praise thee.' },
        { reference: 'Ps. 83:18', text: 'That men may know that thou, whose name alone is JEHOVAH, art the most high over all the earth.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 102,
      section: 'Unit IX', section_name: 'Prayer',
      question: 'What do we pray for in the second petition?',
      answer: "In the second petition, which is, Thy kingdom come, we pray that Satan's kingdom may be destroyed; and that the kingdom of grace may be advanced, ourselves and others brought into it, and kept in it; and that the kingdom of glory may be hastened.",
      proof_texts: [
        { reference: 'Ps. 68:1', text: 'Let God arise, let his enemies be scattered: let them also that hate him flee before him.' },
        { reference: '2 Thess. 3:1', text: 'Finally, brethren, pray for us, that the word of the Lord may have free course, and be glorified, even as it is with you.' },
        { reference: 'Rev. 22:20', text: 'He which testifieth these things saith, Surely I come quickly. Amen. Even so, come, Lord Jesus.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 103,
      section: 'Unit IX', section_name: 'Prayer',
      question: 'What do we pray for in the third petition?',
      answer: 'In the third petition, which is, Thy will be done in earth, as it is in heaven, we pray that God, by his grace, would make us able and willing to know, obey, and submit to his will in all things, as the angels do in heaven.',
      proof_texts: [
        { reference: 'Ps. 119:34-36', text: 'Give me understanding, and I shall keep thy law; yea, I shall observe it with my whole heart. Make me to go in the path of thy commandments; for therein do I delight.' },
        { reference: 'Acts 21:14', text: 'And when he would not be persuaded, we ceased, saying, The will of the Lord be done.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 104,
      section: 'Unit IX', section_name: 'Prayer',
      question: 'What do we pray for in the fourth petition?',
      answer: "In the fourth petition, which is, Give us this day our daily bread, we pray that of God's free gift we may receive a competent portion of the good things of this life, and enjoy his blessing with them.",
      proof_texts: [
        { reference: 'Prov. 30:8-9', text: 'Remove far from me vanity and lies: give me neither poverty nor riches; feed me with food convenient for me: lest I be full, and deny thee, and say, Who is the LORD?' },
        { reference: '1 Tim. 4:4-5', text: 'For every creature of God is good, and nothing to be refused, if it be received with thanksgiving: for it is sanctified by the word of God and prayer.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 105,
      section: 'Unit IX', section_name: 'Prayer',
      question: 'What do we pray for in the fifth petition?',
      answer: "In the fifth petition, which is, And forgive us our debts, as we forgive our debtors, we pray that God, for Christ's sake, would freely pardon all our sins; which we are the rather encouraged to ask, because by his grace we are enabled from the heart to forgive others.",
      proof_texts: [
        { reference: 'Ps. 51:1', text: 'Have mercy upon me, O God, according to thy lovingkindness: according unto the multitude of thy tender mercies blot out my transgressions.' },
        { reference: 'Matt. 18:35', text: 'So likewise shall my heavenly Father do also unto you, if ye from your hearts forgive not every one his brother their trespasses.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 106,
      section: 'Unit IX', section_name: 'Prayer',
      question: 'What do we pray for in the sixth petition?',
      answer: 'In the sixth petition, which is, And lead us not into temptation, but deliver us from evil, we pray that God would either keep us from being tempted to sin, or support and deliver us when we are tempted.',
      proof_texts: [
        { reference: 'Matt. 26:41', text: 'Watch and pray, that ye enter not into temptation: the spirit indeed is willing, but the flesh is weak.' },
        { reference: '1 Cor. 10:13', text: 'There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able; but will with the temptation also make a way to escape.' }
      ]
    },
    {
      catechism_id: 'baptist1695', number: 107,
      section: 'Unit IX', section_name: 'Prayer',
      question: "What doth the conclusion of the Lord's prayer teach us?",
      answer: "The conclusion of the Lord's prayer, which is, For thine is the kingdom, and the power, and the glory, for ever, Amen, teacheth us to take our encouragement in prayer from God only, and in our prayers to praise him, ascribing kingdom, power, and glory to him; and, in testimony of our desire and assurance to be heard, we say, Amen.",
      proof_texts: [
        { reference: '1 Chron. 29:13', text: 'Now therefore, our God, we thank thee, and praise thy glorious name.' },
        { reference: 'Rev. 22:20', text: 'He which testifieth these things saith, Surely I come quickly. Amen. Even so, come, Lord Jesus.' },
        { reference: '1 Cor. 14:16', text: 'Else when thou shalt bless with the spirit, how shall he that occupieth the room of the unlearned say Amen at thy giving of thanks, seeing he understandeth not what thou sayest?' }
      ]
    },
  ];

  for (const q of questions) {
    const { number, section, section_name, question, answer, proof_texts } = q;
    await sql`
      INSERT INTO catechism_questions (catechism_id, number, section, section_name, question, answer, proof_texts)
      VALUES ('baptist1695', ${number}, ${section}, ${section_name}, ${question}, ${answer}, ${JSON.stringify(proof_texts)})
      ON CONFLICT (catechism_id, number) DO UPDATE SET
        question=EXCLUDED.question, answer=EXCLUDED.answer,
        proof_texts=EXCLUDED.proof_texts, section=EXCLUDED.section, section_name=EXCLUDED.section_name
    `;
  }

  console.log('  ✓ Baptist Catechism 1695: 107 questions');
}
