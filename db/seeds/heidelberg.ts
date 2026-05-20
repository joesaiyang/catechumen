// Heidelberg Catechism (1563) — 129 questions across 52 Lord's Days
// Public domain text. Traditional English translation.

interface HCQuestion {
  number: number;
  section: string;
  section_name: string;
  question: string;
  answer: string;
  proof_texts: { reference: string; text: string }[];
}

const QUESTIONS: HCQuestion[] = [
  // ── LORD'S DAY 1 ──────────────────────────────────────────────────────────
  {
    number: 1,
    section: "Lord's Day 1",
    section_name: "Our Only Comfort",
    question: "What is your only comfort in life and in death?",
    answer: "That I am not my own, but belong—body and soul, in life and in death—to my faithful Savior, Jesus Christ. He has fully paid for all my sins with his precious blood, and has set me free from the tyranny of the devil. He also watches over me in such a way that not a hair can fall from my head without the will of my Father in heaven; in fact, all things must work together for my salvation. Because I belong to him, Christ, by his Holy Spirit, assures me of eternal life and makes me wholeheartedly willing and ready from now on to live for him.",
    proof_texts: [
      { reference: "Romans 14:7-8", text: "For none of us lives to himself, and none of us dies to himself. For if we live, we live to the Lord, and if we die, we die to the Lord. So then, whether we live or whether we die, we are the Lord's." },
      { reference: "1 Corinthians 6:19-20", text: "You are not your own, for you were bought with a price. So glorify God in your body." },
    ],
  },
  {
    number: 2,
    section: "Lord's Day 1",
    section_name: "Our Only Comfort",
    question: "What must you know to live and die in the joy of this comfort?",
    answer: "Three things: first, how great my sin and misery are; second, how I am set free from all my sins and their misery; third, how I am to thank God for such deliverance.",
    proof_texts: [
      { reference: "Romans 3:10", text: "As it is written: 'None is righteous, no, not one.'" },
      { reference: "John 17:3", text: "And this is eternal life, that they know you, the only true God, and Jesus Christ whom you have sent." },
    ],
  },
  // ── LORD'S DAY 2 ──────────────────────────────────────────────────────────
  {
    number: 3,
    section: "Lord's Day 2",
    section_name: "Our Misery",
    question: "Where do you learn of your sin and misery?",
    answer: "From the law of God.",
    proof_texts: [
      { reference: "Romans 3:20", text: "For by works of the law no human being will be justified in his sight, since through the law comes knowledge of sin." },
    ],
  },
  {
    number: 4,
    section: "Lord's Day 2",
    section_name: "Our Misery",
    question: "What does the law of God require of us?",
    answer: "Christ teaches us this in summary in Matthew 22:37-40: 'You shall love the Lord your God with all your heart and with all your soul and with all your mind. This is the great and first commandment. And a second is like it: You shall love your neighbor as yourself. On these two commandments depend all the Law and the Prophets.'",
    proof_texts: [
      { reference: "Matthew 22:37-40", text: "You shall love the Lord your God with all your heart and with all your soul and with all your mind. This is the great and first commandment. And a second is like it: You shall love your neighbor as yourself." },
      { reference: "Deuteronomy 6:5", text: "You shall love the Lord your God with all your heart and with all your soul and with all your might." },
    ],
  },
  {
    number: 5,
    section: "Lord's Day 2",
    section_name: "Our Misery",
    question: "Can you live up to all this perfectly?",
    answer: "No. I have a natural tendency to hate God and my neighbor.",
    proof_texts: [
      { reference: "Romans 3:23", text: "For all have sinned and fall short of the glory of God." },
      { reference: "Romans 8:7", text: "For the mind that is set on the flesh is hostile to God, for it does not submit to God's law; indeed, it cannot." },
    ],
  },
  // ── LORD'S DAY 3 ──────────────────────────────────────────────────────────
  {
    number: 6,
    section: "Lord's Day 3",
    section_name: "Our Corrupt Nature",
    question: "Did God create people so wicked and perverse?",
    answer: "No. God created them good and in his own image, that is, in true righteousness and holiness, so that they might truly know God their creator, love him with all their heart, and live with God in eternal happiness, to praise and glorify him.",
    proof_texts: [
      { reference: "Genesis 1:31", text: "And God saw everything that he had made, and behold, it was very good." },
      { reference: "Colossians 3:10", text: "And have put on the new self, which is being renewed in knowledge after the image of its creator." },
    ],
  },
  {
    number: 7,
    section: "Lord's Day 3",
    section_name: "Our Corrupt Nature",
    question: "Then where does this corrupt human nature come from?",
    answer: "From the fall and disobedience of our first parents, Adam and Eve, in Paradise. This fall has so poisoned our nature that we are born sinners—corrupt from conception on.",
    proof_texts: [
      { reference: "Romans 5:12", text: "Therefore, just as sin came into the world through one man, and death through sin, and so death spread to all men because all sinned." },
      { reference: "Psalm 51:5", text: "Behold, I was brought forth in iniquity, and in sin did my mother conceive me." },
    ],
  },
  {
    number: 8,
    section: "Lord's Day 3",
    section_name: "Our Corrupt Nature",
    question: "But are we so corrupt that we are totally unable to do any good and inclined toward all evil?",
    answer: "Yes, unless we are born again by the Spirit of God.",
    proof_texts: [
      { reference: "John 3:5", text: "Jesus answered, 'Truly, truly, I say to you, unless one is born of water and the Spirit, he cannot enter the kingdom of God.'" },
      { reference: "Genesis 6:5", text: "The Lord saw that the wickedness of man was great in the earth, and that every intention of the thoughts of his heart was only evil continually." },
    ],
  },
  // ── LORD'S DAY 4 ──────────────────────────────────────────────────────────
  {
    number: 9,
    section: "Lord's Day 4",
    section_name: "God's Wrath Against Sin",
    question: "But doesn't God do us an injustice by requiring in his law what we are unable to do?",
    answer: "No. God created humans with the ability to keep the law. They, however, tempted by the devil, in reckless disobedience, robbed themselves and all their descendants of these gifts.",
    proof_texts: [
      { reference: "Ephesians 4:24", text: "And to put on the new self, created after the likeness of God in true righteousness and holiness." },
      { reference: "Romans 5:18-19", text: "Therefore, as one trespass led to condemnation for all men, so one act of righteousness leads to justification and life for all men." },
    ],
  },
  {
    number: 10,
    section: "Lord's Day 4",
    section_name: "God's Wrath Against Sin",
    question: "Will God permit such disobedience and rebellion to go unpunished?",
    answer: "Certainly not. He is terribly angry about the sin we are born with as well as the sins we personally commit. As a just judge he punishes them now and in eternity. He has declared: 'Cursed is everyone who does not continue to do everything written in the Book of the Law.'",
    proof_texts: [
      { reference: "Galatians 3:10", text: "For all who rely on works of the law are under a curse; for it is written, 'Cursed be everyone who does not abide by all things written in the Book of the Law, and do them.'" },
      { reference: "Romans 1:18", text: "For the wrath of God is revealed from heaven against all ungodliness and unrighteousness of men, who by their unrighteousness suppress the truth." },
    ],
  },
  {
    number: 11,
    section: "Lord's Day 4",
    section_name: "God's Wrath Against Sin",
    question: "But isn't God also merciful?",
    answer: "God is certainly merciful, but he is also just. His justice demands that sin, committed against his supreme majesty, be punished with the supreme penalty—eternal punishment of body and soul.",
    proof_texts: [
      { reference: "Exodus 34:6-7", text: "The Lord, the Lord, a God merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness... but who will by no means clear the guilty." },
      { reference: "Romans 2:5", text: "But because of your hard and impenitent heart you are storing up wrath for yourself on the day of wrath when God's righteous judgment will be revealed." },
    ],
  },
  // ── LORD'S DAY 5 ──────────────────────────────────────────────────────────
  {
    number: 12,
    section: "Lord's Day 5",
    section_name: "Our Deliverance—the Mediator",
    question: "According to God's righteous judgment we deserve punishment both in this world and forever after: how then can we escape this punishment and return to God's favor?",
    answer: "God requires that his justice be satisfied. Therefore the claims of his justice must be paid in full, either by ourselves or another.",
    proof_texts: [
      { reference: "Romans 8:3-4", text: "For God has done what the law, weakened by the flesh, could not do. By sending his own Son in the likeness of sinful flesh and for sin, he condemned sin in the flesh." },
      { reference: "Exodus 23:7", text: "Keep far from a false charge, and do not kill the innocent and righteous, for I will not acquit the wicked." },
    ],
  },
  {
    number: 13,
    section: "Lord's Day 5",
    section_name: "Our Deliverance—the Mediator",
    question: "Can we pay this debt ourselves?",
    answer: "Certainly not. Actually, we increase our guilt every day.",
    proof_texts: [
      { reference: "Matthew 6:12", text: "And forgive us our debts, as we also have forgiven our debtors." },
      { reference: "Romans 2:4-5", text: "Or do you presume on the riches of his kindness and forbearance and patience, not knowing that God's kindness is meant to lead you to repentance?" },
    ],
  },
  {
    number: 14,
    section: "Lord's Day 5",
    section_name: "Our Deliverance—the Mediator",
    question: "Can another creature—any at all—pay this debt for us?",
    answer: "No. To begin with, God will not punish another creature for what a human is guilty of. Besides, no mere creature can bear the weight of God's eternal anger against sin and release others from it.",
    proof_texts: [
      { reference: "Hebrews 2:14-15", text: "Since therefore the children share in flesh and blood, he himself likewise partook of the same things, that through death he might destroy the one who has the power of death." },
      { reference: "Psalm 49:7-8", text: "Truly no man can ransom another, or give to God the price of his life, for the ransom of their life is costly and can never suffice." },
    ],
  },
  {
    number: 15,
    section: "Lord's Day 5",
    section_name: "Our Deliverance—the Mediator",
    question: "What kind of mediator and deliverer should we look for then?",
    answer: "One who is truly human and truly righteous, yet more powerful than all creatures, that is, one who is also truly God.",
    proof_texts: [
      { reference: "1 Timothy 2:5", text: "For there is one God, and there is one mediator between God and men, the man Christ Jesus." },
      { reference: "Jeremiah 23:6", text: "In his days Judah will be saved, and Israel will dwell securely. And this is the name by which he will be called: 'The Lord is our righteousness.'" },
    ],
  },
  // ── LORD'S DAY 6 ──────────────────────────────────────────────────────────
  {
    number: 16,
    section: "Lord's Day 6",
    section_name: "Christ the True Man and God",
    question: "Why must he be truly human and truly righteous?",
    answer: "God's justice demands that human nature, which has sinned, must pay for its sin; but a sinner could not pay for others.",
    proof_texts: [
      { reference: "Romans 5:15", text: "But the free gift is not like the trespass. For if many died through one man's trespass, much more have the grace of God and the free gift by the grace of that one man Jesus Christ abounded for many." },
      { reference: "1 Corinthians 15:21", text: "For as by a man came death, by a man has come also the resurrection of the dead." },
    ],
  },
  {
    number: 17,
    section: "Lord's Day 6",
    section_name: "Christ the True Man and God",
    question: "Why must he also be truly God?",
    answer: "So that, by the power of his divinity, he might bear the weight of God's anger in his humanity and earn for us and restore to us righteousness and life.",
    proof_texts: [
      { reference: "Isaiah 53:8", text: "By oppression and judgment he was taken away; and as for his generation, who considered that he was cut off out of the land of the living, stricken for the transgression of my people?" },
      { reference: "Acts 2:24", text: "God raised him up, loosing the pangs of death, because it was not possible for him to be held by it." },
    ],
  },
  {
    number: 18,
    section: "Lord's Day 6",
    section_name: "Christ the True Man and God",
    question: "And who is this mediator—true God and at the same time truly human and truly righteous?",
    answer: "Our Lord Jesus Christ, who was given us to set us completely free and to make us right with God.",
    proof_texts: [
      { reference: "Matthew 1:21", text: "She will bear a son, and you shall call his name Jesus, for he will save his people from their sins." },
      { reference: "Luke 2:11", text: "For unto you is born this day in the city of David a Savior, who is Christ the Lord." },
    ],
  },
  {
    number: 19,
    section: "Lord's Day 6",
    section_name: "Christ the True Man and God",
    question: "Where does it say so?",
    answer: "The holy gospel tells us. God himself began to reveal the gospel already in Paradise; later, he proclaimed it by the holy patriarchs and prophets, and portrayed it by the sacrifices and other ceremonies of the law; finally, he fulfilled it through his own dear Son.",
    proof_texts: [
      { reference: "Genesis 3:15", text: "I will put enmity between you and the woman, and between your offspring and her offspring; he shall bruise your head, and you shall bruise his heel." },
      { reference: "Romans 1:2", text: "Which he promised beforehand through his prophets in the holy Scriptures." },
    ],
  },
  // ── LORD'S DAY 7 ──────────────────────────────────────────────────────────
  {
    number: 20,
    section: "Lord's Day 7",
    section_name: "True Faith and the Apostles' Creed",
    question: "Are all saved through Christ just as all were lost through Adam?",
    answer: "No. Only those are saved who through true faith are grafted into Christ and accept all his blessings.",
    proof_texts: [
      { reference: "John 1:12", text: "But to all who did receive him, who believed in his name, he gave the right to become children of God." },
      { reference: "Romans 11:19-20", text: "Then you will say, 'Branches were broken off so that I might be grafted in.' That is true. They were broken off because of their unbelief, but you stand fast through faith." },
    ],
  },
  {
    number: 21,
    section: "Lord's Day 7",
    section_name: "True Faith and the Apostles' Creed",
    question: "What is true faith?",
    answer: "True faith is not only a knowledge and conviction that everything God reveals in his Word is true; it is also a deep-rooted assurance, created in me by the Holy Spirit through the gospel, that, out of sheer grace earned for us by Christ, not only others, but I too, have had my sins forgiven, have been made forever right with God, and have been granted salvation.",
    proof_texts: [
      { reference: "Hebrews 11:1", text: "Now faith is the assurance of things hoped for, the conviction of things not seen." },
      { reference: "Galatians 2:20", text: "I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me." },
    ],
  },
  {
    number: 22,
    section: "Lord's Day 7",
    section_name: "True Faith and the Apostles' Creed",
    question: "What then must a Christian believe?",
    answer: "Everything God promises us in the gospel. That gospel is summarized for us in the articles of our Christian faith—a creed beyond doubt, and confessed throughout the world.",
    proof_texts: [
      { reference: "Matthew 28:19", text: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit." },
      { reference: "John 20:31", text: "But these are written so that you may believe that Jesus is the Christ, the Son of God, and that by believing you may have life in his name." },
    ],
  },
  {
    number: 23,
    section: "Lord's Day 7",
    section_name: "True Faith and the Apostles' Creed",
    question: "What are these articles?",
    answer: "I believe in God, the Father almighty, creator of heaven and earth. I believe in Jesus Christ, his only begotten Son, our Lord, who was conceived by the Holy Spirit and born of the virgin Mary. He suffered under Pontius Pilate, was crucified, died, and was buried; he descended into hell. The third day he rose again from the dead. He ascended to heaven and is seated at the right hand of God the Father almighty. From there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic church, the communion of saints, the forgiveness of sins, the resurrection of the body, and the life everlasting. Amen.",
    proof_texts: [
      { reference: "1 Corinthians 15:3-4", text: "For I delivered to you as of first importance what I also received: that Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures." },
    ],
  },
  // ── LORD'S DAY 8 ──────────────────────────────────────────────────────────
  {
    number: 24,
    section: "Lord's Day 8",
    section_name: "The Trinity",
    question: "How are these articles divided?",
    answer: "Into three parts: God the Father and our creation; God the Son and our deliverance; God the Holy Spirit and our sanctification.",
    proof_texts: [
      { reference: "Matthew 28:19", text: "Baptizing them in the name of the Father and of the Son and of the Holy Spirit." },
      { reference: "1 Peter 1:2", text: "According to the foreknowledge of God the Father, in the sanctification of the Spirit, for obedience to Jesus Christ and for sprinkling with his blood." },
    ],
  },
  {
    number: 25,
    section: "Lord's Day 8",
    section_name: "The Trinity",
    question: "Since there is but one God, why do you speak of three: Father, Son, and Holy Spirit?",
    answer: "Because that is how God has revealed himself in his Word: these three distinct persons are one, true, eternal God.",
    proof_texts: [
      { reference: "Deuteronomy 6:4", text: "Hear, O Israel: The Lord our God, the Lord is one." },
      { reference: "2 Corinthians 13:14", text: "The grace of the Lord Jesus Christ and the love of God and the fellowship of the Holy Spirit be with you all." },
    ],
  },
  // ── LORD'S DAY 9 ──────────────────────────────────────────────────────────
  {
    number: 26,
    section: "Lord's Day 9",
    section_name: "God the Father and Creation",
    question: "What do you believe when you say, 'I believe in God, the Father almighty, creator of heaven and earth'?",
    answer: "That the eternal Father of our Lord Jesus Christ, who out of nothing created heaven and earth and everything in them, who still upholds and rules them by his eternal counsel and providence, is my God and Father because of Christ his Son. I trust him so much that I do not doubt he will provide whatever I need for body and soul, and he will turn to my good whatever adversity he sends me in this sad world. He is able to do this because he is almighty God; he desires to do this because he is a faithful Father.",
    proof_texts: [
      { reference: "Genesis 1:1", text: "In the beginning, God created the heavens and the earth." },
      { reference: "Romans 8:28", text: "And we know that for those who love God all things work together for good, for those who are called according to his purpose." },
    ],
  },
  // ── LORD'S DAY 10 ──────────────────────────────────────────────────────────
  {
    number: 27,
    section: "Lord's Day 10",
    section_name: "Providence",
    question: "What do you understand by the providence of God?",
    answer: "Providence is the almighty and ever present power of God by which he upholds, as with his hand, heaven and earth and all creatures, and so rules them that leaf and blade, rain and drought, fruitful and lean years, food and drink, health and sickness, prosperity and poverty—all things, in fact, come to us not by chance but from his fatherly hand.",
    proof_texts: [
      { reference: "Acts 17:25-28", text: "Nor is he served by human hands, as though he needed anything, since he himself gives to all mankind life and breath and everything... for 'In him we live and move and have our being.'" },
      { reference: "Matthew 10:29", text: "Are not two sparrows sold for a penny? And not one of them will fall to the ground apart from your Father." },
    ],
  },
  {
    number: 28,
    section: "Lord's Day 10",
    section_name: "Providence",
    question: "How does the knowledge of God's creation and providence help us?",
    answer: "We can be patient when things go against us, thankful when things go well, and for the future we can have good confidence in our faithful God and Father that nothing will separate us from his love. All creatures are so completely in his hand that without his will they can neither move nor be moved.",
    proof_texts: [
      { reference: "Romans 5:3-4", text: "We rejoice in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope." },
      { reference: "Romans 8:38-39", text: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord." },
    ],
  },
  // ── LORD'S DAY 11 ──────────────────────────────────────────────────────────
  {
    number: 29,
    section: "Lord's Day 11",
    section_name: "Jesus Christ Our Savior",
    question: "Why is the Son of God called 'Jesus,' meaning 'savior'?",
    answer: "Because he saves us from our sins. Salvation cannot be found in anyone else; it is futile to look for any salvation elsewhere.",
    proof_texts: [
      { reference: "Matthew 1:21", text: "She will bear a son, and you shall call his name Jesus, for he will save his people from their sins." },
      { reference: "Acts 4:12", text: "And there is salvation in no one else, for there is no other name under heaven given among men by which we must be saved." },
    ],
  },
  {
    number: 30,
    section: "Lord's Day 11",
    section_name: "Jesus Christ Our Savior",
    question: "Do those who look for their salvation and security in saints, in themselves, or elsewhere, really believe in the only savior Jesus?",
    answer: "No. Although they boast of being his, by their deeds they deny the only savior and deliverer Jesus. Either Jesus is not a perfect savior, or those who in true faith accept this savior have in him all they need for their salvation.",
    proof_texts: [
      { reference: "Galatians 5:4", text: "You are severed from Christ, you who would be justified by the law; you have fallen away from grace." },
      { reference: "Colossians 1:19-20", text: "For in him all the fullness of God was pleased to dwell, and through him to reconcile to himself all things." },
    ],
  },
  // ── LORD'S DAY 12 ──────────────────────────────────────────────────────────
  {
    number: 31,
    section: "Lord's Day 12",
    section_name: "The Anointed One and Our Anointing",
    question: "Why is he called 'Christ,' meaning 'anointed'?",
    answer: "Because he has been ordained by God the Father and has been anointed with the Holy Spirit to be our chief prophet and teacher who perfectly reveals to us the secret counsel and will of God for our deliverance; our only high priest who has set us free by the one sacrifice of his body, and who continually pleads our cause with the Father; and our eternal king who governs us by his Word and Spirit, and who guards us and keeps us in the freedom he has won for us.",
    proof_texts: [
      { reference: "Luke 4:18", text: "The Spirit of the Lord is upon me, because he has anointed me to proclaim good news to the poor." },
      { reference: "Hebrews 7:26", text: "For it was indeed fitting that we should have such a high priest, holy, innocent, unstained, separated from sinners, and exalted above the heavens." },
    ],
  },
  {
    number: 32,
    section: "Lord's Day 12",
    section_name: "The Anointed One and Our Anointing",
    question: "But why are you called a Christian?",
    answer: "Because by faith I am a member of Christ and so I share in his anointing. I am anointed to confess his name, to present myself to him as a living sacrifice of thanks, to strive with a good conscience against sin and the devil in this life, and afterward to reign with Christ over all creation for all eternity.",
    proof_texts: [
      { reference: "1 Peter 2:9", text: "But you are a chosen race, a royal priesthood, a holy nation, a people for his own possession, that you may proclaim the excellencies of him who called you out of darkness into his marvelous light." },
      { reference: "Romans 12:1", text: "I appeal to you therefore, brothers, by the mercies of God, to present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship." },
    ],
  },
  // ── LORD'S DAY 13 ──────────────────────────────────────────────────────────
  {
    number: 33,
    section: "Lord's Day 13",
    section_name: "Son of God, Our Lord",
    question: "Why is he called God's 'only begotten Son' when we also are God's children?",
    answer: "Because Christ alone is the eternal, natural Son of God. We, however, are adopted children of God—adopted by grace through Christ.",
    proof_texts: [
      { reference: "John 1:14", text: "And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth." },
      { reference: "Ephesians 1:5", text: "He predestined us for adoption to himself as sons through Jesus Christ, according to the purpose of his will." },
    ],
  },
  {
    number: 34,
    section: "Lord's Day 13",
    section_name: "Son of God, Our Lord",
    question: "Why do you call him 'our Lord'?",
    answer: "Because—not with gold or silver, but with his precious blood—he has set us free from sin and from the tyranny of the devil, and has bought us, body and soul, to be his very own.",
    proof_texts: [
      { reference: "1 Peter 1:18-19", text: "Knowing that you were ransomed from the futile ways inherited from your forefathers, not with perishable things such as silver or gold, but with the precious blood of Christ, like that of a lamb without blemish or spot." },
      { reference: "1 Corinthians 6:20", text: "For you were bought with a price. So glorify God in your body." },
    ],
  },
  // ── LORD'S DAY 14 ──────────────────────────────────────────────────────────
  {
    number: 35,
    section: "Lord's Day 14",
    section_name: "The Holy Conception and Birth",
    question: "What does it mean that he 'was conceived by the Holy Spirit and born of the virgin Mary'?",
    answer: "That the eternal Son of God, who is and remains true and eternal God, took to himself, through the working of the Holy Spirit, from the flesh and blood of the virgin Mary, a truly human nature so that he might become David's true descendant, like his brothers in every way except for sin.",
    proof_texts: [
      { reference: "Luke 1:35", text: "The angel answered her, 'The Holy Spirit will come upon you, and the power of the Most High will overshadow you; therefore the child to be born will be called holy—the Son of God.'" },
      { reference: "Hebrews 4:15", text: "For we do not have a high priest who is unable to sympathize with our weaknesses, but one who in every respect has been tempted as we are, yet without sin." },
    ],
  },
  {
    number: 36,
    section: "Lord's Day 14",
    section_name: "The Holy Conception and Birth",
    question: "How does the holy conception and birth of Christ benefit you?",
    answer: "He is our mediator, and with his innocence and perfect holiness he removes from God's sight my sin—mine since I was conceived.",
    proof_texts: [
      { reference: "1 Peter 1:18-19", text: "With the precious blood of Christ, like that of a lamb without blemish or spot." },
      { reference: "Psalm 51:5", text: "Behold, I was brought forth in iniquity, and in sin did my mother conceive me." },
    ],
  },
  // ── LORD'S DAY 15 ──────────────────────────────────────────────────────────
  {
    number: 37,
    section: "Lord's Day 15",
    section_name: "The Suffering and Death of Christ",
    question: "What do you understand by the word 'suffered'?",
    answer: "That during his whole life on earth, but especially at the end, Christ sustained in body and soul the anger of God against the sin of the whole human race. This he did in order that, by his suffering as the only atoning sacrifice, he might set us free, body and soul, from eternal condemnation, and gain for us God's grace, righteousness, and eternal life.",
    proof_texts: [
      { reference: "Isaiah 53:4-5", text: "Surely he has borne our griefs and carried our sorrows; yet we esteemed him stricken, smitten by God, and afflicted. But he was pierced for our transgressions; he was crushed for our iniquities." },
      { reference: "Romans 3:25", text: "Whom God put forward as a propitiation by his blood, to be received by faith." },
    ],
  },
  {
    number: 38,
    section: "Lord's Day 15",
    section_name: "The Suffering and Death of Christ",
    question: "Why did he suffer 'under Pontius Pilate' as judge?",
    answer: "So that he, though innocent, might be condemned by a civil judge, and so free us from the severe judgment of God that was to fall on us.",
    proof_texts: [
      { reference: "Luke 23:14-15", text: "Pilate said to the chief priests and the crowds, 'I find no guilt in this man.' Herod also found nothing worthy of death in him." },
      { reference: "2 Corinthians 5:21", text: "For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God." },
    ],
  },
  {
    number: 39,
    section: "Lord's Day 15",
    section_name: "The Suffering and Death of Christ",
    question: "Is it significant that he was 'crucified' instead of dying some other way?",
    answer: "Yes. This death convinces me that he shouldered the curse that lay on me, since death by crucifixion was accursed by God.",
    proof_texts: [
      { reference: "Galatians 3:13", text: "Christ redeemed us from the curse of the law by becoming a curse for us—for it is written, 'Cursed is everyone who is hanged on a tree.'" },
      { reference: "Deuteronomy 21:23", text: "A hanged man is cursed by God." },
    ],
  },
  // ── LORD'S DAY 16 ──────────────────────────────────────────────────────────
  {
    number: 40,
    section: "Lord's Day 16",
    section_name: "The Burial and Descent into Hell",
    question: "Why did Christ have to go all the way to death?",
    answer: "Because God's justice and truth demand it: only the death of God's Son could pay for our sin.",
    proof_texts: [
      { reference: "Romans 6:23", text: "For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord." },
      { reference: "Hebrews 2:9", text: "But we see him who for a little while was made lower than the angels, namely Jesus, crowned with glory and honor because of the suffering of death." },
    ],
  },
  {
    number: 41,
    section: "Lord's Day 16",
    section_name: "The Burial and Descent into Hell",
    question: "Why was he 'buried'?",
    answer: "His burial testifies that he really died.",
    proof_texts: [
      { reference: "John 19:38-42", text: "After these things Joseph of Arimathea, who was a disciple of Jesus but secretly for fear of the Jews, asked Pilate that he might take away the body of Jesus, and Pilate gave him permission. So he came and took away his body." },
    ],
  },
  {
    number: 42,
    section: "Lord's Day 16",
    section_name: "The Burial and Descent into Hell",
    question: "Since Christ has died for us, why do we still have to die?",
    answer: "Our death does not pay the debt of our sins. Rather, it puts an end to our sinning and is our entrance into eternal life.",
    proof_texts: [
      { reference: "John 5:24", text: "Truly, truly, I say to you, whoever hears my word and believes him who sent me has eternal life. He does not come into judgment, but has passed from death to life." },
      { reference: "Philippians 1:21-23", text: "For to me to live is Christ, and to die is gain. My desire is to depart and be with Christ, for that is far better." },
    ],
  },
  {
    number: 43,
    section: "Lord's Day 16",
    section_name: "The Burial and Descent into Hell",
    question: "What further advantage do we receive from Christ's sacrifice and death on the cross?",
    answer: "Through Christ's death our old selves are crucified, put to death, and buried with him, so that the evil desires of the flesh may no longer rule us, but that instead we may dedicate ourselves as an offering of gratitude to him.",
    proof_texts: [
      { reference: "Romans 6:6-8", text: "We know that our old self was crucified with him in order that the body of sin might be brought to nothing, so that we would no longer be enslaved to sin." },
      { reference: "Colossians 2:12", text: "Having been buried with him in baptism, in which you were also raised with him through faith in the powerful working of God, who raised him from the dead." },
    ],
  },
  {
    number: 44,
    section: "Lord's Day 16",
    section_name: "The Burial and Descent into Hell",
    question: "Why does the creed add, 'He descended into hell'?",
    answer: "To assure me during attacks of deepest dread and temptation that Christ my Lord, by suffering unspeakable anguish, pain, and terror of soul, on the cross but also earlier, has delivered me from hellish anguish and torment.",
    proof_texts: [
      { reference: "Matthew 27:46", text: "And about the ninth hour Jesus cried out with a loud voice, saying, 'Eli, Eli, lema sabachthani?' that is, 'My God, my God, why have you forsaken me?'" },
      { reference: "Isaiah 53:10", text: "Yet it was the will of the Lord to crush him; he has put him to grief." },
    ],
  },
  // ── LORD'S DAY 17 ──────────────────────────────────────────────────────────
  {
    number: 45,
    section: "Lord's Day 17",
    section_name: "The Resurrection",
    question: "How does Christ's resurrection benefit us?",
    answer: "First, by his resurrection he has overcome death, so that he might make us share in the righteousness he obtained for us by his death. Second, by his power we too are already now resurrected to a new life. Third, Christ's resurrection is a guarantee of our glorious resurrection.",
    proof_texts: [
      { reference: "1 Corinthians 15:20", text: "But in fact Christ has been raised from the dead, the firstfruits of those who have fallen asleep." },
      { reference: "Romans 6:4", text: "We were buried therefore with him by baptism into death, in order that, just as Christ was raised from the dead by the glory of the Father, we too might walk in newness of life." },
    ],
  },
  // ── LORD'S DAY 18 ──────────────────────────────────────────────────────────
  {
    number: 46,
    section: "Lord's Day 18",
    section_name: "The Ascension",
    question: "What do you mean by saying, 'He ascended into heaven'?",
    answer: "That Christ, while his disciples watched, was taken up from the earth into heaven and will be there for our good until he comes again to judge the living and the dead.",
    proof_texts: [
      { reference: "Acts 1:9-11", text: "And when he had said these things, as they were looking on, he was lifted up, and a cloud took him out of their sight." },
      { reference: "Hebrews 7:25", text: "Consequently, he is able to save to the uttermost those who draw near to God through him, since he always lives to make intercession for them." },
    ],
  },
  {
    number: 47,
    section: "Lord's Day 18",
    section_name: "The Ascension",
    question: "But isn't Christ with us until the end of the world as he promised us?",
    answer: "Christ is true human and true God. In his human nature Christ is not now on earth; but in his divinity, majesty, grace, and Spirit he is not absent from us for a moment.",
    proof_texts: [
      { reference: "Matthew 28:20", text: "And behold, I am with you always, to the end of the age." },
      { reference: "John 14:18", text: "I will not leave you as orphans; I will come to you." },
    ],
  },
  {
    number: 48,
    section: "Lord's Day 18",
    section_name: "The Ascension",
    question: "If his humanity is not present wherever his divinity is, then aren't the two natures of Christ separated from each other?",
    answer: "Certainly not. Since divinity is not limited and is present everywhere, it is evident that Christ's divinity is surely beyond the bounds of the humanity he has taken on, but at the same time his divinity is in and remains personally united to his humanity.",
    proof_texts: [
      { reference: "John 1:14", text: "And the Word became flesh and dwelt among us." },
      { reference: "Colossians 2:9", text: "For in him the whole fullness of deity dwells bodily." },
    ],
  },
  {
    number: 49,
    section: "Lord's Day 18",
    section_name: "The Ascension",
    question: "How does Christ's ascension into heaven benefit us?",
    answer: "First, he pleads our cause in heaven in the presence of his Father. Second, we have our own flesh in heaven—a guarantee that Christ our head will take us, his members, to himself in heaven. Third, he sends his Spirit to us on earth as a further guarantee. By the Spirit's power we make it our aim, not to seek earthly things, but to pursue the things above, where Christ is, sitting at God's right hand.",
    proof_texts: [
      { reference: "Romans 8:34", text: "Christ Jesus is the one who died—more than that, who was raised—who is at the right hand of God, who indeed is interceding for us." },
      { reference: "Colossians 3:1", text: "If then you have been raised with Christ, seek the things that are above, where Christ is, seated at the right hand of God." },
    ],
  },
  // ── LORD'S DAY 19 ──────────────────────────────────────────────────────────
  {
    number: 50,
    section: "Lord's Day 19",
    section_name: "Christ at God's Right Hand",
    question: "Why the next words: 'and is seated at the right hand of God'?",
    answer: "Christ ascended to heaven for this reason: that he is head of his Christian church through which he governs all things.",
    proof_texts: [
      { reference: "Ephesians 1:20-23", text: "He raised him from the dead and seated him at his right hand in the heavenly places, far above all rule and authority and power and dominion... And he put all things under his feet and gave him as head over all things to the church." },
    ],
  },
  {
    number: 51,
    section: "Lord's Day 19",
    section_name: "Christ at God's Right Hand",
    question: "How does this glory of Christ our head benefit us?",
    answer: "First, through his Holy Spirit he pours out his gifts from heaven upon us his members. Second, by his power he defends us and keeps us safe from all enemies.",
    proof_texts: [
      { reference: "Acts 2:33", text: "Being therefore exalted at the right hand of God, and having received from the Father the promise of the Holy Spirit, he has poured out this that you yourselves are seeing and hearing." },
      { reference: "Psalm 110:2", text: "The Lord sends forth from Zion your mighty scepter. Rule in the midst of your enemies!" },
    ],
  },
  {
    number: 52,
    section: "Lord's Day 19",
    section_name: "Christ at God's Right Hand",
    question: "How does Christ's return 'to judge the living and the dead' comfort you?",
    answer: "In all my distress and persecution I turn my eyes to the heavens and confidently await as judge the very One who has already stood trial in my place before God and so has removed the whole curse from me. All his enemies and mine he will condemn to everlasting punishment: but me and all his chosen ones he will take along with him into the joy and the glory of heaven.",
    proof_texts: [
      { reference: "Romans 8:1", text: "There is therefore now no condemnation for those who are in Christ Jesus." },
      { reference: "Matthew 25:34", text: "Then the King will say to those on his right, 'Come, you who are blessed by my Father, inherit the kingdom prepared for you from the foundation of the world.'" },
    ],
  },
  // ── LORD'S DAY 20 ──────────────────────────────────────────────────────────
  {
    number: 53,
    section: "Lord's Day 20",
    section_name: "The Holy Spirit",
    question: "What do you believe concerning 'the Holy Spirit'?",
    answer: "First, he, as well as the Father and the Son, is eternal God. Second, he has been given to me personally, so that, by true faith, he makes me share in Christ and all his blessings, comforts me, and remains with me forever.",
    proof_texts: [
      { reference: "Acts 5:3-4", text: "But Peter said, 'Ananias, why has Satan filled your heart to lie to the Holy Spirit?... You have not lied to man but to God.'" },
      { reference: "John 15:26", text: "But when the Helper comes, whom I will send to you from the Father, the Spirit of truth, who proceeds from the Father, he will bear witness about me." },
    ],
  },
  // ── LORD'S DAY 21 ──────────────────────────────────────────────────────────
  {
    number: 54,
    section: "Lord's Day 21",
    section_name: "The Holy Catholic Church",
    question: "What do you believe concerning 'the holy catholic church'?",
    answer: "I believe that the Son of God through his Spirit and Word, out of the entire human race, from the beginning of the world to its end, gathers, protects, and preserves for himself a community chosen for eternal life and united in true faith. And of this community I am and always will be a living member.",
    proof_texts: [
      { reference: "Ephesians 1:9-11", text: "Making known to us the mystery of his will, according to his purpose, which he set forth in Christ as a plan for the fullness of time." },
      { reference: "John 10:28-30", text: "I give them eternal life, and they will never perish, and no one will snatch them out of my hand." },
    ],
  },
  {
    number: 55,
    section: "Lord's Day 21",
    section_name: "The Holy Catholic Church",
    question: "What do you understand by 'the communion of saints'?",
    answer: "First, that believers one and all, as members of this community, share in Christ and in all his treasures and gifts. Second, that each member should consider it a duty to use these gifts readily and cheerfully for the service and enrichment of the other members.",
    proof_texts: [
      { reference: "1 John 1:3", text: "That which we have seen and heard we proclaim also to you, so that you too may have fellowship with us; and indeed our fellowship is with the Father and with his Son Jesus Christ." },
      { reference: "1 Corinthians 12:12-13", text: "For just as the body is one and has many members, and all the members of the body, though many, are one body, so it is with Christ." },
    ],
  },
  {
    number: 56,
    section: "Lord's Day 21",
    section_name: "The Holy Catholic Church",
    question: "What do you believe concerning 'the forgiveness of sins'?",
    answer: "I believe that God, because of Christ's atonement, will never hold against me any of my sins nor my sinful nature which I need to struggle against all my life. Rather, in his grace God grants me the righteousness of Christ to free me forever from judgment.",
    proof_texts: [
      { reference: "Psalm 103:3-4", text: "Who forgives all your iniquity, who heals all your diseases, who redeems your life from the pit, who crowns you with steadfast love and mercy." },
      { reference: "1 John 2:2", text: "He is the propitiation for our sins, and not for ours only but also for the sins of the whole world." },
    ],
  },
  // ── LORD'S DAY 22 ──────────────────────────────────────────────────────────
  {
    number: 57,
    section: "Lord's Day 22",
    section_name: "The Resurrection of the Body",
    question: "How does 'the resurrection of the body' comfort you?",
    answer: "Not only my soul will be taken immediately after this life to Christ its head, but even my very flesh, raised by the power of Christ, will be reunited with my soul and made like Christ's glorious body.",
    proof_texts: [
      { reference: "1 Corinthians 15:53", text: "For this perishable body must put on the imperishable, and this mortal body must put on immortality." },
      { reference: "Philippians 3:21", text: "Who will transform our lowly body to be like his glorious body, by the power that enables him even to subject all things to himself." },
    ],
  },
  {
    number: 58,
    section: "Lord's Day 22",
    section_name: "The Resurrection of the Body",
    question: "How does the article concerning 'life everlasting' comfort you?",
    answer: "Even as I already now experience in my heart the beginning of eternal joy, so after this life I will have perfect blessedness such as no eye has seen, no ear has heard, no human heart has ever imagined: a blessedness in which to praise God eternally.",
    proof_texts: [
      { reference: "1 Corinthians 2:9", text: "But, as it is written, 'What no eye has seen, nor ear heard, nor the heart of man imagined, what God has prepared for those who love him.'" },
      { reference: "John 17:3", text: "And this is eternal life, that they know you, the only true God, and Jesus Christ whom you have sent." },
    ],
  },
  // ── LORD'S DAY 23 ──────────────────────────────────────────────────────────
  {
    number: 59,
    section: "Lord's Day 23",
    section_name: "Justification by Faith",
    question: "What good does it do you, however, to believe all this?",
    answer: "In Christ I am right with God and heir to life everlasting.",
    proof_texts: [
      { reference: "John 3:36", text: "Whoever believes in the Son has eternal life; whoever does not obey the Son shall not see life, but the wrath of God remains on him." },
      { reference: "Romans 1:17", text: "For in it the righteousness of God is revealed from faith for faith, as it is written, 'The righteous shall live by faith.'" },
    ],
  },
  {
    number: 60,
    section: "Lord's Day 23",
    section_name: "Justification by Faith",
    question: "How are you right with God?",
    answer: "Only by true faith in Jesus Christ. Even though my conscience accuses me of having grievously sinned against all God's commandments and of never having kept any of them, and even though I am still inclined toward all evil, nevertheless, without my deserving it at all, out of sheer grace, God grants and credits to me the perfect satisfaction, righteousness, and holiness of Christ, as if I had never sinned nor been a sinner, as if I had been as perfectly obedient as Christ was obedient for me. All I need to do is to accept this gift of God with a believing heart.",
    proof_texts: [
      { reference: "Romans 3:21-22", text: "But now the righteousness of God has been manifested apart from the law, although the Law and the Prophets bear witness to it—the righteousness of God through faith in Jesus Christ for all who believe." },
      { reference: "Romans 4:5", text: "And to the one who does not work but believes in him who justifies the ungodly, his faith is counted as righteousness." },
    ],
  },
  {
    number: 61,
    section: "Lord's Day 23",
    section_name: "Justification by Faith",
    question: "Why do you say that by faith alone you are right with God?",
    answer: "It is not because of any value my faith has that God is pleased with me. Only Christ's satisfaction, righteousness, and holiness make me right with God. And I can receive this righteousness and make it mine in no other way than by faith alone.",
    proof_texts: [
      { reference: "Ephesians 2:8-9", text: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast." },
      { reference: "1 Corinthians 1:30", text: "And because of him you are in Christ Jesus, who became to us wisdom from God, righteousness and sanctification and redemption." },
    ],
  },
  // ── LORD'S DAY 24 ──────────────────────────────────────────────────────────
  {
    number: 62,
    section: "Lord's Day 24",
    section_name: "Works and Grace",
    question: "Why can't the good we do make us right with God, or at least help make us right with him?",
    answer: "Because the righteousness which can pass God's scrutiny must be entirely perfect and must in every way measure up to the divine law. Even the very best we do in this life is imperfect and stained with sin.",
    proof_texts: [
      { reference: "Isaiah 64:6", text: "We have all become like one who is unclean, and all our righteous deeds are like a polluted garment." },
      { reference: "Romans 3:20", text: "For by works of the law no human being will be justified in his sight, since through the law comes knowledge of sin." },
    ],
  },
  {
    number: 63,
    section: "Lord's Day 24",
    section_name: "Works and Grace",
    question: "How can you say that the good we do doesn't earn anything when God promises to reward it in this life and the next?",
    answer: "This reward is not earned; it is a gift of grace.",
    proof_texts: [
      { reference: "Luke 17:10", text: "So you also, when you have done all that you were commanded, say, 'We are unworthy servants; we have only done what was our duty.'" },
      { reference: "Romans 11:6", text: "But if it is by grace, it is no longer on the basis of works; otherwise grace would no longer be grace." },
    ],
  },
  {
    number: 64,
    section: "Lord's Day 24",
    section_name: "Works and Grace",
    question: "But doesn't this teaching make people indifferent and wicked?",
    answer: "No. It is impossible for those grafted into Christ by true faith not to produce fruits of gratitude.",
    proof_texts: [
      { reference: "John 15:5", text: "I am the vine; you are the branches. Whoever abides in me and I in him, he it is that bears much fruit, for apart from me you can do nothing." },
      { reference: "Romans 6:1-2", text: "What shall we say then? Are we to continue in sin that grace may abound? By no means! How can we who died to sin still live in it?" },
    ],
  },
  // ── LORD'S DAY 25 ──────────────────────────────────────────────────────────
  {
    number: 65,
    section: "Lord's Day 25",
    section_name: "The Holy Sacraments",
    question: "It is by faith alone that we share in Christ and all his blessings: where then does that faith come from?",
    answer: "The Holy Spirit produces it in our hearts by the preaching of the holy gospel, and confirms it through our use of the holy sacraments.",
    proof_texts: [
      { reference: "Romans 10:17", text: "So faith comes from hearing, and hearing through the word of Christ." },
      { reference: "Galatians 3:27", text: "For as many of you as were baptized into Christ have put on Christ." },
    ],
  },
  {
    number: 66,
    section: "Lord's Day 25",
    section_name: "The Holy Sacraments",
    question: "What are sacraments?",
    answer: "Sacraments are holy signs and seals for us to see. They were instituted by God so that by our use of them he might make us understand more clearly the promise of the gospel, and might put his seal on that promise. And this is God's gospel promise: to forgive our sins and give us eternal life, by grace alone because of Christ's one sacrifice finished on the cross.",
    proof_texts: [
      { reference: "Genesis 17:11", text: "You shall be circumcised in the flesh of your foreskins, and it shall be a sign of the covenant between me and you." },
      { reference: "Romans 4:11", text: "He received the sign of circumcision as a seal of the righteousness that he had by faith while he was still uncircumcised." },
    ],
  },
  {
    number: 67,
    section: "Lord's Day 25",
    section_name: "The Holy Sacraments",
    question: "Are both the word and the sacraments then intended to focus our faith on the sacrifice of Jesus Christ on the cross as the only ground of our salvation?",
    answer: "Right! In the gospel the Holy Spirit teaches us and through the holy sacraments he assures us that our entire salvation rests on Christ's one sacrifice for us on the cross.",
    proof_texts: [
      { reference: "1 Corinthians 11:26", text: "For as often as you eat this bread and drink the cup, you proclaim the Lord's death until he comes." },
      { reference: "Galatians 3:1", text: "O foolish Galatians! Who has bewitched you? It was before your eyes that Jesus Christ was publicly portrayed as crucified." },
    ],
  },
  {
    number: 68,
    section: "Lord's Day 25",
    section_name: "The Holy Sacraments",
    question: "How many sacraments did Christ institute in the New Testament?",
    answer: "Two: holy baptism and the holy supper.",
    proof_texts: [
      { reference: "Matthew 28:19", text: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit." },
      { reference: "Matthew 26:26-28", text: "Now as they were eating, Jesus took bread, and after blessing it broke it and gave it to the disciples, and said, 'Take, eat; this is my body.'" },
    ],
  },
  // ── LORD'S DAY 26 ──────────────────────────────────────────────────────────
  {
    number: 69,
    section: "Lord's Day 26",
    section_name: "Baptism",
    question: "How does holy baptism remind you and assure you that Christ's one sacrifice on the cross is for you personally?",
    answer: "In this way: Christ instituted this outward washing and with it gave the promise that, as surely as water washes away the dirt from the body, so certainly his blood and his Spirit wash away my soul's impurity, in other words, all my sins.",
    proof_texts: [
      { reference: "Acts 2:38", text: "And Peter said to them, 'Repent and be baptized every one of you in the name of Jesus Christ for the forgiveness of your sins, and you will receive the gift of the Holy Spirit.'" },
      { reference: "1 Peter 3:21", text: "Baptism, which corresponds to this, now saves you, not as a removal of dirt from the body but as an appeal to God for a good conscience, through the resurrection of Jesus Christ." },
    ],
  },
  {
    number: 70,
    section: "Lord's Day 26",
    section_name: "Baptism",
    question: "What does it mean to be washed with Christ's blood and Spirit?",
    answer: "To be washed with Christ's blood means that God, by grace, has forgiven my sins because of Christ's blood poured out for me in his sacrifice on the cross. To be washed with Christ's Spirit means that the Holy Spirit has renewed me and set me apart to be a member of Christ so that more and more I become dead to sin and increasingly live a holy and blameless life.",
    proof_texts: [
      { reference: "Revelation 1:5", text: "To him who loves us and has freed us from our sins by his blood." },
      { reference: "Titus 3:5", text: "He saved us, not because of works done by us in righteousness, but according to his own mercy, by the washing of regeneration and renewing of the Holy Spirit." },
    ],
  },
  {
    number: 71,
    section: "Lord's Day 26",
    section_name: "Baptism",
    question: "Where does Christ promise that we are washed with his blood and Spirit as surely as we are washed with the water of baptism?",
    answer: "In the institution of baptism where he says: 'Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.' 'Whoever believes and is baptized will be saved, but whoever does not believe will be condemned.' This promise is repeated when Scripture calls baptism the washing of rebirth and the washing away of sins.",
    proof_texts: [
      { reference: "Matthew 28:19", text: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit." },
      { reference: "Mark 16:16", text: "Whoever believes and is baptized will be saved, but whoever does not believe will be condemned." },
    ],
  },
  // ── LORD'S DAY 27 ──────────────────────────────────────────────────────────
  {
    number: 72,
    section: "Lord's Day 27",
    section_name: "Infant Baptism",
    question: "Does this outward washing with water itself wash away sins?",
    answer: "No, only Jesus Christ's blood and the Holy Spirit cleanse us from all sins.",
    proof_texts: [
      { reference: "1 Peter 3:21", text: "Baptism now saves you, not as a removal of dirt from the body but as an appeal to God for a good conscience, through the resurrection of Jesus Christ." },
      { reference: "1 John 1:7", text: "But if we walk in the light, as he is in the light, we have fellowship with one another, and the blood of Jesus his Son cleanses us from all sin." },
    ],
  },
  {
    number: 73,
    section: "Lord's Day 27",
    section_name: "Infant Baptism",
    question: "Why then does the Holy Spirit call baptism the washing of rebirth and the washing away of sins?",
    answer: "God has good reasons for these words. He wants to teach us that the blood and Spirit of Christ wash away our sins just as water washes away dirt from the body. But more important, he wants to assure us, by this divine pledge and sign, that the washing away of our sins spiritually is as real as physical washing with water.",
    proof_texts: [
      { reference: "Acts 22:16", text: "And now why do you wait? Rise and be baptized and wash away your sins, calling on his name." },
      { reference: "Titus 3:5", text: "He saved us, not because of works done by us in righteousness, but according to his own mercy, by the washing of regeneration and renewing of the Holy Spirit." },
    ],
  },
  {
    number: 74,
    section: "Lord's Day 27",
    section_name: "Infant Baptism",
    question: "Should infants, too, be baptized?",
    answer: "Yes. Infants as well as adults are in God's covenant and are his people. They, no less than adults, are promised the forgiveness of sin through Christ's blood and the Holy Spirit who produces faith. Therefore, by baptism, the mark of the covenant, infants should be received into the Christian church and should be distinguished from the children of unbelievers. This was done in the Old Testament by circumcision, which was replaced in the New Testament by baptism.",
    proof_texts: [
      { reference: "Genesis 17:7", text: "And I will establish my covenant between me and you and your offspring after you throughout their generations for an everlasting covenant, to be God to you and to your offspring after you." },
      { reference: "Acts 2:39", text: "For the promise is for you and for your children and for all who are far off, everyone whom the Lord our God calls to himself." },
    ],
  },
  // ── LORD'S DAY 28 ──────────────────────────────────────────────────────────
  {
    number: 75,
    section: "Lord's Day 28",
    section_name: "The Lord's Supper",
    question: "How does the holy supper remind you and assure you that you share in Christ's one sacrifice on the cross and in all his gifts?",
    answer: "In this way: Christ has commanded me and all believers to eat this broken bread and to drink this cup. With these words he promised: First, as surely as I see with my eyes the bread of the Lord broken for me and the cup given to me, so surely his body was offered and broken for me and his blood poured out for me on the cross. Second, as surely as I receive from the hand of the one who serves, and taste with my mouth the bread and cup of the Lord, given me as sure signs of Christ's body and blood, so surely he nourishes and refreshes my soul for eternal life with his crucified body and poured-out blood.",
    proof_texts: [
      { reference: "1 Corinthians 11:24-25", text: "And when he had given thanks, he broke it, and said, 'This is my body, which is for you. Do this in remembrance of me.' In the same way also he took the cup, after supper, saying, 'This cup is the new covenant in my blood.'" },
      { reference: "John 6:53-54", text: "Jesus said to them, 'Truly, truly, I say to you, unless you eat the flesh of the Son of Man and drink his blood, you have no life in you. Whoever feeds on my flesh and drinks my blood has eternal life.'" },
    ],
  },
  {
    number: 76,
    section: "Lord's Day 28",
    section_name: "The Lord's Supper",
    question: "What does it mean to eat the crucified body of Christ and to drink his poured-out blood?",
    answer: "It means to accept with a believing heart the entire suffering and death of Christ and by believing to receive forgiveness of sins and eternal life. It means, further, to be so united with Christ, his body and his blood, through the Holy Spirit that even though he is in heaven and we are on earth we are flesh of his flesh and bone of his bone. And we forever live on and are governed by one Spirit, as members of our body are by one soul.",
    proof_texts: [
      { reference: "John 6:40", text: "For this is the will of my Father, that everyone who looks to the Son and believes in him should have eternal life, and I will raise him up on the last day." },
      { reference: "Ephesians 5:29-30", text: "For no one ever hated his own flesh, but nourishes and cherishes it, just as Christ does the church, because we are members of his body." },
    ],
  },
  {
    number: 77,
    section: "Lord's Day 28",
    section_name: "The Lord's Supper",
    question: "Where does Christ promise to nourish and refresh believers with his body and blood as surely as they eat this bread and drink this cup?",
    answer: "In the institution of the Lord's Supper: 'The Lord Jesus, on the night he was betrayed, took bread, and when he had given thanks, he broke it and said, This is my body, which is for you; do this in remembrance of me. In the same way, after supper he took the cup, saying, This cup is the new covenant in my blood; do this, whenever you drink it, in remembrance of me. For whenever you eat this bread and drink this cup, you proclaim the Lord's death until he comes.'",
    proof_texts: [
      { reference: "1 Corinthians 11:23-25", text: "For I received from the Lord what I also delivered to you, that the Lord Jesus on the night when he was betrayed took bread, and when he had given thanks, he broke it." },
      { reference: "Matthew 26:26-28", text: "'Take, eat; this is my body.' And he took a cup, and when he had given thanks he gave it to them, saying, 'Drink of it, all of you, for this is my blood of the covenant.'" },
    ],
  },
  // ── LORD'S DAY 29 ──────────────────────────────────────────────────────────
  {
    number: 78,
    section: "Lord's Day 29",
    section_name: "The Body and Blood of Christ",
    question: "Are the bread and wine changed into the real body and blood of Christ?",
    answer: "No. Just as the water of baptism is not changed into Christ's blood and does not itself wash away sins but is simply God's sign and assurance, so too the bread of the Lord's Supper is not changed into the actual body of Christ even though it is called the body of Christ in keeping with the nature and language of sacraments.",
    proof_texts: [
      { reference: "Matthew 26:29", text: "I tell you I will not drink again of this fruit of the vine until that day when I drink it new with you in my Father's kingdom." },
      { reference: "1 Corinthians 10:16", text: "The cup of blessing that we bless, is it not a participation in the blood of Christ? The bread that we break, is it not a participation in the body of Christ?" },
    ],
  },
  {
    number: 79,
    section: "Lord's Day 29",
    section_name: "The Body and Blood of Christ",
    question: "Why then does Christ call the bread his body and the cup his blood, or the new covenant in his blood? And why does Paul use the words, a participation in Christ's body and blood?",
    answer: "Christ has good reason for these words. He wants to teach us that as bread and wine nourish the temporal life, so too his crucified body and poured-out blood truly nourish our souls for eternal life. But more important, he wants to assure us, by this visible sign and pledge, that we, through the Holy Spirit's work, share in his true body and blood as surely as our mouths receive these holy signs in his remembrance, and that all of his suffering and obedience are as definitely ours as if we personally had suffered and paid for our sins.",
    proof_texts: [
      { reference: "John 6:51-55", text: "I am the living bread that came down from heaven. If anyone eats of this bread, he will live forever. And the bread that I will give for the life of the world is my flesh." },
      { reference: "1 Corinthians 10:16-17", text: "The cup of blessing that we bless, is it not a participation in the blood of Christ? The bread that we break, is it not a participation in the body of Christ? Because there is one bread, we who are many are one body." },
    ],
  },
  // ── LORD'S DAY 30 ──────────────────────────────────────────────────────────
  {
    number: 80,
    section: "Lord's Day 30",
    section_name: "The Difference between the Lord's Supper and the Mass",
    question: "How does the Lord's Supper differ from the Roman Catholic Mass?",
    answer: "The Lord's Supper declares to us that our sins have been completely forgiven through the one sacrifice of Jesus Christ which he himself finished on the cross once and for all. It also declares to us that the Holy Spirit grafts us into Christ, who with his very body is now in heaven at the right hand of the Father where he wants us to worship him. But the Mass teaches that the living and the dead do not have their sins forgiven through the suffering of Christ unless Christ is still offered for them daily by the priests. It also teaches that Christ is bodily present in the form of bread and wine where Christ is therefore to be worshiped. Thus the Mass is basically nothing but a denial of the one sacrifice and suffering of Jesus Christ and a condemnable idolatry.",
    proof_texts: [
      { reference: "Hebrews 9:25-26", text: "Nor was it to offer himself repeatedly, as the high priest enters the holy places every year with blood not his own... But as it is, he has appeared once for all at the end of the ages to put away sin by the sacrifice of himself." },
      { reference: "John 19:30", text: "When Jesus had received the sour wine, he said, 'It is finished,' and he bowed his head and gave up his spirit." },
    ],
  },
  {
    number: 81,
    section: "Lord's Day 30",
    section_name: "The Difference between the Lord's Supper and the Mass",
    question: "Who are to come to the Lord's table?",
    answer: "Those who are displeased with themselves because of their sins, but who nevertheless trust that their sins are pardoned and that their continuing weakness is covered by the suffering and death of Christ, and who also desire more and more to strengthen their faith and to lead a better life. Hypocrites and those who are unrepentant, however, eat and drink judgment on themselves.",
    proof_texts: [
      { reference: "1 Corinthians 11:28-29", text: "Let a person examine himself, then, and so eat of the bread and drink of the cup. For anyone who eats and drinks without discerning the body eats and drinks judgment on himself." },
      { reference: "Matthew 5:6", text: "Blessed are those who hunger and thirst for righteousness, for they shall be satisfied." },
    ],
  },
  {
    number: 82,
    section: "Lord's Day 30",
    section_name: "The Difference between the Lord's Supper and the Mass",
    question: "Are those to be admitted to the Lord's Supper who show by what they say and do that they are unbelieving and ungodly?",
    answer: "No, that would dishonor God's covenant and bring down God's anger upon the entire congregation. Therefore, according to the instruction of Christ and his apostles, the Christian church is duty-bound to exclude such people, by the official use of the keys of the kingdom, until they reform their lives.",
    proof_texts: [
      { reference: "1 Corinthians 5:6-7", text: "Your boasting is not good. Do you not know that a little leaven leavens the whole lump? Cleanse out the old leaven that you may be a new lump." },
      { reference: "Matthew 18:17-18", text: "If he refuses to listen to them, tell it to the church. And if he refuses to listen even to the church, let him be to you as a Gentile and a tax collector." },
    ],
  },
  // ── LORD'S DAY 31 ──────────────────────────────────────────────────────────
  {
    number: 83,
    section: "Lord's Day 31",
    section_name: "The Keys of the Kingdom",
    question: "What are the keys of the kingdom?",
    answer: "The preaching of the holy gospel and Christian discipline toward repentance. Both preaching and discipline open the kingdom of heaven to believers and close it to unbelievers.",
    proof_texts: [
      { reference: "Matthew 16:19", text: "I will give you the keys of the kingdom of heaven, and whatever you bind on earth shall be bound in heaven, and whatever you loose on earth shall be loosed in heaven." },
      { reference: "John 20:23", text: "If you forgive the sins of any, they are forgiven them; if you withhold forgiveness from any, it is withheld." },
    ],
  },
  {
    number: 84,
    section: "Lord's Day 31",
    section_name: "The Keys of the Kingdom",
    question: "How does preaching the holy gospel open and close the kingdom of heaven?",
    answer: "According to the command of Christ: The kingdom of heaven is opened by proclaiming and publicly declaring to each and every believer that, as often as he accepts the gospel promise in true faith, God, because of what Christ has done, truly has forgiven all his sins. The kingdom of heaven is closed, however, by proclaiming and publicly declaring to unbelievers and hypocrites that, as long as they do not repent, the anger of God and eternal condemnation rest on them. God's judgment, both in this life and in the life to come, is based on this gospel testimony.",
    proof_texts: [
      { reference: "John 3:36", text: "Whoever believes in the Son has eternal life; whoever does not obey the Son shall not see life, but the wrath of God remains on him." },
      { reference: "2 Corinthians 2:15-16", text: "For we are the aroma of Christ to God among those who are being saved and among those who are perishing, to one a fragrance from death to death, to the other a fragrance from life to life." },
    ],
  },
  {
    number: 85,
    section: "Lord's Day 31",
    section_name: "The Keys of the Kingdom",
    question: "How is the kingdom of heaven closed and opened by Christian discipline?",
    answer: "According to the command of Christ: If anyone, though called a Christian, professes unchristian teachings or lives an unchristian life, and after repeated brotherly counsel, refuses to abandon his errors and wickedness, and after being reported to the church, that is, to its officers, fails to respond also to their admonition—such a person is excluded from the Christian fellowship by withholding the sacraments from him, and God himself excludes him from the kingdom of Christ. Such a person, when he promises and demonstrates genuine reform, is received again as a member of Christ and of his church.",
    proof_texts: [
      { reference: "Matthew 18:15-17", text: "If your brother sins against you, go and tell him his fault, between you and him alone. If he listens to you, you have gained your brother." },
      { reference: "1 Corinthians 5:3-5", text: "For though absent in body, I am present in spirit; and as if present, I have already pronounced judgment on the one who did such a thing." },
    ],
  },
  // ── LORD'S DAY 32 ──────────────────────────────────────────────────────────
  {
    number: 86,
    section: "Lord's Day 32",
    section_name: "The New Obedience",
    question: "We have been delivered from our misery by God's grace alone through Christ—why then must we still do good?",
    answer: "To be sure, Christ has redeemed us by his blood. But we do good because Christ by his Spirit is also renewing us to be like himself, so that in all our living we may show that we are thankful to God for all he has done for us, and so that he may be praised through us. And we do good so that we may be assured of our faith by its fruits, and so that by our godly living our neighbors may be won over to Christ.",
    proof_texts: [
      { reference: "Matthew 5:16", text: "In the same way, let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven." },
      { reference: "1 Peter 2:12", text: "Keep your conduct among the Gentiles honorable, so that when they speak against you as evildoers, they may see your good deeds and glorify God on the day of visitation." },
    ],
  },
  {
    number: 87,
    section: "Lord's Day 32",
    section_name: "The New Obedience",
    question: "Can those be saved who do not turn to God from their ungrateful and impenitent ways?",
    answer: "By no means. Scripture tells us that no unchaste person, no idolater, adulterer, thief, no covetous person, no drunkard, slanderer, robber, or the like is going to inherit the kingdom of God.",
    proof_texts: [
      { reference: "1 Corinthians 6:9-10", text: "Or do you not know that the unrighteous will not inherit the kingdom of God? Do not be deceived: neither the sexually immoral, nor idolaters, nor adulterers... will inherit the kingdom of God." },
      { reference: "Ephesians 5:5-6", text: "For you may be sure of this, that everyone who is sexually immoral or impure, or who is covetous (that is, an idolater), has no inheritance in the kingdom of Christ and God." },
    ],
  },
  // ── LORD'S DAY 33 ──────────────────────────────────────────────────────────
  {
    number: 88,
    section: "Lord's Day 33",
    section_name: "True Conversion",
    question: "What is involved in genuine repentance or conversion?",
    answer: "Two things: the dying-away of the old self, and the coming-to-life of the new.",
    proof_texts: [
      { reference: "Romans 6:4-6", text: "We were buried therefore with him by baptism into death, in order that, just as Christ was raised from the dead by the glory of the Father, we too might walk in newness of life." },
      { reference: "2 Corinthians 5:17", text: "Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come." },
    ],
  },
  {
    number: 89,
    section: "Lord's Day 33",
    section_name: "True Conversion",
    question: "What is the dying-away of the old self?",
    answer: "It is to be genuinely sorry for sin and more and more to hate and run away from it.",
    proof_texts: [
      { reference: "Romans 8:13", text: "For if you live according to the flesh you will die, but if by the Spirit you put to death the deeds of the body, you will live." },
      { reference: "Psalm 51:3-4", text: "For I know my transgressions, and my sin is ever before me. Against you, you only, have I sinned and done what is evil in your sight." },
    ],
  },
  {
    number: 90,
    section: "Lord's Day 33",
    section_name: "True Conversion",
    question: "What is the coming-to-life of the new self?",
    answer: "It is wholehearted joy in God through Christ and a strong desire to live according to the will of God by doing every kind of good work.",
    proof_texts: [
      { reference: "Romans 5:1", text: "Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ." },
      { reference: "Romans 14:17", text: "For the kingdom of God is not a matter of eating and drinking but of righteousness and peace and joy in the Holy Spirit." },
    ],
  },
  {
    number: 91,
    section: "Lord's Day 33",
    section_name: "True Conversion",
    question: "What do we do that is good?",
    answer: "Only that which arises out of true faith, conforms to God's law, and is done for his glory; and not that which is based on what we think is right or on established human tradition.",
    proof_texts: [
      { reference: "Romans 14:23", text: "For whatever does not proceed from faith is sin." },
      { reference: "1 Corinthians 10:31", text: "So, whether you eat or drink, or whatever you do, do all to the glory of God." },
    ],
  },
  // ── LORD'S DAY 34 ──────────────────────────────────────────────────────────
  {
    number: 92,
    section: "Lord's Day 34",
    section_name: "The Ten Commandments",
    question: "What does the Lord say in his law?",
    answer: "God spoke all these words: 'I am the Lord your God, who brought you out of Egypt, out of the land of slavery. You shall have no other gods before me. You shall not make for yourself an idol... You shall not misuse the name of the Lord your God... Remember the Sabbath day by keeping it holy... Honor your father and your mother... You shall not murder. You shall not commit adultery. You shall not steal. You shall not give false testimony against your neighbor. You shall not covet...'",
    proof_texts: [
      { reference: "Exodus 20:1-17", text: "And God spoke all these words: 'I am the Lord your God, who brought you out of Egypt, out of the land of slavery.'" },
      { reference: "Deuteronomy 5:6-21", text: "I am the Lord your God, who brought you out of Egypt, out of the land of slavery." },
    ],
  },
  {
    number: 93,
    section: "Lord's Day 34",
    section_name: "The Ten Commandments",
    question: "How are these commandments divided?",
    answer: "Into two tables. The first has four commandments, teaching us how we are to live in relation to God. The second has six commandments, teaching us what we owe our neighbor.",
    proof_texts: [
      { reference: "Matthew 22:37-40", text: "And he said to him, 'You shall love the Lord your God with all your heart and with all your soul and with all your mind. This is the great and first commandment. And a second is like it: You shall love your neighbor as yourself.'" },
      { reference: "Deuteronomy 6:5", text: "You shall love the Lord your God with all your heart and with all your soul and with all your might." },
    ],
  },
  {
    number: 94,
    section: "Lord's Day 34",
    section_name: "The Ten Commandments",
    question: "What does the Lord require in the first commandment?",
    answer: "That I, not wanting to endanger my very salvation, avoid and shun all idolatry, magic, superstitious rites, and prayer to saints or to other creatures. That I sincerely acknowledge the only true God, trust him alone, look to him for every good thing humbly and patiently, love him, fear him, and honor him with all my heart. In short, that I give up anything rather than go against his will in any way.",
    proof_texts: [
      { reference: "Deuteronomy 6:4-5", text: "Hear, O Israel: The Lord our God, the Lord is one. You shall love the Lord your God with all your heart and with all your soul and with all your might." },
      { reference: "Matthew 4:10", text: "Then Jesus said to him, 'Be gone, Satan! For it is written, You shall worship the Lord your God and him only shall you serve.'" },
    ],
  },
  {
    number: 95,
    section: "Lord's Day 34",
    section_name: "The Ten Commandments",
    question: "What is idolatry?",
    answer: "Idolatry is having or inventing something in which one trusts in place of or alongside of the only true God, who has revealed himself in the Word.",
    proof_texts: [
      { reference: "1 John 5:21", text: "Little children, keep yourselves from idols." },
      { reference: "Ephesians 5:5", text: "For you may be sure of this, that everyone who is sexually immoral or impure, or who is covetous (that is, an idolater), has no inheritance in the kingdom of Christ and God." },
    ],
  },
  // ── LORD'S DAY 35 ──────────────────────────────────────────────────────────
  {
    number: 96,
    section: "Lord's Day 35",
    section_name: "The First and Second Commandments",
    question: "What is God's will for us in the second commandment?",
    answer: "That we in no way make any image of God nor worship him in any other way than has been commanded in God's Word.",
    proof_texts: [
      { reference: "Deuteronomy 4:15-16", text: "Therefore watch yourselves very carefully. Since you saw no form on the day that the Lord spoke to you at Horeb out of the midst of the fire, beware lest you act corruptly by making a carved image for yourselves." },
      { reference: "John 4:24", text: "God is spirit, and those who worship him must worship in spirit and truth." },
    ],
  },
  {
    number: 97,
    section: "Lord's Day 35",
    section_name: "The First and Second Commandments",
    question: "May we then not make any image at all?",
    answer: "God can not and may not be visibly portrayed in any way. Although creatures may be portrayed, yet God forbids making or having such images if one's intention is to worship them or to serve God through them.",
    proof_texts: [
      { reference: "Acts 17:29", text: "Being then God's offspring, we ought not to think that the divine being is like gold or silver or stone, an image formed by the art and imagination of man." },
      { reference: "Romans 1:22-23", text: "Claiming to be wise, they became fools, and exchanged the glory of the immortal God for images resembling mortal man and birds and animals and creeping things." },
    ],
  },
  {
    number: 98,
    section: "Lord's Day 35",
    section_name: "The First and Second Commandments",
    question: "But may not images be permitted in the churches as teaching aids for the unlearned?",
    answer: "No, we shouldn't try to be wiser than God. He wants his people instructed by the living preaching of his Word—not by idols that cannot even talk.",
    proof_texts: [
      { reference: "Jeremiah 10:8", text: "They are both stupid and foolish; the instruction of idols is but wood!" },
      { reference: "2 Timothy 3:16-17", text: "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work." },
    ],
  },
  // ── LORD'S DAY 36 ──────────────────────────────────────────────────────────
  {
    number: 99,
    section: "Lord's Day 36",
    section_name: "The Third Commandment",
    question: "What is required in the third commandment?",
    answer: "That we must not profane or misuse God's name by cursing, perjury, or unnecessary oaths, nor by unnecessary use of the divine name in common talk or by the use of silence or inaction in a matter so important as the public acknowledgment and profession of our faith when God requires it of his people.",
    proof_texts: [
      { reference: "Leviticus 19:12", text: "You shall not swear by my name falsely, and so profane the name of your God: I am the Lord." },
      { reference: "Matthew 5:37", text: "Let what you say be simply 'Yes' or 'No'; anything more than this comes from evil." },
    ],
  },
  {
    number: 100,
    section: "Lord's Day 36",
    section_name: "The Third Commandment",
    question: "Is blasphemy of God's name by swearing and cursing really such serious sin that God is angry also with those who do not do all they can to help prevent and forbid it?",
    answer: "Yes, indeed. No sin is greater, no sin makes God more angry than blaspheming his name. That is why he commanded it to be punished with death.",
    proof_texts: [
      { reference: "Leviticus 24:15-16", text: "And speak to the people of Israel, saying, Whoever curses his God shall bear his sin. Whoever blasphemes the name of the Lord shall surely be put to death." },
      { reference: "Proverbs 29:24", text: "The partner of a thief hates his own life; he hears the curse but discloses nothing." },
    ],
  },
  // ── LORD'S DAY 37 ──────────────────────────────────────────────────────────
  {
    number: 101,
    section: "Lord's Day 37",
    section_name: "The Oath and God's Name",
    question: "May we swear an oath in God's name if we do it reverently?",
    answer: "Yes, when the government demands it, or when necessity requires it, in order to maintain and promote truth and trustworthiness for God's glory and our neighbor's good. Such oaths are grounded in God's Word and were rightly used by the people of God in the Old and New Testaments.",
    proof_texts: [
      { reference: "Deuteronomy 6:13", text: "It is the Lord your God you shall fear. Him you shall serve and by his name you shall swear." },
      { reference: "Hebrews 6:16", text: "For people swear by something greater than themselves, and in all their disputes an oath is final for confirmation." },
    ],
  },
  {
    number: 102,
    section: "Lord's Day 37",
    section_name: "The Oath and God's Name",
    question: "May we swear by saints or by other creatures?",
    answer: "No. A legitimate oath means calling upon God as the one who knows my heart to witness to my truthfulness and to punish me if I swear falsely. No creature is worthy of such honor.",
    proof_texts: [
      { reference: "Matthew 5:34-36", text: "But I say to you, Do not take an oath at all, either by heaven, for it is the throne of God, or by the earth, for it is his footstool, or by Jerusalem, for it is the city of the great King." },
      { reference: "James 5:12", text: "But above all, my brothers, do not swear, either by heaven or by earth or by any other oath, but let your 'yes' be yes and your 'no' be no, so that you may not fall under condemnation." },
    ],
  },
  // ── LORD'S DAY 38 ──────────────────────────────────────────────────────────
  {
    number: 103,
    section: "Lord's Day 38",
    section_name: "The Fourth Commandment",
    question: "What is God's will for you in the fourth commandment?",
    answer: "First, that the gospel ministry and education for it be maintained, and that, especially on the festive day of rest, I diligently attend the assembly of God's people to learn what God's Word teaches, to participate in the sacraments, to pray to God publicly, and to bring Christian offerings for the poor. Second, that every day of my life I rest from my evil ways, let the Lord work in me through his Spirit, and so begin already in this life the eternal Sabbath.",
    proof_texts: [
      { reference: "Hebrews 10:25", text: "Not neglecting to meet together, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near." },
      { reference: "Isaiah 66:23", text: "From new moon to new moon, and from Sabbath to Sabbath, all flesh shall come to worship before me, declares the Lord." },
    ],
  },
  // ── LORD'S DAY 39 ──────────────────────────────────────────────────────────
  {
    number: 104,
    section: "Lord's Day 39",
    section_name: "The Fifth Commandment",
    question: "What is God's will for you in the fifth commandment?",
    answer: "That I honor, love, and be loyal to my father and mother and all those in authority over me; that I obey and submit to them, as is proper, when they correct and punish me; and also that I be patient with their failings—for through them God chooses to rule us.",
    proof_texts: [
      { reference: "Ephesians 6:1-2", text: "Children, obey your parents in the Lord, for this is right. 'Honor your father and mother' (this is the first commandment with a promise)." },
      { reference: "Romans 13:1", text: "Let every person be subject to the governing authorities. For there is no authority except from God, and those that exist have been instituted by God." },
    ],
  },
  // ── LORD'S DAY 40 ──────────────────────────────────────────────────────────
  {
    number: 105,
    section: "Lord's Day 40",
    section_name: "The Sixth Commandment",
    question: "What is God's will for you in the sixth commandment?",
    answer: "I am not to belittle, insult, hate, or kill my neighbor—not by my thoughts, my words, my look or gesture, and certainly not by actual deeds—and I am not to be party to this in others; rather, I am to put away all desire for revenge. I am not to harm or recklessly endanger myself either. Prevention of murder is also why government is armed with the sword.",
    proof_texts: [
      { reference: "Matthew 5:21-22", text: "You have heard that it was said to those of old, 'You shall not murder; and whoever murders will be liable to judgment.' But I say to you that everyone who is angry with his brother will be liable to judgment." },
      { reference: "Romans 13:4", text: "For he is God's servant for your good. But if you do wrong, be afraid, for he does not bear the sword in vain." },
    ],
  },
  {
    number: 106,
    section: "Lord's Day 40",
    section_name: "The Sixth Commandment",
    question: "Does this commandment refer only to killing?",
    answer: "By forbidding murder God teaches us that he hates the root of murder: envy, hatred, anger, vindictiveness. In God's sight all such are murder.",
    proof_texts: [
      { reference: "1 John 3:15", text: "Everyone who hates his brother is a murderer, and you know that no murderer has eternal life abiding in him." },
      { reference: "Matthew 5:22", text: "But I say to you that everyone who is angry with his brother will be liable to judgment." },
    ],
  },
  {
    number: 107,
    section: "Lord's Day 40",
    section_name: "The Sixth Commandment",
    question: "Is it enough then that we do not kill our neighbor in any such way?",
    answer: "No. By condemning envy, hatred, and anger God tells us to love our neighbors as ourselves, to be patient, peace-loving, gentle, merciful, and friendly to them, to protect them from harm as much as we can, and to do good even to our enemies.",
    proof_texts: [
      { reference: "Romans 12:20-21", text: "To the contrary, 'if your enemy is hungry, feed him; if he is thirsty, give him something to drink; for by so doing you will heap burning coals on his head.' Do not be overcome by evil, but overcome evil with good." },
      { reference: "Matthew 5:44", text: "But I say to you, Love your enemies and pray for those who persecute you." },
    ],
  },
  // ── LORD'S DAY 41 ──────────────────────────────────────────────────────────
  {
    number: 108,
    section: "Lord's Day 41",
    section_name: "The Seventh Commandment",
    question: "What is God's will for us in the seventh commandment?",
    answer: "God condemns all unchastity. We should therefore thoroughly detest it and, married or single, live decent and chaste lives.",
    proof_texts: [
      { reference: "1 Thessalonians 4:3-5", text: "For this is the will of God, your sanctification: that you abstain from sexual immorality; that each one of you know how to control his own body in holiness and honor." },
      { reference: "1 Corinthians 7:2", text: "But because of the temptation to sexual immorality, each man should have his own wife and each woman her own husband." },
    ],
  },
  {
    number: 109,
    section: "Lord's Day 41",
    section_name: "The Seventh Commandment",
    question: "Does God, in this commandment, forbid only such scandalous sins as adultery?",
    answer: "We are temples of the Holy Spirit, body and soul, and God wants both to be kept clean and holy. That is why he forbids everything which incites unchastity, whether it be actions, looks, talk, thoughts, or desires.",
    proof_texts: [
      { reference: "1 Corinthians 6:18-19", text: "Flee from sexual immorality. Every other sin a person commits is outside the body, but the sexually immoral person sins against his own body. Or do you not know that your body is a temple of the Holy Spirit within you?" },
      { reference: "Matthew 5:28", text: "But I say to you that everyone who looks at a woman with lustful intent has already committed adultery with her in his heart." },
    ],
  },
  // ── LORD'S DAY 42 ──────────────────────────────────────────────────────────
  {
    number: 110,
    section: "Lord's Day 42",
    section_name: "The Eighth Commandment",
    question: "What does God forbid in the eighth commandment?",
    answer: "He forbids not only outright theft and robbery, punishable by law. But in God's sight theft also includes all scheming and swindling in order to get our neighbor's goods for ourselves, whether by force or means that appear legitimate, such as inaccurate measurements of weight, size, or volume; fraudulent merchandising; counterfeit money; excessive interest; or any other means forbidden by God. In addition he forbids all greed and pointless squandering of his gifts.",
    proof_texts: [
      { reference: "1 Corinthians 5:10", text: "Not at all meaning the sexually immoral of this world, or the greedy and swindlers, or idolaters, since then you would need to go out of the world." },
      { reference: "Proverbs 11:1", text: "A false balance is an abomination to the Lord, but a just weight is his delight." },
    ],
  },
  {
    number: 111,
    section: "Lord's Day 42",
    section_name: "The Eighth Commandment",
    question: "What does God require of you in this commandment?",
    answer: "That I do whatever I can for my neighbor's good, that I treat others as I would like them to treat me, and that I work faithfully so that I may share with those in need.",
    proof_texts: [
      { reference: "Ephesians 4:28", text: "Let the thief no longer steal, but rather let him labor, doing honest work with his own hands, so that he may have something to share with anyone in need." },
      { reference: "Matthew 7:12", text: "So whatever you wish that others would do to you, do also to them, for this is the Law and the Prophets." },
    ],
  },
  // ── LORD'S DAY 43 ──────────────────────────────────────────────────────────
  {
    number: 112,
    section: "Lord's Day 43",
    section_name: "The Ninth Commandment",
    question: "What is God's will for you in the ninth commandment?",
    answer: "God's will is that I never give false testimony against anyone, twist no one's words, not gossip or slander, nor join in condemning anyone without a hearing or without a just cause. Rather, in court and everywhere else, I should avoid all lying and deceit, and use only legitimate means in defense of my neighbor's honor; and as much as I am able I should prevent it from being damaged.",
    proof_texts: [
      { reference: "Proverbs 19:5", text: "A false witness will not go unpunished, and he who breathes out lies will not escape." },
      { reference: "1 Peter 3:16", text: "Having a good conscience, so that, when you are slandered, those who revile your good behavior in Christ may be put to shame." },
    ],
  },
  // ── LORD'S DAY 44 ──────────────────────────────────────────────────────────
  {
    number: 113,
    section: "Lord's Day 44",
    section_name: "The Tenth Commandment",
    question: "What is God's will for you in the tenth commandment?",
    answer: "That not even the slightest thought or desire contrary to any one of God's commandments should ever arise in my heart. Rather, with all my heart I should always hate sin and take pleasure in whatever is right.",
    proof_texts: [
      { reference: "Romans 7:7", text: "Yet if it had not been for the law, I would not have known sin. For I would not have known what it is to covet if the law had not said, 'You shall not covet.'" },
      { reference: "Romans 12:9", text: "Let love be genuine. Abhor what is evil; hold fast to what is good." },
    ],
  },
  {
    number: 114,
    section: "Lord's Day 44",
    section_name: "The Tenth Commandment",
    question: "But can those converted to God obey these commandments perfectly?",
    answer: "No. In this life even the holiest have only a small beginning of this obedience. Nevertheless, with all seriousness of purpose, they do begin to live according to all, not only some, of God's commandments.",
    proof_texts: [
      { reference: "1 John 1:8", text: "If we say we have no sin, we deceive ourselves, and the truth is not in us." },
      { reference: "Romans 7:22-23", text: "For I delight in the law of God, in my inner being, but I see in my members another law waging war against the law of my mind and making me captive to the law of sin that dwells in my members." },
    ],
  },
  {
    number: 115,
    section: "Lord's Day 44",
    section_name: "The Tenth Commandment",
    question: "Since no one in this life can obey the Ten Commandments perfectly, why does God want them preached so pointedly?",
    answer: "First, so that the longer we live the more we may come to know our sinfulness and the more eagerly look to Christ for forgiveness of sins and righteousness. Second, so that we may never stop striving, and never stop praying to God for the grace of the Holy Spirit, to be renewed more and more after God's image, until after this life we reach our goal: perfection.",
    proof_texts: [
      { reference: "Psalm 119:105", text: "Your word is a lamp to my feet and a light to my path." },
      { reference: "Philippians 3:13-14", text: "Brothers, I do not consider that I have made it my own. But one thing I do: forgetting what lies behind and straining forward to what lies ahead, I press on toward the goal for the prize of the upward call of God in Christ Jesus." },
    ],
  },
  // ── LORD'S DAY 45 ──────────────────────────────────────────────────────────
  {
    number: 116,
    section: "Lord's Day 45",
    section_name: "Prayer",
    question: "Why do Christians need to pray?",
    answer: "Because prayer is the most important part of the thankfulness God requires of us. And also because God gives his grace and Holy Spirit only to those who pray continually and groan inwardly, asking God for these gifts and thanking him for them.",
    proof_texts: [
      { reference: "1 Thessalonians 5:17", text: "Pray without ceasing." },
      { reference: "Luke 11:9-10", text: "And I tell you, ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you." },
    ],
  },
  {
    number: 117,
    section: "Lord's Day 45",
    section_name: "Prayer",
    question: "How does God want us to pray so that he will listen to us?",
    answer: "First, we must pray from the heart to no other than the one true God, who has revealed himself in his Word, asking for everything he has commanded us to ask for. Second, we must acknowledge our need and misery, hiding nothing, and humble ourselves in his majestic presence. Third, we must rest on this unshakable foundation: even though we do not deserve it, God will surely listen to our prayer because of Christ our Lord. That is what he promised us in his Word.",
    proof_texts: [
      { reference: "John 4:23-24", text: "But the hour is coming, and is now here, when the true worshipers will worship the Father in spirit and truth, for the Father is seeking such people to worship him." },
      { reference: "1 John 5:14", text: "And this is the confidence that we have toward him, that if we ask anything according to his will he hears us." },
    ],
  },
  {
    number: 118,
    section: "Lord's Day 45",
    section_name: "Prayer",
    question: "What did God command us to pray for?",
    answer: "Everything we need, spiritually and physically, as embraced in the prayer Christ our Lord himself taught us.",
    proof_texts: [
      { reference: "Matthew 6:9-13", text: "Pray then like this: 'Our Father in heaven, hallowed be your name. Your kingdom come, your will be done, on earth as it is in heaven. Give us this day our daily bread, and forgive us our debts, as we also have forgiven our debtors. And lead us not into temptation, but deliver us from evil.'" },
      { reference: "James 1:17", text: "Every good gift and every perfect gift is from above, coming down from the Father of lights, with whom there is no variation or shadow due to change." },
    ],
  },
  {
    number: 119,
    section: "Lord's Day 45",
    section_name: "Prayer",
    question: "What is the Lord's Prayer?",
    answer: "Our Father in heaven, hallowed be your name, your kingdom come, your will be done, on earth as it is in heaven. Give us today our daily bread. And forgive us our debts, as we also have forgiven our debtors. And lead us not into temptation, but deliver us from the evil one. For yours is the kingdom and the power and the glory forever. Amen.",
    proof_texts: [
      { reference: "Matthew 6:9-13", text: "Our Father in heaven, hallowed be your name, your kingdom come, your will be done, on earth as it is in heaven. Give us this day our daily bread, and forgive us our debts, as we also have forgiven our debtors." },
    ],
  },
  // ── LORD'S DAY 46 ──────────────────────────────────────────────────────────
  {
    number: 120,
    section: "Lord's Day 46",
    section_name: "Our Father in Heaven",
    question: "Why did Christ command us to call God 'our Father'?",
    answer: "At the very beginning of our prayer Christ wants to kindle in us what is basic to our prayer—the childlike awe and trust that God through Christ has become our Father. Our fathers do not refuse us the things of this life; God our Father will even less refuse to give us what we ask in faith.",
    proof_texts: [
      { reference: "Romans 8:15-16", text: "For you did not receive the spirit of slavery to fall back into fear, but you have received the Spirit of adoption as sons, by whom we cry, 'Abba! Father!' The Spirit himself bears witness with our spirit that we are children of God." },
      { reference: "Matthew 7:9-11", text: "Or which one of you, if his son asks him for bread, will give him a stone? Or if he asks for a fish, will give him a serpent? If you then, who are evil, know how to give good gifts to your children, how much more will your Father who is in heaven give good things to those who ask him!" },
    ],
  },
  {
    number: 121,
    section: "Lord's Day 46",
    section_name: "Our Father in Heaven",
    question: "Why the words 'in heaven'?",
    answer: "These words teach us not to think of God's heavenly majesty as something earthly, and to expect everything for body and soul from his almighty power.",
    proof_texts: [
      { reference: "Psalm 115:3", text: "Our God is in the heavens; he does all that he pleases." },
      { reference: "Acts 17:24-25", text: "The God who made the world and everything in it, being Lord of heaven and earth, does not live in temples made by man, nor is he served by human hands, as though he needed anything." },
    ],
  },
  // ── LORD'S DAY 47 ──────────────────────────────────────────────────────────
  {
    number: 122,
    section: "Lord's Day 47",
    section_name: "Hallowed Be Thy Name",
    question: "What does the first request mean?",
    answer: "'Hallowed be your name' means: Help us to really know you, to bless, worship, and praise you for all your works and for all that shines forth from them: your almighty power, wisdom, kindness, justice, mercy, and truth. And it means, Help us to direct all our living—what we think, say, and do—so that your name will never be blasphemed because of us but always honored and praised.",
    proof_texts: [
      { reference: "Psalm 119:137-138", text: "Righteous are you, O Lord, and right are your rules. You have appointed your testimonies in righteousness and in all faithfulness." },
      { reference: "Matthew 5:16", text: "In the same way, let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven." },
    ],
  },
  // ── LORD'S DAY 48 ──────────────────────────────────────────────────────────
  {
    number: 123,
    section: "Lord's Day 48",
    section_name: "Thy Kingdom Come",
    question: "What does the second request mean?",
    answer: "'Your kingdom come' means: Rule us by your Word and Spirit in such a way that more and more we submit to you. Keep your church strong, and add to it. Destroy the devil's work; destroy every force which revolts against you and every conspiracy against your Word. Do this until your kingdom is so complete and perfect that in it you are all in all.",
    proof_texts: [
      { reference: "Psalm 122:6-7", text: "Pray for the peace of Jerusalem! 'May they be secure who love you! Peace be within your walls and security within your towers!'" },
      { reference: "Revelation 22:17", text: "The Spirit and the Bride say, 'Come.' And let the one who hears say, 'Come.' And let the one who is thirsty come; let the one who desires take the water of life without price." },
    ],
  },
  // ── LORD'S DAY 49 ──────────────────────────────────────────────────────────
  {
    number: 124,
    section: "Lord's Day 49",
    section_name: "Thy Will Be Done",
    question: "What does the third request mean?",
    answer: "'Your will be done, on earth as it is in heaven' means: Help us and all people to reject our own wills and to obey your will without any back talk. Your will alone is good. Help us one and all to carry out the work we are called to, as willingly and faithfully as the angels in heaven.",
    proof_texts: [
      { reference: "Luke 22:42", text: "Saying, 'Father, if you are willing, remove this cup from me. Nevertheless, not my will, but yours, be done.'" },
      { reference: "Romans 12:2", text: "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect." },
    ],
  },
  // ── LORD'S DAY 50 ──────────────────────────────────────────────────────────
  {
    number: 125,
    section: "Lord's Day 50",
    section_name: "Give Us Our Daily Bread",
    question: "What does the fourth request mean?",
    answer: "'Give us today our daily bread' means: Do take care of all our physical needs so that we come to know that you are the only source of everything good, and that neither our work and worry nor your gifts can do us any good without your blessing. And so help us to give up our trust in creatures and to put trust in you alone.",
    proof_texts: [
      { reference: "Psalm 104:27-28", text: "These all look to you, to give them their food in due season. When you give it to them, they gather it up; when you open your hand, they are filled with good things." },
      { reference: "Matthew 6:25-26", text: "Therefore I tell you, do not be anxious about your life, what you will eat or what you will drink, nor about your body, what you will put on... Look at the birds of the air: they neither sow nor reap nor gather into barns, and yet your heavenly Father feeds them." },
    ],
  },
  // ── LORD'S DAY 51 ──────────────────────────────────────────────────────────
  {
    number: 126,
    section: "Lord's Day 51",
    section_name: "Forgive Us Our Debts",
    question: "What does the fifth request mean?",
    answer: "'And forgive us our debts, as we also have forgiven our debtors' means: Because of Christ's blood, do not hold against us, poor sinners that we are, any of the transgressions we do or the evil that constantly clings to us. Forgive us just as we are fully determined, as evidence of your grace in us, to forgive our neighbors.",
    proof_texts: [
      { reference: "Matthew 6:14-15", text: "For if you forgive others their trespasses, your heavenly Father will also forgive you, but if you do not forgive others their trespasses, neither will your Father forgive your trespasses." },
      { reference: "Psalm 51:1-2", text: "Have mercy on me, O God, according to your steadfast love; according to your abundant mercy blot out my transgressions. Wash me thoroughly from my iniquity, and cleanse me from my sin!" },
    ],
  },
  // ── LORD'S DAY 52 ──────────────────────────────────────────────────────────
  {
    number: 127,
    section: "Lord's Day 52",
    section_name: "Lead Us Not Into Temptation",
    question: "What does the sixth request mean?",
    answer: "'And lead us not into temptation, but deliver us from the evil one' means: By ourselves we are too weak to hold our own even for a moment. And our sworn enemies—the devil, the world, and our own flesh—never stop attacking us. And so, Lord, uphold us and make us strong with the strength of your Holy Spirit, so that we may not go down to defeat in this spiritual struggle, but may firmly resist our enemies until we finally win the complete victory.",
    proof_texts: [
      { reference: "1 Peter 5:8-9", text: "Be sober-minded; be watchful. Your adversary the devil prowls around like a roaring lion, seeking someone to devour. Resist him, firm in your faith." },
      { reference: "1 Corinthians 10:13", text: "No temptation has overtaken you that is not common to man. God is faithful, and he will not let you be tempted beyond your ability, but with the temptation he will also provide the way of escape." },
    ],
  },
  {
    number: 128,
    section: "Lord's Day 52",
    section_name: "Lead Us Not Into Temptation",
    question: "What does your conclusion to this prayer mean?",
    answer: "'For yours is the kingdom and the power and the glory forever' means: We have made all these requests of you because, as our all-powerful king, you not only want to, but are able to give us all that is good; and because your holy name, and not we ourselves, should receive all the praise, forever.",
    proof_texts: [
      { reference: "Romans 11:36", text: "For from him and through him and to him are all things. To him be glory forever. Amen." },
      { reference: "Revelation 19:6", text: "Then I heard what seemed to be the voice of a great multitude, like the roar of many waters and like the sound of mighty peals of thunder, crying out, 'Hallelujah! For the Lord our God the Almighty reigns.'" },
    ],
  },
  {
    number: 129,
    section: "Lord's Day 52",
    section_name: "Lead Us Not Into Temptation",
    question: "What does that little word 'Amen' express?",
    answer: "'Amen' means: This is sure to be! It is even more sure that God listens to my prayer than that I really desire what I pray for.",
    proof_texts: [
      { reference: "2 Corinthians 1:20", text: "For all the promises of God find their Yes in him. That is why it is through him that we utter our Amen to God for his glory." },
      { reference: "Revelation 22:20", text: "He who testifies to these things says, 'Surely I am coming soon.' Amen. Come, Lord Jesus!" },
    ],
  },
];

export default async function seedHeidel(sql: any): Promise<void> {
  console.log(`Seeding ${QUESTIONS.length} Heidelberg Catechism questions (1563)…`);

  for (const q of QUESTIONS) {
    await sql`
      INSERT INTO catechism_questions
        (catechism_id, number, section, section_name, question, answer, proof_texts)
      VALUES
        ('heidelberg', ${q.number}, ${q.section}, ${q.section_name},
         ${q.question}, ${q.answer}, ${JSON.stringify(q.proof_texts)})
      ON CONFLICT (catechism_id, number) DO UPDATE SET
        section      = EXCLUDED.section,
        section_name = EXCLUDED.section_name,
        question     = EXCLUDED.question,
        answer       = EXCLUDED.answer,
        proof_texts  = EXCLUDED.proof_texts
    `;
  }

  console.log(`Done! ${QUESTIONS.length} Heidelberg Catechism questions seeded.`);
}
