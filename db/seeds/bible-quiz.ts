// Bible Quiz seed — 100 questions covering OT and NT
// options[0] is always the correct answer, followed by 3 distractors

interface QuizQuestion {
  testament: 'OT' | 'NT';
  book: string;
  reference: string;
  category: 'people' | 'places' | 'events' | 'doctrine' | 'prophecy';
  difficulty: 1 | 2 | 3;
  question: string;
  answer: string;
  options: [string, string, string, string];
}

const QUESTIONS: QuizQuestion[] = [
  // ══════════════════════════════════════════════════════════════
  // OLD TESTAMENT — PEOPLE (13 questions)
  // ══════════════════════════════════════════════════════════════
  {
    testament: 'OT', book: 'Genesis', reference: 'Genesis 5',
    category: 'people', difficulty: 1,
    question: 'Who was the oldest person recorded in the Bible, living 969 years?',
    answer: 'Methuselah',
    options: ['Methuselah', 'Noah', 'Adam', 'Enoch'],
  },
  {
    testament: 'OT', book: 'Genesis', reference: 'Genesis 12',
    category: 'people', difficulty: 1,
    question: 'God called this man out of Ur of the Chaldeans to be the father of a great nation. Who was he?',
    answer: 'Abraham',
    options: ['Abraham', 'Noah', 'Moses', 'Isaac'],
  },
  {
    testament: 'OT', book: 'Genesis', reference: 'Genesis 37',
    category: 'people', difficulty: 1,
    question: 'Which of Jacob\'s twelve sons was sold into slavery by his brothers and later became ruler over Egypt?',
    answer: 'Joseph',
    options: ['Joseph', 'Benjamin', 'Reuben', 'Judah'],
  },
  {
    testament: 'OT', book: 'Exodus', reference: 'Exodus 3',
    category: 'people', difficulty: 1,
    question: 'Who did God speak to from the burning bush and commission to lead Israel out of Egypt?',
    answer: 'Moses',
    options: ['Moses', 'Aaron', 'Joshua', 'Caleb'],
  },
  {
    testament: 'OT', book: 'Judges', reference: 'Judges 16',
    category: 'people', difficulty: 1,
    question: 'Which judge of Israel lost his supernatural strength when Delilah had his head shaved?',
    answer: 'Samson',
    options: ['Samson', 'Gideon', 'Jephthah', 'Deborah'],
  },
  {
    testament: 'OT', book: 'Ruth', reference: 'Ruth 1',
    category: 'people', difficulty: 2,
    question: 'Which Moabite woman said to her mother-in-law, "Where you go, I will go; where you lodge, I will lodge"?',
    answer: 'Ruth',
    options: ['Ruth', 'Orpah', 'Rahab', 'Tamar'],
  },
  {
    testament: 'OT', book: '1 Samuel', reference: '1 Samuel 17',
    category: 'people', difficulty: 1,
    question: 'Which young shepherd boy killed the Philistine giant Goliath with a stone from a sling?',
    answer: 'David',
    options: ['David', 'Jonathan', 'Saul', 'Elhanan'],
  },
  {
    testament: 'OT', book: '1 Kings', reference: '1 Kings 3',
    category: 'people', difficulty: 1,
    question: 'Which king of Israel asked God for wisdom rather than riches or long life?',
    answer: 'Solomon',
    options: ['Solomon', 'David', 'Hezekiah', 'Josiah'],
  },
  {
    testament: 'OT', book: '1 Kings', reference: '1 Kings 18',
    category: 'people', difficulty: 1,
    question: 'Which prophet challenged 450 prophets of Baal to a contest on Mount Carmel?',
    answer: 'Elijah',
    options: ['Elijah', 'Elisha', 'Isaiah', 'Jeremiah'],
  },
  {
    testament: 'OT', book: 'Daniel', reference: 'Daniel 1',
    category: 'people', difficulty: 1,
    question: 'Which Israelite young man refused to defile himself with the king\'s food while in Babylonian exile?',
    answer: 'Daniel',
    options: ['Daniel', 'Shadrach', 'Ezekiel', 'Ezra'],
  },
  {
    testament: 'OT', book: 'Esther', reference: 'Esther 4',
    category: 'people', difficulty: 1,
    question: 'Which Jewish woman became queen of Persia and saved her people from destruction?',
    answer: 'Esther',
    options: ['Esther', 'Deborah', 'Miriam', 'Rahab'],
  },
  {
    testament: 'OT', book: 'Genesis', reference: 'Genesis 6-8',
    category: 'people', difficulty: 1,
    question: 'God instructed which man to build an ark to preserve life during the great flood?',
    answer: 'Noah',
    options: ['Noah', 'Enoch', 'Methuselah', 'Lamech'],
  },
  {
    testament: 'OT', book: 'Nehemiah', reference: 'Nehemiah 2',
    category: 'people', difficulty: 2,
    question: 'Who led the Jews in rebuilding the walls of Jerusalem after the Babylonian exile?',
    answer: 'Nehemiah',
    options: ['Nehemiah', 'Ezra', 'Zerubbabel', 'Haggai'],
  },

  // ══════════════════════════════════════════════════════════════
  // OLD TESTAMENT — PLACES (8 questions)
  // ══════════════════════════════════════════════════════════════
  {
    testament: 'OT', book: 'Exodus', reference: 'Exodus 19',
    category: 'places', difficulty: 1,
    question: 'On which mountain did God give the Ten Commandments to Moses?',
    answer: 'Mount Sinai',
    options: ['Mount Sinai', 'Mount Carmel', 'Mount Zion', 'Mount Nebo'],
  },
  {
    testament: 'OT', book: 'Genesis', reference: 'Genesis 11',
    category: 'places', difficulty: 1,
    question: 'In which city did the people attempt to build a tower to reach heaven, resulting in God confusing their language?',
    answer: 'Babel',
    options: ['Babel', 'Nineveh', 'Babylon', 'Ur'],
  },
  {
    testament: 'OT', book: 'Joshua', reference: 'Joshua 6',
    category: 'places', difficulty: 1,
    question: 'The walls of which Canaanite city fell after Israel marched around it for seven days?',
    answer: 'Jericho',
    options: ['Jericho', 'Ai', 'Gibeon', 'Hazor'],
  },
  {
    testament: 'OT', book: '1 Kings', reference: '1 Kings 6',
    category: 'places', difficulty: 1,
    question: 'In which city did Solomon build the first permanent temple for the worship of God?',
    answer: 'Jerusalem',
    options: ['Jerusalem', 'Hebron', 'Bethlehem', 'Samaria'],
  },
  {
    testament: 'OT', book: 'Jonah', reference: 'Jonah 1-3',
    category: 'places', difficulty: 1,
    question: 'God sent the prophet Jonah to preach repentance to which great Assyrian city?',
    answer: 'Nineveh',
    options: ['Nineveh', 'Babylon', 'Tyre', 'Damascus'],
  },
  {
    testament: 'OT', book: '2 Kings', reference: '2 Kings 25',
    category: 'places', difficulty: 2,
    question: 'To which city were the people of Judah exiled after Nebuchadnezzar destroyed Jerusalem?',
    answer: 'Babylon',
    options: ['Babylon', 'Nineveh', 'Susa', 'Persepolis'],
  },
  {
    testament: 'OT', book: '1 Samuel', reference: '1 Samuel 17',
    category: 'places', difficulty: 2,
    question: 'In which valley did David face Goliath in single combat?',
    answer: 'Valley of Elah',
    options: ['Valley of Elah', 'Valley of Hinnom', 'Kidron Valley', 'Valley of Jezreel'],
  },
  {
    testament: 'OT', book: 'Genesis', reference: 'Genesis 2',
    category: 'places', difficulty: 2,
    question: 'What was the name of the garden where Adam and Eve lived before the Fall?',
    answer: 'Eden',
    options: ['Eden', 'Gethsemane', 'Canaan', 'Goshen'],
  },

  // ══════════════════════════════════════════════════════════════
  // OLD TESTAMENT — EVENTS (12 questions)
  // ══════════════════════════════════════════════════════════════
  {
    testament: 'OT', book: 'Genesis', reference: 'Genesis 1',
    category: 'events', difficulty: 1,
    question: 'How many days did God take to complete the work of creation, according to Genesis 1?',
    answer: 'Six days',
    options: ['Six days', 'Seven days', 'Three days', 'One day'],
  },
  {
    testament: 'OT', book: 'Genesis', reference: 'Genesis 3',
    category: 'events', difficulty: 1,
    question: 'What did Adam and Eve do that caused them to be expelled from the Garden of Eden?',
    answer: 'Ate the forbidden fruit',
    options: ['Ate the forbidden fruit', 'Worshiped an idol', 'Disobeyed a sacrifice command', 'Named the animals wrongly'],
  },
  {
    testament: 'OT', book: 'Genesis', reference: 'Genesis 7',
    category: 'events', difficulty: 1,
    question: 'How many of each kind of clean animal did Noah take onto the ark?',
    answer: 'Seven pairs',
    options: ['Seven pairs', 'Two of each', 'One pair', 'Fourteen of each'],
  },
  {
    testament: 'OT', book: 'Exodus', reference: 'Exodus 7-12',
    category: 'events', difficulty: 2,
    question: 'How many plagues did God send on Egypt before Pharaoh released the Israelites?',
    answer: 'Ten',
    options: ['Ten', 'Seven', 'Twelve', 'Nine'],
  },
  {
    testament: 'OT', book: 'Exodus', reference: 'Exodus 14',
    category: 'events', difficulty: 1,
    question: 'What miracle did God perform at the Red Sea to save the Israelites from Pharaoh\'s army?',
    answer: 'Parted the waters',
    options: ['Parted the waters', 'Sent a great wind', 'Blinded the Egyptians', 'Caused a drought'],
  },
  {
    testament: 'OT', book: 'Exodus', reference: 'Exodus 16',
    category: 'events', difficulty: 1,
    question: 'What food did God miraculously provide for Israel in the wilderness each morning?',
    answer: 'Manna',
    options: ['Manna', 'Quail', 'Bread', 'Dates'],
  },
  {
    testament: 'OT', book: '1 Kings', reference: '1 Kings 11',
    category: 'events', difficulty: 2,
    question: 'What caused God to divide the kingdom of Israel after Solomon\'s death?',
    answer: 'Solomon\'s idolatry and disobedience',
    options: ["Solomon's idolatry and disobedience", "A civil war between brothers", "Invasion by Egypt", "A rebellion by the priests"],
  },
  {
    testament: 'OT', book: '2 Chronicles', reference: '2 Chronicles 36',
    category: 'events', difficulty: 2,
    question: 'Which empire destroyed Jerusalem and burned Solomon\'s temple in 586 BC?',
    answer: 'Babylon',
    options: ['Babylon', 'Assyria', 'Persia', 'Egypt'],
  },
  {
    testament: 'OT', book: 'Daniel', reference: 'Daniel 3',
    category: 'events', difficulty: 1,
    question: 'What happened to Shadrach, Meshach, and Abednego when they were thrown into the fiery furnace?',
    answer: 'They were unharmed and a fourth person was seen with them',
    options: ['They were unharmed and a fourth person was seen with them', 'They were burned but survived', 'An angel extinguished the fire before they entered', 'They were rescued by soldiers'],
  },
  {
    testament: 'OT', book: 'Genesis', reference: 'Genesis 22',
    category: 'events', difficulty: 1,
    question: 'God tested Abraham by asking him to sacrifice his son. What did God provide as a substitute?',
    answer: 'A ram caught in a thicket',
    options: ['A ram caught in a thicket', 'A lamb', 'A bull', 'A dove'],
  },
  {
    testament: 'OT', book: '1 Kings', reference: '1 Kings 18',
    category: 'events', difficulty: 2,
    question: 'After Elijah\'s contest on Mount Carmel, what ended three years of drought in Israel?',
    answer: 'God sent rain after Elijah prayed',
    options: ['God sent rain after Elijah prayed', 'The priests of Baal repented', 'King Ahab fasted', 'Elijah struck the ground'],
  },
  {
    testament: 'OT', book: 'Joshua', reference: 'Joshua 1-6',
    category: 'events', difficulty: 2,
    question: 'After Moses died, who led the Israelites across the Jordan River into the Promised Land?',
    answer: 'Joshua',
    options: ['Joshua', 'Caleb', 'Eleazar', 'Phinehas'],
  },

  // ══════════════════════════════════════════════════════════════
  // OLD TESTAMENT — PROPHECY (7 questions)
  // ══════════════════════════════════════════════════════════════
  {
    testament: 'OT', book: 'Isaiah', reference: 'Isaiah 7:14',
    category: 'prophecy', difficulty: 1,
    question: 'Isaiah prophesied that a virgin would conceive and bear a son called "Immanuel," which means what?',
    answer: 'God with us',
    options: ['God with us', 'God saves', 'God is great', 'God is light'],
  },
  {
    testament: 'OT', book: 'Micah', reference: 'Micah 5:2',
    category: 'prophecy', difficulty: 1,
    question: 'The prophet Micah foretold that the Messiah would be born in which town?',
    answer: 'Bethlehem',
    options: ['Bethlehem', 'Nazareth', 'Jerusalem', 'Hebron'],
  },
  {
    testament: 'OT', book: 'Isaiah', reference: 'Isaiah 53',
    category: 'prophecy', difficulty: 2,
    question: 'Isaiah 53 describes a "Suffering Servant." Which NT writers apply this passage to Jesus?',
    answer: 'Multiple apostles including Peter and Philip',
    options: ['Multiple apostles including Peter and Philip', 'Only Paul in Romans', 'Only John in Revelation', 'Only the author of Hebrews'],
  },
  {
    testament: 'OT', book: 'Zechariah', reference: 'Zechariah 9:9',
    category: 'prophecy', difficulty: 2,
    question: 'Zechariah prophesied that Zion\'s king would come riding on which animal?',
    answer: 'A donkey',
    options: ['A donkey', 'A white horse', 'A camel', 'A mule'],
  },
  {
    testament: 'OT', book: 'Psalm', reference: 'Psalm 22:1',
    category: 'prophecy', difficulty: 2,
    question: 'Which Psalm begins with the words Jesus quoted from the cross: "My God, my God, why have you forsaken me?"?',
    answer: 'Psalm 22',
    options: ['Psalm 22', 'Psalm 23', 'Psalm 69', 'Psalm 110'],
  },
  {
    testament: 'OT', book: 'Joel', reference: 'Joel 2:28',
    category: 'prophecy', difficulty: 2,
    question: 'The apostle Peter quoted which OT prophet on Pentecost to explain the outpouring of the Holy Spirit?',
    answer: 'Joel',
    options: ['Joel', 'Isaiah', 'Ezekiel', 'Amos'],
  },
  {
    testament: 'OT', book: 'Daniel', reference: 'Daniel 9',
    category: 'prophecy', difficulty: 3,
    question: 'Daniel\'s famous prophecy of "seventy weeks" concerns the coming of which figure?',
    answer: 'The Anointed One (Messiah)',
    options: ['The Anointed One (Messiah)', 'Cyrus the Great', 'Alexander the Great', 'Antiochus Epiphanes'],
  },

  // ══════════════════════════════════════════════════════════════
  // OLD TESTAMENT — DOCTRINE (10 questions)
  // ══════════════════════════════════════════════════════════════
  {
    testament: 'OT', book: 'Genesis', reference: 'Genesis 1:27',
    category: 'doctrine', difficulty: 1,
    question: 'According to Genesis 1:27, in whose image was man created?',
    answer: 'The image of God (imago Dei)',
    options: ['The image of God (imago Dei)', 'The image of angels', 'The image of the heavens', 'The image of the earth'],
  },
  {
    testament: 'OT', book: 'Exodus', reference: 'Exodus 20:3',
    category: 'doctrine', difficulty: 1,
    question: 'What is the First Commandment given to Moses on Mount Sinai?',
    answer: 'You shall have no other gods before me',
    options: ['You shall have no other gods before me', 'You shall not make idols', 'Remember the Sabbath day', 'Honor your father and mother'],
  },
  {
    testament: 'OT', book: 'Exodus', reference: 'Exodus 20',
    category: 'doctrine', difficulty: 1,
    question: 'What is the Fourth Commandment concerning?',
    answer: 'Keeping the Sabbath holy',
    options: ['Keeping the Sabbath holy', 'Not making idols', 'Not stealing', 'Not murdering'],
  },
  {
    testament: 'OT', book: 'Leviticus', reference: 'Leviticus 17:11',
    category: 'doctrine', difficulty: 2,
    question: 'According to Leviticus, what is the life of the flesh, given on the altar to make atonement?',
    answer: 'The blood',
    options: ['The blood', 'The fat', 'The breath', 'The heart'],
  },
  {
    testament: 'OT', book: 'Deuteronomy', reference: 'Deuteronomy 6:4',
    category: 'doctrine', difficulty: 1,
    question: 'The Shema begins with "Hear, O Israel: Yahweh is our God." How does it conclude?',
    answer: 'Yahweh is one',
    options: ['Yahweh is one', 'Yahweh is eternal', 'Yahweh is king', 'Yahweh is holy'],
  },
  {
    testament: 'OT', book: 'Psalm', reference: 'Psalm 51:5',
    category: 'doctrine', difficulty: 2,
    question: 'David writes in Psalm 51 that he was sinful "from birth." What theological teaching does this illustrate?',
    answer: 'Original sin',
    options: ['Original sin', 'Imputed righteousness', 'Total depravity only in adults', 'Inherited poverty'],
  },
  {
    testament: 'OT', book: 'Isaiah', reference: 'Isaiah 6:3',
    category: 'doctrine', difficulty: 2,
    question: 'What do the seraphim cry out three times about God in Isaiah\'s vision in the temple?',
    answer: '"Holy, holy, holy"',
    options: ['"Holy, holy, holy"', '"Glory, glory, glory"', '"Worthy, worthy, worthy"', '"Mighty, mighty, mighty"'],
  },
  {
    testament: 'OT', book: 'Genesis', reference: 'Genesis 15',
    category: 'doctrine', difficulty: 2,
    question: 'The covenant God made with Abraham is often called by what theological term?',
    answer: 'The Abrahamic Covenant',
    options: ['The Abrahamic Covenant', 'The Noahic Covenant', 'The Mosaic Covenant', 'The Davidic Covenant'],
  },
  {
    testament: 'OT', book: '2 Samuel', reference: '2 Samuel 7',
    category: 'doctrine', difficulty: 2,
    question: 'God promised David that his throne and kingdom would be established forever. What is this called?',
    answer: 'The Davidic Covenant',
    options: ['The Davidic Covenant', 'The Abrahamic Covenant', 'The Mosaic Covenant', 'The New Covenant'],
  },
  {
    testament: 'OT', book: 'Jeremiah', reference: 'Jeremiah 31:31-34',
    category: 'doctrine', difficulty: 2,
    question: 'Jeremiah prophesied about a "new covenant" that God would make with Israel. Where would He write His law?',
    answer: 'On their hearts',
    options: ['On their hearts', 'On tablets of stone', 'On scrolls', 'On the temple walls'],
  },

  // ══════════════════════════════════════════════════════════════
  // NEW TESTAMENT — PEOPLE (12 questions)
  // ══════════════════════════════════════════════════════════════
  {
    testament: 'NT', book: 'Matthew', reference: 'Matthew 3',
    category: 'people', difficulty: 1,
    question: 'Who baptized Jesus in the Jordan River?',
    answer: 'John the Baptist',
    options: ['John the Baptist', 'Peter', 'Andrew', 'Philip'],
  },
  {
    testament: 'NT', book: 'Matthew', reference: 'Matthew 4',
    category: 'people', difficulty: 1,
    question: 'Which fisherman brothers did Jesus first call to follow him, saying "I will make you fishers of men"?',
    answer: 'Simon (Peter) and Andrew',
    options: ['Simon (Peter) and Andrew', 'James and John', 'Philip and Bartholomew', 'Thomas and Matthew'],
  },
  {
    testament: 'NT', book: 'Matthew', reference: 'Matthew 26-27',
    category: 'people', difficulty: 1,
    question: 'Which disciple betrayed Jesus to the chief priests for thirty pieces of silver?',
    answer: 'Judas Iscariot',
    options: ['Judas Iscariot', 'Peter', 'Thomas', 'Simon the Zealot'],
  },
  {
    testament: 'NT', book: 'Luke', reference: 'Luke 1',
    category: 'people', difficulty: 1,
    question: 'Which angel appeared to Mary to announce that she would conceive and bear the Son of God?',
    answer: 'Gabriel',
    options: ['Gabriel', 'Michael', 'Raphael', 'Uriel'],
  },
  {
    testament: 'NT', book: 'Acts', reference: 'Acts 9',
    category: 'people', difficulty: 1,
    question: 'Which Pharisee persecuted Christians until he encountered the risen Christ on the road to Damascus?',
    answer: 'Saul (Paul)',
    options: ['Saul (Paul)', 'Barnabas', 'Stephen', 'Ananias'],
  },
  {
    testament: 'NT', book: 'John', reference: 'John 11',
    category: 'people', difficulty: 1,
    question: 'Jesus raised which man from the dead after he had been in the tomb for four days?',
    answer: 'Lazarus',
    options: ['Lazarus', 'Jairus', 'Bartimaeus', 'Zacchaeus'],
  },
  {
    testament: 'NT', book: 'Luke', reference: 'Luke 10',
    category: 'people', difficulty: 1,
    question: 'In the parable of the Good Samaritan, which two religious figures passed by the injured man without helping?',
    answer: 'A priest and a Levite',
    options: ['A priest and a Levite', 'A Pharisee and a scribe', 'An elder and a deacon', 'A teacher and a ruler'],
  },
  {
    testament: 'NT', book: 'Acts', reference: 'Acts 6-7',
    category: 'people', difficulty: 2,
    question: 'Who was the first Christian martyr, stoned to death for his faith?',
    answer: 'Stephen',
    options: ['Stephen', 'James', 'Philip', 'Barnabas'],
  },
  {
    testament: 'NT', book: 'John', reference: 'John 20',
    category: 'people', difficulty: 1,
    question: 'Which disciple refused to believe in the resurrection until he could touch Jesus\'s wounds?',
    answer: 'Thomas',
    options: ['Thomas', 'Peter', 'James', 'Nathanael'],
  },
  {
    testament: 'NT', book: 'Luke', reference: 'Luke 19',
    category: 'people', difficulty: 1,
    question: 'Which short tax collector climbed a sycamore tree to see Jesus passing through Jericho?',
    answer: 'Zacchaeus',
    options: ['Zacchaeus', 'Matthew', 'Bartimaeus', 'Nicodemus'],
  },
  {
    testament: 'NT', book: 'Acts', reference: 'Acts 18',
    category: 'people', difficulty: 2,
    question: 'Which married couple, Aquila and Priscilla, took aside Apollos and "explained to him the way of God more accurately"?',
    answer: 'Aquila and Priscilla',
    options: ['Aquila and Priscilla', 'Ananias and Sapphira', 'Andronicus and Junia', 'Jason and Sosipater'],
  },
  {
    testament: 'NT', book: 'Revelation', reference: 'Revelation 1',
    category: 'people', difficulty: 2,
    question: 'Who wrote the book of Revelation while exiled on the island of Patmos?',
    answer: 'John the Apostle',
    options: ['John the Apostle', 'Paul', 'Peter', 'James'],
  },

  // ══════════════════════════════════════════════════════════════
  // NEW TESTAMENT — PLACES (7 questions)
  // ══════════════════════════════════════════════════════════════
  {
    testament: 'NT', book: 'Luke', reference: 'Luke 2',
    category: 'places', difficulty: 1,
    question: 'In which city was Jesus born?',
    answer: 'Bethlehem',
    options: ['Bethlehem', 'Nazareth', 'Jerusalem', 'Capernaum'],
  },
  {
    testament: 'NT', book: 'Matthew', reference: 'Matthew 2',
    category: 'places', difficulty: 1,
    question: 'Where did Jesus grow up after the family returned from Egypt?',
    answer: 'Nazareth',
    options: ['Nazareth', 'Bethlehem', 'Capernaum', 'Jericho'],
  },
  {
    testament: 'NT', book: 'Matthew', reference: 'Matthew 26',
    category: 'places', difficulty: 1,
    question: 'In which garden did Jesus pray before his arrest, and where was he in great agony?',
    answer: 'Gethsemane',
    options: ['Gethsemane', 'Eden', 'Siloam', 'Kidron'],
  },
  {
    testament: 'NT', book: 'Acts', reference: 'Acts 2',
    category: 'places', difficulty: 1,
    question: 'In which city did the Holy Spirit descend on the disciples at Pentecost?',
    answer: 'Jerusalem',
    options: ['Jerusalem', 'Antioch', 'Bethlehem', 'Capernaum'],
  },
  {
    testament: 'NT', book: 'Acts', reference: 'Acts 13',
    category: 'places', difficulty: 2,
    question: 'From which city were Paul and Barnabas sent out on the first missionary journey?',
    answer: 'Antioch',
    options: ['Antioch', 'Jerusalem', 'Corinth', 'Ephesus'],
  },
  {
    testament: 'NT', book: 'Acts', reference: 'Acts 16',
    category: 'places', difficulty: 2,
    question: 'Paul and Silas were miraculously freed from prison by an earthquake in which Macedonian city?',
    answer: 'Philippi',
    options: ['Philippi', 'Thessalonica', 'Corinth', 'Athens'],
  },
  {
    testament: 'NT', book: 'John', reference: 'John 19-20',
    category: 'places', difficulty: 2,
    question: 'Jesus was crucified at a place called Golgotha. What does that name mean?',
    answer: 'Place of the Skull',
    options: ['Place of the Skull', 'Place of the Cross', 'Place of Death', 'Place of Bones'],
  },

  // ══════════════════════════════════════════════════════════════
  // NEW TESTAMENT — EVENTS (13 questions)
  // ══════════════════════════════════════════════════════════════
  {
    testament: 'NT', book: 'Luke', reference: 'Luke 2',
    category: 'events', difficulty: 1,
    question: 'What event is celebrated at Christmas — the birth of Jesus — called theologically?',
    answer: 'The Incarnation',
    options: ['The Incarnation', 'The Nativity', 'The Epiphany', 'The Annunciation'],
  },
  {
    testament: 'NT', book: 'Matthew', reference: 'Matthew 5-7',
    category: 'events', difficulty: 1,
    question: 'What is the name of the famous teaching of Jesus that includes the Beatitudes and the Lord\'s Prayer?',
    answer: 'The Sermon on the Mount',
    options: ['The Sermon on the Mount', 'The Olivet Discourse', 'The Upper Room Discourse', 'The Bread of Life Discourse'],
  },
  {
    testament: 'NT', book: 'Matthew', reference: 'Matthew 17',
    category: 'events', difficulty: 2,
    question: 'On a high mountain, Jesus was transformed in glory before Peter, James, and John. What is this event called?',
    answer: 'The Transfiguration',
    options: ['The Transfiguration', 'The Ascension', 'The Glorification', 'The Revelation'],
  },
  {
    testament: 'NT', book: 'John', reference: 'John 2',
    category: 'events', difficulty: 1,
    question: 'What was Jesus\'s first recorded miracle, performed at a wedding in Cana?',
    answer: 'Turning water into wine',
    options: ['Turning water into wine', 'Healing a blind man', 'Feeding five thousand', 'Raising the dead'],
  },
  {
    testament: 'NT', book: 'Mark', reference: 'Mark 6',
    category: 'events', difficulty: 1,
    question: 'How many people were fed when Jesus multiplied five loaves and two fish?',
    answer: '5,000 men (plus women and children)',
    options: ['5,000 men (plus women and children)', '4,000 men', '3,000 people', '12,000 people'],
  },
  {
    testament: 'NT', book: 'Luke', reference: 'Luke 22-23',
    category: 'events', difficulty: 1,
    question: 'On what day did Jesus die on the cross, the same day the Passover lambs were slaughtered?',
    answer: 'Preparation day (Friday)',
    options: ['Preparation day (Friday)', 'Passover (Thursday)', 'Sabbath (Saturday)', 'First day (Sunday)'],
  },
  {
    testament: 'NT', book: 'Luke', reference: 'Luke 24',
    category: 'events', difficulty: 1,
    question: 'On which day of the week did Jesus rise from the dead?',
    answer: 'The first day of the week (Sunday)',
    options: ['The first day of the week (Sunday)', 'The third day (Tuesday)', 'The Sabbath (Saturday)', 'The seventh day (Friday)'],
  },
  {
    testament: 'NT', book: 'Acts', reference: 'Acts 1',
    category: 'events', difficulty: 1,
    question: 'How many days after his resurrection did Jesus ascend into heaven?',
    answer: 'Forty days',
    options: ['Forty days', 'Three days', 'Seven days', 'Fifty days'],
  },
  {
    testament: 'NT', book: 'Acts', reference: 'Acts 2',
    category: 'events', difficulty: 1,
    question: 'On the day of Pentecost, approximately how many people were added to the church after Peter\'s sermon?',
    answer: 'About three thousand',
    options: ['About three thousand', 'About five hundred', 'About five thousand', 'About one thousand'],
  },
  {
    testament: 'NT', book: 'Acts', reference: 'Acts 27-28',
    category: 'events', difficulty: 2,
    question: 'On his way to Rome as a prisoner, Paul was shipwrecked on which island?',
    answer: 'Malta',
    options: ['Malta', 'Cyprus', 'Crete', 'Sicily'],
  },
  {
    testament: 'NT', book: 'Matthew', reference: 'Matthew 26',
    category: 'events', difficulty: 1,
    question: 'What meal did Jesus share with his disciples the night before his crucifixion, which Christians commemorate in the Lord\'s Supper?',
    answer: 'The Last Supper',
    options: ['The Last Supper', 'The Passover Seder', 'The Feast of Unleavened Bread', 'The Communion Meal'],
  },
  {
    testament: 'NT', book: 'John', reference: 'John 11',
    category: 'events', difficulty: 1,
    question: 'Jesus performed the miracle of raising Lazarus after he had been dead for how many days?',
    answer: 'Four days',
    options: ['Four days', 'Two days', 'Three days', 'Seven days'],
  },
  {
    testament: 'NT', book: 'Acts', reference: 'Acts 15',
    category: 'events', difficulty: 2,
    question: 'The Jerusalem Council was called to settle which major dispute in the early church?',
    answer: 'Whether Gentiles must be circumcised to be saved',
    options: ['Whether Gentiles must be circumcised to be saved', 'Whether to keep the Sabbath on Saturday or Sunday', 'Whether to include women in leadership', 'Whether to use the Greek or Hebrew scriptures'],
  },

  // ══════════════════════════════════════════════════════════════
  // NEW TESTAMENT — DOCTRINE (11 questions)
  // ══════════════════════════════════════════════════════════════
  {
    testament: 'NT', book: 'Matthew', reference: 'Matthew 28:19',
    category: 'doctrine', difficulty: 1,
    question: 'Jesus commanded his disciples to baptize in the name of the Father, the Son, and the Holy Spirit. What doctrine does this support?',
    answer: 'The Trinity',
    options: ['The Trinity', 'Salvation by faith alone', 'The resurrection', 'The second coming'],
  },
  {
    testament: 'NT', book: 'John', reference: 'John 1:1,14',
    category: 'doctrine', difficulty: 1,
    question: 'John 1:1 states "the Word was God," and 1:14 says "the Word became flesh." What doctrine is this?',
    answer: 'The Incarnation (deity of Christ)',
    options: ['The Incarnation (deity of Christ)', 'The Resurrection', 'The New Birth', 'The Atonement'],
  },
  {
    testament: 'NT', book: 'Romans', reference: 'Romans 3:28',
    category: 'doctrine', difficulty: 1,
    question: 'Paul teaches that a person is justified by faith apart from works of the law. This is the doctrine of?',
    answer: 'Justification by faith alone',
    options: ['Justification by faith alone', 'Sanctification by works', 'Redemption by obedience', 'Election by merit'],
  },
  {
    testament: 'NT', book: '1 Corinthians', reference: '1 Corinthians 15',
    category: 'doctrine', difficulty: 1,
    question: 'Paul calls the resurrection of Christ the cornerstone of the gospel. What does he say in 1 Cor 15:17 if Christ has not been raised?',
    answer: 'Your faith is futile and you are still in your sins',
    options: ['Your faith is futile and you are still in your sins', 'The church cannot exist', 'God has abandoned us', 'The Law still condemns you'],
  },
  {
    testament: 'NT', book: 'John', reference: 'John 3',
    category: 'doctrine', difficulty: 1,
    question: 'Jesus told Nicodemus that no one can see the Kingdom of God unless they are born again. What is this called?',
    answer: 'Regeneration (the new birth)',
    options: ['Regeneration (the new birth)', 'Justification', 'Glorification', 'Adoption'],
  },
  {
    testament: 'NT', book: 'Revelation', reference: 'Revelation 20',
    category: 'doctrine', difficulty: 2,
    question: 'The belief that Christ will return physically to reign on earth is called what?',
    answer: 'The Second Coming',
    options: ['The Second Coming', 'The Rapture', 'The Millennium', 'The Parousia only in a spiritual sense'],
  },
  {
    testament: 'NT', book: 'Ephesians', reference: 'Ephesians 1',
    category: 'doctrine', difficulty: 2,
    question: 'Paul teaches in Ephesians 1 that God chose us in Christ before the foundation of the world. This teaching is called?',
    answer: 'Election (predestination)',
    options: ['Election (predestination)', 'Sanctification', 'Adoption', 'Calling'],
  },
  {
    testament: 'NT', book: 'Hebrews', reference: 'Hebrews 9:22',
    category: 'doctrine', difficulty: 2,
    question: 'Hebrews 9:22 states that "without the shedding of blood there is no" what?',
    answer: 'Forgiveness',
    options: ['Forgiveness', 'Salvation', 'Covenant', 'Redemption'],
  },
  {
    testament: 'NT', book: 'Romans', reference: 'Romans 8:29-30',
    category: 'doctrine', difficulty: 3,
    question: 'The "golden chain" of Romans 8:29-30 includes which sequence of God\'s saving acts?',
    answer: 'Foreknew, predestined, called, justified, glorified',
    options: ['Foreknew, predestined, called, justified, glorified', 'Created, called, converted, saved, glorified', 'Elected, redeemed, sanctified, sealed, glorified', 'Chosen, justified, adopted, sanctified, glorified'],
  },
  {
    testament: 'NT', book: '1 John', reference: '1 John 1:9',
    category: 'doctrine', difficulty: 1,
    question: 'According to 1 John 1:9, if we confess our sins, God is faithful and just to do what?',
    answer: 'Forgive us our sins and cleanse us from all unrighteousness',
    options: ['Forgive us our sins and cleanse us from all unrighteousness', 'Make us perfect and holy', 'Accept our good works', 'Remove all consequences of sin'],
  },
  {
    testament: 'NT', book: 'Philippians', reference: 'Philippians 2:6-8',
    category: 'doctrine', difficulty: 2,
    question: 'Philippians 2 says Christ "did not count equality with God a thing to be grasped" but "emptied himself." What is this doctrine called?',
    answer: 'The Kenosis',
    options: ['The Kenosis', 'The Ascension', 'The Hypostatic Union', 'The Atonement'],
  },

  // ══════════════════════════════════════════════════════════════
  // NEW TESTAMENT — PROPHECY (7 questions)
  // ══════════════════════════════════════════════════════════════
  {
    testament: 'NT', book: 'Matthew', reference: 'Matthew 24',
    category: 'prophecy', difficulty: 2,
    question: 'In the Olivet Discourse (Matthew 24), Jesus prophesied the destruction of which building?',
    answer: 'The Jerusalem Temple',
    options: ['The Jerusalem Temple', 'The Palace of Herod', 'The Synagogue in Capernaum', 'The Antonia Fortress'],
  },
  {
    testament: 'NT', book: 'John', reference: 'John 14:2-3',
    category: 'prophecy', difficulty: 1,
    question: 'Jesus promised his disciples he was going to prepare a place for them and would do what?',
    answer: 'Come again and receive them to himself',
    options: ['Come again and receive them to himself', 'Send the Holy Spirit to comfort them', 'Give them the keys of the kingdom', 'Write their names in the Book of Life'],
  },
  {
    testament: 'NT', book: 'Acts', reference: 'Acts 1:11',
    category: 'prophecy', difficulty: 1,
    question: 'Angels told the disciples at the Ascension that Jesus would return in what manner?',
    answer: 'In the same way he was seen going into heaven',
    options: ['In the same way he was seen going into heaven', 'As a mighty wind', 'Through the clouds invisibly', 'Only in spirit form'],
  },
  {
    testament: 'NT', book: '1 Thessalonians', reference: '1 Thessalonians 4:16-17',
    category: 'prophecy', difficulty: 2,
    question: 'In 1 Thessalonians 4, Paul says the Lord will descend with a shout and what will happen to dead believers first?',
    answer: 'They will rise first',
    options: ['They will rise first', 'They will be transformed immediately', 'They will meet Christ in the air first', 'They will receive glorified bodies simultaneously with the living'],
  },
  {
    testament: 'NT', book: 'Revelation', reference: 'Revelation 21:1',
    category: 'prophecy', difficulty: 1,
    question: 'John\'s vision in Revelation 21 describes what coming after the final judgment?',
    answer: 'A new heaven and a new earth',
    options: ['A new heaven and a new earth', 'The millennial kingdom', 'The restoration of Eden', 'The eternal Jerusalem only'],
  },
  {
    testament: 'NT', book: 'Revelation', reference: 'Revelation 20:1-6',
    category: 'prophecy', difficulty: 3,
    question: 'Revelation 20 describes Satan being bound for a period while the saints reign with Christ. How long is this period?',
    answer: 'A thousand years',
    options: ['A thousand years', 'Seven years', 'Forty years', 'Forever'],
  },
  {
    testament: 'NT', book: '2 Peter', reference: '2 Peter 3:10',
    category: 'prophecy', difficulty: 2,
    question: 'Peter says the Day of the Lord will come "like a thief," and the heavens will pass away with what sound?',
    answer: 'A great roar',
    options: ['A great roar', 'A trumpet blast', 'Silence', 'The voice of the archangel'],
  },
];

export default async function seedBibleQuiz(sql: any): Promise<void> {
  console.log(`Seeding ${QUESTIONS.length} Bible quiz questions…`);

  for (const q of QUESTIONS) {
    // options[0] is always the correct answer; store the full array as JSONB
    const optionsJson = JSON.stringify(q.options);

    await sql`
      INSERT INTO bible_quiz_questions
        (testament, book, reference, category, difficulty, question, answer, options)
      VALUES
        (${q.testament}, ${q.book}, ${q.reference}, ${q.category},
         ${q.difficulty}, ${q.question}, ${q.answer}, ${optionsJson}::jsonb)
      ON CONFLICT DO NOTHING
    `;
  }

  console.log(`Done! ${QUESTIONS.length} Bible quiz questions seeded.`);
}
