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
    {
      catechism_id: 'wlc', number: 50,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'Wherein consisted Christ\'s humiliation after his death?',
      answer: 'Christ\'s humiliation after his death consisted in his being buried, and continuing in the state of the dead, and under the power of death till the third day; which hath been otherwise expressed in these words, He descended into hell.',
      proof_texts: [
        { reference: '1 Cor. 15:3-4', text: 'For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures; And that he was buried, and that he rose again the third day according to the scriptures.' },
        { reference: 'Acts 2:24-27,31', text: 'Whom God hath raised up, having loosed the pains of death: because it was not possible that he should be holden of it... He seeing this before spake of the resurrection of Christ, that his soul was not left in hell, neither his flesh did see corruption.' },
        { reference: 'Matt. 12:40', text: 'For as Jonas was three days and three nights in the whale\'s belly; so shall the Son of man be three days and three nights in the heart of the earth.' },
        { reference: 'Rom. 6:9', text: 'Knowing that Christ being raised from the dead dieth no more; death hath no more dominion over him.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 51,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'What was the estate of Christ\'s exaltation?',
      answer: 'The estate of Christ\'s exaltation comprehendeth his resurrection, ascension, sitting at the right hand of the Father, and his coming again to judge the world.',
      proof_texts: [
        { reference: '1 Cor. 15:4', text: 'And that he was buried, and that he rose again the third day according to the scriptures.' },
        { reference: 'Acts 1:11', text: 'Ye men of Galilee, why stand ye gazing up into heaven? this same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven.' },
        { reference: 'Eph. 1:20', text: 'Which he wrought in Christ, when he raised him from the dead, and set him at his own right hand in the heavenly places.' },
        { reference: 'Acts 1:9-11', text: 'And when he had spoken these things, while they beheld, he was taken up; and a cloud received him out of their sight.' },
        { reference: 'Acts 17:31', text: 'Because he hath appointed a day, in the which he will judge the world in righteousness by that man whom he hath ordained; whereof he hath given assurance unto all men, in that he hath raised him from the dead.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 52,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'How was Christ exalted in his resurrection?',
      answer: 'Christ was exalted in his resurrection, in that, not having seen corruption in death (of which it was not possible for him to be held), and having the very same body in which he suffered, with the essential properties thereof (but without mortality, and other common infirmities belonging to this life), really united to his soul, he rose again from the dead the third day by his own power; whereby he declared himself to be the Son of God, to have satisfied divine justice, to have vanquished death, and him that had the power of it, and to be Lord of quick and dead: all which he did as a public person, the head of his church, for their justification, quickening in grace, support against enemies, and to assure them of their resurrection from the dead at the last day.',
      proof_texts: [
        { reference: 'Acts 2:24,27', text: 'Whom God hath raised up, having loosed the pains of death... Because thou wilt not leave my soul in hell, neither wilt thou suffer thine Holy One to see corruption.' },
        { reference: 'Luke 24:39', text: 'Behold my hands and my feet, that it is I myself: handle me, and see; for a spirit hath not flesh and bones, as ye see me have.' },
        { reference: 'Rom. 1:4', text: 'And declared to be the Son of God with power, according to the spirit of holiness, by the resurrection from the dead.' },
        { reference: 'Rom. 8:34', text: 'Who is he that condemneth? It is Christ that died, yea rather, that is risen again, who is even at the right hand of God, who also maketh intercession for us.' },
        { reference: 'Heb. 2:14', text: 'Forasmuch then as the children are partakers of flesh and blood, he also himself likewise took part of the same; that through death he might destroy him that had the power of death, that is, the devil.' },
        { reference: 'Rom. 14:9', text: 'For to this end Christ both died, and rose, and revived, that he might be Lord both of the dead and living.' },
        { reference: 'Rom. 4:25', text: 'Who was delivered for our offences, and was raised again for our justification.' },
        { reference: '1 Cor. 15:21-22', text: 'For since by man came death, by man came also the resurrection of the dead. For as in Adam all die, even so in Christ shall all be made alive.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 53,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'How was Christ exalted in his ascension?',
      answer: 'Christ was exalted in his ascension, in that having after his resurrection often appeared unto and conversed with his apostles, speaking to them of the things pertaining to the kingdom of God, and giving them commission to preach the gospel to all nations, forty days after his resurrection, he, in our nature, and as our head, triumphing over enemies, visibly went up into the highest heavens, there to receive gifts for men, to raise up our affections thither, and to prepare a place for us, where himself is, and shall continue till his second coming at the end of the world.',
      proof_texts: [
        { reference: 'Acts 1:2-3', text: 'Until the day in which he was taken up, after that he through the Holy Ghost had given commandments unto the apostles whom he had chosen: To whom also he shewed himself alive after his passion by many infallible proofs, being seen of them forty days, and speaking of the things pertaining to the kingdom of God.' },
        { reference: 'Eph. 4:8', text: 'Wherefore he saith, When he ascended up on high, he led captivity captive, and gave gifts unto men.' },
        { reference: 'Acts 1:9-11', text: 'And when he had spoken these things, while they beheld, he was taken up; and a cloud received him out of their sight.' },
        { reference: 'Heb. 6:20', text: 'Whither the forerunner is for us entered, even Jesus, made an high priest for ever after the order of Melchisedec.' },
        { reference: 'John 14:3', text: 'And if I go and prepare a place for you, I will come again, and receive you unto myself; that where I am, there ye may be also.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 54,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'How is Christ exalted in his sitting at the right hand of God?',
      answer: 'Christ is exalted in his sitting at the right hand of God, in that as God-man he is advanced to the highest favour with God the Father, with all fullness of joy, glory, and power over all things in heaven and earth; and doth gather and defend his church, and subdue their enemies; furnisheth his ministers and people with gifts and graces, and maketh intercession for them.',
      proof_texts: [
        { reference: 'Phil. 2:9', text: 'Wherefore God also hath highly exalted him, and given him a name which is above every name.' },
        { reference: 'Acts 2:28', text: 'Thou hast made known to me the ways of life; thou shalt make me full of joy with thy countenance.' },
        { reference: 'Eph. 1:20-22', text: 'Which he wrought in Christ, when he raised him from the dead, and set him at his own right hand in the heavenly places, Far above all principality, and power, and might, and dominion, and every name that is named... And hath put all things under his feet, and gave him to be the head over all things to the church.' },
        { reference: 'Eph. 4:10-12', text: 'He that descended is the same also that ascended up far above all heavens, that he might fill all things. And he gave some, apostles; and some, prophets; and some, evangelists; and some, pastors and teachers; For the perfecting of the saints.' },
        { reference: 'Rom. 8:34', text: 'Who is he that condemneth? It is Christ that died, yea rather, that is risen again, who is even at the right hand of God, who also maketh intercession for us.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 55,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'How doth Christ make intercession?',
      answer: 'Christ maketh intercession, by his appearing in our nature continually before the Father in heaven, in the merit of his obedience and sacrifice on earth, declaring his will to have it applied to all believers; answering all accusations against them, and procuring for them quiet of conscience, notwithstanding daily failings, access with boldness to the throne of grace, and acceptance of their persons and services.',
      proof_texts: [
        { reference: 'Heb. 9:12,24', text: 'Neither by the blood of goats and calves, but by his own blood he entered in once into the holy place, having obtained eternal redemption for us... For Christ is not entered into the holy places made with hands... but into heaven itself, now to appear in the presence of God for us.' },
        { reference: 'John 17:9,20,24', text: 'I pray for them: I pray not for the world, but for them which thou hast given me; for they are thine... Neither pray I for these alone, but for them also which shall believe on me through their word... Father, I will that they also, whom thou hast given me, be with me where I am.' },
        { reference: 'Rom. 8:33-34', text: 'Who shall lay any thing to the charge of God\'s elect? It is God that justifieth. Who is he that condemneth? It is Christ that died, yea rather, that is risen again, who is even at the right hand of God, who also maketh intercession for us.' },
        { reference: '1 John 2:1-2', text: 'My little children, these things write I unto you, that ye sin not. And if any man sin, we have an advocate with the Father, Jesus Christ the righteous: And he is the propitiation for our sins.' },
        { reference: 'Heb. 4:16', text: 'Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 56,
      section: 'Christ the Mediator', section_name: 'Christ the Mediator',
      question: 'How is Christ to be exalted in his coming again to judge the world?',
      answer: 'Christ is to be exalted in his coming again to judge the world, in that he, who was unjustly judged and condemned by wicked men, shall come again at the last day in great power, and in the full manifestation of his own glory, and of his Father\'s, with all his holy angels, with a shout, with the voice of the archangel, and with the trumpet of God, to judge the world in righteousness.',
      proof_texts: [
        { reference: 'Acts 3:14-15', text: 'But ye denied the Holy One and the Just, and desired a murderer to be granted unto you; And killed the Prince of life, whom God hath raised from the dead; whereof we are witnesses.' },
        { reference: 'Matt. 24:30', text: 'And then shall appear the sign of the Son of man in heaven: and then shall all the tribes of the earth mourn, and they shall see the Son of man coming in the clouds of heaven with power and great glory.' },
        { reference: '1 Thess. 4:16', text: 'For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first.' },
        { reference: 'Acts 17:31', text: 'Because he hath appointed a day, in the which he will judge the world in righteousness by that man whom he hath ordained.' }
      ]
    },

    // ─── Section 5: Benefits of Redemption (Q57–90) ─────────────────────────
    {
      catechism_id: 'wlc', number: 57,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'What benefits hath Christ procured by his mediation?',
      answer: 'Christ, by his mediation, hath procured redemption, with all other benefits of the covenant of grace.',
      proof_texts: [
        { reference: 'Heb. 9:12', text: 'Neither by the blood of goats and calves, but by his own blood he entered in once into the holy place, having obtained eternal redemption for us.' },
        { reference: '2 Cor. 1:20', text: 'For all the promises of God in him are yea, and in him Amen, unto the glory of God by us.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 58,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'How do we come to be made partakers of the benefits which Christ hath procured?',
      answer: 'We are made partakers of the benefits which Christ hath procured, by the application of them unto us, which is the work of God the Holy Ghost.',
      proof_texts: [
        { reference: 'John 1:12', text: 'But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name.' },
        { reference: 'Titus 3:5-6', text: 'Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost; Which he shed on us abundantly through Jesus Christ our Saviour.' },
        { reference: 'John 3:5-6', text: 'Jesus answered, Verily, verily, I say unto thee, Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God. That which is born of the flesh is flesh; and that which is born of the Spirit is spirit.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 59,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'Who are made partakers of redemption through Christ?',
      answer: 'Redemption is certainly applied, and effectually communicated, to all those for whom Christ hath purchased it; who are in time by the Holy Ghost enabled to believe in Christ according to the gospel.',
      proof_texts: [
        { reference: 'Eph. 1:13-14', text: 'In whom ye also trusted, after that ye heard the word of truth, the gospel of your salvation: in whom also after that ye believed, ye were sealed with that holy Spirit of promise, Which is the earnest of our inheritance until the redemption of the purchased possession.' },
        { reference: 'John 6:37,39', text: 'All that the Father giveth me shall come to me; and him that cometh to me I will in no wise cast out... And this is the Father\'s will which hath sent me, that of all which he hath given me I should lose nothing, but should raise it up again at the last day.' },
        { reference: 'John 10:15-16', text: 'As the Father knoweth me, even so know I the Father: and I lay down my life for the sheep. And other sheep I have, which are not of this fold: them also I must bring, and they shall hear my voice; and there shall be one fold, and one shepherd.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 60,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'Can they who have never heard the gospel, and so know not Jesus Christ, nor believe in him, be saved by their living according to the light of nature?',
      answer: 'They who, having never heard the gospel, know not Jesus Christ, and believe not in him, cannot be saved, be they never so diligent to frame their lives according to the light of nature, or the laws of that religion which they profess; neither is there salvation in any other, but in Christ alone, who is the Saviour only of his body the church.',
      proof_texts: [
        { reference: 'Rom. 10:14', text: 'How then shall they call on him in whom they have not believed? and how shall they believe in him of whom they have not heard? and how shall they hear without a preacher?' },
        { reference: 'Acts 4:12', text: 'Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.' },
        { reference: 'John 14:6', text: 'Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.' },
        { reference: 'Eph. 5:23', text: 'For the husband is the head of the wife, even as Christ is the head of the church: and he is the saviour of the body.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 61,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'Are all they saved who hear the gospel, and live in the church?',
      answer: 'All that hear the gospel, and live in the visible church, are not saved; but only they who are true members of the church invisible.',
      proof_texts: [
        { reference: 'John 12:38-40', text: 'That the saying of Esaias the prophet might be fulfilled... Lord, who hath believed our report? and to whom hath the arm of the Lord been revealed? Therefore they could not believe.' },
        { reference: 'Rom. 9:6', text: 'Not as though the word of God hath taken none effect. For they are not all Israel, which are of Israel.' },
        { reference: 'Matt. 22:14', text: 'For many are called, but few are chosen.' },
        { reference: 'Matt. 7:21', text: 'Not every one that saith unto me, Lord, Lord, shall enter into the kingdom of heaven; but he that doeth the will of my Father which is in heaven.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 62,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'What is the visible church?',
      answer: 'The visible church is a society made up of all such as in all ages and places of the world do profess the true religion, and of their children.',
      proof_texts: [
        { reference: '1 Cor. 1:2', text: 'Unto the church of God which is at Corinth, to them that are sanctified in Christ Jesus, called to be saints, with all that in every place call upon the name of Jesus Christ our Lord.' },
        { reference: '1 Cor. 12:13', text: 'For by one Spirit are we all baptized into one body, whether we be Jews or Gentiles, whether we be bond or free; and have been all made to drink into one Spirit.' },
        { reference: 'Rom. 15:9-12', text: 'And that the Gentiles might glorify God for his mercy; as it is written, For this cause I will confess to thee among the Gentiles, and sing unto thy name.' },
        { reference: 'Acts 2:39', text: 'For the promise is unto you, and to your children, and to all that are afar off, even as many as the Lord our God shall call.' },
        { reference: '1 Cor. 7:14', text: 'For the unbelieving husband is sanctified by the wife, and the unbelieving wife is sanctified by the husband: else were your children unclean; but now are they holy.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 63,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'What are the special privileges of the visible church?',
      answer: 'The visible church hath the privilege of being under God\'s special care and government; of being protected and preserved in all ages, notwithstanding the opposition of all enemies; and of enjoying the communion of saints, the ordinary means of salvation, and offers of grace by Christ to all the members of it in the ministry of the gospel, testifying, that whosoever believes in him shall be saved, and excluding none that will come unto him.',
      proof_texts: [
        { reference: 'Isa. 4:5-6', text: 'And the LORD will create upon every dwelling place of mount Zion, and upon her assemblies, a cloud and smoke by day, and the shining of a flaming fire by night: for upon all the glory shall be a defence. And there shall be a tabernacle for a shadow in the daytime from the heat.' },
        { reference: 'Matt. 16:18', text: 'And I say also unto thee, That thou art Peter, and upon this rock I will build my church; and the gates of hell shall not prevail against it.' },
        { reference: 'Ps. 23:6', text: 'Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever.' },
        { reference: 'Acts 2:42', text: 'And they continued stedfastly in the apostles\' doctrine and fellowship, and in breaking of bread, and in prayers.' },
        { reference: 'Mark 16:15-16', text: 'And he said unto them, Go ye into all the world, and preach the gospel to every creature. He that believeth and is baptized shall be saved; but he that believeth not shall be damned.' },
        { reference: 'John 6:37', text: 'All that the Father giveth me shall come to me; and him that cometh to me I will in no wise cast out.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 64,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'What is the invisible church?',
      answer: 'The invisible church is the whole number of the elect, that have been, are, or shall be gathered into one under Christ the head.',
      proof_texts: [
        { reference: 'Eph. 1:10,22-23', text: 'That in the dispensation of the fulness of times he might gather together in one all things in Christ... And hath put all things under his feet, and gave him to be the head over all things to the church, Which is his body, the fulness of him that filleth all in all.' },
        { reference: 'John 10:16', text: 'And other sheep I have, which are not of this fold: them also I must bring, and they shall hear my voice; and there shall be one fold, and one shepherd.' },
        { reference: 'John 11:52', text: 'And not for that nation only, but that also he should gather together in one the children of God that were scattered abroad.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 65,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'What special benefits do the members of the invisible church enjoy by Christ?',
      answer: 'The members of the invisible church by Christ enjoy union and communion with him in grace and glory.',
      proof_texts: [
        { reference: 'John 17:21', text: 'That they all may be one; as thou, Father, art in me, and I in thee, that they also may be one in us: that the world may believe that thou hast sent me.' },
        { reference: 'Eph. 2:5-6', text: 'Even when we were dead in sins, hath quickened us together with Christ... And hath raised us up together, and made us sit together in heavenly places in Christ Jesus.' },
        { reference: 'John 17:24', text: 'Father, I will that they also, whom thou hast given me, be with me where I am; that they may behold my glory.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 66,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'What is that union which the elect have with Christ?',
      answer: 'The union which the elect have with Christ is the work of God\'s grace, whereby they are spiritually and mystically, yet really and inseparably, joined to Christ as their head and husband; which is done in their effectual calling.',
      proof_texts: [
        { reference: 'Eph. 1:22', text: 'And hath put all things under his feet, and gave him to be the head over all things to the church.' },
        { reference: 'Eph. 5:23', text: 'For the husband is the head of the wife, even as Christ is the head of the church: and he is the saviour of the body.' },
        { reference: '1 Cor. 6:17', text: 'But he that is joined unto the Lord is one spirit.' },
        { reference: 'John 10:28', text: 'And I give unto them eternal life; and they shall never perish, neither shall any man pluck them out of my hand.' },
        { reference: '1 Cor. 1:9', text: 'God is faithful, by whom ye were called unto the fellowship of his Son Jesus Christ our Lord.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 67,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'What is effectual calling?',
      answer: 'Effectual calling is the work of God\'s almighty power and grace, whereby (out of his free and special love to his elect, and from nothing in them moving him thereunto) he doth, in his accepted time, invite and draw them to Jesus Christ, by his word and Spirit; savingly enlightening their minds, renewing and powerfully determining their wills, so as they (although in themselves dead in sin) are hereby made willing and able freely to answer his call, and to accept and embrace the grace offered and conveyed therein.',
      proof_texts: [
        { reference: 'John 5:25', text: 'Verily, verily, I say unto you, The hour is coming, and now is, when the dead shall hear the voice of the Son of God: and they that hear shall live.' },
        { reference: 'Eph. 1:18-20', text: 'The eyes of your understanding being enlightened; that ye may know what is the hope of his calling... According to the working of his mighty power, Which he wrought in Christ, when he raised him from the dead.' },
        { reference: '2 Tim. 1:9', text: 'Who hath saved us, and called us with an holy calling, not according to our works, but according to his own purpose and grace, which was given us in Christ Jesus before the world began.' },
        { reference: 'Titus 3:4-5', text: 'But after that the kindness and love of God our Saviour toward man appeared, Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost.' },
        { reference: 'Eph. 2:1,5', text: 'And you hath he quickened, who were dead in trespasses and sins... Even when we were dead in sins, hath quickened us together with Christ.' },
        { reference: 'Phil. 2:13', text: 'For it is God which worketh in you both to will and to do of his good pleasure.' },
        { reference: 'Deut. 30:6', text: 'And the LORD thy God will circumcise thine heart, and the heart of thy seed, to love the LORD thy God with all thine heart, and with all thy soul, that thou mayest live.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 68,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'Are the elect only effectually called?',
      answer: 'All the elect, and they only, are effectually called; although others may be, and often are, outwardly called by the ministry of the word, and have some common operations of the Spirit; who, for their wilful neglect and contempt of the grace offered to them, being justly left in their unbelief, do never truly come to Jesus Christ.',
      proof_texts: [
        { reference: 'Acts 13:48', text: 'And when the Gentiles heard this, they were glad, and glorified the word of the Lord: and as many as were ordained to eternal life believed.' },
        { reference: 'Matt. 22:14', text: 'For many are called, but few are chosen.' },
        { reference: 'Matt. 7:22', text: 'Many will say to me in that day, Lord, Lord, have we not prophesied in thy name? and in thy name have cast out devils? and in thy name done many wonderful works?' },
        { reference: 'Heb. 6:4-6', text: 'For it is impossible for those who were once enlightened, and have tasted of the heavenly gift, and were made partakers of the Holy Ghost, And have tasted the good word of God, and the powers of the world to come, If they shall fall away, to renew them again unto repentance.' },
        { reference: 'John 12:38-40', text: 'That the saying of Esaias the prophet might be fulfilled... He hath blinded their eyes, and hardened their heart; that they should not see with their eyes, nor understand with their heart, and be converted.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 69,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'What is the communion in grace which the members of the invisible church have with Christ?',
      answer: 'The communion in grace which the members of the invisible church have with Christ, is their partaking of the virtue of his mediation, in their justification, adoption, sanctification, and whatever else, in this life, manifests their union with him.',
      proof_texts: [
        { reference: '1 Cor. 1:30', text: 'But of him are ye in Christ Jesus, who of God is made unto us wisdom, and righteousness, and sanctification, and redemption.' },
        { reference: 'Eph. 1:5', text: 'Having predestinated us unto the adoption of children by Jesus Christ to himself, according to the good pleasure of his will.' },
        { reference: '1 Cor. 1:30', text: 'But of him are ye in Christ Jesus, who of God is made unto us wisdom, and righteousness, and sanctification, and redemption.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 70,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'What is justification?',
      answer: 'Justification is an act of God\'s free grace unto sinners, in which he pardoneth all their sins, accepteth and accounteth their persons righteous in his sight; not for any thing wrought in them, or done by them, but only for the perfect obedience and full satisfaction of Christ, by God imputed to them, and received by faith alone.',
      proof_texts: [
        { reference: 'Rom. 3:22,24-25,27-28', text: 'Even the righteousness of God which is by faith of Jesus Christ unto all and upon all them that believe... Being justified freely by his grace through the redemption that is in Christ Jesus... to declare his righteousness... that he might be just, and the justifier of him which believeth in Jesus.' },
        { reference: 'Rom. 4:6-8', text: 'Even as David also describeth the blessedness of the man, unto whom God imputeth righteousness without works, Saying, Blessed are they whose iniquities are forgiven, and whose sins are covered. Blessed is the man to whom the Lord will not impute sin.' },
        { reference: '2 Cor. 5:19,21', text: 'To wit, that God was in Christ, reconciling the world unto himself, not imputing their trespasses unto them... For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.' },
        { reference: 'Phil. 3:9', text: 'And be found in him, not having mine own righteousness, which is of the law, but that which is through the faith of Christ, the righteousness which is of God by faith.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 71,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'How is justification an act of God\'s free grace?',
      answer: 'Although Christ, by his obedience and death, did make a proper, real, and full satisfaction to God\'s justice in the behalf of them that are justified; yet inasmuch as God accepteth the satisfaction from a surety, which he might have demanded of them, and did provide this surety, his own only Son, imputing his righteousness to them, and requiring nothing of them for their justification but faith, which also is his gift, their justification is to them of free grace.',
      proof_texts: [
        { reference: 'Rom. 8:32', text: 'He that spared not his own Son, but delivered him up for us all, how shall he not with him also freely give us all things?' },
        { reference: '2 Cor. 5:21', text: 'For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.' },
        { reference: 'Rom. 3:24', text: 'Being justified freely by his grace through the redemption that is in Christ Jesus.' },
        { reference: 'Eph. 2:8', text: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 72,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'What is justifying faith?',
      answer: 'Justifying faith is a saving grace, wrought in the heart of a sinner by the Spirit and word of God, whereby he, being convinced of his sin and misery, and of the disability in himself and all other creatures to recover him out of his lost condition, not only assenteth to the truth of the promise of the gospel, but receiveth and resteth upon Christ and his righteousness, therein held forth, for pardon of sin, and for the accepting and accounting of his person righteous in the sight of God for salvation.',
      proof_texts: [
        { reference: 'Heb. 10:39', text: 'But we are not of them who draw back unto perdition; but of them that believe to the saving of the soul.' },
        { reference: 'Acts 16:30-31', text: 'And brought them out, and said, Sirs, what must I do to be saved? And they said, Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house.' },
        { reference: 'John 1:12', text: 'But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name.' },
        { reference: 'Phil. 3:9', text: 'And be found in him, not having mine own righteousness, which is of the law, but that which is through the faith of Christ, the righteousness which is of God by faith.' },
        { reference: 'Acts 15:11', text: 'But we believe that through the grace of the Lord Jesus Christ we shall be saved, even as they.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 73,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'How doth faith justify a sinner in the sight of God?',
      answer: 'Faith justifies a sinner in the sight of God, not because of those other graces which do always accompany it, or of good works that are the fruits of it, nor as if the grace of faith, or any act thereof, were imputed to him for his justification; but only as it is an instrument by which he receiveth and applieth Christ and his righteousness.',
      proof_texts: [
        { reference: 'Gal. 3:11', text: 'But that no man is justified by the law in the sight of God, it is evident: for, The just shall live by faith.' },
        { reference: 'Rom. 3:28', text: 'Therefore we conclude that a man is justified by faith without the deeds of the law.' },
        { reference: 'Rom. 4:5', text: 'But to him that worketh not, but believeth on him that justifieth the ungodly, his faith is counted for righteousness.' },
        { reference: 'Eph. 2:8', text: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 74,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'What is adoption?',
      answer: 'Adoption is an act of the free grace of God, in and for his only Son Jesus Christ, whereby all those that are justified are received into the number of his children, have his name put upon them, the Spirit of his Son given to them, are under his fatherly care and dispensations, admitted to all the liberties and privileges of the sons of God, made heirs of all the promises, and fellow-heirs with Christ in glory.',
      proof_texts: [
        { reference: '1 John 3:1', text: 'Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God.' },
        { reference: 'John 1:12', text: 'But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name.' },
        { reference: 'Gal. 4:4-5', text: 'But when the fulness of the time was come, God sent forth his Son, made of a woman, made under the law, To redeem them that were under the law, that we might receive the adoption of sons.' },
        { reference: 'Rom. 8:17', text: 'And if children, then heirs; heirs of God, and joint-heirs with Christ; if so be that we suffer with him, that we may be also glorified together.' },
        { reference: 'Heb. 6:12', text: 'That ye be not slothful, but followers of them who through faith and patience inherit the promises.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 75,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'What is sanctification?',
      answer: 'Sanctification is a work of God\'s grace, whereby they whom God hath, before the foundation of the world, chosen to be holy, are in time, through the powerful operation of his Spirit applying the death and resurrection of Christ unto them, renewed in their whole man after the image of God; having the seeds of repentance unto life, and all other saving graces, put into their hearts, and those graces so stirred up, increased, and strengthened, as that they more and more die unto sin, and rise unto newness of life.',
      proof_texts: [
        { reference: 'Eph. 1:4', text: 'According as he hath chosen us in him before the foundation of the world, that we should be holy and without blame before him in love.' },
        { reference: '1 Cor. 6:11', text: 'And such were some of you: but ye are washed, but ye are sanctified, but ye are justified in the name of the Lord Jesus, and by the Spirit of our God.' },
        { reference: 'Eph. 4:23-24', text: 'And be renewed in the spirit of your mind; And that ye put on the new man, which after God is created in righteousness and true holiness.' },
        { reference: 'Rom. 6:4-6', text: 'Therefore we are buried with him by baptism into death: that like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life... Knowing this, that our old man is crucified with him, that the body of sin might be destroyed.' },
        { reference: 'Acts 11:18', text: 'When they heard these things, they held their peace, and glorified God, saying, Then hath God also to the Gentiles granted repentance unto life.' },
        { reference: 'Gal. 5:22-23', text: 'But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, Meekness, temperance: against such there is no law.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 76,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'What is repentance unto life?',
      answer: 'Repentance unto life is a saving grace, wrought in the heart of a sinner by the Spirit and word of God, whereby, out of the sight and sense, not only of the danger, but also of the filthiness and odiousness of his sins, and upon the apprehension of God\'s mercy in Christ to such as are penitent, he so grieves for and hates his sins, as that he turns from them all to God, purposing and endeavouring constantly to walk with him in all the ways of new obedience.',
      proof_texts: [
        { reference: 'Zech. 12:10', text: 'And I will pour upon the house of David, and upon the inhabitants of Jerusalem, the spirit of grace and of supplications: and they shall look upon me whom they have pierced, and they shall mourn for him.' },
        { reference: 'Acts 11:18', text: 'When they heard these things, they held their peace, and glorified God, saying, Then hath God also to the Gentiles granted repentance unto life.' },
        { reference: 'Ezek. 36:31', text: 'Then shall ye remember your own evil ways, and your doings that were not good, and shall lothe yourselves in your own sight for your iniquities and for your abominations.' },
        { reference: 'Isa. 30:22', text: 'Ye shall defile also the covering of thy graven images of silver, and the ornament of thy molten images of gold: thou shalt cast them away as a menstruous cloth; thou shalt say unto it, Get thee hence.' },
        { reference: 'Luke 15:18', text: 'I will arise and go to my father, and will say unto him, Father, I have sinned against heaven, and before thee.' },
        { reference: 'Ps. 119:6,59,128', text: 'Then shall I not be ashamed, when I have respect unto all thy commandments... I thought on my ways, and turned my feet unto thy testimonies... Therefore I esteem all thy precepts concerning all things to be right; and I hate every false way.' },
        { reference: 'Luke 1:6', text: 'And they were both righteous before God, walking in all the commandments and ordinances of the Lord blameless.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 77,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'Wherein do justification and sanctification differ?',
      answer: 'Although sanctification be inseparably joined with justification, yet they differ, in that God in justification imputeth the righteousness of Christ; in sanctification his Spirit infuseth grace, and enableth to the exercise thereof; in the former, sin is pardoned; in the other, it is subdued: the one doth equally free all believers from the revenging wrath of God, and that perfectly in this life, that they never fall into condemnation; the other is neither equal in all, nor in this life perfect in any, but growing up to perfection.',
      proof_texts: [
        { reference: '1 Cor. 6:11', text: 'And such were some of you: but ye are washed, but ye are sanctified, but ye are justified in the name of the Lord Jesus, and by the Spirit of our God.' },
        { reference: 'Rev. 22:11', text: 'He that is unjust, let him be unjust still: and he which is filthy, let him be filthy still: and he that is righteous, let him be righteous still: and he that is holy, let him be holy still.' },
        { reference: 'Rom. 3:24-25', text: 'Being justified freely by his grace through the redemption that is in Christ Jesus: Whom God hath set forth to be a propitiation through faith in his blood, to declare his righteousness.' },
        { reference: 'Ezek. 36:27', text: 'And I will put my spirit within you, and cause you to walk in my statutes, and ye shall keep my judgments, and do them.' },
        { reference: 'Rom. 3:28', text: 'Therefore we conclude that a man is justified by faith without the deeds of the law.' },
        { reference: 'Rom. 6:6,14', text: 'Knowing this, that our old man is crucified with him, that the body of sin might be destroyed, that henceforth we should not serve sin... For sin shall not have dominion over you: for ye are not under the law, but under grace.' },
        { reference: '1 John 1:8,10', text: 'If we say that we have no sin, we deceive ourselves, and the truth is not in us... If we say that we have not sinned, we make him a liar, and his word is not in us.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 78,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'Whence ariseth the imperfection of sanctification in believers?',
      answer: 'The imperfection of sanctification in believers ariseth from the remnants of sin abiding in every part of them, and the perpetual lustings of the flesh against the spirit; whereby they are often foiled with temptations, and fall into many sins, are hindered in all their spiritual services, and their best works are imperfect and defiled in the sight of God.',
      proof_texts: [
        { reference: '1 John 1:10', text: 'If we say that we have not sinned, we make him a liar, and his word is not in us.' },
        { reference: 'Rom. 7:18,23', text: 'For I know that in me (that is, in my flesh,) dwelleth no good thing: for to will is present with me; but how to perform that which is good I find not... But I see another law in my members, warring against the law of my mind, and bringing me into captivity to the law of sin which is in my members.' },
        { reference: 'Gal. 5:17', text: 'For the flesh lusteth against the Spirit, and the Spirit against the flesh: and these are contrary the one to the other: so that ye cannot do the things that ye would.' },
        { reference: 'Isa. 64:6', text: 'But we are all as an unclean thing, and all our righteousnesses are as filthy rags; and we all do fade as a leaf; and our iniquities, like the wind, have taken us away.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 79,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'May not true believers, by reason of their imperfections, and the many temptations and sins they are overtaken with, fall away from the state of grace?',
      answer: 'True believers, by reason of the unchangeable love of God, and his decree and covenant to give them perseverance, their inseparable union with Christ, his continual intercession for them, and the Spirit and seed of God abiding in them, can neither totally nor finally fall away from the state of grace, but are kept by the power of God through faith unto salvation.',
      proof_texts: [
        { reference: 'Jer. 31:3', text: 'The LORD hath appeared of old unto me, saying, Yea, I have loved thee with an everlasting love: therefore with lovingkindness have I drawn thee.' },
        { reference: '2 Tim. 2:19', text: 'Nevertheless the foundation of God standeth sure, having this seal, The Lord knoweth them that are his.' },
        { reference: 'Heb. 13:20-21', text: 'Now the God of peace, that brought again from the dead our Lord Jesus, that great shepherd of the sheep... Make you perfect in every good work to do his will.' },
        { reference: 'John 10:28', text: 'And I give unto them eternal life; and they shall never perish, neither shall any man pluck them out of my hand.' },
        { reference: 'Heb. 7:25', text: 'Wherefore he is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them.' },
        { reference: '1 John 3:9', text: 'Whosoever is born of God doth not commit sin; for his seed remaineth in him: and he cannot sin, because he is born of God.' },
        { reference: '1 Pet. 1:5', text: 'Who are kept by the power of God through faith unto salvation ready to be revealed in the last time.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 80,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'Can true believers be infallibly assured that they are in the estate of grace, and that they shall persevere therein unto salvation?',
      answer: 'Such as truly believe in Christ, and endeavour to walk in all good conscience before him, may, without extraordinary revelation, by faith grounded upon the truth of God\'s promises, and by the Spirit enabling them to discern in themselves those graces to which the promises of life are made, and bearing witness with their spirits that they are the children of God, be infallibly assured that they are in the estate of grace, and shall persevere therein unto salvation.',
      proof_texts: [
        { reference: '1 John 2:3', text: 'And hereby we do know that we know him, if we keep his commandments.' },
        { reference: '1 Cor. 2:12', text: 'Now we have received, not the spirit of the world, but the spirit which is of God; that we might know the things that are freely given to us of God.' },
        { reference: '1 John 3:14,18-19,21,24', text: 'We know that we have passed from death unto life, because we love the brethren... let us not love in word, neither in tongue; but in deed and in truth. And hereby we know that we are of the truth... If our heart condemn us not, then have we confidence toward God.' },
        { reference: 'Heb. 6:11-12', text: 'And we desire that every one of you do shew the same diligence to the full assurance of hope unto the end: That ye be not slothful, but followers of them who through faith and patience inherit the promises.' },
        { reference: 'Rom. 8:16', text: 'The Spirit itself beareth witness with our spirit, that we are the children of God.' },
        { reference: '1 John 5:13', text: 'These things have I written unto you that believe on the name of the Son of God; that ye may know that ye have eternal life, and that ye may believe on the name of the Son of God.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 81,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'Are all true believers at all times assured of their present being in the estate of grace, and that they shall be saved?',
      answer: 'Assurance of grace and salvation not being of the essence of faith, true believers may wait long before they obtain it; and, after the enjoyment thereof, may have it weakened and intermitted, through manifold distempers, sins, temptations, and desertions; yet are they never without such a presence and support of the Spirit of God as keeps them from sinking into utter despair.',
      proof_texts: [
        { reference: 'Isa. 50:10', text: 'Who is among you that feareth the LORD, that obeyeth the voice of his servant, that walketh in darkness, and hath no light? let him trust in the name of the LORD, and stay upon his God.' },
        { reference: 'Ps. 88:1-18', text: 'O LORD God of my salvation, I have cried day and night before thee... Lord, why castest thou off my soul? why hidest thou thy face from me?' },
        { reference: 'Ps. 77:1-12', text: 'I cried unto God with my voice, even unto God with my voice; and he gave ear unto me... I will remember the years of the right hand of the most High.' },
        { reference: 'Song 5:2-3,6', text: 'I sleep, but my heart waketh: it is the voice of my beloved that knocketh, saying, Open to me, my sister... I opened to my beloved; but my beloved had withdrawn himself, and was gone.' },
        { reference: 'Ps. 51:8,12,14', text: 'Make me to hear joy and gladness... Restore unto me the joy of thy salvation; and uphold me with thy free spirit... Deliver me from bloodguiltiness, O God, thou God of my salvation.' },
        { reference: '1 John 3:9', text: 'Whosoever is born of God doth not commit sin; for his seed remaineth in him: and he cannot sin, because he is born of God.' },
        { reference: 'Job 13:15', text: 'Though he slay me, yet will I trust in him: but I will maintain mine own ways before him.' },
        { reference: 'Ps. 73:15,23', text: 'If I say, I will speak thus; behold, I should offend against the generation of thy children... Nevertheless I am continually with thee: thou hast holden me by my right hand.' },
        { reference: 'Isa. 54:7-10', text: 'For a small moment have I forsaken thee; but with great mercies will I gather thee... For the mountains shall depart, and the hills be removed; but my kindness shall not depart from thee.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 82,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'What is the communion in glory which the members of the invisible church have with Christ?',
      answer: 'The communion in glory which the members of the invisible church have with Christ, is in this life, immediately after death, and at last perfected at the resurrection and day of judgment.',
      proof_texts: [
        { reference: '2 Cor. 3:18', text: 'But we all, with open face beholding as in a glass the glory of the Lord, are changed into the same image from glory to glory, even as by the Spirit of the Lord.' },
        { reference: 'Luke 23:43', text: 'And Jesus said unto him, Verily I say unto thee, To day shalt thou be with me in paradise.' },
        { reference: '1 Thess. 4:17', text: 'Then we which are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air: and so shall we ever be with the Lord.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 83,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'What is the communion in glory with Christ which the members of the invisible church enjoy in this life?',
      answer: 'The members of the invisible church have communicated to them in this life the firstfruits of glory with Christ, as they are members of him their head, and so in him are interested in that glory which he is fully possessed of; and, as an earnest thereof, do enjoy the sense of God\'s love, peace of conscience, joy in the Holy Ghost, and hope of glory; as, on the contrary, sense of God\'s revenging wrath, horror of conscience, and a fearful expectation of judgment, are to the wicked the beginning of their torments which they shall endure after death.',
      proof_texts: [
        { reference: 'Eph. 2:5-6', text: 'Even when we were dead in sins, hath quickened us together with Christ... And hath raised us up together, and made us sit together in heavenly places in Christ Jesus.' },
        { reference: 'Rom. 5:5', text: 'And hope maketh not ashamed; because the love of God is shed abroad in our hearts by the Holy Ghost which is given unto us.' },
        { reference: 'Rom. 14:17', text: 'For the kingdom of God is not meat and drink; but righteousness, and peace, and joy in the Holy Ghost.' },
        { reference: 'Phil. 1:23', text: 'For I am in a strait betwixt two, having a desire to depart, and to be with Christ; which is far better.' },
        { reference: 'Rom. 2:9', text: 'Tribulation and anguish, upon every soul of man that doeth evil, of the Jew first, and also of the Gentile.' },
        { reference: 'Mark 9:44', text: 'Where their worm dieth not, and the fire is not quenched.' },
        { reference: 'Heb. 10:27', text: 'But a certain fearful looking for of judgment and fiery indignation, which shall devour the adversaries.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 84,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'Shall all men die?',
      answer: 'Death being threatened as the wages of sin, it is appointed unto all men once to die; for that all have sinned.',
      proof_texts: [
        { reference: 'Rom. 6:23', text: 'For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.' },
        { reference: 'Heb. 9:27', text: 'And as it is appointed unto men once to die, but after this the judgment.' },
        { reference: 'Rom. 5:12', text: 'Wherefore, as by one man sin entered into the world, and death by sin; and so death passed upon all men, for that all have sinned.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 85,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'Death being the wages of sin, why are not the righteous delivered from death, seeing all their sins are forgiven in Christ?',
      answer: 'The righteous shall not be delivered from death itself, but from the sting and curse of it; so that, although they die, yet it is out of God\'s love, to free them perfectly from sin and misery, and to make them capable of further communion with Christ in glory, which they then enter into.',
      proof_texts: [
        { reference: '1 Cor. 15:55-57', text: 'O death, where is thy sting? O grave, where is thy victory? The sting of death is sin; and the strength of sin is the law. But thanks be to God, which giveth us the victory through our Lord Jesus Christ.' },
        { reference: 'Heb. 2:15', text: 'And deliver them who through fear of death were all their lifetime subject to bondage.' },
        { reference: 'Isa. 57:1-2', text: 'The righteous perisheth, and no man layeth it to heart: and merciful men are taken away, none considering that the righteous is taken away from the evil to come. He shall enter into peace.' },
        { reference: 'Rev. 14:13', text: 'And I heard a voice from heaven saying unto me, Write, Blessed are the dead which die in the Lord from henceforth: Yea, saith the Spirit, that they may rest from their labours; and their works do follow them.' },
        { reference: 'Phil. 1:23', text: 'For I am in a strait betwixt two, having a desire to depart, and to be with Christ; which is far better.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 86,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'What is the communion in glory with Christ which the members of the invisible church enjoy immediately after death?',
      answer: 'The communion in glory with Christ which the members of the invisible church enjoy immediately after death is, in that their souls are then made perfect in holiness, and received into the highest heavens, where they behold the face of God in light and glory, waiting for the full redemption of their bodies, which even in death continue united to Christ, and rest in their graves as in their beds, till at the last day they be again united to their souls. Whereas the souls of the wicked are at their death cast into hell, where they remain in torments and utter darkness, and their bodies kept in their graves, as in their prisons, till the resurrection and judgment of the great day.',
      proof_texts: [
        { reference: 'Heb. 12:23', text: 'To the general assembly and church of the firstborn, which are written in heaven, and to God the Judge of all, and to the spirits of just men made perfect.' },
        { reference: '2 Cor. 5:1,6,8', text: 'For we know that if our earthly house of this tabernacle were dissolved, we have a building of God, an house not made with hands, eternal in the heavens... willing rather to be absent from the body, and to be present with the Lord.' },
        { reference: 'Phil. 1:23', text: 'For I am in a strait betwixt two, having a desire to depart, and to be with Christ; which is far better.' },
        { reference: 'Acts 3:21', text: 'Whom the heaven must receive until the times of restitution of all things.' },
        { reference: '1 Thess. 4:14', text: 'For if we believe that Jesus died and rose again, even so them also which sleep in Jesus will God bring with him.' },
        { reference: 'Isa. 57:2', text: 'He shall enter into peace: they shall rest in their beds, each one walking in his uprightness.' },
        { reference: 'Job 19:26', text: 'And though after my skin worms destroy this body, yet in my flesh shall I see God.' },
        { reference: 'Luke 16:23-24', text: 'And in hell he lift up his eyes, being in torments, and seeth Abraham afar off, and Lazarus in his bosom. And he cried and said, Father Abraham, have mercy on me.' },
        { reference: 'Acts 1:25', text: 'That he may take part of this ministry and apostleship, from which Judas by transgression fell, that he might go to his own place.' },
        { reference: 'Jude 1:6-7', text: 'And the angels which kept not their first estate, but left their own habitation, he hath reserved in everlasting chains under darkness unto the judgment of the great day. Even as Sodom and Gomorrha... are set forth for an example, suffering the vengeance of eternal fire.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 87,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'What are we to believe concerning the resurrection?',
      answer: 'We are to believe, that at the last day there shall be a general resurrection of the dead, both of the just and unjust: when they that are then found alive shall in a moment be changed; and the selfsame bodies of the dead which were laid in the grave, being then again united to their souls forever, shall be raised up by the power of God. The bodies of the just, by the Spirit of Christ, and by virtue of his resurrection as their head, shall be raised in power, spiritual, incorruptible, and made like to his glorious body; and the bodies of the wicked shall be raised up in dishonour by him, as an offended judge.',
      proof_texts: [
        { reference: 'Acts 24:15', text: 'And have hope toward God, which they themselves also allow, that there shall be a resurrection of the dead, both of the just and unjust.' },
        { reference: '1 Cor. 15:51-53', text: 'Behold, I shew you a mystery; We shall not all sleep, but we shall all be changed, In a moment, in the twinkling of an eye, at the last trump: for the trumpet shall sound, and the dead shall be raised incorruptible, and we shall be changed.' },
        { reference: 'John 5:28-29', text: 'Marvel not at this: for the hour is coming, in the which all that are in the graves shall hear his voice, And shall come forth; they that have done good, unto the resurrection of life; and they that have done evil, unto the resurrection of damnation.' },
        { reference: '1 Cor. 15:21-23', text: 'For since by man came death, by man came also the resurrection of the dead. For as in Adam all die, even so in Christ shall all be made alive. But every man in his own order: Christ the firstfruits; afterward they that are Christ\'s at his coming.' },
        { reference: 'Phil. 3:21', text: 'Who shall change our vile body, that it may be fashioned like unto his glorious body, according to the working whereby he is able even to subdue all things unto himself.' },
        { reference: 'Dan. 12:2', text: 'And many of them that sleep in the dust of the earth shall awake, some to everlasting life, and some to shame and everlasting contempt.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 88,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'What shall immediately follow after the resurrection?',
      answer: 'Immediately after the resurrection shall follow the general and final judgment of angels and men; the day and hour whereof no one knoweth but the Father only; and it is so appointed, that all may watch and pray, and be ever ready for the coming of the Lord.',
      proof_texts: [
        { reference: '2 Pet. 2:4', text: 'For if God spared not the angels that sinned, but cast them down to hell, and delivered them into chains of darkness, to be reserved unto judgment.' },
        { reference: 'Matt. 25:46', text: 'And these shall go away into everlasting punishment: but the righteous into life eternal.' },
        { reference: 'Matt. 24:36,42,44', text: 'But of that day and hour knoweth no man, no, not the angels of heaven, but my Father only... Watch therefore: for ye know not what hour your Lord doth come... Therefore be ye also ready: for in such an hour as ye think not the Son of man cometh.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 89,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'What shall be done to the wicked at the day of judgment?',
      answer: 'At the day of judgment, the wicked shall be set on Christ\'s left hand, and, upon clear and sufficient evidence convicted and condemned, be cast into eternal torments, and punished with everlasting destruction from the presence of the Lord, and from the glory of his power.',
      proof_texts: [
        { reference: 'Matt. 25:33,41-43', text: 'And he shall set the sheep on his right hand, but the goats on the left... Then shall he say also unto them on the left hand, Depart from me, ye cursed, into everlasting fire.' },
        { reference: '2 Thess. 1:8-9', text: 'In flaming fire taking vengeance on them that know not God, and that obey not the gospel of our Lord Jesus Christ: Who shall be punished with everlasting destruction from the presence of the Lord, and from the glory of his power.' },
        { reference: 'Mark 9:43-48', text: 'And if thy hand offend thee, cut it off... into the fire that never shall be quenched: Where their worm dieth not, and the fire is not quenched.' },
        { reference: 'Dan. 12:2', text: 'And many of them that sleep in the dust of the earth shall awake, some to everlasting life, and some to shame and everlasting contempt.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 90,
      section: 'Benefits of Redemption', section_name: 'Benefits of Redemption',
      question: 'What shall be done to the righteous at the day of judgment?',
      answer: 'At the day of judgment, the righteous, being caught up to Christ in the clouds, shall be set on his right hand, and there openly acknowledged and acquitted, shall join with him in the judging of reprobate angels and men, and shall be received into heaven, where they shall be fully and forever freed from all sin and misery; filled with inconceivable joys, made perfectly holy and happy both in body and soul, in the company of innumerable saints and holy angels, but especially in the immediate vision and fruition of God the Father, of our Lord Jesus Christ, and of the Holy Spirit, to all eternity. And this is the perfect and full communion, which the members of the invisible church shall enjoy with Christ in glory, at the resurrection and day of judgment.',
      proof_texts: [
        { reference: '1 Thess. 4:17', text: 'Then we which are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air: and so shall we ever be with the Lord.' },
        { reference: 'Matt. 25:33', text: 'And he shall set the sheep on his right hand, but the goats on the left.' },
        { reference: '1 Cor. 6:2-3', text: 'Do ye not know that the saints shall judge the world? and if the world shall be judged by you, are ye unworthy to judge the smallest matters? Know ye not that we shall judge angels?' },
        { reference: 'John 17:24', text: 'Father, I will that they also, whom thou hast given me, be with me where I am; that they may behold my glory, which thou hast given me.' },
        { reference: '1 John 3:2', text: 'Beloved, now are we the sons of God, and it doth not yet appear what we shall be: but we know that, when he shall appear, we shall be like him; for we shall see him as he is.' },
        { reference: '1 Cor. 13:12', text: 'For now we see through a glass, darkly; but then face to face: now I know in part; but then shall I know even as also I am known.' },
        { reference: 'Eph. 5:27', text: 'That he might present it to himself a glorious church, not having spot, or wrinkle, or any such thing; but that it should be holy and without blemish.' },
        { reference: 'Ps. 16:11', text: 'Thou wilt shew me the path of life: in thy presence is fulness of joy; at thy right hand there are pleasures for evermore.' }
      ]
    },

    // ─── Section 6: The Moral Law and Commandments (Q91–148) ─────────────────
    {
      catechism_id: 'wlc', number: 91,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What is the duty which God requireth of man?',
      answer: 'The duty which God requireth of man, is obedience to his revealed will.',
      proof_texts: [
        { reference: 'Rom. 12:2', text: 'And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.' },
        { reference: 'Mic. 6:8', text: 'He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?' },
        { reference: '1 Sam. 15:22', text: 'And Samuel said, Hath the LORD as great delight in burnt offerings and sacrifices, as in obeying the voice of the LORD? Behold, to obey is better than sacrifice, and to hearken than the fat of rams.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 92,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What did God at first reveal unto man as the rule of his obedience?',
      answer: 'The rule of obedience revealed to Adam in the estate of innocence, and to all mankind in him, besides a special command not to eat of the fruit of the tree of the knowledge of good and evil, was the moral law.',
      proof_texts: [
        { reference: 'Gen. 1:26-27', text: 'And God said, Let us make man in our image, after our likeness... So God created man in his own image, in the image of God created he him.' },
        { reference: 'Rom. 2:14-15', text: 'For when the Gentiles, which have not the law, do by nature the things contained in the law, these, having not the law, are a law unto themselves: Which shew the work of the law written in their hearts.' },
        { reference: 'Gen. 2:17', text: 'But of the tree of the knowledge of good and evil, thou shalt not eat of it: for in the day that thou eatest thereof thou shalt surely die.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 93,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What is the moral law?',
      answer: 'The moral law is the declaration of the will of God to mankind, directing and binding every one to personal, perfect, and perpetual conformity and obedience thereunto, in the frame and disposition of the whole man, soul and body, and in performance of all those duties of holiness and righteousness which he oweth to God and man: promising life upon the fulfilling, and threatening death upon the breach of it.',
      proof_texts: [
        { reference: 'Deut. 5:1-3,31', text: 'And Moses called all Israel, and said unto them, Hear, O Israel, the statutes and judgments which I speak in your ears this day, that ye may learn them, and keep, and do them... But as for thee, stand thou here by me, and I will speak unto thee all the commandments.' },
        { reference: 'Luke 10:26-27', text: 'He said unto him, What is written in the law? how readest thou? And he answering said, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy strength, and with all thy mind; and thy neighbour as thyself.' },
        { reference: 'Gal. 3:10', text: 'For as many as are of the works of the law are under the curse: for it is written, Cursed is every one that continueth not in all things which are written in the book of the law to do them.' },
        { reference: '1 Thess. 5:23', text: 'And the very God of peace sanctify you wholly; and I pray God your whole spirit and soul and body be preserved blameless unto the coming of our Lord Jesus Christ.' },
        { reference: 'Gal. 3:12', text: 'And the law is not of faith: but, The man that doeth them shall live in them.' },
        { reference: 'Rom. 6:23', text: 'For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 94,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'Is there any use of the moral law to man since the fall?',
      answer: 'Although no man, since the fall, can attain to righteousness and life by the moral law; yet there is great use thereof, as well common to all men, as peculiar either to the unregenerate, or the regenerate.',
      proof_texts: [
        { reference: 'Rom. 8:3', text: 'For what the law could not do, in that it was weak through the flesh, God sending his own Son in the likeness of sinful flesh, and for sin, condemned sin in the flesh.' },
        { reference: 'Gal. 2:16', text: 'Knowing that a man is not justified by the works of the law, but by the faith of Jesus Christ... for by the works of the law shall no flesh be justified.' },
        { reference: '1 Tim. 1:8', text: 'But we know that the law is good, if a man use it lawfully.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 95,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'Of what use is the moral law to all men?',
      answer: 'The moral law is of use to all men, to inform them of the holy nature and will of God, and of their duty, binding them to walk accordingly; to convince them of their disability to keep it, and of the sinful pollution of their nature, hearts, and lives; to humble them in the sense of their sin and misery, and thereby help them to a clearer sight of the need they have of Christ, and of the perfection of his obedience.',
      proof_texts: [
        { reference: 'Lev. 11:44-45', text: 'For I am the LORD your God: ye shall therefore sanctify yourselves, and ye shall be holy; for I am holy.' },
        { reference: 'Rom. 7:12', text: 'Wherefore the law is holy, and the commandment holy, and just, and good.' },
        { reference: 'Mic. 6:8', text: 'He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?' },
        { reference: 'Ps. 19:11-12', text: 'Moreover by them is thy servant warned: and in keeping of them there is great reward. Who can understand his errors? cleanse thou me from secret faults.' },
        { reference: 'Rom. 3:20', text: 'Therefore by the deeds of the law there shall no flesh be justified in his sight: for by the law is the knowledge of sin.' },
        { reference: 'Gal. 3:24', text: 'Wherefore the law was our schoolmaster to bring us unto Christ, that we might be justified by faith.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 96,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What particular use is there of the moral law to unregenerate men?',
      answer: 'The moral law is of use to unregenerate men, to awaken their consciences to flee from wrath to come, and to drive them to Christ; or, upon their continuance in the estate and way of sin, to leave them inexcusable, and under the curse thereof.',
      proof_texts: [
        { reference: '1 Tim. 1:9-10', text: 'Knowing this, that the law is not made for a righteous man, but for the lawless and disobedient, for the ungodly and for sinners, for unholy and profane, for murderers of fathers and murderers of mothers, for manslayers.' },
        { reference: 'Gal. 3:24', text: 'Wherefore the law was our schoolmaster to bring us unto Christ, that we might be justified by faith.' },
        { reference: 'Rom. 1:20', text: 'For the invisible things of him from the creation of the world are clearly seen, being understood by the things that are made, even his eternal power and Godhead; so that they are without excuse.' },
        { reference: 'Gal. 3:10', text: 'For as many as are of the works of the law are under the curse: for it is written, Cursed is every one that continueth not in all things which are written in the book of the law to do them.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 97,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What special use is there of the moral law to the regenerate?',
      answer: 'Although they that are regenerate, and believe in Christ, be delivered from the moral law as a covenant of works, so as thereby they are neither justified nor condemned; yet, besides the general uses thereof common to them with all men, it is of special use, to shew them how much they are bound to Christ for his fulfilling it, and enduring the curse thereof in their stead, and for their good; and thereby to provoke them to more thankfulness, and to express the same in their greater care to conform themselves thereunto as the rule of their obedience.',
      proof_texts: [
        { reference: 'Rom. 6:14', text: 'For sin shall not have dominion over you: for ye are not under the law, but under grace.' },
        { reference: 'Gal. 2:16', text: 'Knowing that a man is not justified by the works of the law, but by the faith of Jesus Christ.' },
        { reference: 'Rom. 8:1', text: 'There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.' },
        { reference: 'Gal. 3:13-14', text: 'Christ hath redeemed us from the curse of the law, being made a curse for us... That the blessing of Abraham might come on the Gentiles through Jesus Christ.' },
        { reference: 'Rom. 7:24-25', text: 'O wretched man that I am! who shall deliver me from the body of this death? I thank God through Jesus Christ our Lord.' },
        { reference: '1 Pet. 2:21', text: 'For even hereunto were ye called: because Christ also suffered for us, leaving us an example, that ye should follow his steps.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 98,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'Where is the moral law summarily comprehended?',
      answer: 'The moral law is summarily comprehended in the ten commandments, which were delivered by the voice of God upon mount Sinai, and written by him in two tables of stone; and are recorded in the twentieth chapter of Exodus. The four first commandments containing our duty to God, and the other six our duty to man.',
      proof_texts: [
        { reference: 'Deut. 10:4', text: 'And he wrote on the tables, according to the first writing, the ten commandments, which the LORD spake unto you in the mount out of the midst of the fire in the day of the assembly.' },
        { reference: 'Exod. 20:1-17', text: 'And God spake all these words, saying, I am the LORD thy God... Thou shalt have no other gods before me...' },
        { reference: 'Matt. 22:37-40', text: 'Jesus said unto him, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind. This is the first and great commandment. And the second is like unto it, Thou shalt love thy neighbour as thyself. On these two commandments hang all the law and the prophets.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 99,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What rules are to be observed for the right understanding of the ten commandments?',
      answer: 'For the right understanding of the ten commandments, these rules are to be observed: 1. That the law is perfect, and bindeth every one to the full conformity in the whole man unto the righteousness thereof, and unto entire obedience for ever; so as to require the utmost perfection of every duty, and to forbid the least degree of every sin. 2. That it is spiritual, and so reacheth the understanding, will, affections, and all other powers of the soul; as well as words, works, and gestures. 3. That one and the same thing, in divers respects, is required or forbidden in several commandments. 4. Where a duty is commanded, the contrary sin is forbidden; and, where a sin is forbidden, the contrary duty is commanded: so where a promise is annexed, the contrary threatening is included; and, where a threatening is annexed, the contrary promise is included. 5. That God in giving these commandments, is not to be limited to the express terms, but extends his will to all their just ends, uses, and applications, that may be gathered from them by good and necessary consequence. 6. That under one sin or duty, all of the same kind are forbidden or commanded; together with all the causes, means, occasions, and appearances thereof, and provocations thereunto. 7. That what is forbidden or commanded to ourselves, we are bound, according to our places, to endeavour that it may be avoided or performed by others, according to the duty of their places. 8. That in what is commanded to others, we are bound, according to our places and callings, to be helpful to them; and to take heed of partaking with others in what is forbidden them.',
      proof_texts: [
        { reference: 'Ps. 19:7', text: 'The law of the LORD is perfect, converting the soul: the testimony of the LORD is sure, making wise the simple.' },
        { reference: 'James 2:10', text: 'For whosoever shall keep the whole law, and yet offend in one point, he is guilty of all.' },
        { reference: 'Matt. 5:21-22', text: 'Ye have heard that it was said by them of old time, Thou shalt not kill; and whosoever shall kill shall be in danger of the judgment: But I say unto you, That whosoever is angry with his brother without a cause shall be in danger of the judgment.' },
        { reference: 'Rom. 7:14', text: 'For we know that the law is spiritual: but I am carnal, sold under sin.' },
        { reference: 'Col. 3:5', text: 'Mortify therefore your members which are upon the earth; fornication, uncleanness, inordinate affection, evil concupiscence, and covetousness, which is idolatry.' },
        { reference: 'Isa. 1:16-17', text: 'Wash you, make you clean; put away the evil of your doings from before mine eyes; cease to do evil; Learn to do well; seek judgment, relieve the oppressed, judge the fatherless, plead for the widow.' },
        { reference: 'Deut. 6:13', text: 'Thou shalt fear the LORD thy God, and serve him, and shalt swear by his name.' },
        { reference: 'Matt. 15:4-6', text: 'For God commanded, saying, Honour thy father and mother... But ye say, Whosoever shall say to his father or his mother, It is a gift, by whatsoever thou mightest be profited by me; And honour not his father or his mother, he shall be free. Thus have ye made the commandment of God of none effect by your tradition.' },
        { reference: 'Exod. 20:12', text: 'Honour thy father and thy mother: that thy days may be long upon the land which the LORD thy God giveth thee.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 100,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What special things are we to consider in the ten commandments?',
      answer: 'We are to consider in the ten commandments, the preface, the substance of the commandments themselves, and several reasons annexed to some of them, the more to enforce them.',
      proof_texts: [
        { reference: 'Exod. 20:1-17', text: 'And God spake all these words, saying, I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of bondage. Thou shalt have no other gods before me...' }
      ]
    },
    {
      catechism_id: 'wlc', number: 101,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What is the preface to the ten commandments?',
      answer: 'The preface to the ten commandments is contained in these words, I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of bondage. Wherein God manifesteth his sovereignty, as being JEHOVAH, the eternal, immutable, and almighty God; having his being in and of himself, and giving being to all his words and works: and that he is a God in covenant, as with Israel of old, so with all his people; who, as he brought them out of their bondage in Egypt, so he delivereth us from our spiritual thraldom; and that therefore we are bound to take him for our God alone, and to keep all his commandments.',
      proof_texts: [
        { reference: 'Exod. 20:2', text: 'I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of bondage.' },
        { reference: 'Isa. 44:6', text: 'Thus saith the LORD the King of Israel, and his redeemer the LORD of hosts; I am the first, and I am the last; and beside me there is no God.' },
        { reference: 'Exod. 3:14', text: 'And God said unto Moses, I AM THAT I AM: and he said, Thus shalt thou say unto the children of Israel, I AM hath sent me unto you.' },
        { reference: 'Luke 1:74-75', text: 'That he would grant unto us, that we being delivered out of the hand of our enemies might serve him without fear, In holiness and righteousness before him, all the days of our life.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 102,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What is the sum of the four commandments which contain our duty to God?',
      answer: 'The sum of the four commandments containing our duty to God, is to love the Lord our God with all our heart, and with all our soul, and with all our strength, and with all our mind.',
      proof_texts: [
        { reference: 'Luke 10:27', text: 'And he answering said, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy strength, and with all thy mind; and thy neighbour as thyself.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 103,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'Which is the first commandment?',
      answer: 'The first commandment is, Thou shalt have no other gods before me.',
      proof_texts: [
        { reference: 'Exod. 20:3', text: 'Thou shalt have no other gods before me.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 104,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What are the duties required in the first commandment?',
      answer: 'The duties required in the first commandment are, the knowing and acknowledging of God to be the only true God, and our God; and to worship and glorify him accordingly, by thinking, meditating, remembering, highly esteeming, honouring, adoring, choosing, loving, desiring, fearing of him; believing him; trusting, hoping, delighting, rejoicing in him; being zealous for him; calling upon him, giving all praise and thanks, and yielding all obedience and submission to him with the whole man; being careful in all things to please him, and sorrowful when in any thing he is offended; and walking humbly with him.',
      proof_texts: [
        { reference: '1 Chron. 28:9', text: 'And thou, Solomon my son, know thou the God of thy father, and serve him with a perfect heart and with a willing mind: for the LORD searcheth all hearts, and understandeth all the imaginations of the thoughts: if thou seek him, he will be found of thee.' },
        { reference: 'Deut. 26:17', text: 'Thou hast avouched the LORD this day to be thy God, and to walk in his ways, and to keep his statutes, and his commandments, and his judgments, and to hearken unto his voice.' },
        { reference: 'Ps. 95:6-7', text: 'O come, let us worship and bow down: let us kneel before the LORD our maker. For he is our God; and we are the people of his pasture, and the sheep of his hand.' },
        { reference: 'Matt. 4:10', text: 'Then saith Jesus unto him, Get thee hence, Satan: for it is written, Thou shalt worship the Lord thy God, and him only shalt thou serve.' },
        { reference: 'Ps. 18:1-3', text: 'I will love thee, O LORD, my strength. The LORD is my rock, and my fortress, and my deliverer; my God, my strength, in whom I will trust; my buckler, and the horn of my salvation, and my high tower. I will call upon the LORD, who is worthy to be praised.' },
        { reference: 'Mic. 6:8', text: 'He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?' }
      ]
    },
    {
      catechism_id: 'wlc', number: 105,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What are the sins forbidden in the first commandment?',
      answer: 'The sins forbidden in the first commandment are, atheism, in denying or not having a God; idolatry, in having or worshipping more gods than one, or any with or instead of the true God; the not having and avouching him for God, and our God; the omission or neglect of any thing due to him, required in this commandment; ignorance, forgetfulness, misapprehensions, false opinions, unworthy and wicked thoughts of him; bold and curious searching into his secrets; all profaneness, hatred of God; self-love, self-seeking, and all other inordinate and immoderate setting of our mind, will, or affections upon other things, and taking them off from him in whole or in part; vain credulity, unbelief, heresy, misbelief, distrust, despair, incorrigibleness, and insensibleness under judgments, hardness of heart, pride, presumption, carnal security, tempting of God; using unlawful means, and trusting in lawful means; carnal delights and joys; corrupt, blind, and indiscreet zeal; lukewarmness, and deadness in the things of God; estranging ourselves, and apostatizing from God; praying, or giving any religious worship to saints, angels, or any other creatures; all compacts and consulting with the devil, and hearkening to his suggestions; making men the lords of our faith and conscience; slighting and despising God and his commands; resisting and grieving of his Spirit, discontent and impatience at his dispensations, charging him foolishly for the evils he inflicts on us.',
      proof_texts: [
        { reference: 'Ps. 14:1', text: 'The fool hath said in his heart, There is no God. They are corrupt, they have done abominable works, there is none that doeth good.' },
        { reference: 'Eph. 2:12', text: 'That at that time ye were without Christ, being aliens from the commonwealth of Israel, and strangers from the covenants of promise, having no hope, and without God in the world.' },
        { reference: 'Ps. 81:11', text: 'But my people would not hearken to my voice; and Israel would none of me.' },
        { reference: 'Rom. 1:21', text: 'Because that, when they knew God, they glorified him not as God, neither were thankful; but became vain in their imaginations, and their foolish heart was darkened.' },
        { reference: '1 John 2:15-16', text: 'Love not the world, neither the things that are in the world. If any man love the world, the love of the Father is not in him. For all that is in the world, the lust of the flesh, and the lust of the eyes, and the pride of life, is not of the Father, but is of the world.' },
        { reference: 'Deut. 6:13-14', text: 'Thou shalt fear the LORD thy God, and serve him, and shalt swear by his name. Ye shall not go after other gods, of the gods of the people which are round about you.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 106,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What are we especially taught by these words before me in the first commandment?',
      answer: 'These words before me, or before my face, in the first commandment, teach us, that God, who seeth all things, taketh special notice of, and is much displeased with, the sin of having any other God: that so it may be an argument to dissuade from it, and to aggravate it as a most impudent provocation: as also to persuade us to do as in his sight, whatever we do in his service.',
      proof_texts: [
        { reference: 'Ezek. 8:5-6', text: 'Then said he unto me, Son of man, lift up thine eyes now the way toward the north. So I lifted up mine eyes the way toward the north, and behold northward at the gate of the altar this image of jealousy in the entry. He said furthermore unto me, Son of man, seest thou what they do? even the great abominations that the house of Israel committeth here, that I should go far off from my sanctuary?' },
        { reference: 'Ps. 44:20-21', text: 'If we have forgotten the name of our God, or stretched out our hands to a strange god; Shall not God search this out? for he knoweth the secrets of the heart.' },
        { reference: '1 Chron. 28:9', text: 'And thou, Solomon my son, know thou the God of thy father, and serve him with a perfect heart and with a willing mind: for the LORD searcheth all hearts, and understandeth all the imaginations of the thoughts.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 107,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'Which is the second commandment?',
      answer: 'The second commandment is, Thou shalt not make unto thee any graven image, or any likeness of any thing that is in heaven above, or that is in the earth beneath, or that is in the water under the earth: thou shalt not bow down thyself to them, nor serve them: for I the LORD thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me; and shewing mercy unto thousands of them that love me, and keep my commandments.',
      proof_texts: [
        { reference: 'Exod. 20:4-6', text: 'Thou shalt not make unto thee any graven image, or any likeness of any thing that is in heaven above, or that is in the earth beneath, or that is in the water under the earth: Thou shalt not bow down thyself to them, nor serve them: for I the LORD thy God am a jealous God.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 108,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What are the duties required in the second commandment?',
      answer: 'The duties required in the second commandment are, the receiving, observing, and keeping pure and entire, all such religious worship and ordinances as God hath instituted in his word; particularly prayer and thanksgiving in the name of Christ; the reading, preaching, and hearing of the word; the administration and receiving of the sacraments; church government and discipline; the ministry and maintenance thereof; religious fasting; swearing by the name of God, and vowing unto him: as also the disapproving, detesting, opposing, all false worship; and, according to each one\'s place and calling, removing it, and all monuments of idolatry.',
      proof_texts: [
        { reference: 'Deut. 32:46-47', text: 'And he said unto them, Set your hearts unto all the words which I testify among you this day... For it is not a vain thing for you; because it is your life.' },
        { reference: 'Matt. 28:20', text: 'Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen.' },
        { reference: 'Acts 2:42', text: 'And they continued stedfastly in the apostles\' doctrine and fellowship, and in breaking of bread, and in prayers.' },
        { reference: 'Phil. 4:6', text: 'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.' },
        { reference: '1 Tim. 2:1-3', text: 'I exhort therefore, that, first of all, supplications, prayers, intercessions, and giving of thanks, be made for all men... For this is good and acceptable in the sight of God our Saviour.' },
        { reference: 'Deut. 12:32', text: 'What thing soever I command you, observe to do it: thou shalt not add thereto, nor diminish from it.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 109,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What are the sins forbidden in the second commandment?',
      answer: 'The sins forbidden in the second commandment are, all devising, counselling, commanding, using, and anywise approving, any religious worship not instituted by God himself; tolerating a false religion; the making any representation of God, of all or of any of the three persons, either inwardly in our mind, or outwardly in any kind of image or likeness of any creature whatsoever; all worshipping of it, or God in it or by it; the making of any representation of feigned deities, and all worship of them, or service belonging to them; all superstitious devices, corrupting the worship of God, adding to it, or taking from it, whether invented and taken up of ourselves, or received by tradition from others, though under the title of antiquity, custom, devotion, good intent, or any other pretence whatsoever; simony; sacrilege; all neglect, contempt, hindering, and opposing the worship and ordinances which God hath appointed.',
      proof_texts: [
        { reference: 'Num. 15:39', text: 'And it shall be unto you for a fringe, that ye may look upon it, and remember all the commandments of the LORD, and do them; and that ye seek not after your own heart and your own eyes, after which ye use to go a whoring.' },
        { reference: 'Deut. 13:6-8', text: 'If thy brother, the son of thy mother, or thy son, or thy daughter, or the wife of thy bosom, or thy friend, which is as thine own soul, entice thee secretly, saying, Let us go and serve other gods... Thou shalt not consent unto him.' },
        { reference: 'Isa. 44:9-10', text: 'They that make a graven image are all of them vanity; and their delectable things shall not profit; and they are their own witnesses; they see not, nor know; that they may be ashamed. Who hath formed a god, or molten a graven image that is profitable for nothing?' },
        { reference: 'Exod. 32:5,8', text: 'And when Aaron saw it, he built an altar before it... They have turned aside quickly out of the way which I commanded them: they have made them a molten calf, and have worshipped it, and have sacrificed thereunto.' },
        { reference: 'Col. 2:18,23', text: 'Let no man beguile you of your reward in a voluntary humility and worshipping of angels... Which things have indeed a shew of wisdom in will worship, and humility, and neglecting of the body.' },
        { reference: 'Acts 8:18', text: 'And when Simon saw that through laying on of the apostles\' hands the Holy Ghost was given, he offered them money.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 110,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What are the reasons annexed to the second commandment, the more to enforce it?',
      answer: 'The reasons annexed to the second commandment, the more to enforce it, contained in these words, For I the LORD thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me; and shewing mercy unto thousands of them that love me, and keep my commandments; are, besides God\'s sovereignty over us, and propriety in us, his fervent zeal for his own worship, and his revengeful indignation against all false worship, as being a spiritual whoredom; accounting the breakers of this commandment such as hate him, and threatening to punish them unto divers generations; and esteeming the observers of it such as love him and keep his commandments, and promising mercy to them unto many generations.',
      proof_texts: [
        { reference: 'Exod. 20:5-6', text: 'For I the LORD thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me; And shewing mercy unto thousands of them that love me, and keep my commandments.' },
        { reference: 'Ps. 45:11', text: 'So shall the king greatly desire thy beauty: for he is thy Lord; and worship thou him.' },
        { reference: 'Exod. 34:13-14', text: 'But ye shall destroy their altars, break their images, and cut down their groves... For thou shalt worship no other god: for the LORD, whose name is Jealous, is a jealous God.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 111,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'Which is the third commandment?',
      answer: 'The third commandment is, Thou shalt not take the name of the LORD thy God in vain: for the LORD will not hold him guiltless that taketh his name in vain.',
      proof_texts: [
        { reference: 'Exod. 20:7', text: 'Thou shalt not take the name of the LORD thy God in vain; for the LORD will not hold him guiltless that taketh his name in vain.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 112,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What is required in the third commandment?',
      answer: 'The third commandment requires, that the name of God, his titles, attributes, ordinances, the word, sacraments, prayer, oaths, vows, lots, his works, and any thing else whereby he makes himself known, be holily and reverently used in thought, meditation, word, and writing; by an holy profession, and answerable conversation, to the glory of God, and the good of ourselves, and others.',
      proof_texts: [
        { reference: 'Matt. 6:9', text: 'After this manner therefore pray ye: Our Father which art in heaven, Hallowed be thy name.' },
        { reference: 'Ps. 29:2', text: 'Give unto the LORD the glory due unto his name; worship the LORD in the beauty of holiness.' },
        { reference: 'Deut. 28:58', text: 'If thou wilt not observe to do all the words of this law that are written in this book, that thou mayest fear this glorious and fearful name, THE LORD THY GOD.' },
        { reference: 'Ps. 68:4', text: 'Sing unto God, sing praises to his name: extol him that rideth upon the heavens by his name JAH, and rejoice before him.' },
        { reference: 'Eccl. 5:1-2', text: 'Keep thy foot when thou goest to the house of God, and be more ready to hear, than to give the sacrifice of fools: for they consider not that they do evil. Be not rash with thy mouth, and let not thine heart be hasty to utter any thing before God: for God is in heaven, and thou upon earth: therefore let thy words be few.' },
        { reference: 'Rev. 15:3-4', text: 'And they sing the song of Moses the servant of God, and the song of the Lamb, saying, Great and marvellous are thy works, Lord God Almighty; just and true are thy ways, thou King of saints. Who shall not fear thee, O Lord, and glorify thy name? for thou only art holy.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 113,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What are the sins forbidden in the third commandment?',
      answer: 'The sins forbidden in the third commandment are, the not using of God\'s name as is required; and the abuse of it in an ignorant, vain, irreverent, profane, superstitious or wicked mentioning or otherwise using his titles, attributes, ordinances, or works, by blasphemy, perjury; all sinful cursings, oaths, vows, and lots; violating of our oaths and vows, if lawful; and fulfilling them, if of things unlawful; murmuring and quarrelling at, curious prying into, and misapplying of God\'s decrees and providences; misinterpreting, misapplying, or any way perverting the word, or any part of it, to profane jests, curious or unprofitable questions, vain janglings, or the maintaining of false doctrines; abusing it, the creatures, or any thing contained under the name of God, to charms, or sinful lusts and practices; the maligning, scorning, reviling, or any wise opposing of God\'s truth, grace, and ways; making profession of religion in hypocrisy, or for sinister ends; being ashamed of it, or a shame to it, by unconformable, unwise, unfruitful, and offensive walking, or backsliding from it.',
      proof_texts: [
        { reference: 'Mal. 2:2', text: 'If ye will not hear, and if ye will not lay it to heart, to give glory unto my name, saith the LORD of hosts, I will even send a curse upon you, and I will curse your blessings.' },
        { reference: 'Acts 17:23', text: 'For as I passed by, and beheld your devotions, I found an altar with this inscription, TO THE UNKNOWN GOD. Whom therefore ye ignorantly worship, him declare I unto you.' },
        { reference: 'Prov. 30:9', text: 'Lest I be full, and deny thee, and say, Who is the LORD? or lest I be poor, and steal, and take the name of my God in vain.' },
        { reference: 'Mal. 3:14', text: 'Ye have said, It is vain to serve God: and what profit is it that we have kept his ordinance, and that we have walked mournfully before the LORD of hosts?' },
        { reference: 'Matt. 5:37', text: 'But let your communication be, Yea, yea; Nay, nay: for whatsoever is more than these cometh of evil.' },
        { reference: '2 Pet. 3:16', text: 'As also in all his epistles, speaking in them of these things; in which are some things hard to be understood, which they that are unlearned and unstable wrest, as they do also the other scriptures, unto their own destruction.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 114,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What reasons are annexed to the third commandment?',
      answer: 'The reasons annexed to the third commandment, in these words, The LORD thy God, and, For the LORD will not hold him guiltless that taketh his name in vain, are, because he is the Lord and our God, therefore his name is not to be profaned, or any way abused by us; especially because he will be so far from acquitting and sparing the transgressors of this commandment, as that he will not suffer them to escape his righteous judgment, albeit many such escape the censures and punishments of men.',
      proof_texts: [
        { reference: 'Exod. 20:7', text: 'Thou shalt not take the name of the LORD thy God in vain; for the LORD will not hold him guiltless that taketh his name in vain.' },
        { reference: 'Deut. 28:58-59', text: 'If thou wilt not observe to do all the words of this law... that thou mayest fear this glorious and fearful name, THE LORD THY GOD; Then the LORD will make thy plagues wonderful, and the plagues of thy seed, even great plagues, and of long continuance, and sore sicknesses.' },
        { reference: '1 Sam. 2:12,17', text: 'Now the sons of Eli were sons of Belial; they knew not the LORD... Wherefore the sin of the young men was very great before the LORD: for men abhorred the offering of the LORD.' },
        { reference: '1 Sam. 3:13', text: 'For I have told him that I will judge his house for ever for the iniquity which he knoweth; because his sons made themselves vile, and he restrained them not.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 115,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'Which is the fourth commandment?',
      answer: 'The fourth commandment is, Remember the sabbath day, to keep it holy. Six days shalt thou labour, and do all thy work: but the seventh day is the sabbath of the LORD thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, thy manservant, nor thy maidservant, nor thy cattle, nor thy stranger that is within thy gates: for in six days the LORD made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore the LORD blessed the sabbath day, and hallowed it.',
      proof_texts: [
        { reference: 'Exod. 20:8-11', text: 'Remember the sabbath day, to keep it holy. Six days shalt thou labour, and do all thy work: But the seventh day is the sabbath of the LORD thy God: in it thou shalt not do any work... For in six days the LORD made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore the LORD blessed the sabbath day, and hallowed it.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 116,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What is required in the fourth commandment?',
      answer: 'The fourth commandment requireth of all men the sanctifying or keeping holy to God such set times as he hath appointed in his word, expressly one whole day in seven; which was the seventh from the beginning of the world to the resurrection of Christ, and the first day of the week ever since, and so to continue to the end of the world; which is the Christian sabbath, and in the New Testament called The Lord\'s day.',
      proof_texts: [
        { reference: 'Deut. 5:12-14', text: 'Keep the sabbath day to sanctify it, as the LORD thy God hath commanded thee. Six days thou shalt labour, and do all thy work: But the seventh day is the sabbath of the LORD thy God.' },
        { reference: 'Gen. 2:2-3', text: 'And on the seventh day God ended his work which he had made; and he rested on the seventh day from all his work which he had made. And God blessed the seventh day, and sanctified it.' },
        { reference: 'Rev. 1:10', text: 'I was in the Spirit on the Lord\'s day, and heard behind me a great voice, as of a trumpet.' },
        { reference: 'Mark 2:27-28', text: 'And he said unto them, The sabbath was made for man, and not man for the sabbath: Therefore the Son of man is Lord also of the sabbath.' },
        { reference: 'Acts 20:7', text: 'And upon the first day of the week, when the disciples came together to break bread, Paul preached unto them.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 117,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'How is the sabbath or the Lord\'s day to be sanctified?',
      answer: 'The sabbath or Lord\'s day is to be sanctified by a holy resting all the day, not only from such works as are at all times sinful, but even from such worldly employments and recreations as are on other days lawful; and making it our delight to spend the whole time (except so much of it as is to be taken up in works of necessity and mercy) in the public and private exercises of God\'s worship: and, to that end, we are to prepare our hearts, and with such foresight, diligence, and moderation, to dispose and seasonably dispatch our worldly business, that we may be the more free and fit for the duties of that day.',
      proof_texts: [
        { reference: 'Exod. 20:8', text: 'Remember the sabbath day, to keep it holy.' },
        { reference: 'Isa. 58:13-14', text: 'If thou turn away thy foot from the sabbath, from doing thy pleasure on my holy day; and call the sabbath a delight, the holy of the LORD, honourable; and shalt honour him, not doing thine own ways, nor finding thine own pleasure, nor speaking thine own words: Then shalt thou delight thyself in the LORD.' },
        { reference: 'Luke 4:16', text: 'And he came to Nazareth, where he had been brought up: and, as his custom was, he went into the synagogue on the sabbath day, and stood up for to read.' },
        { reference: 'Acts 20:7', text: 'And upon the first day of the week, when the disciples came together to break bread, Paul preached unto them.' },
        { reference: 'Ps. 92:1-2', text: 'It is a good thing to give thanks unto the LORD, and to sing praises unto thy name, O most High: To shew forth thy lovingkindness in the morning, and thy faithfulness every night.' },
        { reference: 'Neh. 13:19', text: 'And it came to pass, that when the gates of Jerusalem began to be dark before the sabbath, I commanded that the gates should be shut, and charged that they should not be opened till after the sabbath.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 118,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'Why is the charge of keeping the sabbath more specially directed to governors of families, and other superiors?',
      answer: 'The charge of keeping the sabbath is more specially directed to governors of families, and other superiors, because they are bound not only to keep it themselves, but to see that it be observed by all those that are under their charge; and because they are prone ofttimes to hinder them by employments of their own.',
      proof_texts: [
        { reference: 'Exod. 20:10', text: 'But the seventh day is the sabbath of the LORD thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, thy manservant, nor thy maidservant, nor thy cattle, nor thy stranger that is within thy gates.' },
        { reference: 'Josh. 24:15', text: 'And if it seem evil unto you to serve the LORD, choose you this day whom ye will serve... but as for me and my house, we will serve the LORD.' },
        { reference: 'Neh. 13:15,17', text: 'In those days saw I in Judah some treading wine presses on the sabbath... Then I contended with the nobles of Judah, and said unto them, What evil thing is this that ye do, and profane the sabbath day?' },
        { reference: 'Amos 8:5', text: 'Saying, When will the new moon be gone, that we may sell corn? and the sabbath, that we may set forth wheat, making the ephah small, and the shekel great, and falsifying the balances by deceit?' }
      ]
    },
    {
      catechism_id: 'wlc', number: 119,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What are the sins forbidden in the fourth commandment?',
      answer: 'The sins forbidden in the fourth commandment are, all omissions of the duties required, all careless, negligent, and unprofitable performing of them, and being weary of them; all profaning the day by idleness, and doing that which is in itself sinful; and by all needless works, words, and thoughts, about our worldly employments and recreations.',
      proof_texts: [
        { reference: 'Ezek. 22:26', text: 'Her priests have violated my law, and have profaned mine holy things: they have put no difference between the holy and profane, neither have they shewed difference between the unclean and the clean, and have hid their eyes from my sabbaths, and I am profaned among them.' },
        { reference: 'Acts 20:7,9', text: 'And upon the first day of the week, when the disciples came together to break bread, Paul preached unto them... And there sat in a window a certain young man named Eutychus, being fallen into a deep sleep: and as Paul was long preaching, he sunk down with sleep.' },
        { reference: 'Isa. 58:13', text: 'If thou turn away thy foot from the sabbath, from doing thy pleasure on my holy day; and call the sabbath a delight, the holy of the LORD, honourable; and shalt honour him, not doing thine own ways, nor finding thine own pleasure, nor speaking thine own words.' },
        { reference: 'Neh. 13:15-17,19,21-22', text: 'In those days saw I in Judah some treading wine presses on the sabbath, and bringing in sheaves, and lading asses; as also wine, grapes, and figs, and all manner of burdens, which they brought into Jerusalem on the sabbath day... Then I contended with the nobles of Judah.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 120,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What are the reasons annexed to the fourth commandment, the more to enforce it?',
      answer: 'The reasons annexed to the fourth commandment, the more to enforce it, are taken from the equity of it, God allowing us six days of seven for our own affairs, and reserving but one for himself, in these words, Six days shalt thou labour, and do all thy work: from God\'s challenging a special propriety in that day, The seventh day is the sabbath of the LORD thy God: from the example of God, who in six days made heaven and earth, the sea, and all that in them is, and rested the seventh day: and from that blessing which God put upon that day, not only in sanctifying it to be a day for his service, but in ordaining it to be a means of blessing to us in our sanctifying it; Wherefore the LORD blessed the sabbath day, and hallowed it.',
      proof_texts: [
        { reference: 'Exod. 20:9-11', text: 'Six days shalt thou labour, and do all thy work: But the seventh day is the sabbath of the LORD thy God: in it thou shalt not do any work... For in six days the LORD made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore the LORD blessed the sabbath day, and hallowed it.' },
        { reference: 'Gen. 2:2', text: 'And on the seventh day God ended his work which he had made; and he rested on the seventh day from all his work which he had made.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 121,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'Why is the word Remember set in the beginning of the fourth commandment?',
      answer: 'The word Remember is set in the beginning of the fourth commandment, partly, because of the great benefit of remembering it, we being thereby helped in our preparation to keep it, and, in keeping it, better enabled to keep all the rest of the commandments, and to continue a thankful remembrance of the two great benefits of creation and redemption, which contain a short abridgment of religion; and partly, because we are very ready to forget it, for that there is less light of nature for it, and yet it restraineth our natural liberty in things at other times lawful; that it cometh but once in seven days, and many worldly businesses come between, and too often take off our minds from thinking of it, either to prepare for it, or to sanctify it; and that Satan with his instruments much labour to blot out the glory, and even the memory of it, to bring in all irreligion and impiety.',
      proof_texts: [
        { reference: 'Exod. 20:8', text: 'Remember the sabbath day, to keep it holy.' },
        { reference: 'Neh. 13:22', text: 'And I commanded the Levites that they should cleanse themselves, and that they should come and keep the gates, to sanctify the sabbath day. Remember me, O my God, concerning this also, and spare me according to the greatness of thy mercy.' },
        { reference: 'Ps. 92:1-6', text: 'It is a good thing to give thanks unto the LORD, and to sing praises unto thy name, O most High: To shew forth thy lovingkindness in the morning, and thy faithfulness every night.' },
        { reference: 'Gen. 2:2-3', text: 'And on the seventh day God ended his work which he had made; and he rested on the seventh day from all his work which he had made. And God blessed the seventh day, and sanctified it.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 122,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What is the sum of the six commandments which contain our duty to man?',
      answer: 'The sum of the six commandments which contain our duty to man, is to love our neighbour as ourselves, and to do to others what we would have them to do to us.',
      proof_texts: [
        { reference: 'Matt. 22:39', text: 'And the second is like unto it, Thou shalt love thy neighbour as thyself.' },
        { reference: 'Matt. 7:12', text: 'Therefore all things whatsoever ye would that men should do to you, do ye even so to them: for this is the law and the prophets.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 123,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'Which is the fifth commandment?',
      answer: 'The fifth commandment is, Honour thy father and thy mother: that thy days may be long upon the land which the LORD thy God giveth thee.',
      proof_texts: [
        { reference: 'Exod. 20:12', text: 'Honour thy father and thy mother: that thy days may be long upon the land which the LORD thy God giveth thee.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 124,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'Who are meant by father and mother in the fifth commandment?',
      answer: 'By father and mother, in the fifth commandment, are meant, not only natural parents, but all superiors in age and gifts; and especially such as, by God\'s ordinance, are over us in place of authority, whether in family, church, or commonwealth.',
      proof_texts: [
        { reference: 'Prov. 23:22,25', text: 'Hearken unto thy father that begat thee, and despise not thy mother when she is old... Thy father and thy mother shall be glad, and she that bare thee shall rejoice.' },
        { reference: 'Eph. 6:1-2', text: 'Children, obey your parents in the Lord: for this is right. Honour thy father and mother; which is the first commandment with promise.' },
        { reference: '1 Tim. 5:1-2', text: 'Rebuke not an elder, but intreat him as a father; and the younger men as brethren; The elder women as mothers; the younger as sisters, with all purity.' },
        { reference: 'Gen. 4:20-22', text: 'And Adah bare Jabal: he was the father of such as dwell in tents... And his brother\'s name was Jubal: he was the father of all such as handle the harp and organ.' },
        { reference: 'Rom. 13:1-2', text: 'Let every soul be subject unto the higher powers. For there is no power but of God: the powers that be are ordained of God. Whosoever therefore resisteth the power, resisteth the ordinance of God.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 125,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'Why are superiors styled Father and Mother?',
      answer: 'Superiors are styled Father and Mother, both to teach them in all duties toward their inferiors, like natural parents, to express love and tenderness to them, according to their several relations; and to work inferiors to a greater willingness and cheerfulness in performing their duties to their superiors, as to their parents.',
      proof_texts: [
        { reference: 'Eph. 6:4', text: 'And, ye fathers, provoke not your children to wrath: but bring them up in the nurture and admonition of the Lord.' },
        { reference: '2 Tim. 3:10-12', text: 'But thou hast fully known my doctrine, manner of life, purpose, faith, longsuffering, charity, patience, Persecutions, afflictions... Yea, and all that will live godly in Christ Jesus shall suffer persecution.' },
        { reference: '1 Thess. 2:7-8,11-12', text: 'But we were gentle among you, even as a nurse cherisheth her children... As ye know how we exhorted and comforted and charged every one of you, as a father doth his children.' },
        { reference: 'Num. 11:11-12', text: 'And Moses said unto the LORD, Wherefore hast thou afflicted thy servant? and wherefore have I not found favour in thy sight, that thou layest the burden of all this people upon me? Have I conceived all this people? have I begotten them, that thou shouldest say unto me, Carry them in thy bosom, as a nursing father beareth the sucking child?' }
      ]
    },
    {
      catechism_id: 'wlc', number: 126,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What is the general scope of the fifth commandment?',
      answer: 'The general scope of the fifth commandment is, the performance of those duties which we mutually owe in our several relations, as inferiors, superiors, or equals.',
      proof_texts: [
        { reference: 'Eph. 5:21', text: 'Submitting yourselves one to another in the fear of God.' },
        { reference: 'Rom. 12:10', text: 'Be kindly affectioned one to another with brotherly love; in honour preferring one another.' },
        { reference: '1 Pet. 2:17', text: 'Honour all men. Love the brotherhood. Fear God. Honour the king.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 127,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What is the honour that inferiors owe to their superiors?',
      answer: 'The honour which inferiors owe to their superiors is, all due reverence in heart, word, and behaviour; prayer and thanksgiving for them; imitation of their virtues and graces; willing obedience to their lawful commands and counsels; due submission to their corrections; fidelity to, defence and maintenance of their persons and authority, according to their several ranks, and the nature of their places; bearing with their infirmities, and covering them in love, that so they may be an honour to them and to their government.',
      proof_texts: [
        { reference: 'Mal. 1:6', text: 'A son honoureth his father, and a servant his master: if then I be a father, where is mine honour? and if I be a master, where is my fear? saith the LORD of hosts unto you, O priests, that despise my name.' },
        { reference: 'Lev. 19:3', text: 'Ye shall fear every man his mother, and his father, and keep my sabbaths: I am the LORD your God.' },
        { reference: '1 Tim. 2:1-2', text: 'I exhort therefore, that, first of all, supplications, prayers, intercessions, and giving of thanks, be made for all men; For kings, and for all that are in authority; that we may lead a quiet and peaceable life in all godliness and honesty.' },
        { reference: 'Heb. 13:7', text: 'Remember them which have the rule over you, who have spoken unto you the word of God: whose faith follow, considering the end of their conversation.' },
        { reference: 'Eph. 6:1-2,5-7', text: 'Children, obey your parents in the Lord: for this is right. Honour thy father and mother... Servants, be obedient to them that are your masters according to the flesh, with fear and trembling, in singleness of your heart, as unto Christ.' },
        { reference: 'Rom. 13:1-5', text: 'Let every soul be subject unto the higher powers. For there is no power but of God: the powers that be are ordained of God.' },
        { reference: '1 Pet. 2:13-14', text: 'Submit yourselves to every ordinance of man for the Lord\'s sake: whether it be to the king, as supreme; Or unto governors, as unto them that are sent by him.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 128,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What are the sins of inferiors against their superiors?',
      answer: 'The sins of inferiors against their superiors are, all neglect of the duties required toward them; envying at, contemning of, and rebellion against, their persons and places, in their lawful counsels, commands, and corrections; cursing, mocking, and all such refractory and scandalous carriage, as proves a shame and dishonour to them and their government.',
      proof_texts: [
        { reference: 'Matt. 15:4-6', text: 'For God commanded, saying, Honour thy father and mother: and, He that curseth father or mother, let him die the death. But ye say, Whosoever shall say to his father or his mother, It is a gift, by whatsoever thou mightest be profited by me; And honour not his father or his mother, he shall be free. Thus have ye made the commandment of God of none effect by your tradition.' },
        { reference: 'Prov. 30:11,17', text: 'There is a generation that curseth their father, and doth not bless their mother... The eye that mocketh at his father, and despiseth to obey his mother, the ravens of the valley shall pick it out.' },
        { reference: '2 Sam. 15:1-12', text: 'And it came to pass after this, that Absalom prepared him chariots and horses, and fifty men to run before him... Absalom stole the hearts of the men of Israel.' },
        { reference: '1 Sam. 8:7', text: 'And the LORD said unto Samuel, Hearken unto the voice of the people in all that they say unto thee: for they have not rejected thee, but they have rejected me, that I should not reign over them.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 129,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What is required of superiors towards their inferiors?',
      answer: 'It is required of superiors, according to that power they receive from God, and that relation wherein they stand, to love, pray for, and bless their inferiors; to instruct, counsel, and admonish them; countenancing, commending, and rewarding such as do well; and discountenancing, reproving, and chastising such as do ill; protecting, and providing for them all things necessary for soul and body: and, by grave, wise, holy, and exemplary carriage, to procure glory to God, honour to themselves, and so to preserve that authority which God hath put upon them.',
      proof_texts: [
        { reference: 'Col. 3:19', text: 'Husbands, love your wives, and be not bitter against them.' },
        { reference: 'Titus 2:4', text: 'That they may teach the young women to be sober, to love their husbands, to love their children.' },
        { reference: '1 Sam. 12:23', text: 'Moreover as for me, God forbid that I should sin against the LORD in ceasing to pray for you: but I will teach you the good and the right way.' },
        { reference: 'Job 29:12-17', text: 'Because I delivered the poor that cried, and the fatherless, and him that had none to help him. The blessing of him that was ready to perish came upon me: and I caused the widow\'s heart to sing for joy.' },
        { reference: 'Eph. 6:4', text: 'And, ye fathers, provoke not your children to wrath: but bring them up in the nurture and admonition of the Lord.' },
        { reference: 'Rom. 13:3-4', text: 'For rulers are not a terror to good works, but to the evil. Wilt thou then not be afraid of the power? do that which is good, and thou shalt have praise of the same.' },
        { reference: '1 Tim. 5:17-18', text: 'Let the elders that rule well be counted worthy of double honour, especially they who labour in the word and doctrine. For the scripture saith, Thou shalt not muzzle the ox that treadeth out the corn.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 130,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What are the sins of superiors?',
      answer: 'The sins of superiors are, besides the neglect of the duties required of them, an inordinate seeking of themselves, their own glory, ease, profit, or pleasure; commanding things unlawful, or not in the power of inferiors to perform; counselling, encouraging, or favouring them in that which is evil; dissuading, discouraging, or discountenancing them in that which is good; correcting them unduly; careless exposing, or leaving them to wrong, temptation, and danger; provoking them to wrath; or any way dishonouring themselves, or lessening their authority, by an unjust, indiscreet, rigorous, or remiss behaviour.',
      proof_texts: [
        { reference: 'Ezek. 34:2-4', text: 'Son of man, prophesy against the shepherds of Israel, prophesy, and say unto them, Thus saith the Lord GOD unto the shepherds; Woe be to the shepherds of Israel that do feed themselves! should not the shepherds feed the flocks? Ye eat the fat, and ye clothe you with the wool, ye kill them that are fed: but ye feed not the flock.' },
        { reference: 'Phil. 2:21', text: 'For all seek their own, not the things which are Jesus Christ\'s.' },
        { reference: 'Dan. 3:4-6', text: 'Then an herald cried aloud, To you it is commanded, O people, nations, and languages, That at what time ye hear the sound of the cornet, flute, harp, sackbut, psaltery, dulcimer, and all kinds of musick, ye fall down and worship the golden image that Nebuchadnezzar the king hath set up: And whoso falleth not down and worshippeth shall the same hour be cast into the midst of a burning fiery furnace.' },
        { reference: 'Eph. 6:4', text: 'And, ye fathers, provoke not your children to wrath: but bring them up in the nurture and admonition of the Lord.' },
        { reference: 'Col. 3:21', text: 'Fathers, provoke not your children to anger, lest they be discouraged.' },
        { reference: '1 Pet. 5:3', text: 'Neither as being lords over God\'s heritage, but being ensamples to the flock.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 131,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What are the duties of equals?',
      answer: 'The duties of equals are, to regard the dignity and worth of each other, in giving honour to go one before another; and to rejoice in each other\'s gifts and advancement, as their own.',
      proof_texts: [
        { reference: 'Rom. 12:10', text: 'Be kindly affectioned one to another with brotherly love; in honour preferring one another.' },
        { reference: '1 Pet. 2:17', text: 'Honour all men. Love the brotherhood. Fear God. Honour the king.' },
        { reference: '1 Cor. 12:25-26', text: 'That there should be no schism in the body; but that the members should have the same care one for another. And whether one member suffer, all the members suffer with it; or one member be honoured, all the members rejoice with it.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 132,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What are the sins of equals?',
      answer: 'The sins of equals are, besides the neglect of the duties required, the undervaluing of the worth, envying the gifts, grieving at the advancement or good of others, and usurping pre-eminence over equals.',
      proof_texts: [
        { reference: 'Num. 12:2', text: 'And they said, Hath the LORD indeed spoken only by Moses? hath he not spoken also by us? And the LORD heard it.' },
        { reference: 'Esther 6:12-13', text: 'And Mordecai came again to the king\'s gate. But Haman hasted to his house mourning, and having his head covered. And Haman told Zeresh his wife and all his friends every thing that had befallen him.' },
        { reference: '3 John 1:9', text: 'I wrote unto the church: but Diotrephes, who loveth to have the preeminence among them, receiveth us not.' },
        { reference: 'Luke 22:24', text: 'And there was also a strife among them, which of them should be accounted the greatest.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 133,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What is the reason annexed to the fifth commandment, the more to enforce it?',
      answer: 'The reason annexed to the fifth commandment, in these words, That thy days may be long upon the land which the LORD thy God giveth thee, is an express promise of long life and prosperity, as far as it shall serve for God\'s glory and their own good, to all such as keep this commandment.',
      proof_texts: [
        { reference: 'Eph. 6:2-3', text: 'Honour thy father and mother; which is the first commandment with promise; That it may be well with thee, and thou mayest live long on the earth.' },
        { reference: 'Exod. 20:12', text: 'Honour thy father and thy mother: that thy days may be long upon the land which the LORD thy God giveth thee.' },
        { reference: '1 Kings 8:25', text: 'Therefore now, LORD God of Israel, keep with thy servant David my father that thou promisedst him, saying, There shall not fail thee a man in my sight to sit on the throne of Israel; so that thy children take heed to their way, that they walk before me as thou hast walked before me.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 134,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'Which is the sixth commandment?',
      answer: 'The sixth commandment is, Thou shalt not kill.',
      proof_texts: [
        { reference: 'Exod. 20:13', text: 'Thou shalt not kill.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 135,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What are the duties required in the sixth commandment?',
      answer: 'The duties required in the sixth commandment are, all careful studies, and lawful endeavours, to preserve the life of ourselves and others by resisting all thoughts and purposes, subduing all passions, and avoiding all occasions, temptations, and practices, which tend to the unjust taking away the life of any; by just defence thereof against violence, patient bearing of the hand of God, quietness of mind, cheerfulness of spirit; a sober use of meat, drink, physic, sleep, labour, and recreations; by charitable thoughts, love, compassion, meekness, gentleness, kindness; peaceable, mild and courteous speeches and behaviour; forbearance, readiness to be reconciled, patient bearing and forgiving of injuries, and requiting good for evil; comforting and succouring the distressed, and protecting and defending the innocent.',
      proof_texts: [
        { reference: 'Eph. 5:28-29', text: 'So ought men to love their wives as their own bodies. He that loveth his wife loveth himself. For no man ever yet hated his own flesh; but nourisheth and cherisheth it, even as the Lord the church.' },
        { reference: 'Acts 16:28', text: 'But Paul cried with a loud voice, saying, Do thyself no harm: for we are all here.' },
        { reference: 'Matt. 5:29-30', text: 'And if thy right eye offend thee, pluck it out, and cast it from thee: for it is profitable for thee that one of thy members should perish, and not that thy whole body should be cast into hell.' },
        { reference: 'James 5:7-11', text: 'Be patient therefore, brethren, unto the coming of the Lord... Behold, we count them happy which endure. Ye have heard of the patience of Job, and have seen the end of the Lord; that the Lord is very pitiful, and of tender mercy.' },
        { reference: 'Prov. 25:16', text: 'Hast thou found honey? eat so much as is sufficient for thee, lest thou be filled therewith, and vomit it.' },
        { reference: '1 Thess. 4:11', text: 'And that ye study to be quiet, and to do your own business, and to work with your own hands, as we commanded you.' },
        { reference: 'Matt. 5:44-45', text: 'But I say unto you, Love your enemies, bless them that curse you, do good to them that hate you, and pray for them which despitefully use you, and persecute you; That ye may be the children of your Father which is in heaven.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 136,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What are the sins forbidden in the sixth commandment?',
      answer: 'The sins forbidden in the sixth commandment are, all taking away the life of ourselves, or of others, except in case of public justice, lawful war, or necessary defence; the neglecting or withdrawing the lawful and necessary means of preservation of life; sinful anger, hatred, envy, desire of revenge; all excessive passions, distracting cares; immoderate use of meat, drink, labour, and recreations; provoking words, oppression, quarrelling, striking, wounding, and whatsoever else tends to the destruction of the life of any.',
      proof_texts: [
        { reference: 'Acts 16:28', text: 'But Paul cried with a loud voice, saying, Do thyself no harm: for we are all here.' },
        { reference: 'Gen. 9:6', text: 'Whoso sheddeth man\'s blood, by man shall his blood be shed: for in the image of God made he man.' },
        { reference: 'Matt. 25:42-43', text: 'For I was an hungred, and ye gave me no meat: I was thirsty, and ye gave me no drink: I was a stranger, and ye took me not in: naked, and ye clothed me not: sick, and in prison, and ye visited me not.' },
        { reference: 'Matt. 5:22', text: 'But I say unto you, That whosoever is angry with his brother without a cause shall be in danger of the judgment: and whosoever shall say to his brother, Raca, shall be in danger of the council: but whosoever shall say, Thou fool, shall be in danger of hell fire.' },
        { reference: '1 John 3:15', text: 'Whosoever hateth his brother is a murderer: and ye know that no murderer hath eternal life abiding in him.' },
        { reference: 'Prov. 24:11-12', text: 'If thou forbear to deliver them that are drawn unto death, and those that are ready to be slain; If thou sayest, Behold, we knew it not; doth not he that pondereth the heart consider it? and he that keepeth thy soul, doth not he know it?' }
      ]
    },
    {
      catechism_id: 'wlc', number: 137,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'Which is the seventh commandment?',
      answer: 'The seventh commandment is, Thou shalt not commit adultery.',
      proof_texts: [
        { reference: 'Exod. 20:14', text: 'Thou shalt not commit adultery.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 138,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What are the duties required in the seventh commandment?',
      answer: 'The duties required in the seventh commandment are, chastity in body, mind, affections, words, and behaviour; and the preservation of it in ourselves and others; watchfulness over the eyes and all the senses; temperance, keeping of chaste company, modesty in apparel; marriage by those that have not the gift of continency, conjugal love, and cohabitation; diligent labour in our callings; shunning all occasions of uncleanness, and resisting temptations thereunto.',
      proof_texts: [
        { reference: '1 Thess. 4:4', text: 'That every one of you should know how to possess his vessel in sanctification and honour.' },
        { reference: 'Job 31:1', text: 'I made a covenant with mine eyes; why then should I think upon a maid?' },
        { reference: '1 Cor. 7:2,9', text: 'Nevertheless, to avoid fornication, let every man have his own wife, and let every woman have her own husband... But if they cannot contain, let them marry: for it is better to marry than to burn.' },
        { reference: 'Prov. 2:16-20', text: 'To deliver thee from the strange woman, even from the stranger which flattereth with her words... That thou mayest walk in the way of good men, and keep the paths of the righteous.' },
        { reference: '1 Pet. 3:2', text: 'While they behold your chaste conversation coupled with fear.' },
        { reference: 'Titus 2:4-5', text: 'That they may teach the young women to be sober, to love their husbands, to love their children, To be discreet, chaste, keepers at home, good, obedient to their own husbands, that the word of God be not blasphemed.' },
        { reference: 'Prov. 5:19-20', text: 'Let her be as the loving hind and pleasant roe; let her breasts satisfy thee at all times; and be thou ravished always with her love. And why wilt thou, my son, be ravished with a strange woman, and embrace the bosom of a stranger?' }
      ]
    },
    {
      catechism_id: 'wlc', number: 139,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What are the sins forbidden in the seventh commandment?',
      answer: 'The sins forbidden in the seventh commandment, besides the neglect of the duties required, are, adultery, fornication, rape, incest, sodomy, and all unnatural lusts; all unclean imaginations, thoughts, purposes, and affections; all corrupt or filthy communications, or listening thereunto; wanton looks, impudent or light behaviour, immodest apparel; prohibiting of lawful, and dispensing with unlawful marriages; allowing, tolerating, keeping of stews, and resorting to them; entangling vows of single life, undue delay of marriage; having more wives or husbands than one at the same time; unjust divorce, or desertion; idleness, gluttony, drunkenness, unchaste company; lascivious songs, books, pictures, dancings, stage plays; and all other provocations to, or acts of uncleanness, either in ourselves or others.',
      proof_texts: [
        { reference: 'Matt. 5:28', text: 'But I say unto you, That whosoever looketh on a woman to lust after her hath committed adultery with her already in his heart.' },
        { reference: 'Eph. 5:3-4', text: 'But fornication, and all uncleanness, or covetousness, let it not be once named among you, as becometh saints; Neither filthiness, nor foolish talking, nor jesting, which are not convenient: but rather giving of thanks.' },
        { reference: 'Col. 4:6', text: 'Let your speech be alway with grace, seasoned with salt, that ye may know how ye ought to answer every man.' },
        { reference: '1 Pet. 3:3', text: 'Whose adorning let it not be that outward adorning of plaiting the hair, and of wearing of gold, or of putting on of apparel.' },
        { reference: 'Prov. 7:10,13', text: 'And, behold, there met him a woman with the attire of an harlot, and subtil of heart... So she caught him, and kissed him, and with an impudent face said unto him.' },
        { reference: '1 Tim. 4:3', text: 'Forbidding to marry, and commanding to abstain from meats, which God hath created to be received with thanksgiving of them which believe and know the truth.' },
        { reference: 'Matt. 19:9', text: 'And I say unto you, Whosoever shall put away his wife, except it be for fornication, and shall marry another, committeth adultery: and whoso marrieth her which is put away doth commit adultery.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 140,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'Which is the eighth commandment?',
      answer: 'The eighth commandment is, Thou shalt not steal.',
      proof_texts: [
        { reference: 'Exod. 20:15', text: 'Thou shalt not steal.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 141,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What are the duties required in the eighth commandment?',
      answer: 'The duties required in the eighth commandment are, truth, faithfulness, and justice in contracts and commerce between man and man; rendering to every one his due; restitution of goods unlawfully detained from the right owners thereof; giving and lending freely, according to our abilities, and the necessities of others; moderation of our judgments, wills, and affections concerning worldly goods; a provident care and study to get, keep, use, and dispose these things which are necessary and convenient for the sustentation of our nature, and suitable to our condition; a lawful calling, and diligence in it; frugality; avoiding unnecessary suits at law, and suretiship, or other like engagements; and an endeavour, by all just and lawful means, to procure, preserve, and further the wealth and outward estate of others, as well as our own.',
      proof_texts: [
        { reference: 'Ps. 15:2', text: 'He that walketh uprightly, and worketh righteousness, and speaketh the truth in his heart.' },
        { reference: 'Rom. 13:7', text: 'Render therefore to all their dues: tribute to whom tribute is due; custom to whom custom; fear to whom fear; honour to whom honour.' },
        { reference: 'Lev. 6:2-5', text: 'If a soul sin, and commit a trespass against the LORD, and lie unto his neighbour in that which was delivered him to keep, or in fellowship, or in a thing taken away by violence, or hath deceived his neighbour... Then it shall be, because he hath sinned, and is guilty, that he shall restore that which he took violently away.' },
        { reference: 'Luke 16:10', text: 'He that is faithful in that which is least is faithful also in much: and he that is unjust in the least is unjust also in much.' },
        { reference: 'Eph. 4:28', text: 'Let him that stole steal no more: but rather let him labour, working with his hands the thing which is good, that he may have to give to him that needeth.' },
        { reference: '1 Tim. 5:8', text: 'But if any provide not for his own, and specially for those of his own house, he hath denied the faith, and is worse than an infidel.' },
        { reference: 'Prov. 27:23-27', text: 'Be thou diligent to know the state of thy flocks, and look well to thy herds... And thou shalt have goats\' milk enough for thy food, for the food of thy household.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 142,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What are the sins forbidden in the eighth commandment?',
      answer: 'The sins forbidden in the eighth commandment, besides the neglect of the duties required, are, theft, robbery, man-stealing, and receiving any thing that is stolen; fraudulent dealing, false weights and measures, removing land marks, injustice and unfaithfulness in contracts between man and man, or in matters of trust; oppression, extortion, usury, bribery, vexatious suits, unjust inclosures and depopulations; engrossing commodities to enhance the price; unlawful callings, and all other unjust or sinful ways of taking or withholding from our neighbour what belongs to him, or of enriching ourselves; covetousness; inordinate prizing and affecting worldly goods; distrustful and distracting cares and studies in getting, keeping, and using them; envying at the prosperity of others; as likewise prodigality, wasteful gaming; and all other ways whereby we do unduly prejudice our own outward estate, and defrauding ourselves of the due use and comfort of that estate which God hath given us.',
      proof_texts: [
        { reference: 'Eph. 4:28', text: 'Let him that stole steal no more: but rather let him labour, working with his hands the thing which is good, that he may have to give to him that needeth.' },
        { reference: 'Ps. 62:10', text: 'Trust not in oppression, and become not vain in robbery: if riches increase, set not your heart upon them.' },
        { reference: 'Prov. 11:1', text: 'A false balance is abomination to the LORD: but a just weight is his delight.' },
        { reference: 'Luke 16:10-12', text: 'He that is faithful in that which is least is faithful also in much: and he that is unjust in the least is unjust also in much. If therefore ye have not been faithful in the unrighteous mammon, who will commit to your trust the true riches?' },
        { reference: '1 Tim. 6:9-10', text: 'But they that will be rich fall into temptation and a snare, and into many foolish and hurtful lusts, which drown men in destruction and perdition. For the love of money is the root of all evil: which while some coveted after, they have erred from the faith.' },
        { reference: 'Col. 3:5', text: 'Mortify therefore your members which are upon the earth; fornication, uncleanness, inordinate affection, evil concupiscence, and covetousness, which is idolatry.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 143,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'Which is the ninth commandment?',
      answer: 'The ninth commandment is, Thou shalt not bear false witness against thy neighbour.',
      proof_texts: [
        { reference: 'Exod. 20:16', text: 'Thou shalt not bear false witness against thy neighbour.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 144,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What are the duties required in the ninth commandment?',
      answer: 'The duties required in the ninth commandment are, the preserving and promoting of truth between man and man, and the good name of our neighbour, as well as our own; appearing and standing for the truth; and from the heart, sincerely, freely, clearly, and fully, speaking the truth, and only the truth, in matters of judgment and justice, and in all other things whatsoever; a charitable esteem of our neighbours; loving, desiring, and rejoicing in their good name; sorrowing for, and covering of their infirmities; freely acknowledging of their gifts and graces, defending their innocency; a ready receiving of a good report, and unwillingness to admit of an evil report, concerning them; discouraging tale-bearers, flatterers, and slanderers; love and care of our own good name, and defending it when needfully; keeping of lawful promises; studying and practising of whatsoever things are true, honest, lovely, and of good report.',
      proof_texts: [
        { reference: 'Zech. 8:16', text: 'These are the things that ye shall do; Speak ye every man the truth to his neighbour; execute the judgment of truth and peace in your gates.' },
        { reference: 'Eph. 4:15', text: 'But speaking the truth in love, may grow up into him in all things, which is the head, even Christ.' },
        { reference: 'Ps. 15:2', text: 'He that walketh uprightly, and worketh righteousness, and speaketh the truth in his heart.' },
        { reference: '2 Cor. 2:17', text: 'For we are not as many, which corrupt the word of God: but as of sincerity, but as of God, in the sight of God speak we in Christ.' },
        { reference: 'Phil. 4:8', text: 'Finally, brethren, whatsoever things are true, whatsoever things are honest, whatsoever things are just, whatsoever things are pure, whatsoever things are lovely, whatsoever things are of good report; if there be any virtue, and if there be any praise, think on these things.' },
        { reference: '1 Pet. 3:16', text: 'Having a good conscience; that, whereas they speak evil of you, as of evildoers, they may be ashamed that falsely accuse your good conversation in Christ.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 145,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What are the sins forbidden in the ninth commandment?',
      answer: 'The sins forbidden in the ninth commandment are, all prejudicing the truth, and the good name of our neighbours or ourselves, all bearing of false witness, suborning false witnesses, wittingly appearing and pleading for an evil cause, outright lying, disguising the truth, equivocating, and in any wise depraving truth in its nature, use, and effects, that the credit and reputation of any, whether innocent or guilty, be unjustly impaired; raising false rumours, receiving and countenancing evil reports, and stopping our ears against just defence; evil suspicion; envying or grieving at the deserved credit of any; endeavouring or desiring to impair it, rejoicing in their disgrace and infamy; scornful contempt, fond admiration; breach of lawful promises; neglecting such things as are of good report, and practising, or not avoiding ourselves, or not hindering what we can in others, such things as procure an ill name.',
      proof_texts: [
        { reference: 'Matt. 5:37', text: 'But let your communication be, Yea, yea; Nay, nay: for whatsoever is more than these cometh of evil.' },
        { reference: 'Ps. 15:3', text: 'He that backbiteth not with his tongue, nor doeth evil to his neighbour, nor taketh up a reproach against his neighbour.' },
        { reference: 'Prov. 19:5', text: 'A false witness shall not be unpunished, and he that speaketh lies shall not escape.' },
        { reference: 'Prov. 6:16-19', text: 'These six things doth the LORD hate: yea, seven are an abomination unto him: A proud look, a lying tongue... A false witness that speaketh lies, and he that soweth discord among brethren.' },
        { reference: 'Rev. 21:8', text: 'But the fearful, and unbelieving, and the abominable, and murderers, and whoremongers, and sorcerers, and idolaters, and all liars, shall have their part in the lake which burneth with fire and brimstone.' },
        { reference: '1 Pet. 4:15', text: 'But let none of you suffer as a murderer, or as a thief, or as an evildoer, or as a busybody in other men\'s matters.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 146,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'Which is the tenth commandment?',
      answer: 'The tenth commandment is, Thou shalt not covet thy neighbour\'s house, thou shalt not covet thy neighbour\'s wife, nor his manservant, nor his maidservant, nor his ox, nor his ass, nor any thing that is thy neighbour\'s.',
      proof_texts: [
        { reference: 'Exod. 20:17', text: 'Thou shalt not covet thy neighbour\'s house, thou shalt not covet thy neighbour\'s wife, nor his manservant, nor his maidservant, nor his ox, nor his ass, nor any thing that is thy neighbour\'s.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 147,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What are the duties required in the tenth commandment?',
      answer: 'The duties required in the tenth commandment are, such a full contentment with our own condition, and such a charitable frame of the whole soul toward our neighbour, as that all our inward motions and affections touching him, tend unto, and further all that good which is his.',
      proof_texts: [
        { reference: 'Heb. 13:5', text: 'Let your conversation be without covetousness; and be content with such things as ye have: for he hath said, I will never leave thee, nor forsake thee.' },
        { reference: 'Phil. 4:11', text: 'Not that I speak in respect of want: for I have learned, in whatsoever state I am, therewith to be content.' },
        { reference: '1 Tim. 6:6', text: 'But godliness with contentment is great gain.' },
        { reference: 'Job 31:29', text: 'If I rejoiced at the destruction of him that hated me, or lifted up myself when evil found him.' },
        { reference: 'Ps. 122:7-9', text: 'Peace be within thy walls, and prosperity within thy palaces. For my brethren and companions\' sakes, I will now say, Peace be within thee. Because of the house of the LORD our God I will seek thy good.' },
        { reference: '1 Tim. 1:5', text: 'Now the end of the commandment is charity out of a pure heart, and of a good conscience, and of faith unfeigned.' }
      ]
    },
    {
      catechism_id: 'wlc', number: 148,
      section: 'The Moral Law and Commandments', section_name: 'The Moral Law and Commandments',
      question: 'What are the sins forbidden in the tenth commandment?',
      answer: 'The sins forbidden in the tenth commandment are, discontentment with our own estate; envying and grieving at the good of our neighbour, together with all inordinate motions and affections to any thing that is his.',
      proof_texts: [
        { reference: '1 Kings 21:4', text: 'And Ahab came into his house heavy and displeased because of the word which Naboth the Jezreelite had spoken to him: for he had said, I will not give thee the inheritance of my fathers. And he laid him down upon his bed, and turned away his face, and would eat no bread.' },
        { reference: 'Esther 5:13', text: 'Yet all this availeth me nothing, so long as I see Mordecai the Jew sitting at the king\'s gate.' },
        { reference: '1 Cor. 10:10', text: 'Neither murmur ye, as some of them also murmured, and were destroyed of the destroyer.' },
        { reference: 'Gal. 5:26', text: 'Let us not be desirous of vain glory, provoking one another, envying one another.' },
        { reference: 'Col. 3:5', text: 'Mortify therefore your members which are upon the earth; fornication, uncleanness, inordinate affection, evil concupiscence, and covetousness, which is idolatry.' },
        { reference: 'Rom. 7:7-8', text: 'What shall we say then? Is the law sin? God forbid. Nay, I had not known sin, but by the law: for I had not known lust, except the law had said, Thou shalt not covet. But sin, taking occasion by the commandment, wrought in me all manner of concupiscence.' }
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
