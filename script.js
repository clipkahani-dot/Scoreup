// Database for Hindi/English/Hinglish Intelligent Search
const searchData = [
    // Class 10 Math
    {
        chapter_name: "वास्तविक संख्याएँ",
        subject: "Mathematics",
        class_level: "Class 10",
        url: "chapter.html?subject=Mathematics&chapter=वास्तविक संख्याएँ",
        keywords: ["vastvik sankhyae", "real numbers", "वास्तविक संख्याएँ", "vastvik", "number system", "math", "ganit"]
    },
    {
        chapter_name: "त्रिभुज",
        subject: "Mathematics",
        class_level: "Class 10",
        url: "chapter.html?subject=Mathematics&chapter=त्रिभुज",
        keywords: ["tribhuj", "triangles", "triangle", "त्रिभुज", "trikon", "geometry", "math", "ganit", "trikonmiti related basics"]
    },
    {
        chapter_name: "त्रिकोणमिति का परिचय",
        subject: "Mathematics",
        class_level: "Class 10",
        url: "chapter.html?subject=Mathematics&chapter=त्रिकोणमिति का परिचय",
        keywords: ["trikonmiti", "trigonometry", "trigo", "math", "त्रिकोणमिति", "parichay", "introduction", "ganit"]
    },
    {
        chapter_name: "त्रिकोणमिति के कुछ अनुप्रयोग",
        subject: "Mathematics",
        class_level: "Class 10",
        url: "chapter.html?subject=Mathematics&chapter=त्रिकोणमिति के कुछ अनुप्रयोग",
        keywords: ["trikonmiti ke kuch anuprayog", "heights and distances", "math", "height", "distance", "त्रिकोणमिति के कुछ अनुप्रयोग", "ganit", "applications of trigonometry"]
    },
    {
        chapter_name: "वृत्त",
        subject: "Mathematics",
        class_level: "Class 10",
        url: "chapter.html?subject=Mathematics&chapter=वृत्त",
        keywords: ["vritt", "circles", "circle", "math", "tangent", "secant", "sparsh rekha", "ganit"]
    },
    {
        chapter_name: "रचनाएँ",
        subject: "Mathematics",
        class_level: "Class 10",
        url: "chapter.html?subject=Mathematics&chapter=रचनाएँ",
        keywords: ["rachnaye", "constructions", "construction", "math", "scale factor", "line division", "triangle construction", "ganit"]
    },
    {
        chapter_name: "वृत्तों से संबंधित क्षेत्रफल",
        subject: "Mathematics",
        class_level: "Class 10",
        url: "chapter.html?subject=Mathematics&chapter=वृत्तों से संबंधित क्षेत्रफल",
        keywords: ["vritt", "area", "sector", "segment", "circle area", "math", "kshetraphal", "ganit"]
    },
    {
        chapter_name: "पृष्ठीय क्षेत्रफल और आयतन",
        subject: "Mathematics",
        class_level: "Class 10",
        url: "chapter.html?subject=Mathematics&chapter=पृष्ठीय क्षेत्रफल और आयतन",
        keywords: ["volume", "surface area", "aaytan", "pristhiya kshetraphal", "math", "sphere", "cone", "cylinder", "frustum", "ganit", "cube", "cuboid"]
    },
    {
        chapter_name: "द्विघात समीकरण",
        subject: "Mathematics",
        class_level: "Class 10",
        url: "chapter.html?subject=Mathematics&chapter=द्विघात समीकरण",
        keywords: ["dvighat samikaran", "quadratic equations", "math", "equation", "dvighat", "ganit"]
    },
    {
        chapter_name: "समांतर श्रेणियाँ",
        subject: "Mathematics",
        class_level: "Class 10",
        url: "chapter.html?subject=Mathematics&chapter=समांतर श्रेणियाँ",
        keywords: ["samantar shreniya", "arithmetic progressions", "ap", "math", "series", "progression", "ganit"]
    },
    {
        chapter_name: "निर्देशांक ज्यामिति",
        subject: "Mathematics",
        class_level: "Class 10",
        url: "chapter.html?subject=Mathematics&chapter=निर्देशांक ज्यामिति",
        keywords: ["nirdeshank jyamiti", "coordinate geometry", "math", "geometry", "coordinate", "ganit"]
    },
    {
        chapter_name: "दो चरों वाले रैखिक समीकरण युग्म",
        subject: "Mathematics",
        class_level: "Class 10",
        url: "chapter.html?subject=Mathematics&chapter=दो चरों वाले रैखिक समीकरण युग्म",
        keywords: ["linear equations", "pairs", "math", "raikhik samikaran", "solve", "ganit"]
    },
    {
        chapter_name: "बहुपद",
        subject: "Mathematics",
        class_level: "Class 10",
        url: "chapter.html?subject=Mathematics&chapter=बहुपद",
        keywords: ["bahupad", "polynomials", "polynomial", "math", "zeros", "roots", "ganit"]
    },
    // Class 10 Science
    {
        chapter_name: "रासायनिक अभिक्रियाएं एवं समीकरण",
        subject: "Science",
        class_level: "Class 10",
        url: "chapter.html?subject=Science&chapter=रासायनिक अभिक्रियाएं एवं समीकरण",
        keywords: ["rasayanik", "abhikriyaye", "samikaran", "chemical reactions", "equations", "chemistry", "science", "vigyan", "रासायनिक"]
    },
    {
        chapter_name: "प्रकाश - परावर्तन तथा अपवर्तन",
        subject: "Science",
        class_level: "Class 10",
        url: "chapter.html?subject=Science&chapter=प्रकाश - परावर्तन तथा अपवर्तन",
        keywords: ["prakash", "light", "reflection", "refraction", "paravartan", "apvartan", "physics", "science", "vigyan", "प्रकाश"]
    },
    // Class 10 English
    {
        chapter_name: "The Pace for Living",
        subject: "English",
        class_level: "Class 10",
        url: "chapter.html?subject=English&chapter=The Pace for Living",
        keywords: ["pace for living", "hutchinson", "english", "chapter 1", "prose"]
    },
    {
        chapter_name: "Me and the Ecology Bit",
        subject: "English",
        class_level: "Class 10",
        url: "chapter.html?subject=English&chapter=Me and the Ecology Bit",
        keywords: ["ecology", "jim", "joan lexau", "environment", "pollution", "compost", "english", "chapter 2"]
    },
    {
        chapter_name: "Gillu",
        subject: "English",
        class_level: "Class 10",
        url: "chapter.html?subject=English&chapter=Gillu",
        keywords: ["gillu", "mahadevi verma", "squirrel", "english", "chapter 3"]
    },
    {
        chapter_name: "What is Wrong with Indian Films",
        subject: "English",
        class_level: "Class 10",
        url: "chapter.html?subject=English&chapter=What is Wrong with Indian Films",
        keywords: ["satyajit ray", "indian films", "cinema", "english", "chapter 4"]
    },
    {
        chapter_name: "Acceptance Speech",
        subject: "English",
        class_level: "Class 10",
        url: "chapter.html?subject=English&chapter=Acceptance Speech",
        keywords: ["aung san suu kyi", "nobel peace prize", "burma", "democracy", "english", "chapter 5"]
    },
    {
        chapter_name: "Once Upon a Time",
        subject: "English",
        class_level: "Class 10",
        url: "chapter.html?subject=English&chapter=Once Upon a Time",
        keywords: ["toni morrison", "old woman", "bird", "language", "english", "chapter 6"]
    },
    {
        chapter_name: "The Unity of Indian Culture",
        subject: "English",
        class_level: "Class 10",
        url: "chapter.html?subject=English&chapter=The Unity of Indian Culture",
        keywords: ["humayun kabir", "indian culture", "unity in diversity", "english", "chapter 7"]
    },
    {
        chapter_name: "Little Girls Wiser Than Men",
        subject: "English",
        class_level: "Class 10",
        url: "chapter.html?subject=English&chapter=Little Girls Wiser Than Men",
        keywords: ["leo tolstoy", "akoulya", "malasha", "girls", "english", "chapter 8"]
    },
    {
        chapter_name: "God Made the Country",
        subject: "English",
        class_level: "Class 10",
        url: "chapter.html?subject=English&chapter=God Made the Country",
        keywords: ["william cowper", "country", "town", "poetry", "poem", "english", "poetry chapter 1"]
    },
    {
        chapter_name: "Ode on Solitude",
        subject: "English",
        class_level: "Class 10",
        url: "chapter.html?subject=English&chapter=Ode on Solitude",
        keywords: ["alexander pope", "solitude", "happy man", "poetry", "poem", "english", "poetry chapter 2"]
    },
    {
        chapter_name: "Polythene Bag",
        subject: "English",
        class_level: "Class 10",
        url: "chapter.html?subject=English&chapter=Polythene Bag",
        keywords: ["durga prasad panda", "polythene", "plastic", "pollution", "hurt", "poetry", "poem", "english", "poetry chapter 3"]
    },
    {
        chapter_name: "Thinner Than a Crescent",
        subject: "English",
        class_level: "Class 10",
        url: "chapter.html?subject=English&chapter=Thinner Than a Crescent",
        keywords: ["vidyapati", "thinner than a crescent", "radha", "krishna", "poetry", "poem", "english", "poetry chapter 4"]
    },
    {
        chapter_name: "The Empty Heart",
        subject: "English",
        class_level: "Class 10",
        url: "chapter.html?subject=English&chapter=The Empty Heart",
        keywords: ["periasamy thooran", "greedy", "pitcher", "gold", "kalpaka", "trash", "poetry", "poem", "english", "poetry chapter 5"]
    },
    {
        chapter_name: "Koel",
        subject: "English",
        class_level: "Class 10",
        url: "chapter.html?subject=English&chapter=Koel",
        keywords: ["puran singh", "koel", "mango tree", "beloved", "cuckoo", "poetry", "poem", "english", "poetry chapter 6"]
    },
    {
        chapter_name: "The Sleeping Porter",
        subject: "English",
        class_level: "Class 10",
        url: "chapter.html?subject=English&chapter=The Sleeping Porter",
        keywords: ["laxmi prasad devkota", "porter", "mountain", "heavy load", "sleeping", "hero of the mountain", "poetry", "poem", "english", "poetry chapter 7"]
    },
    {
        chapter_name: "Martha",
        subject: "English",
        class_level: "Class 10",
        url: "chapter.html?subject=English&chapter=Martha",
        keywords: ["walter de la mare", "martha", "stories", "hazel glen", "grey eyes", "poetry", "poem", "english", "poetry chapter 8"]
    },
    {
        chapter_name: "January Night",
        subject: "English",
        class_level: "Class 10",
        url: "chapter.html?subject=English&chapter=January Night",
        keywords: ["premchand", "january night", "halku", "munni", "jabra", "blanket", "supplementary", "english", "supplementary chapter 1"]
    },
    {
        chapter_name: "Allergy",
        subject: "English",
        class_level: "Class 10",
        url: "chapter.html?subject=English&chapter=Allergy",
        keywords: ["rana sp singh", "allergy", "allergens", "immune system", "asthma", "eczema", "supplementary", "english", "supplementary chapter 2"]
    },
    {
        chapter_name: "The Bet",
        subject: "English",
        class_level: "Class 10",
        url: "chapter.html?subject=English&chapter=The Bet",
        keywords: ["anton chekhov", "the bet", "banker", "lawyer", "two million rubles", "wisdom", "solitary confinement", "supplementary", "english", "supplementary chapter 3"]
    },
    {
        chapter_name: "Quality",
        subject: "English",
        class_level: "Class 10",
        url: "chapter.html?subject=English&chapter=Quality",
        keywords: ["john galsworthy", "quality", "mr gessler", "shoemaker", "boots", "starvation", "craftsmanship", "supplementary", "english", "supplementary chapter 4"]
    },
    {
        chapter_name: "Sun and Moon",
        subject: "English",
        class_level: "Class 10",
        url: "chapter.html?subject=English&chapter=Sun and Moon",
        keywords: ["katherine mansfield", "sun and moon", "children", "party", "ice house", "nut bear", "supplementary", "english", "supplementary chapter 5"]
    },
    {
        chapter_name: "Two Horizons",
        subject: "English",
        class_level: "Class 10",
        url: "chapter.html?subject=English&chapter=Two Horizons",
        keywords: ["binapani mohanty", "two horizons", "mother", "daughter", "generation gap", "identity", "letters", "supplementary", "english", "supplementary chapter 6"]
    },
    {
        chapter_name: "Love Defiled",
        subject: "English",
        class_level: "Class 10",
        url: "chapter.html?subject=English&chapter=Love Defiled",
        keywords: ["giridhar jha", "love defiled", "ias officer", "ego", "arrogance", "relationship", "dignity", "supplementary", "english", "supplementary chapter 7"]
    },
    // Class 10 Hindi
    {
        chapter_name: "श्रम विभाजन और जाति प्रथा",
        subject: "Hindi",
        class_level: "Class 10",
        url: "chapter.html?subject=Hindi&chapter=श्रम विभाजन और जाति प्रथा",
        keywords: ["shram", "vib विभाजन", "vibhajan", "jaati", "pratha", "caste", "system", "hindi"]
    },
    // Class 10 Non-Hindi (Kislay)
    {
        chapter_name: "तू ज़िन्दा है तो...",
        subject: "Non-Hindi",
        class_level: "Class 10",
        url: "chapter.html?subject=Non-Hindi&chapter=तू ज़िन्दा है तो...",
        keywords: ["tu zinda hai to", "shankar shailendra", "poetry", "poem", "non-hindi", "kislay", "तू ज़िन्दा है तो"]
    },
    {
        chapter_name: "ईदगाह",
        subject: "Non-Hindi",
        class_level: "Class 10",
        url: "chapter.html?subject=Non-Hindi&chapter=ईदगाह",
        keywords: ["idgah", "eidgah", "premchand", "hamid", "chimta", "story", "non-hindi", "kislay", "ईदगाह"]
    },
    {
        chapter_name: "कर्मवीर",
        subject: "Non-Hindi",
        class_level: "Class 10",
        url: "chapter.html?subject=Non-Hindi&chapter=कर्मवीर",
        keywords: ["karmveer", "ayodhya singh upadhyay harioadh", "poetry", "poem", "non-hindi", "kislay", "कर्मवीर"]
    },
    {
        chapter_name: "बालगोबिन भगत",
        subject: "Non-Hindi",
        class_level: "Class 10",
        url: "chapter.html?subject=Non-Hindi&chapter=बालगोबिन भगत",
        keywords: ["balgobin bhagat", "ramvriksh benipuri", "sketches", "non-hindi", "kislay", "बालगोबिन भगत"]
    },
    {
        chapter_name: "हुंडरू का जलप्रपात",
        subject: "Non-Hindi",
        class_level: "Class 10",
        url: "chapter.html?subject=Non-Hindi&chapter=हुंडरू का जलप्रपात",
        keywords: ["hundru ka jalprapat", "waterfall", "kamta prasad singh kaam", "travelogue", "non-hindi", "kislay", "हुंडरू का जलप्रपात"]
    },
    {
        chapter_name: "बिहारी के दोहे",
        subject: "Non-Hindi",
        class_level: "Class 10",
        url: "chapter.html?subject=Non-Hindi&chapter=बिहारी के दोहे",
        keywords: ["bihari ke dohe", "bihari", "poetry", "poem", "non-hindi", "kislay", "बिहारी के दोहे"]
    },
    {
        chapter_name: "ठेस",
        subject: "Non-Hindi",
        class_level: "Class 10",
        url: "chapter.html?subject=Non-Hindi&chapter=ठेस",
        keywords: ["thes", "phanishwar nath renu", "sirchan", "story", "non-hindi", "kislay", "ठेस"]
    },
    {
        chapter_name: "बच्चे की दुआ",
        subject: "Non-Hindi",
        class_level: "Class 10",
        url: "chapter.html?subject=Non-Hindi&chapter=बच्चे की दुआ",
        keywords: ["bacche ki dua", "muhammad iqbal", "poetry", "poem", "prayer", "non-hindi", "kislay", "बच्चे की दुआ"]
    },
    {
        chapter_name: "अशोक का शस्त्र-त्याग",
        subject: "Non-Hindi",
        class_level: "Class 10",
        url: "chapter.html?subject=Non-Hindi&chapter=अशोक का शस्त्र-त्याग",
        keywords: ["ashok ka shastra tyag", "vanshidhar shrivastava", "drama", "ashoka", "non-hindi", "kislay", "अशोक का शस्त्र-त्याग"]
    },
    {
        chapter_name: "ईर्ष्या, तू न गई मेरे मन से",
        subject: "Non-Hindi",
        class_level: "Class 10",
        url: "chapter.html?subject=Non-Hindi&chapter=ईर्ष्या, तू न गई मेरे मन से",
        keywords: ["irshya tu na gayi mere man se", "ramdhari singh dinkar", "essay", "envy", "non-hindi", "kislay", "ईर्ष्या", "तू न गई मेरे मन से"]
    },
    {
        chapter_name: "कबीर के पद",
        subject: "Non-Hindi",
        class_level: "Class 10",
        url: "chapter.html?subject=Non-Hindi&chapter=कबीर के पद",
        keywords: ["kabir ke pad", "kabir das", "poetry", "poem", "non-hindi", "kislay", "कबीर के पद"]
    },
    {
        chapter_name: "विक्रमशिला",
        subject: "Non-Hindi",
        class_level: "Class 10",
        url: "chapter.html?subject=Non-Hindi&chapter=विक्रमशिला",
        keywords: ["vikramshila", "university", "history", "non-hindi", "kislay", "विक्रमशिला"]
    },
    {
        chapter_name: "दीदी की डायरी",
        subject: "Non-Hindi",
        class_level: "Class 10",
        url: "chapter.html?subject=Non-Hindi&chapter=दीदी की डायरी",
        keywords: ["didi ki diary", "sanju", "diary", "non-hindi", "kislay", "दीदी की डायरी"]
    },
    {
        chapter_name: "पीपल",
        subject: "Non-Hindi",
        class_level: "Class 10",
        url: "chapter.html?subject=Non-Hindi&chapter=पीपल",
        keywords: ["peepal", "gopal singh nepali", "poetry", "poem", "nature", "non-hindi", "kislay", "पीपल"]
    },
    {
        chapter_name: "दीनबंधु निराला",
        subject: "Non-Hindi",
        class_level: "Class 10",
        url: "chapter.html?subject=Non-Hindi&chapter=दीनबंधु निराला",
        keywords: ["dinbandhu nirala", "shivpujan sahay", "suryakant tripathi nirala", "essay", "non-hindi", "kislay", "दीनबंधु निराला"]
    },
    {
        chapter_name: "खेमा",
        subject: "Non-Hindi",
        class_level: "Class 10",
        url: "chapter.html?subject=Non-Hindi&chapter=खेमा",
        keywords: ["khema", "child labor", "kasara", "story", "non-hindi", "kislay", "खेमा"]
    },
    {
        chapter_name: "खुशबू रचते हैं हाथ",
        subject: "Non-Hindi",
        class_level: "Class 10",
        url: "chapter.html?subject=Non-Hindi&chapter=खुशबू रचते हैं हाथ",
        keywords: ["khushbu rachte hain hath", "arun kamal", "poetry", "poem", "labor", "non-hindi", "kislay", "खुशबू रचते हैं हाथ"]
    },
    {
        chapter_name: "हौसले की उड़ान",
        subject: "Non-Hindi",
        class_level: "Class 10",
        url: "chapter.html?subject=Non-Hindi&chapter=हौसले की उड़ान",
        keywords: ["hausle ki udaan", "inspiration", "bihar girls", "non-hindi", "kislay", "हौसले की उड़ान"]
    },
    {
        chapter_name: "जननायक कर्पूरी ठाकुर",
        subject: "Non-Hindi",
        class_level: "Class 10",
        url: "chapter.html?subject=Non-Hindi&chapter=जननायक कर्पूरी ठाकुर",
        keywords: ["jannayak karpoori thakur", "biography", "bihar cm", "freedom fighter", "non-hindi", "kislay", "जननायक कर्पूरी ठाकुर"]
    },
    {
        chapter_name: "झाँसी की रानी",
        subject: "Non-Hindi",
        class_level: "Class 10",
        url: "chapter.html?subject=Non-Hindi&chapter=झाँसी की रानी",
        keywords: ["jhansi ki rani", "subhadra kumari chauhan", "laxmibai", "poetry", "poem", "non-hindi", "kislay", "झाँसी की रानी"]
    },
    {
        chapter_name: "चिकित्सा का चक्कर",
        subject: "Non-Hindi",
        class_level: "Class 10",
        url: "chapter.html?subject=Non-Hindi&chapter=चिकित्सा का चक्कर",
        keywords: ["chikitsa ka chakkar", "bedhab banarasi", "satire", "humor", "non-hindi", "kislay", "चिकित्सा का चक्कर"]
    },
    {
        chapter_name: "सुदामा चरित",
        subject: "Non-Hindi",
        class_level: "Class 10",
        url: "chapter.html?subject=Non-Hindi&chapter=सुदामा चरित",
        keywords: ["sudama charit", "narottam das", "krishna sudama", "poetry", "poem", "non-hindi", "kislay", "सुदामा चरित"]
    },
    {
        chapter_name: "राह भटके हिरन के बच्चे को",
        subject: "Non-Hindi",
        class_level: "Class 10",
        url: "chapter.html?subject=Non-Hindi&chapter=राह भटके हिरन के बच्चे को",
        keywords: ["rah bhatke hiran ke bacche ko", "dr ni vietnam", "poetry", "poem", "nature", "non-hindi", "kislay", "राह भटके हिरन के बच्चे को"]
    },
    // Class 12 Physics
    {
        chapter_name: "स्थिर वैद्युतिकी",
        subject: "Physics",
        class_level: "Class 12",
        url: "chapter.html?subject=Physics&chapter=स्थिर वैद्युतिकी",
        keywords: ["sthir", "vaidyutiki", "electrostatics", "physics", "charge", "electric", "स्थिर", "वैद्युतिकी", "bhautiki"]
    },
    {
        chapter_name: "विद्युत धारा के चुंबकीय प्रभाव",
        subject: "Physics",
        class_level: "Class 12",
        url: "chapter.html?subject=Physics&chapter=विद्युत धारा के चुंबकीय प्रभाव",
        keywords: ["vidyut", "dhara", "chumbakiya", "prabhav", "magnetic", "effect", "current", "physics", "bhautiki"]
    },
    // Class 12 Chemistry
    {
        chapter_name: "ठोस अवस्था",
        subject: "Chemistry",
        class_level: "Class 12",
        url: "chapter.html?subject=Chemistry&chapter=ठोस अवस्था",
        keywords: ["thos", "avastha", "solid state", "chemistry", "solid", "ठोस", "अवस्था", "rasayan"]
    },
    // Class 12 Math
    {
        chapter_name: "संबंध एवं फलन",
        subject: "Mathematics",
        class_level: "Class 12",
        url: "chapter.html?subject=Mathematics&chapter=संबंध एवं फलन",
        keywords: ["sambandh", "falan", "relations", "functions", "math", "ganit", "संबंध", "फलन", "calculus basics"]
    },
    // Class 12 Accountancy
    {
        chapter_name: "कंपनी के वित्तीय विवरण",
        subject: "Accountancy",
        class_level: "Class 12",
        url: "chapter.html?subject=Accountancy&chapter=कंपनी के वित्तीय विवरण",
        keywords: ["company", "vittiya", "vivaran", "financial", "statements", "accounts", "accountancy", "lekha", "वित्तीय"]
    },
    // Class 12 Economics
    {
        chapter_name: "उपभोक्ता व्यवहार एवं माँग",
        subject: "Economics",
        class_level: "Class 12",
        url: "chapter.html?subject=Economics&chapter=उपभोक्ता व्यवहार एवं माँग",
        keywords: ["upbhokta", "vyavahar", "maang", "consumer", "behavior", "demand", "economics", "arthashastra", "अर्थशास्त्र", "उपभोक्ता"]
    },
    {
        chapter_name: "सांख्यिकी",
        subject: "Mathematics",
        class_level: "Class 10",
        url: "chapter.html?subject=Mathematics&chapter=सांख्यिकी",
        keywords: ["statistics", "mean", "median", "mode", "madhya", "bahulak", "madhyika", "ogive", "taran", "ganit", "math"]
    },
    {
        chapter_name: "प्रायिकता",
        subject: "Mathematics",
        class_level: "Class 10",
        url: "chapter.html?subject=Mathematics&chapter=प्रायिकता",
        keywords: ["probability", "prayikta", "dice", "cards", "coin", "sikka", "taash", "math", "ganit", "probability theory"]
    }
];

document.addEventListener('DOMContentLoaded', () => {

    // ----- 1. Ripple Effect for Buttons -----
    document.querySelectorAll('.ripple').forEach(button => {
        button.addEventListener('click', function(e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            let ripples = document.createElement('span');
            ripples.className = 'ripple-effect';
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            this.appendChild(ripples);
            setTimeout(() => { ripples.remove() }, 600);
        })
    });

    // ----- 2. Intelligent Multilingual Search System -----
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    const searchDropdown = document.getElementById('searchDropdown');

    if (searchInput && searchDropdown) {
        let timeout = null;

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            
            if (query.length > 0) {
                searchClear.style.display = 'block';
                searchDropdown.style.display = 'block';
                
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    performSearch(query);
                }, 150);
            } else {
                searchClear.style.display = 'none';
                searchDropdown.style.display = 'none';
            }
        });

        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            searchClear.style.display = 'none';
            searchDropdown.style.display = 'none';
            searchInput.focus();
        });

        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target) && !searchClear.contains(e.target)) {
                searchDropdown.style.display = 'none';
            }
        });

        function performSearch(query) {
            const results = searchData.filter(item => {
                // Partial match allowed, Case insensitive mapping
                const matchInName = item.chapter_name.toLowerCase().includes(query);
                const matchInSubject = item.subject.toLowerCase().includes(query);
                const matchInClass = item.class_level.toLowerCase().includes(query);
                const matchInKeywords = item.keywords.some(kw => kw.toLowerCase().includes(query));
                
                return matchInName || matchInSubject || matchInClass || matchInKeywords;
            });
            renderResults(results, query);
        }

        function renderResults(results, query) {
            searchDropdown.innerHTML = '';

            if (results.length === 0) {
                searchDropdown.innerHTML = `
                    <div class="search-empty">
                        <span class="search-empty-icon">📂</span>
                        <p style="font-weight: 600; font-size: 1.05rem; color: #1e293b;">No chapter found.</p>
                        <p style="font-size: 0.95rem; margin-top: 0.3rem;">Try searching in English or Hindi.</p>
                    </div>`;
                return;
            }

            const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            const regex = new RegExp(`(${escapedQuery})`, "gi");

            results.forEach(item => {
                const a = document.createElement('a');
                a.className = 'search-result-item';
                a.href = item.url;
                
                // Highlight matches in the chapter_name string safely
                const highlightedTitle = item.chapter_name.replace(regex, "<span class='search-highlight'>$1</span>");

                a.innerHTML = `
                    <span class="search-result-type">${item.subject} • ${item.class_level}</span>
                    <span class="search-result-title">${highlightedTitle}</span>
                `;
                searchDropdown.appendChild(a);
            });
        }
    }

    // ----- 3. Mobile Hamburger Menu -----
    const menuHTML = `
    <div class="mobile-sidebar-overlay" id="mobileSidebarOverlay"></div>
    <div class="mobile-sidebar" id="mobileSidebar">
        <div class="mobile-sidebar-header">
            <h3>ScoreUp</h3>
            <button id="closeSidebarBtn">✕</button>
        </div>
        
        <div class="mobile-sidebar-content">
            <ul class="mobile-nav-links">
                <li><a href="index.html">🏠 Home</a></li>
                <li><a href="class10.html">📚 Class 10</a></li>
                <li><a href="class12.html">🎓 Class 12</a></li>
            </ul>

            <div class="mobile-sidebar-section">
                <h4>Learning</h4>
                <ul class="mobile-nav-links">
                    <li><a href="important.html">📝 Important Questions</a></li>
                    <li><a href="pyq.html">🕰️ Previous Year Questions</a></li>
                </ul>
            </div>

            <div class="mobile-sidebar-section">
                <h4>Info</h4>
                <ul class="mobile-nav-links">
                    <li><a href="about.html">ℹ️ About ScoreUp</a></li>
                    <li><a href="contact.html">📞 Contact Us</a></li>
                    <li><a href="disclaimer.html">📜 Disclaimer</a></li>
                </ul>
            </div>

            <div class="mobile-brand-box">
                हम Quantity नहीं, Quality पर focus करते हैं<br>
                <strong>100% accurate subjective answers के साथ</strong>
            </div>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', menuHTML);

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const mobileSidebarOverlay = document.getElementById('mobileSidebarOverlay');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');

    if(mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileSidebar.classList.add('active');
            mobileSidebarOverlay.classList.add('active');
        });
    }

    const closeSidebar = () => {
        mobileSidebar.classList.remove('active');
        mobileSidebarOverlay.classList.remove('active');
    };

    if(closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebar);
    if(mobileSidebarOverlay) mobileSidebarOverlay.addEventListener('click', closeSidebar);

    // Close menu on link click
    document.querySelectorAll('.mobile-sidebar a').forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // Highlight Active page
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
        if(link.getAttribute('href') === currentPath) {
            link.classList.add('mobile-active-link');
        }
    });

    // ----- 4. Copy Protection System -----
    document.body.classList.add('protected-content');

    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });

    document.addEventListener('copy', (e) => {
        e.preventDefault();
        return false;
    });

    document.addEventListener('cut', (e) => {
        e.preventDefault();
        return false;
    });

    document.addEventListener('keydown', (e) => {
        // Block Ctrl+C, Ctrl+U (View Source), Ctrl+Shift+I (DevTools), F12
        if (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'u' || e.key === 'U')) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j')) {
            e.preventDefault();
            return false;
        }
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
    });

    // ----- 5. Watermark Injection -----
    const watermarkDiv = document.createElement('div');
    watermarkDiv.className = 'watermark-layer';
    document.body.appendChild(watermarkDiv);

    // ----- 6. Dark Mode Toggle -----
    const darkToggleBtn = document.createElement('button');
    darkToggleBtn.className = 'dark-mode-toggle';
    darkToggleBtn.title = 'Toggle Dark Mode';
    darkToggleBtn.innerHTML = '🌙';
    document.body.appendChild(darkToggleBtn);

    // Load saved preference
    const savedTheme = localStorage.getItem('scoreup-theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkToggleBtn.innerHTML = '☀️';
    }

    darkToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('scoreup-theme', 'light');
            darkToggleBtn.innerHTML = '🌙';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('scoreup-theme', 'dark');
            darkToggleBtn.innerHTML = '☀️';
        }
    });

    // ----- 7. Mobile Bottom Navigation Injected Automatically -----
    // This script adds the professional bottom menu to EVERY page automatically
    if (!document.querySelector('.bottom-nav')) {
        const bottomNav = document.createElement('nav');
        bottomNav.className = 'bottom-nav';
        
        // Find which page is active to highlight the correct icon
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';
        
        bottomNav.innerHTML = `
            <a href="index.html" class="bottom-nav-link ${page === 'index.html' ? 'active' : ''}">
                <span class="bottom-nav-icon">🏠</span>
                <span>Home</span>
            </a>
            <a href="class10.html" class="bottom-nav-link ${page === 'class10.html' ? 'active' : ''}">
                <span class="bottom-nav-icon">📘</span>
                <span>Class 10</span>
            </a>
            <a href="class12.html" class="bottom-nav-link ${page === 'class12.html' ? 'active' : ''}">
                <span class="bottom-nav-icon">🎓</span>
                <span>Class 12</span>
            </a>
        `;
        document.body.appendChild(bottomNav);
    }

});
