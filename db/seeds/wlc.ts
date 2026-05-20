export default async function seedCatechism(sql: any): Promise<void> {
  const questions = [
    // ─── Section 1: God and Holy Scripture (Q1–5) ───────────────────────────
    {
      catechism_id: 'wlc', number: 1,
      section: 'God and Holy Scripture', section_name: 'God and Holy Scripture',
      question: 'What is the chief and highest end of man?',
      answer: "Man's chief and highest end is to glorify God, and fully to enjoy him forever.",
      proof_texts: [
        { reference: 'Rom. 11:36', text: 'For of him, and through him, and to him, are all things: to whom be glory for ever. Amen.' },
        { reference: '1 Cor. 10:31', text: 'Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God.' },
        { reference: 'Ps. 73:24-28', text: 'Thou shalt guide me with thy counsel, and afterward receive me to glory. Whom have I in heaven but thee? and there is none upon earth that I desire beside thee... it is good for me to draw near to God.' },
        { reference: 'John 17:21-23', text: 'That they all may be one; as thou, Father, art in me, and I in thee, that they also may be one in us... I in them, and thou in me, that they may be made perfect in one.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 2,
      section: 'God and Holy Scripture', section_name: 'God and Holy Scripture',
      question: 'How doth it appear that there is a God?',
      answer: 'The very light of nature in man, and the works of God, declare plainly that there is a God; but his word and Spirit only do sufficiently and effectually reveal him unto men for their salvation.',
      proof_texts: [
        { reference: 'Rom. 1:19-20', text: 'Because that which may be known of God is manifest in them; for God hath shewed it unto them. For the invisible things of him from the creation of the world are clearly seen, being understood by the things that are made, even his eternal power and Godhead; so that they are without excuse.' },
        { reference: 'Ps. 19:1-3', text: 'The heavens declare the glory of God; and the firmament sheweth his handywork. Day unto day uttereth speech, and night unto night sheweth knowledge. There is no speech nor language, where their voice is not heard.' },
        { reference: '1 Cor. 2:9-10', text: 'But as it is written, Eye hath not seen, nor ear heard, neither have entered into the heart of man, the things which God hath prepared for them that love him. But God hath revealed them unto us by his Spirit.' },
        { reference: '2 Tim. 3:15-17', text: 'And that from a child thou hast known the holy scriptures, which are able to make thee wise unto salvation through faith which is in Christ Jesus. All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 3,
      section: 'God and Holy Scripture', section_name: 'God and Holy Scripture',
      question: 'What is the Word of God?',
      answer: 'The Holy Scriptures of the Old and New Testaments are the Word of God, the only rule of faith and obedience.',
      proof_texts: [
        { reference: '2 Tim. 3:16', text: 'All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness.' },
        { reference: '2 Pet. 1:19-21', text: 'We have also a more sure word of prophecy... holy men of God spake as they were moved by the Holy Ghost.' },
        { reference: 'Eph. 2:20', text: 'Built upon the foundation of the apostles and prophets, Jesus Christ himself being the chief corner stone.' },
        { reference: 'Rev. 22:18-19', text: 'For I testify unto every man that heareth the words of the prophecy of this book, If any man shall add unto these things, God shall add unto him the plagues that are written in this book.' },
        { reference: 'Isa. 8:20', text: 'To the law and to the testimony: if they speak not according to this word, it is because there is no light in them.' },
        { reference: 'Luke 16:29,31', text: 'Abraham saith unto him, They have Moses and the prophets; let them hear them... If they hear not Moses and the prophets, neither will they be persuaded, though one rose from the dead.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 4,
      section: 'God and Holy Scripture', section_name: 'God and Holy Scripture',
      question: 'How doth it appear that the Scriptures are the Word of God?',
      answer: 'The Scriptures manifest themselves to be the Word of God, by their majesty and purity; by the consent of all the parts, and the scope of the whole, which is to give all glory to God; by their light and power to convince and convert sinners, to comfort and build up believers unto salvation: but the Spirit of God bearing witness by and with the Scriptures in the heart of man, is alone able fully to persuade it that they are the very Word of God.',
      proof_texts: [
        { reference: 'Hos. 8:12', text: 'I have written to him the great things of my law, but they were counted as a strange thing.' },
        { reference: '1 Cor. 2:6-7,13', text: 'Howbeit we speak wisdom among them that are perfect: yet not the wisdom of this world... But we speak the wisdom of God in a mystery... Which things also we speak, not in the words which man\'s wisdom teacheth, but which the Holy Ghost teacheth.' },
        { reference: 'Ps. 119:18,129', text: 'Open thou mine eyes, that I may behold wondrous things out of thy law... Thy testimonies are wonderful: therefore doth my soul keep them.' },
        { reference: 'Acts 10:43', text: 'To him give all the prophets witness, that through his name whosoever believeth in him shall receive remission of sins.' },
        { reference: 'Acts 26:22', text: 'Having therefore obtained help of God, I continue unto this day, witnessing both to small and great, saying none other things than those which the prophets and Moses did say should come.' },
        { reference: 'Rom. 3:27', text: 'Where is boasting then? It is excluded. By what law? of works? Nay: but by the law of faith.' },
        { reference: 'Ps. 19:7-9', text: 'The law of the LORD is perfect, converting the soul: the testimony of the LORD is sure, making wise the simple... the commandment of the LORD is pure, enlightening the eyes.' },
        { reference: 'Acts 18:28', text: 'For he mightily convinced the Jews, and that publickly, shewing by the scriptures that Jesus was Christ.' },
        { reference: 'Heb. 4:12', text: 'For the word of God is quick, and powerful, and sharper than any twoedged sword, piercing even to the dividing asunder of soul and spirit.' },
        { reference: '1 John 2:20', text: 'But ye have an unction from the Holy One, and ye know all things.' },
        { reference: 'John 16:13-14', text: 'Howbeit when he, the Spirit of truth, is come, he will guide you into all truth.' },
        { reference: '1 John 2:27', text: 'But the anointing which ye have received of him abideth in you, and ye need not that any man teach you: but as the same anointing teacheth you of all things, and is truth.' },
        { reference: 'John 20:31', text: 'But these are written, that ye might believe that Jesus is the Christ, the Son of God; and that believing ye might have life through his name.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 5,
      section: 'God and Holy Scripture', section_name: 'God and Holy Scripture',
      question: 'What do the Scriptures principally teach?',
      answer: 'The Scriptures principally teach, what man is to believe concerning God, and what duty God requires of man.',
      proof_texts: [
        { reference: '2 Tim. 1:13', text: 'Hold fast the form of sound words, which thou hast heard of me, in faith and love which is in Christ Jesus.' },
        { reference: '2 Tim. 3:16', text: 'All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness.' }
      ]
    },

    // ─── Section 2: God's Decrees and Creation (Q6–11) ─────────────────────
    {
      catechism_id: 'wlc', number: 6,
      section: "God's Decrees and Creation", section_name: "God's Decrees and Creation",
      question: 'What do the Scriptures make known of God?',
      answer: 'The Scriptures make known what God is, the persons in the Godhead, his decrees, and the execution of his decrees.',
      proof_texts: [
        { reference: 'Heb. 11:6', text: 'But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.' },
        { reference: '1 Cor. 8:4-6', text: 'We know that an idol is nothing in the world, and that there is none other God but one... But to us there is but one God, the Father, of whom are all things.' },
        { reference: 'Matt. 28:19', text: 'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost.' },
        { reference: 'Acts 15:14-15,18', text: 'Simeon hath declared how God at the first did visit the Gentiles, to take out of them a people for his name. And to this agree the words of the prophets... Known unto God are all his works from the beginning of the world.' },
        { reference: 'Isa. 46:10', text: 'Declaring the end from the beginning, and from ancient times the things that are not yet done, saying, My counsel shall stand, and I will do all my pleasure.' },
        { reference: 'Eph. 1:11', text: 'In whom also we have obtained an inheritance, being predestinated according to the purpose of him who worketh all things after the counsel of his own will.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 7,
      section: "God's Decrees and Creation", section_name: "God's Decrees and Creation",
      question: 'What is God?',
      answer: 'God is a Spirit, in and of himself infinite in being, glory, blessedness, and perfection; all-sufficient, eternal, unchangeable, incomprehensible, every where present, almighty, knowing all things, most wise, most holy, most just, most merciful and gracious, longsuffering, and abundant in goodness and truth.',
      proof_texts: [
        { reference: 'John 4:24', text: 'God is a Spirit: and they that worship him must worship him in spirit and in truth.' },
        { reference: 'Exod. 3:14', text: 'And God said unto Moses, I AM THAT I AM: and he said, Thus shalt thou say unto the children of Israel, I AM hath sent me unto you.' },
        { reference: 'Job 22:2-3', text: 'Can a man be profitable unto God, as he that is wise may be profitable unto himself? Is it any pleasure to the Almighty, that thou art righteous? or is it gain to him, that thou makest thy ways perfect?' },
        { reference: '1 Tim. 6:15', text: 'Which in his times he shall shew, who is the blessed and only Potentate, the King of kings, and Lord of lords.' },
        { reference: 'Matt. 5:48', text: 'Be ye therefore perfect, even as your Father which is in heaven is perfect.' },
        { reference: 'Gen. 17:1', text: 'And when Abram was ninety years old and nine, the LORD appeared to Abram, and said unto him, I am the Almighty God; walk before me, and be thou perfect.' },
        { reference: 'Ps. 90:2', text: 'Before the mountains were brought forth, or ever thou hadst formed the earth and the world, even from everlasting to everlasting, thou art God.' },
        { reference: 'Mal. 3:6', text: 'For I am the LORD, I change not; therefore ye sons of Jacob are not consumed.' },
        { reference: '1 Kings 8:27', text: 'But will God indeed dwell on the earth? behold, the heaven and heaven of heavens cannot contain thee; how much less this house that I have builded?' },
        { reference: 'Ps. 139:1-13', text: 'O LORD, thou hast searched me, and known me. Thou knowest my downsitting and mine uprising... Whither shall I go from thy spirit? or whither shall I flee from thy presence?' },
        { reference: 'Rev. 4:8', text: 'And the four beasts had each of them six wings about him; and they were full of eyes within: and they rest not day and night, saying, Holy, holy, holy, Lord God Almighty, which was, and is, and is to come.' },
        { reference: 'Heb. 4:13', text: 'Neither is there any creature that is not manifest in his sight: but all things are naked and opened unto the eyes of him with whom we have to do.' },
        { reference: 'Rom. 11:33-34', text: 'O the depth of the riches both of the wisdom and knowledge of God! how unsearchable are his judgments, and his ways past finding out!' },
        { reference: 'Exod. 34:6-7', text: 'And the LORD passed by before him, and proclaimed, The LORD, The LORD God, merciful and gracious, longsuffering, and abundant in goodness and truth, keeping mercy for thousands, forgiving iniquity and transgression and sin, and that will by no means clear the guilty.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 8,
      section: "God's Decrees and Creation", section_name: "God's Decrees and Creation",
      question: 'Are there more Gods than one?',
      answer: 'There is but one only, the living and true God.',
      proof_texts: [
        { reference: 'Deut. 6:4', text: 'Hear, O Israel: The LORD our God is one LORD.' },
        { reference: 'Jer. 10:10', text: 'But the LORD is the true God, he is the living God, and an everlasting king.' },
        { reference: '1 Cor. 8:4,6', text: 'We know that an idol is nothing in the world, and that there is none other God but one... But to us there is but one God, the Father, of whom are all things.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 9,
      section: "God's Decrees and Creation", section_name: "God's Decrees and Creation",
      question: 'How many persons are there in the Godhead?',
      answer: 'There be three persons in the Godhead, the Father, the Son, and the Holy Ghost; and these three are one true, eternal God, the same in substance, equal in power and glory; although distinguished by their personal properties.',
      proof_texts: [
        { reference: '1 John 5:7', text: 'For there are three that bear record in heaven, the Father, the Word, and the Holy Ghost: and these three are one.' },
        { reference: 'Matt. 3:16-17', text: 'And Jesus, when he was baptized, went up straightway out of the water: and, lo, the heavens were opened unto him, and he saw the Spirit of God descending like a dove, and lighting upon him: And lo a voice from heaven, saying, This is my beloved Son, in whom I am well pleased.' },
        { reference: 'Matt. 28:19', text: 'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost.' },
        { reference: '2 Cor. 13:14', text: 'The grace of the Lord Jesus Christ, and the love of God, and the communion of the Holy Ghost, be with you all. Amen.' },
        { reference: 'John 10:30', text: 'I and my Father are one.' },
        { reference: 'John 1:1', text: 'In the beginning was the Word, and the Word was with God, and the Word was God.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 10,
      section: "God's Decrees and Creation", section_name: "God's Decrees and Creation",
      question: 'What are the personal properties of the three persons in the Godhead?',
      answer: 'It is proper to the Father to beget the Son, and to the Son to be begotten of the Father, and to the Holy Ghost to proceed from the Father and the Son from all eternity.',
      proof_texts: [
        { reference: 'Heb. 1:5-6,8', text: 'For unto which of the angels said he at any time, Thou art my Son, this day have I begotten thee?... But unto the Son he saith, Thy throne, O God, is for ever and ever.' },
        { reference: 'John 1:14,18', text: 'And the Word was made flesh, and dwelt among us... the only begotten Son, which is in the bosom of the Father, he hath declared him.' },
        { reference: 'John 15:26', text: 'But when the Comforter is come, whom I will send unto you from the Father, even the Spirit of truth, which proceedeth from the Father, he shall testify of me.' },
        { reference: 'Gal. 4:6', text: 'And because ye are sons, God hath sent forth the Spirit of his Son into your hearts, crying, Abba, Father.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 11,
      section: "God's Decrees and Creation", section_name: "God's Decrees and Creation",
      question: 'How doth it appear that the Son and the Holy Ghost are God equal with the Father?',
      answer: 'The Scriptures manifest that the Son and the Holy Ghost are God equal with the Father, ascribing unto them such names, attributes, works, and worship, as are proper to God only.',
      proof_texts: [
        { reference: 'John 1:1', text: 'In the beginning was the Word, and the Word was with God, and the Word was God.' },
        { reference: 'Isa. 9:6', text: 'For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.' },
        { reference: 'John 2:24-25', text: 'But Jesus did not commit himself unto them, because he knew all men, and needed not that any should testify of man: for he knew what was in man.' },
        { reference: 'John 21:17', text: 'He said unto him the third time, Simon, son of Jonas, lovest thou me? Peter was grieved because he said unto him the third time, Lovest thou me? And he said unto him, Lord, thou knowest all things; thou knowest that I love thee.' },
        { reference: 'Col. 1:16', text: 'For by him were all things created, that are in heaven, and that are in earth, visible and invisible, whether they be thrones, or dominions, or principalities, or powers: all things were created by him, and for him.' },
        { reference: 'Acts 5:3-4', text: 'But Peter said, Ananias, why hath Satan filled thine heart to lie to the Holy Ghost... thou hast not lied unto men, but unto God.' },
        { reference: '1 Cor. 2:10-11', text: 'But God hath revealed them unto us by his Spirit: for the Spirit searcheth all things, yea, the deep things of God.' },
        { reference: 'Matt. 28:19', text: 'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost.' },
        { reference: '2 Cor. 13:14', text: 'The grace of the Lord Jesus Christ, and the love of God, and the communion of the Holy Ghost, be with you all. Amen.' }
      ]
    },

    // ─── Section 3: Man's Sin and Misery (Q12–29) ──────────────────────────
    {
      catechism_id: 'wlc', number: 12,
      section: "Man's Sin and Misery", section_name: "Man's Sin and Misery",
      question: 'What are the decrees of God?',
      answer: "God's decrees are the wise, free, and holy acts of the counsel of his will, whereby, from all eternity, he hath, for his own glory, unchangeably foreordained whatsoever comes to pass in time, especially concerning angels and men.",
      proof_texts: [
        { reference: 'Eph. 1:11', text: 'In whom also we have obtained an inheritance, being predestinated according to the purpose of him who worketh all things after the counsel of his own will.' },
        { reference: 'Rom. 11:33', text: 'O the depth of the riches both of the wisdom and knowledge of God! how unsearchable are his judgments, and his ways past finding out!' },
        { reference: 'Rom. 9:14-15,18', text: 'What shall we say then? Is there unrighteousness with God? God forbid. For he saith to Moses, I will have mercy on whom I will have mercy... Therefore hath he mercy on whom he will have mercy, and whom he will he hardeneth.' },
        { reference: 'Isa. 46:10', text: 'Declaring the end from the beginning, and from ancient times the things that are not yet done, saying, My counsel shall stand, and I will do all my pleasure.' },
        { reference: 'Dan. 4:34-35', text: 'And at the end of the days I Nebuchadnezzar lifted up mine eyes unto heaven... his dominion is an everlasting dominion... and he doeth according to his will in the army of heaven, and among the inhabitants of the earth.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 13,
      section: "Man's Sin and Misery", section_name: "Man's Sin and Misery",
      question: 'What hath God especially decreed concerning angels and men?',
      answer: 'God, by an eternal and immutable decree, out of his mere love, for the praise of his glorious grace, to be manifested in due time, hath elected some angels to glory; and in Christ hath chosen some men to eternal life, and the means thereof: and also, according to his sovereign power, and the unsearchable counsel of his own will (whereby he extendeth or withholdeth favour as he pleaseth), hath passed by and foreordained the rest to dishonour and wrath, to be for their sin inflicted, to the praise of the glory of his justice.',
      proof_texts: [
        { reference: '1 Tim. 5:21', text: 'I charge thee before God, and the Lord Jesus Christ, and the elect angels, that thou observe these things without preferring one before another, doing nothing by partiality.' },
        { reference: 'Eph. 1:4-6', text: 'According as he hath chosen us in him before the foundation of the world, that we should be holy and without blame before him in love: Having predestinated us unto the adoption of children by Jesus Christ to himself, according to the good pleasure of his will, To the praise of the glory of his grace, wherein he hath made us accepted in the beloved.' },
        { reference: '2 Thess. 2:13-14', text: 'But we are bound to give thanks alway to God for you, brethren beloved of the Lord, because God hath from the beginning chosen you to salvation through sanctification of the Spirit and belief of the truth: Whereunto he called you by our gospel, to the obtaining of the glory of our Lord Jesus Christ.' },
        { reference: 'Rom. 9:17-18,21-22', text: 'For the scripture saith unto Pharaoh, Even for this same purpose have I raised thee up... Therefore hath he mercy on whom he will have mercy, and whom he will he hardeneth... Hath not the potter power over the clay, of the same lump to make one vessel unto honour, and another unto dishonour?' },
        { reference: 'Jude 1:4', text: 'For there are certain men crept in unawares, who were before of old ordained to this condemnation, ungodly men, turning the grace of our God into lasciviousness, and denying the only Lord God, and our Lord Jesus Christ.' },
        { reference: '1 Pet. 2:8', text: 'And a stone of stumbling, and a rock of offence, even to them which stumble at the word, being disobedient: whereunto also they were appointed.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 14,
      section: "Man's Sin and Misery", section_name: "Man's Sin and Misery",
      question: 'How doth God execute his decrees?',
      answer: 'God executeth his decrees in the works of creation and providence, according to his infallible foreknowledge, and the free and immutable counsel of his own will.',
      proof_texts: [
        { reference: 'Eph. 1:11', text: 'In whom also we have obtained an inheritance, being predestinated according to the purpose of him who worketh all things after the counsel of his own will.' },
        { reference: 'Dan. 4:35', text: 'And all the inhabitants of the earth are reputed as nothing: and he doeth according to his will in the army of heaven, and among the inhabitants of the earth: and none can stay his hand, or say unto him, What doest thou?' }
      ]
    },
    {
      catechism_id: 'wlc', number: 15,
      section: "Man's Sin and Misery", section_name: "Man's Sin and Misery",
      question: 'What is the work of creation?',
      answer: 'The work of creation is that wherein God did in the beginning, by the word of his power, make of nothing the world, and all things therein, for himself, within the space of six days, and all very good.',
      proof_texts: [
        { reference: 'Gen. 1:1', text: 'In the beginning God created the heaven and the earth.' },
        { reference: 'Heb. 11:3', text: 'Through faith we understand that the worlds were framed by the word of God, so that things which are seen were not made of things which do appear.' },
        { reference: 'Prov. 16:4', text: 'The LORD hath made all things for himself: yea, even the wicked for the day of evil.' },
        { reference: 'Gen. 1:31', text: 'And God saw every thing that he had made, and, behold, it was very good. And the evening and the morning were the sixth day.' },
        { reference: 'Col. 1:16', text: 'For by him were all things created, that are in heaven, and that are in earth, visible and invisible.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 16,
      section: "Man's Sin and Misery", section_name: "Man's Sin and Misery",
      question: 'How did God create angels?',
      answer: 'God created all the angels spirits, immortal, holy, excelling in knowledge, mighty in power, to execute his commandments, and to praise his name, yet subject to change.',
      proof_texts: [
        { reference: 'Col. 1:16', text: 'For by him were all things created, that are in heaven, and that are in earth, visible and invisible, whether they be thrones, or dominions, or principalities, or powers: all things were created by him, and for him.' },
        { reference: 'Ps. 104:4', text: 'Who maketh his angels spirits; his ministers a flaming fire.' },
        { reference: 'Matt. 22:30', text: 'For in the resurrection they neither marry, nor are given in marriage, but are as the angels of God in heaven.' },
        { reference: '2 Sam. 14:17', text: 'Then thine handmaid said, The word of my lord the king shall now be comfortable: for as an angel of God, so is my lord the king to discern good and bad.' },
        { reference: '2 Pet. 2:11', text: 'Whereas angels, which are greater in power and might, bring not railing accusation against them before the Lord.' },
        { reference: 'Ps. 103:20', text: 'Bless the LORD, ye his angels, that excel in strength, that do his commandments, hearkening unto the voice of his word.' },
        { reference: 'Rev. 22:9', text: 'Then saith he unto me, See thou do it not: for I am thy fellowservant, and of thy brethren the prophets, and of them which keep the sayings of this book: worship God.' },
        { reference: '2 Pet. 2:4', text: 'For if God spared not the angels that sinned, but cast them down to hell, and delivered them into chains of darkness, to be reserved unto judgment.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 17,
      section: "Man's Sin and Misery", section_name: "Man's Sin and Misery",
      question: 'How did God create man?',
      answer: 'After God had made all other creatures, he created man male and female; formed the body of the man of the dust of the ground, and the woman of the rib of the man, endued them with living, reasonable, and immortal souls; made them after his own image, in knowledge, righteousness, and holiness; having the law of God written in their hearts, and power to fulfil it, and dominion over the creatures; yet subject to fall.',
      proof_texts: [
        { reference: 'Gen. 1:27', text: 'So God created man in his own image, in the image of God created he him; male and female created he them.' },
        { reference: 'Gen. 2:7', text: 'And the LORD God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.' },
        { reference: 'Gen. 2:22', text: 'And the rib, which the LORD God had taken from man, made he a woman, and brought her unto the man.' },
        { reference: 'Col. 3:10', text: 'And have put on the new man, which is renewed in knowledge after the image of him that created him.' },
        { reference: 'Eph. 4:24', text: 'And that ye put on the new man, which after God is created in righteousness and true holiness.' },
        { reference: 'Rom. 2:14-15', text: 'For when the Gentiles, which have not the law, do by nature the things contained in the law, these, having not the law, are a law unto themselves: Which shew the work of the law written in their hearts.' },
        { reference: 'Eccl. 7:29', text: 'Lo, this only have I found, that God hath made man upright; but they have sought out many inventions.' },
        { reference: 'Gen. 1:28', text: 'And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth.' },
        { reference: 'Gen. 3:6', text: 'And when the woman saw that the tree was good for food, and that it was pleasant to the eyes, and a tree to be desired to make one wise, she took of the fruit thereof, and did eat, and gave also unto her husband with her; and he did eat.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 18,
      section: "Man's Sin and Misery", section_name: "Man's Sin and Misery",
      question: "What are God's works of providence?",
      answer: "God's works of providence are his most holy, wise, and powerful preserving and governing all his creatures; ordering them, and all their actions, to his own glory.",
      proof_texts: [
        { reference: 'Ps. 145:17', text: 'The LORD is righteous in all his ways, and holy in all his works.' },
        { reference: 'Ps. 104:24', text: 'O LORD, how manifold are thy works! in wisdom hast thou made them all: the earth is full of thy riches.' },
        { reference: 'Heb. 1:3', text: 'Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power.' },
        { reference: 'Dan. 4:34-35', text: 'And at the end of the days I Nebuchadnezzar lifted up mine eyes unto heaven, and mine understanding returned unto me... his dominion is an everlasting dominion... and he doeth according to his will in the army of heaven.' },
        { reference: 'Rom. 11:36', text: 'For of him, and through him, and to him, are all things: to whom be glory for ever. Amen.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 19,
      section: "Man's Sin and Misery", section_name: "Man's Sin and Misery",
      question: "What is God's providence towards the angels?",
      answer: 'God by his providence permitted some of the angels, wilfully and irrecoverably, to fall into sin and damnation, limiting and ordering that, and all their sins, to his own glory; and established the rest in holiness and happiness; employing them all, at his pleasure, in the administrations of his power, mercy, and justice.',
      proof_texts: [
        { reference: '2 Pet. 2:4', text: 'For if God spared not the angels that sinned, but cast them down to hell, and delivered them into chains of darkness, to be reserved unto judgment.' },
        { reference: 'Heb. 2:16', text: 'For verily he took not on him the nature of angels; but he took on him the seed of Abraham.' },
        { reference: 'Jude 1:6', text: 'And the angels which kept not their first estate, but left their own habitation, he hath reserved in everlasting chains under darkness unto the judgment of the great day.' },
        { reference: '1 Tim. 5:21', text: 'I charge thee before God, and the Lord Jesus Christ, and the elect angels, that thou observe these things without preferring one before another.' },
        { reference: 'Ps. 104:4', text: 'Who maketh his angels spirits; his ministers a flaming fire.' },
        { reference: 'Heb. 1:14', text: 'Are they not all ministering spirits, sent forth to minister for them who shall be heirs of salvation?' }
      ]
    },
    {
      catechism_id: 'wlc', number: 20,
      section: "Man's Sin and Misery", section_name: "Man's Sin and Misery",
      question: "What was the providence of God toward man in the estate in which he was created?",
      answer: 'The providence of God toward man in the estate in which he was created, was the placing him in paradise, appointing him to dress it, giving him liberty to eat of the fruit of the earth; putting the creatures under his dominion, and ordaining marriage for his help; affording him communion with himself; instituting the Sabbath; entering into a covenant of life with him, upon condition of personal, perfect, and perpetual obedience, of which the tree of life was a pledge; and forbidding to eat of the tree of the knowledge of good and evil, upon the pain of death.',
      proof_texts: [
        { reference: 'Gen. 2:8,15-16', text: 'And the LORD God planted a garden eastward in Eden; and there he put the man whom he had formed... And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it. And the LORD God commanded the man, saying, Of every tree of the garden thou mayest freely eat.' },
        { reference: 'Gen. 1:28', text: 'And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it.' },
        { reference: 'Gen. 2:18,23', text: 'And the LORD God said, It is not good that the man should be alone; I will make him an help meet for him... And Adam said, This is now bone of my bones, and flesh of my flesh.' },
        { reference: 'Gen. 1:26-28', text: 'And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth.' },
        { reference: 'Gen. 2:3', text: 'And God blessed the seventh day, and sanctified it: because that in it he had rested from all his work which God created and made.' },
        { reference: 'Gen. 2:17', text: 'But of the tree of the knowledge of good and evil, thou shalt not eat of it: for in the day that thou eatest thereof thou shalt surely die.' },
        { reference: 'Gal. 3:12', text: 'And the law is not of faith: but, The man that doeth them shall live in them.' },
        { reference: 'Rom. 10:5', text: 'For Moses describeth the righteousness which is of the law, That the man which doeth those things shall live by them.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 21,
      section: "Man's Sin and Misery", section_name: "Man's Sin and Misery",
      question: 'Did man continue in that estate wherein God at first created him?',
      answer: 'Our first parents being left to the freedom of their own will, through the temptation of Satan, transgressed the commandment of God in eating the forbidden fruit; and thereby fell from the estate of innocency wherein they were created.',
      proof_texts: [
        { reference: 'Gen. 3:6-8,13', text: 'And when the woman saw that the tree was good for food, and that it was pleasant to the eyes... she took of the fruit thereof, and did eat, and gave also unto her husband with her; and he did eat... And the woman said, The serpent beguiled me, and I did eat.' },
        { reference: '2 Cor. 11:3', text: 'But I fear, lest by any means, as the serpent beguiled Eve through his subtilty, so your minds should be corrupted from the simplicity that is in Christ.' },
        { reference: 'Eccl. 7:29', text: 'Lo, this only have I found, that God hath made man upright; but they have sought out many inventions.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 22,
      section: "Man's Sin and Misery", section_name: "Man's Sin and Misery",
      question: 'Did all mankind fall in that first transgression?',
      answer: 'The covenant being made with Adam as a public person, not for himself only, but for his posterity, all mankind descending from him by ordinary generation, sinned in him, and fell with him in that first transgression.',
      proof_texts: [
        { reference: 'Acts 17:26', text: 'And hath made of one blood all nations of men for to dwell on all the face of the earth.' },
        { reference: 'Gen. 2:16-17', text: 'And the LORD God commanded the man, saying, Of every tree of the garden thou mayest freely eat: But of the tree of the knowledge of good and evil, thou shalt not eat of it: for in the day that thou eatest thereof thou shalt surely die.' },
        { reference: 'Rom. 5:12-20', text: 'Wherefore, as by one man sin entered into the world, and death by sin; and so death passed upon all men, for that all have sinned... For as by one man\'s disobedience many were made sinners, so by the obedience of one shall many be made righteous.' },
        { reference: '1 Cor. 15:21-22', text: 'For since by man came death, by man came also the resurrection of the dead. For as in Adam all die, even so in Christ shall all be made alive.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 23,
      section: "Man's Sin and Misery", section_name: "Man's Sin and Misery",
      question: 'Into what estate did the fall bring mankind?',
      answer: 'The fall brought mankind into an estate of sin and misery.',
      proof_texts: [
        { reference: 'Rom. 3:23', text: 'For all have sinned, and come short of the glory of God.' },
        { reference: 'Rom. 5:12', text: 'Wherefore, as by one man sin entered into the world, and death by sin; and so death passed upon all men, for that all have sinned.' },
        { reference: 'Gen. 3:16-19', text: 'Unto the woman he said, I will greatly multiply thy sorrow and thy conception; in sorrow thou shalt bring forth children... In the sweat of thy face shalt thou eat bread, till thou return unto the ground.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 24,
      section: "Man's Sin and Misery", section_name: "Man's Sin and Misery",
      question: 'What is sin?',
      answer: 'Sin is any want of conformity unto, or transgression of, any law of God, given as a rule to the reasonable creature.',
      proof_texts: [
        { reference: '1 John 3:4', text: 'Whosoever committeth sin transgresseth also the law: for sin is the transgression of the law.' },
        { reference: 'Gal. 3:10,12', text: 'For as many as are of the works of the law are under the curse: for it is written, Cursed is every one that continueth not in all things which are written in the book of the law to do them... And the law is not of faith: but, The man that doeth them shall live in them.' },
        { reference: 'Rom. 3:20', text: 'Therefore by the deeds of the law there shall no flesh be justified in his sight: for by the law is the knowledge of sin.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 25,
      section: "Man's Sin and Misery", section_name: "Man's Sin and Misery",
      question: 'Wherein consisteth the sinfulness of that estate whereinto man fell?',
      answer: 'The sinfulness of that estate whereinto man fell, consisteth in the guilt of Adam\'s first sin, the want of that righteousness wherein he was created, and the corruption of his nature, whereby he is utterly indisposed, disabled, and made opposite unto all that is spiritually good, and wholly inclined to all evil, and that continually; which is commonly called original sin, and from which do proceed all actual transgressions.',
      proof_texts: [
        { reference: 'Rom. 5:12,19', text: 'Wherefore, as by one man sin entered into the world, and death by sin; and so death passed upon all men, for that all have sinned... For as by one man\'s disobedience many were made sinners.' },
        { reference: 'Rom. 3:10-19', text: 'As it is written, There is none righteous, no, not one: There is none that understandeth, there is none that seeketh after God. They are all gone out of the way, they are together become unprofitable; there is none that doeth good, no, not one.' },
        { reference: 'Eph. 2:1-3', text: 'And you hath he quickened, who were dead in trespasses and sins; Wherein in time past ye walked according to the course of this world... among whom also we all had our conversation in times past in the lusts of our flesh, fulfilling the desires of the flesh and of the mind.' },
        { reference: 'Gen. 6:5', text: 'And GOD saw that the wickedness of man was great in the earth, and that every imagination of the thoughts of his heart was only evil continually.' },
        { reference: 'Rom. 3:20', text: 'Therefore by the deeds of the law there shall no flesh be justified in his sight: for by the law is the knowledge of sin.' },
        { reference: 'James 1:14-15', text: 'But every man is tempted, when he is drawn away of his own lust, and enticed. Then when lust hath conceived, it bringeth forth sin: and sin, when it is finished, bringeth forth death.' },
        { reference: 'Matt. 15:19', text: 'For out of the heart proceed evil thoughts, murders, adulteries, fornications, thefts, false witness, blasphemies.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 26,
      section: "Man's Sin and Misery", section_name: "Man's Sin and Misery",
      question: 'How is original sin conveyed from our first parents unto their posterity?',
      answer: 'Original sin is conveyed from our first parents unto their posterity by natural generation, so as all that proceed from them in that way are conceived and born in sin.',
      proof_texts: [
        { reference: 'Ps. 51:5', text: 'Behold, I was shapen in iniquity; and in sin did my mother conceive me.' },
        { reference: 'Job 14:4', text: 'Who can bring a clean thing out of an unclean? not one.' },
        { reference: 'John 3:6', text: 'That which is born of the flesh is flesh; and that which is born of the Spirit is spirit.' },
        { reference: 'Rom. 5:12-13', text: 'Wherefore, as by one man sin entered into the world, and death by sin; and so death passed upon all men, for that all have sinned: (For until the law sin was in the world: but sin is not imputed when there is no law.)' }
      ]
    },
    {
      catechism_id: 'wlc', number: 27,
      section: "Man's Sin and Misery", section_name: "Man's Sin and Misery",
      question: 'What misery did the fall bring upon mankind?',
      answer: 'The fall brought upon mankind the loss of communion with God, his displeasure and curse; so as we are by nature children of wrath, bond slaves to Satan, and justly liable to all punishments in this world and that which is to come.',
      proof_texts: [
        { reference: 'Gen. 3:8,10,24', text: 'And they heard the voice of the LORD God walking in the garden in the cool of the day: and Adam and his wife hid themselves... And he said, I heard thy voice in the garden, and I was afraid... he placed at the east of the garden of Eden Cherubims, and a flaming sword.' },
        { reference: 'Eph. 2:2-3', text: 'Wherein in time past ye walked according to the course of this world, according to the prince of the power of the air, the spirit that now worketh in the children of disobedience: Among whom also we all had our conversation in times past in the lusts of our flesh... and were by nature the children of wrath, even as others.' },
        { reference: '2 Tim. 2:26', text: 'And that they may recover themselves out of the snare of the devil, who are taken captive by him at his will.' },
        { reference: 'Gen. 2:17', text: 'But of the tree of the knowledge of good and evil, thou shalt not eat of it: for in the day that thou eatest thereof thou shalt surely die.' },
        { reference: 'Lam. 3:39', text: 'Wherefore doth a living man complain, a man for the punishment of his sins?' },
        { reference: 'Matt. 25:41', text: 'Then shall he say also unto them on the left hand, Depart from me, ye cursed, into everlasting fire, prepared for the devil and his angels.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 28,
      section: "Man's Sin and Misery", section_name: "Man's Sin and Misery",
      question: 'What are the punishments of sin in this world?',
      answer: 'The punishments of sin in this world are either inward, as blindness of mind, a reprobate sense, strong delusions, hardness of heart, horror of conscience, and vile affections; or outward, as the curse of God upon the creatures for our sakes, and all other evils that befall us in our bodies, names, estates, relations, and employments; together with death itself.',
      proof_texts: [
        { reference: 'Eph. 4:18', text: 'Having the understanding darkened, being alienated from the life of God through the ignorance that is in them, because of the blindness of their heart.' },
        { reference: 'Rom. 1:28', text: 'And even as they did not like to retain God in their knowledge, God gave them over to a reprobate mind, to do those things which are not convenient.' },
        { reference: '2 Thess. 2:11', text: 'And for this cause God shall send them strong delusion, that they should believe a lie.' },
        { reference: 'Rom. 2:5', text: 'But after thy hardness and impenitent heart treasurest up unto thyself wrath against the day of wrath and revelation of the righteous judgment of God.' },
        { reference: 'Isa. 33:14', text: 'The sinners in Zion are afraid; fearfulness hath surprised the hypocrites. Who among us shall dwell with the devouring fire? who among us shall dwell with everlasting burnings?' },
        { reference: 'Rom. 1:26', text: 'For this cause God gave them up unto vile affections: for even their women did change the natural use into that which is against nature.' },
        { reference: 'Gen. 3:17', text: 'And unto Adam he said, Because thou hast hearkened unto the voice of thy wife, and hast eaten of the tree, of which I commanded thee, saying, Thou shalt not eat of it: cursed is the ground for thy sake.' },
        { reference: 'Rom. 6:21,23', text: 'What fruit had ye then in those things whereof ye are now ashamed? for the end of those things is death... For the wages of sin is death.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 29,
      section: "Man's Sin and Misery", section_name: "Man's Sin and Misery",
      question: 'What are the punishments of sin in the world to come?',
      answer: 'The punishments of sin in the world to come, are everlasting separation from the comfortable presence of God, and most grievous torments in soul and body, without intermission, in hell fire forever.',
      proof_texts: [
        { reference: '2 Thess. 1:9', text: 'Who shall be punished with everlasting destruction from the presence of the Lord, and from the glory of his power.' },
        { reference: 'Matt. 25:41,46', text: 'Then shall he say also unto them on the left hand, Depart from me, ye cursed, into everlasting fire, prepared for the devil and his angels... And these shall go away into everlasting punishment: but the righteous into life eternal.' },
        { reference: 'Mark 9:43-44', text: 'And if thy hand offend thee, cut it off: it is better for thee to enter into life maimed, than having two hands to go into hell, into the fire that never shall be quenched: Where their worm dieth not, and the fire is not quenched.' },
        { reference: 'Luke 16:24,26', text: 'And he cried and said, Father Abraham, have mercy on me, and send Lazarus, that he may dip the tip of his finger in water, and cool my tongue; for I am tormented in this flame... And beside all this, between us and you there is a great gulf fixed.' },
        { reference: 'Rev. 14:11', text: 'And the smoke of their torment ascendeth up for ever and ever: and they have no rest day nor night, who worship the beast and his image, and whosoever receiveth the mark of his name.' }
      ]
    },

    // ─── Section 4: Christ the Mediator (Q30–56) ───────────────────────────
    {
      catechism_id: 'wlc', number: 30,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'Doth God leave all mankind to perish in the estate of sin and misery?',
      answer: 'God doth not leave all men to perish in the estate of sin and misery, into which they fell by the breach of the first covenant, commonly called the covenant of works; but of his mere love and mercy delivereth his elect out of it, and bringeth them into an estate of salvation by the second covenant, commonly called the covenant of grace.',
      proof_texts: [
        { reference: '1 Thess. 5:9', text: 'For God hath not appointed us to wrath, but to obtain salvation by our Lord Jesus Christ.' },
        { reference: 'Titus 3:4-7', text: 'But after that the kindness and love of God our Saviour toward man appeared, Not by works of righteousness which we have done, but according to his mercy he saved us... That being justified by his grace, we should be made heirs according to the hope of eternal life.' },
        { reference: 'Gal. 3:21', text: 'Is the law then against the promises of God? God forbid: for if there had been a law given which could have given life, verily righteousness should have been by the law.' },
        { reference: 'Rom. 3:20-21', text: 'Therefore by the deeds of the law there shall no flesh be justified in his sight: for by the law is the knowledge of sin. But now the righteousness of God without the law is manifested.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 31,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'With whom was the covenant of grace made?',
      answer: 'The covenant of grace was made with Christ as the second Adam, and in him with all the elect as his seed.',
      proof_texts: [
        { reference: 'Gal. 3:16', text: 'Now to Abraham and his seed were the promises made. He saith not, And to seeds, as of many; but as of one, And to thy seed, which is Christ.' },
        { reference: 'Rom. 5:15-21', text: 'But not as the offence, so also is the free gift... For if by one man\'s offence death reigned by one; much more they which receive abundance of grace and of the gift of righteousness shall reign in life by one, Jesus Christ.' },
        { reference: 'Isa. 53:10-11', text: 'Yet it pleased the LORD to bruise him; he hath put him to grief: when thou shalt make his soul an offering for sin, he shall see his seed, he shall prolong his days... he shall see of the travail of his soul, and shall be satisfied.' },
        { reference: 'John 17:2', text: 'As thou hast given him power over all flesh, that he should give eternal life to as many as thou hast given him.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 32,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'How is the grace of God manifested in the second covenant?',
      answer: 'The grace of God is manifested in the second covenant, in that he freely provideth and offereth to sinners a Mediator, and life and salvation by him; and requiring faith as the condition to interest them in him, promiseth and giveth his Holy Spirit to all his elect, to work in them that faith, with all other saving graces; and to enable them unto all holy obedience, as the evidence of the truth of their faith and thankfulness to God, and as the way which he hath appointed them to salvation.',
      proof_texts: [
        { reference: 'Gen. 3:15', text: 'And I will put enmity between thee and the woman, and between thy seed and her seed; it shall bruise thy head, and thou shalt bruise his heel.' },
        { reference: 'Isa. 42:6', text: 'I the LORD have called thee in righteousness, and will hold thine hand, and will keep thee, and give thee for a covenant of the people, for a light of the Gentiles.' },
        { reference: 'John 3:16', text: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.' },
        { reference: '1 John 5:11-12', text: 'And this is the record, that God hath given to us eternal life, and this life is in his Son. He that hath the Son hath life; and he that hath not the Son of God hath not life.' },
        { reference: 'John 3:36', text: 'He that believeth on the Son hath everlasting life: and he that believeth not the Son shall not see life; but the wrath of God abideth on him.' },
        { reference: 'Ezek. 36:26-27', text: 'A new heart also will I give you, and a new spirit will I put within you: and I will take away the stony heart out of your flesh, and I will give you an heart of flesh. And I will put my spirit within you, and cause you to walk in my statutes.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 33,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'Was the covenant of grace always administered after one and the same manner?',
      answer: 'The covenant of grace was not always administered after the same manner, but the administrations of it under the Old Testament were different from those under the New.',
      proof_texts: [
        { reference: '2 Cor. 3:6-9', text: 'Who also hath made us able ministers of the new testament; not of the letter, but of the spirit: for the letter killeth, but the spirit giveth life. But if the ministration of death, written and engraven in stones, was glorious... how shall not the ministration of the spirit be rather glorious?' },
        { reference: 'Heb. 8:7-8,13', text: 'For if that first covenant had been faultless, then should no place have been sought for the second. For finding fault with them, he saith, Behold, the days come, saith the Lord, when I will make a new covenant... A new covenant, he hath made the first old.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 34,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'How was the covenant of grace administered under the Old Testament?',
      answer: 'The covenant of grace was administered under the Old Testament, by promises, prophecies, sacrifices, circumcision, the passover, and other types and ordinances, which did all foresignify Christ then to come, and were for that time sufficient to build up the elect in faith in the promised Messiah, by whom they then had full remission of sin, and eternal salvation.',
      proof_texts: [
        { reference: 'Heb. 8:6,9,15', text: 'But now hath he obtained a more excellent ministry... Not according to the covenant that I made with their fathers in the day when I took them by the hand to lead them out of the land of Egypt... they without us should not be made perfect.' },
        { reference: 'Rom. 4:11', text: 'And he received the sign of circumcision, a seal of the righteousness of the faith which he had yet being uncircumcised: that he might be the father of all them that believe.' },
        { reference: '1 Cor. 5:7', text: 'Purge out therefore the old leaven, that ye may be a new lump, as ye are unleavened. For even Christ our passover is sacrificed for us.' },
        { reference: 'Heb. 11:13,39-40', text: 'These all died in faith, not having received the promises, but having seen them afar off... And these all, having obtained a good report through faith, received not the promise: God having provided some better thing for us, that they without us should not be made perfect.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 35,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'How is the covenant of grace administered under the New Testament?',
      answer: 'Under the New Testament, when Christ the substance was exhibited, the same covenant of grace was and still is to be administered in the preaching of the word, and the administration of the sacraments of baptism and the Lord\'s supper; in which grace and salvation are held forth in more fullness, evidence, and efficacy, to all nations.',
      proof_texts: [
        { reference: 'Mark 16:15', text: 'And he said unto them, Go ye into all the world, and preach the gospel to every creature.' },
        { reference: 'Matt. 28:19-20', text: 'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you.' },
        { reference: '1 Cor. 11:23-25', text: 'For I have received of the Lord that which also I delivered unto you, That the Lord Jesus the same night in which he was betrayed took bread... This cup is the new testament in my blood: this do ye, as oft as ye drink it, in remembrance of me.' },
        { reference: '2 Cor. 3:6-18', text: 'Who also hath made us able ministers of the new testament... But we all, with open face beholding as in a glass the glory of the Lord, are changed into the same image from glory to glory, even as by the Spirit of the Lord.' },
        { reference: 'Heb. 8:6,10-11', text: 'But now hath he obtained a more excellent ministry... For this is the covenant that I will make with the house of Israel after those days, saith the Lord; I will put my laws into their mind, and write them in their hearts.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 36,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'Who is the Mediator of the covenant of grace?',
      answer: 'The only Mediator of the covenant of grace is the Lord Jesus Christ, who, being the eternal Son of God, of one substance and equal with the Father, in the fullness of time became man, and so was and continues to be God and man, in two entire distinct natures, and one person, forever.',
      proof_texts: [
        { reference: '1 Tim. 2:5', text: 'For there is one God, and one mediator between God and men, the man Christ Jesus.' },
        { reference: 'John 1:1,14', text: 'In the beginning was the Word, and the Word was with God, and the Word was God... And the Word was made flesh, and dwelt among us.' },
        { reference: 'Phil. 2:6', text: 'Who, being in the form of God, thought it not robbery to be equal with God.' },
        { reference: 'Gal. 4:4', text: 'But when the fulness of the time was come, God sent forth his Son, made of a woman, made under the law.' },
        { reference: 'Heb. 2:17', text: 'Wherefore in all things it behoved him to be made like unto his brethren, that he might be a merciful and faithful high priest in things pertaining to God, to make reconciliation for the sins of the people.' },
        { reference: 'Heb. 7:24-25', text: 'But this man, because he continueth ever, hath an unchangeable priesthood. Wherefore he is able also to save them to the uttermost that come unto God by him.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 37,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'How did Christ, being the Son of God, become man?',
      answer: 'Christ the Son of God became man, by taking to himself a true body, and a reasonable soul, being conceived by the power of the Holy Ghost in the womb of the virgin Mary, of her substance, and born of her, yet without sin.',
      proof_texts: [
        { reference: 'John 1:14', text: 'And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.' },
        { reference: 'Matt. 26:38', text: 'Then saith he unto them, My soul is exceeding sorrowful, even unto death: tarry ye here, and watch with me.' },
        { reference: 'Luke 1:27,31,35', text: 'To a virgin espoused to a man whose name was Joseph... And, behold, thou shalt conceive in thy womb... The Holy Ghost shall come upon thee, and the power of the Highest shall overshadow thee: therefore also that holy thing which shall be born of thee shall be called the Son of God.' },
        { reference: 'Gal. 4:4', text: 'But when the fulness of the time was come, God sent forth his Son, made of a woman, made under the law.' },
        { reference: 'Heb. 4:15', text: 'For we have not an high priest which cannot be touched with the feeling of our infirmities; but was in all points tempted like as we are, yet without sin.' },
        { reference: 'Heb. 7:26', text: 'For such an high priest became us, who is holy, harmless, undefiled, separate from sinners, and made higher than the heavens.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 38,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'Why was it requisite that the Mediator should be God?',
      answer: 'It was requisite that the Mediator should be God, that he might sustain and keep the human nature from sinking under the infinite wrath of God, and the power of death; give worth and efficacy to his sufferings, obedience, and intercession; and to satisfy God\'s justice, procure his favour, purchase a peculiar people, give his Spirit to them, conquer all their enemies, and bring them to everlasting salvation.',
      proof_texts: [
        { reference: 'Acts 2:24', text: 'Whom God hath raised up, having loosed the pains of death: because it was not possible that he should be holden of it.' },
        { reference: 'Rom. 1:4', text: 'And declared to be the Son of God with power, according to the spirit of holiness, by the resurrection from the dead.' },
        { reference: 'Heb. 9:14', text: 'How much more shall the blood of Christ, who through the eternal Spirit offered himself without spot to God, purge your conscience from dead works to serve the living God?' },
        { reference: 'Acts 20:28', text: 'Take heed therefore unto yourselves, and to all the flock, over the which the Holy Ghost hath made you overseers, to feed the church of God, which he hath purchased with his own blood.' },
        { reference: 'Heb. 7:25-28', text: 'Wherefore he is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them.' },
        { reference: 'John 16:7,11', text: 'Nevertheless I tell you the truth; It is expedient for you that I go away... because the prince of this world is judged.' },
        { reference: 'Rev. 12:10-11', text: 'Now is come salvation, and strength, and the kingdom of our God, and the power of his Christ... And they overcame him by the blood of the Lamb, and by the word of their testimony.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 39,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'Why was it requisite that the Mediator should be man?',
      answer: 'It was requisite that the Mediator should be man, that he might advance our nature, perform obedience to the law, suffer and make intercession for us in our nature, have a fellow-feeling of our infirmities; that we might receive the adoption of sons, and have comfort and access with boldness unto the throne of grace.',
      proof_texts: [
        { reference: 'Heb. 2:16', text: 'For verily he took not on him the nature of angels; but he took on him the seed of Abraham.' },
        { reference: 'Gal. 4:4', text: 'But when the fulness of the time was come, God sent forth his Son, made of a woman, made under the law.' },
        { reference: 'Heb. 2:14', text: 'Forasmuch then as the children are partakers of flesh and blood, he also himself likewise took part of the same; that through death he might destroy him that had the power of death, that is, the devil.' },
        { reference: 'Heb. 7:24-25', text: 'But this man, because he continueth ever, hath an unchangeable priesthood. Wherefore he is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them.' },
        { reference: 'Heb. 4:15-16', text: 'For we have not an high priest which cannot be touched with the feeling of our infirmities; but was in all points tempted like as we are, yet without sin. Let us therefore come boldly unto the throne of grace.' },
        { reference: 'Gal. 4:5', text: 'To redeem them that were under the law, that we might receive the adoption of sons.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 40,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'Why was it requisite that the Mediator should be God and man in one person?',
      answer: 'It was requisite that the Mediator, who was to reconcile God and man, should himself be both God and man, and this in one person; that the proper works of each nature might be accepted of God for us, and relied on by us, as the works of the whole person.',
      proof_texts: [
        { reference: 'Matt. 1:21,23', text: 'And she shall bring forth a son, and thou shalt call his name JESUS: for he shall save his people from their sins... Emmanuel, which being interpreted is, God with us.' },
        { reference: '1 Tim. 2:5', text: 'For there is one God, and one mediator between God and men, the man Christ Jesus.' },
        { reference: 'Col. 2:9', text: 'For in him dwelleth all the fulness of the Godhead bodily.' },
        { reference: 'Heb. 9:14', text: 'How much more shall the blood of Christ, who through the eternal Spirit offered himself without spot to God, purge your conscience from dead works to serve the living God?' },
        { reference: '1 Pet. 3:18', text: 'For Christ also hath once suffered for sins, the just for the unjust, that he might bring us to God, being put to death in the flesh, but quickened by the Spirit.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 41,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'Why was our Mediator called Jesus?',
      answer: 'Our Mediator was called Jesus, because he saveth his people from their sins.',
      proof_texts: [
        { reference: 'Matt. 1:21', text: 'And she shall bring forth a son, and thou shalt call his name JESUS: for he shall save his people from their sins.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 42,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'Why was our Mediator called Christ?',
      answer: 'Our Mediator was called Christ, because he was anointed with the Holy Ghost above measure; and so set apart, and fully furnished with all authority and ability, to execute the offices of prophet, priest, and king of his church, in the estate both of his humiliation and exaltation.',
      proof_texts: [
        { reference: 'John 3:34', text: 'For he whom God hath sent speaketh the words of God: for God giveth not the Spirit by measure unto him.' },
        { reference: 'Ps. 45:7', text: 'Thou lovest righteousness, and hatest wickedness: therefore God, thy God, hath anointed thee with the oil of gladness above thy fellows.' },
        { reference: 'Acts 10:38', text: 'How God anointed Jesus of Nazareth with the Holy Ghost and with power: who went about doing good, and healing all that were oppressed of the devil; for God was with him.' },
        { reference: 'Heb. 1:9', text: 'Thou hast loved righteousness, and hated iniquity; therefore God, even thy God, hath anointed thee with the oil of gladness above thy fellows.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 43,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'How doth Christ execute the office of a prophet?',
      answer: 'Christ executeth the office of a prophet, in his revealing to the church, in all ages, by his Spirit and word, in divers ways of administration, the whole will of God, in all things concerning their edification and salvation.',
      proof_texts: [
        { reference: 'John 1:18', text: 'No man hath seen God at any time; the only begotten Son, which is in the bosom of the Father, he hath declared him.' },
        { reference: '1 Pet. 1:10-12', text: 'Of which salvation the prophets have inquired and searched diligently, who prophesied of the grace that should come unto you... the Spirit of Christ which was in them did signify.' },
        { reference: 'Heb. 1:1-2', text: 'God, who at sundry times and in divers manners spake in time past unto the fathers by the prophets, Hath in these last days spoken unto us by his Son.' },
        { reference: 'John 15:15', text: 'Henceforth I call you not servants; for the servant knoweth not what his lord doeth: but I have called you friends; for all things that I have heard of my Father I have made known unto you.' },
        { reference: 'Acts 1:2', text: 'Until the day in which he was taken up, after that he through the Holy Ghost had given commandments unto the apostles whom he had chosen.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 44,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'How doth Christ execute the office of a priest?',
      answer: 'Christ executeth the office of a priest, in his once offering himself a sacrifice without spot to God, to be a reconciliation for the sins of his people; and in making continual intercession for them.',
      proof_texts: [
        { reference: 'Heb. 9:14,28', text: 'How much more shall the blood of Christ, who through the eternal Spirit offered himself without spot to God... So Christ was once offered to bear the sins of many.' },
        { reference: 'Heb. 2:17', text: 'Wherefore in all things it behoved him to be made like unto his brethren, that he might be a merciful and faithful high priest in things pertaining to God, to make reconciliation for the sins of the people.' },
        { reference: 'Heb. 7:25', text: 'Wherefore he is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them.' },
        { reference: 'Rom. 8:34', text: 'Who is he that condemneth? It is Christ that died, yea rather, that is risen again, who is even at the right hand of God, who also maketh intercession for us.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 45,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'How doth Christ execute the office of a king?',
      answer: 'Christ executeth the office of a king, in calling out of the world a people to himself, and giving them officers, laws, and censures, by which he visibly governs them; in bestowing saving grace upon his elect, rewarding their obedience, and correcting them for their sins, preserving and supporting them under all their temptations and sufferings, restraining and overcoming all their enemies, and powerfully ordering all things for his own glory and their good; and also in taking vengeance on the rest, who know not God and obey not the gospel.',
      proof_texts: [
        { reference: 'Acts 15:14-16', text: 'Simeon hath declared how God at the first did visit the Gentiles, to take out of them a people for his name... After this I will return, and will build again the tabernacle of David.' },
        { reference: 'Isa. 33:22', text: 'For the LORD is our judge, the LORD is our lawgiver, the LORD is our king; he will save us.' },
        { reference: '1 Cor. 5:4-5', text: 'In the name of our Lord Jesus Christ, when ye are gathered together, and my spirit, with the power of our Lord Jesus Christ, To deliver such an one unto Satan for the destruction of the flesh, that the spirit may be saved.' },
        { reference: 'Eph. 4:11-12', text: 'And he gave some, apostles; and some, prophets; and some, evangelists; and some, pastors and teachers; For the perfecting of the saints, for the work of the ministry, for the edifying of the body of Christ.' },
        { reference: 'Matt. 25:31-46', text: 'When the Son of man shall come in his glory, and all the holy angels with him, then shall he sit upon the throne of his glory... And these shall go away into everlasting punishment: but the righteous into life eternal.' },
        { reference: '2 Thess. 1:8-9', text: 'In flaming fire taking vengeance on them that know not God, and that obey not the gospel of our Lord Jesus Christ: Who shall be punished with everlasting destruction from the presence of the Lord.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 46,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: "What was the estate of Christ's humiliation?",
      answer: "The estate of Christ's humiliation was that low condition, wherein he for our sakes, emptying himself of his glory, took upon him the form of a servant, in his conception and birth, life, death, and after his death, until his resurrection.",
      proof_texts: [
        { reference: 'Phil. 2:6-8', text: 'Who, being in the form of God, thought it not robbery to be equal with God: But made himself of no reputation, and took upon him the form of a servant, and was made in the likeness of men: And being found in fashion as a man, he humbled himself, and became obedient unto death, even the death of the cross.' },
        { reference: 'Luke 1:31', text: 'And, behold, thou shalt conceive in thy womb, and bring forth a son, and shalt call his name JESUS.' },
        { reference: '2 Cor. 8:9', text: 'For ye know the grace of our Lord Jesus Christ, that, though he was rich, yet for your sakes he became poor, that ye through his poverty might be rich.' },
        { reference: 'Acts 2:24', text: 'Whom God hath raised up, having loosed the pains of death: because it was not possible that he should be holden of it.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 47,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'How did Christ humble himself in his conception and birth?',
      answer: 'Christ humbled himself in his conception and birth, in that, being from eternity the Son of God, in the bosom of the Father, he was pleased in the fullness of time to become the son of man, made of a woman of low estate, and to be born of her; with divers circumstances of more than ordinary abasement.',
      proof_texts: [
        { reference: 'John 1:14,18', text: 'And the Word was made flesh, and dwelt among us... the only begotten Son, which is in the bosom of the Father, he hath declared him.' },
        { reference: 'Gal. 4:4', text: 'But when the fulness of the time was come, God sent forth his Son, made of a woman, made under the law.' },
        { reference: 'Luke 2:7', text: 'And she brought forth her firstborn son, and wrapped him in swaddling clothes, and laid him in a manger; because there was no room for them in the inn.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 48,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'How did Christ humble himself in his life?',
      answer: 'Christ humbled himself in his life, by subjecting himself to the law, and by conflicting with the indignities of the world, temptations of Satan, and infirmities in his flesh, whether common to the nature of man, or particularly accompanying that his low condition.',
      proof_texts: [
        { reference: 'Gal. 4:4', text: 'But when the fulness of the time was come, God sent forth his Son, made of a woman, made under the law.' },
        { reference: 'Isa. 53:2-3', text: 'For he shall grow up before him as a tender plant, and as a root out of a dry ground: he hath no form nor comeliness; and when we shall see him, there is no beauty that we should desire him. He is despised and rejected of men; a man of sorrows, and acquainted with grief.' },
        { reference: 'Luke 4:2', text: 'Being forty days tempted of the devil. And in those days he did eat nothing: and when they were ended, he afterward hungered.' },
        { reference: 'John 4:6', text: 'Now Jacob\'s well was there. Jesus therefore, being wearied with his journey, sat thus on the well: and it was about the sixth hour.' },
        { reference: 'Heb. 2:17-18', text: 'Wherefore in all things it behoved him to be made like unto his brethren... For in that he himself hath suffered being tempted, he is able to succour them that are tempted.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 49,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'How did Christ humble himself in his death?',
      answer: 'Christ humbled himself in his death, in that having been betrayed by Judas, forsaken by his disciples, scorned and rejected by the world, condemned by Pilate, and tormented by his persecutors; having also conflicted with the terrors of death, and the powers of darkness, felt and borne the weight of God\'s wrath, he laid down his life an offering for sin, enduring the painful, shameful, and cursed death of the cross.',
      proof_texts: [
        { reference: 'Matt. 26:47,56', text: 'And while he yet spake, lo, Judas, one of the twelve, came... Then all the disciples forsook him, and fled.' },
        { reference: 'Isa. 53:2-3', text: 'He hath no form nor comeliness; and when we shall see him, there is no beauty that we should desire him. He is despised and rejected of men; a man of sorrows, and acquainted with grief.' },
        { reference: 'Matt. 27:26-50', text: 'Then released he Barabbas unto them: and when he had scourged Jesus, he delivered him to be crucified... And about the ninth hour Jesus cried with a loud voice... My God, my God, why hast thou forsaken me?' },
        { reference: 'Luke 22:44', text: 'And being in an agony he prayed more earnestly: and his sweat was as it were great drops of blood falling down to the ground.' },
        { reference: 'Isa. 53:10', text: 'Yet it pleased the LORD to bruise him; he hath put him to grief: when thou shalt make his soul an offering for sin.' },
        { reference: 'Gal. 3:13', text: 'Christ hath redeemed us from the curse of the law, being made a curse for us: for it is written, Cursed is every one that hangeth on a tree.' },
        { reference: 'Phil. 2:8', text: 'And being found in fashion as a man, he humbled himself, and became obedient unto death, even the death of the cross.' }
      ]
    },
  ];

  for (const q of questions) {
    await sql`
      INSERT INTO catechism_questions (catechism_id, number, section, section_name, question, answer, proof_texts)
      VALUES (${q.catechism_id}, ${q.number}, ${q.section}, ${q.section_name}, ${q.question}, ${q.answer}, ${JSON.stringify(q.proof_texts)})
      ON CONFLICT (catechism_id, number) DO UPDATE SET
        question = EXCLUDED.question,
        answer = EXCLUDED.answer,
        proof_texts = EXCLUDED.proof_texts,
        section = EXCLUDED.section,
        section_name = EXCLUDED.section_name
    `;
  }
}
