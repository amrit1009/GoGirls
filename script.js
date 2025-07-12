const problems = [
  {
    key: "harassment",
    translations: {
      en: {
        name: "Workplace Harassment",
        description: "You might be facing verbal, physical, or emotional abuse at work from colleagues or superiors.",
        law: "According to the Indian Constitution, Article 15 and Article 21 ensure protection of dignity and equality. The POSH Act (2013) also protects against sexual harassment at the workplace.",
        helpline: "Call 181 (Women Helpline) or 1091 (Police Women Helpline)."
      },
      hi: {
        name: "कार्यस्थल पर उत्पीड़न",
        description: "आप कार्यस्थल पर सहकर्मियों या वरिष्ठों से मौखिक, शारीरिक या मानसिक उत्पीड़न का सामना कर सकती हैं।",
        law: "भारतीय संविधान के अनुच्छेद 15 और 21 गरिमा और समानता की सुरक्षा सुनिश्चित करते हैं। POSH अधिनियम (2013) कार्यस्थल पर यौन उत्पीड़न से सुरक्षा देता है।",
        helpline: "181 (महिला हेल्पलाइन) या 1091 (पुलिस महिला हेल्पलाइन) पर कॉल करें।"
      },
      pa: {
        name: "ਕੰਮ ਦੀ ਥਾਂ ਤੇ ਹਿਰਾਸਤ",
        description: "ਤੁਸੀਂ ਆਪਣੇ ਸਹਿਕਰਮੀ ਜਾਂ ਉੱਚ ਅਧਿਕਾਰੀਆਂ ਵੱਲੋਂ ਮੌਖਿਕ, ਸਰੀਰਕ ਜਾਂ ਮਨੋਵਿਗਿਆਨਿਕ ਤੰਗ ਪੇਸ਼ੀ ਦਾ ਸਾਹਮਣਾ ਕਰ ਰਹੀਆਂ ਹੋ ਸਕਦੀਆਂ ਹੋ।",
        law: "ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦੇ ਆਰਟਿਕਲ 15 ਅਤੇ 21 ਇੱਜ਼ਤ ਅਤੇ ਬਰਾਬਰੀ ਦੀ ਸੁਰੱਖਿਆ ਦਿੰਦੇ ਹਨ। POSH ਐਕਟ (2013) ਕੰਮ ਦੀ ਥਾਂ ਤੇ ਯੌਨ ਹਿਰਾਸਤ ਤੋਂ ਸੁਰੱਖਿਆ ਦਿੰਦਾ ਹੈ।",
        helpline: "181 (ਮਹਿਲਾ ਹੈਲਪਲਾਈਨ) ਜਾਂ 1091 (ਪੁਲਿਸ ਮਹਿਲਾ ਹੈਲਪਲਾਈਨ) ਤੇ ਕਾਲ ਕਰੋ।"
      }
    }
  },
  {
    key: "domestic_violence",
    translations: {
      en: {
        name: "Domestic Violence",
        description: "You may be experiencing physical or emotional abuse in your household.",
        law: "Protected under the Protection of Women from Domestic Violence Act, 2005, and Articles 14, 15, and 21 of the Constitution.",
        helpline: "Call 181 or 100 (Police Emergency)."
      },
      hi: {
        name: "घरेलू हिंसा",
        description: "आप अपने घर में शारीरिक या मानसिक उत्पीड़न का सामना कर सकती हैं।",
        law: "घरेलू हिंसा से महिलाओं का संरक्षण अधिनियम, 2005 और संविधान के अनुच्छेद 14, 15 और 21 के तहत सुरक्षा प्राप्त है।",
        helpline: "181 या 100 (पुलिस आपातकालीन) पर कॉल करें।"
      },
      pa: {
        name: "ਘਰੇਲੂ ਹਿੰਸਾ",
        description: "ਤੁਸੀਂ ਆਪਣੇ ਘਰ ਵਿਚ ਸਰੀਰਕ ਜਾਂ ਮਨੋਵਿਗਿਆਨਿਕ ਤੰਗ ਪੇਸ਼ੀ ਦਾ ਸਾਹਮਣਾ ਕਰ ਰਹੀਆਂ ਹੋ ਸਕਦੀਆਂ ਹੋ।",
        law: "ਘਰੇਲੂ ਹਿੰਸਾ ਤੋਂ ਸੁਰੱਖਿਆ ਕਾਨੂੰਨ 2005 ਅਤੇ ਆਰਟਿਕਲ 14, 15 ਅਤੇ 21 ਦੇ ਤਹਿਤ ਸੁਰੱਖਿਆ ਦਿੰਦਾ ਹੈ।",
        helpline: "181 ਜਾਂ 100 (ਪੁਲਿਸ ਐਮਰਜੈਂਸੀ) ਤੇ ਕਾਲ ਕਰੋ।"
      }
    }
  },
  {
    key: "dowry",
    translations: {
      en: {
        name: "Dowry Harassment",
        description: "Being forced to give dowry or facing harassment due to dowry demands.",
        law: "Dowry Prohibition Act, 1961 and Section 498A of the IPC protects against dowry-related abuse.",
        helpline: "Call 181 or visit the nearest police station."
      },
      hi: {
        name: "दहेज उत्पीड़न",
        description: "दहेज देने के लिए मजबूर किया जाना या दहेज की मांगों के कारण उत्पीड़न झेलना।",
        law: "दहेज निषेध अधिनियम, 1961 और भारतीय दंड संहिता की धारा 498A दहेज से संबंधित उत्पीड़न से सुरक्षा देती है।",
        helpline: "181 पर कॉल करें या नजदीकी पुलिस स्टेशन पर जाएं।"
      },
      pa: {
        name: "ਦਾਜ ਉਤਪੀੜਨ",
        description: "ਦਾਜ ਦੇਣ ਲਈ ਮਜ਼ਬੂਰ ਕੀਤਾ ਜਾਂ ਰਿਹਾ ਹੈ ਜਾਂ ਦਾਜ ਦੀ ਮੰਗ ਕਾਰਨ ਤੰਗ ਪੇਸ਼ੀ ਦਾ ਸਾਹਮਣਾ ਕਰਨਾ ਪੈ ਰਿਹਾ ਹੈ।",
        law: "ਦਾਜ ਪ੍ਰਤੀਬੰਧ ਐਕਟ, 1961 ਅਤੇ IPC ਦੀ ਧਾਰਾ 498A ਦਾਜ ਨਾਲ ਸਬੰਧਤ ਤੰਗ ਪੇਸ਼ੀ ਤੋਂ ਸੁਰੱਖਿਆ ਦਿੰਦੇ ਹਨ।",
        helpline: "181 ਤੇ ਕਾਲ ਕਰੋ ਜਾਂ ਨਜ਼ਦੀਕੀ ਪੁਲਿਸ ਥਾਣੇ ਤੇ ਜਾਓ।"
      }
    }
  },
  {
    key: "stalking",
    translations: {
      en: {
        name: "Stalking",
        description: "Someone is repeatedly following or contacting you against your will.",
        law: "Stalking is a crime under Section 354D of the IPC.",
        helpline: "Call 100 or 112 for police assistance."
      },
      hi: {
        name: "पीछा करना",
        description: "कोई व्यक्ति बार-बार आपकी इच्छा के विरुद्ध आपका पीछा कर रहा है या संपर्क कर रहा है।",
        law: "IPC की धारा 354D के तहत पीछा करना अपराध है।",
        helpline: "100 या 112 पर कॉल करें।"
      },
      pa: {
        name: "ਪੀਛਾ ਕਰਨਾ",
        description: "ਕੋਈ ਵਾਰੀ-ਵਾਰੀ ਤੁਹਾਡਾ ਪੀਛਾ ਕਰ ਰਿਹਾ ਹੈ ਜਾਂ ਤੁਹਾਡੇ ਨਾਲ ਬੇਇਛਾ ਸੰਪਰਕ ਕਰ ਰਿਹਾ ਹੈ।",
        law: "IPC ਦੀ ਧਾਰਾ 354D ਦੇ ਤਹਿਤ ਪੀਛਾ ਕਰਨਾ ਇਕ ਅਪਰਾਧ ਹੈ।",
        helpline: "100 ਜਾਂ 112 ਤੇ ਕਾਲ ਕਰੋ।"
      }
    }
  },
  {
    key: "cyber_crime",
    translations: {
      en: {
        name: "Cyber Crime",
        description: "Facing harassment or threats through digital platforms.",
        law: "The Information Technology Act, 2000 and IPC Section 66A protect against cyber offenses.",
        helpline: "Report at cybercrime.gov.in or call 1930."
      },
      hi: {
        name: "साइबर अपराध",
        description: "डिजिटल प्लेटफ़ॉर्म्स के माध्यम से उत्पीड़न या धमकियों का सामना करना।",
        law: "सूचना प्रौद्योगिकी अधिनियम, 2000 और IPC की धारा 66A साइबर अपराधों से सुरक्षा देती है।",
        helpline: "cybercrime.gov.in पर रिपोर्ट करें या 1930 पर कॉल करें।"
      },
      pa: {
        name: "ਸਾਈਬਰ ਜੁਰਮ",
        description: "ਡਿਜ਼ੀਟਲ ਪਲੇਟਫਾਰਮਾਂ ਰਾਹੀਂ ਤੰਗ ਪੇਸ਼ੀ ਜਾਂ ਧਮਕੀਆਂ ਦਾ ਸਾਹਮਣਾ ਕਰਨਾ।",
        law: "ਸੂਚਨਾ ਤਕਨਾਲੋਜੀ ਐਕਟ, 2000 ਅਤੇ IPC ਦੀ ਧਾਰਾ 66A ਸਾਈਬਰ ਜੁਰਮਾਂ ਤੋਂ ਸੁਰੱਖਿਆ ਦਿੰਦੇ ਹਨ।",
        helpline: "cybercrime.gov.in ਤੇ ਰਿਪੋਰਟ ਕਰੋ ਜਾਂ 1930 ਤੇ ਕਾਲ ਕਰੋ।"
      }
    }
  }
];

const translations = {
  en: {
    welcome: "Welcome Ladies 🎀🌸",
    line1: "We are here to support you.",
    line2: "Click 'Find My Problem' to explore how the law can help you.",
    findMyProblem: "Find My Problem",
    searchPlaceholder: "Search your problem...",
    back: "⬅️ Back"
  },
  hi: {
    welcome: "स्वागत है महिलाओं 🎀🌸",
    line1: "हम आपकी सहायता के लिए यहाँ हैं।",
    line2: "'अपनी समस्या खोजें' पर क्लिक करें और जानें कि कानून आपकी कैसे मदद कर सकता है।",
    findMyProblem: "अपनी समस्या खोजें",
    searchPlaceholder: "अपनी समस्या खोजें...",
    back: "⬅️ वापस जाएं"
  },
  pa: {
    welcome: "ਸੁਆਗਤ ਹੈ ਮਹਿਲਾਵਾਂ 🎀🌸",
    line1: "ਅਸੀਂ ਤੁਹਾਡੀ ਮਦਦ ਲਈ ਇੱਥੇ ਹਾਂ।",
    line2: "'ਆਪਣੀ ਸਮੱਸਿਆ ਲੱਭੋ' ਤੇ ਕਲਿੱਕ ਕਰੋ ਤੇ ਜਾਣੋ ਕਿ ਕਾਨੂੰਨ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹੈ।",
    findMyProblem: "ਆਪਣੀ ਸਮੱਸਿਆ ਲੱਭੋ",
    searchPlaceholder: "ਆਪਣੀ ਸਮੱਸਿਆ ਲੱਭੋ...",
    back: "⬅️ ਵਾਪਸ ਜਾਓ"
  }
};

let currentLang = "en";

function updateLanguage() {
  currentLang = document.getElementById("language-select").value;
  const t = translations[currentLang];
  document.getElementById("welcome-title").innerText = t.welcome;
  document.getElementById("line1").innerText = t.line1;
  document.getElementById("line2").innerText = t.line2;
  document.getElementById("find-button").innerText = t.findMyProblem;
  document.getElementById("search-bar").placeholder = t.searchPlaceholder;
  document.getElementById("back-button").innerText = t.back;

  if (document.getElementById("problem-section").style.display === "block") {
    displayProblems(document.getElementById("search-bar").value);
  }
}

function findProblem() {
  document.getElementById("welcome-section").style.display = "none";
  document.getElementById("problem-section").style.display = "block";
  displayProblems();
}

function displayProblems(filter = "") {
  const listDiv = document.getElementById("problem-list");
  listDiv.innerHTML = "";

  const filtered = problems.filter(p =>
    p.translations[currentLang].name.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach(p => {
    const btn = document.createElement("button");
    btn.innerText = p.translations[currentLang].name;
    btn.onclick = () => showProblemDetail(p.key);
    listDiv.appendChild(btn);
  });

  const otherBtn = document.createElement("button");
  otherBtn.innerText = currentLang === "hi" ? "अन्य" : currentLang === "pa" ? "ਹੋਰ" : "Other";
  otherBtn.onclick = () => showProblemDetail("other");
  listDiv.appendChild(otherBtn);
}

function showProblemDetail(key) {
  const detailDiv = document.getElementById("problem-detail");
  const backButton = document.getElementById("back-button");

  if (key === "other") {
    detailDiv.innerHTML = `<p>${currentLang === "hi" ? "हम आपकी समस्या की पहचान नहीं कर सके। कृपया 181 या 112 पर कॉल करें।" : currentLang === "pa" ? "ਅਸੀਂ ਤੁਹਾਡੀ ਸਮੱਸਿਆ ਦੀ ਪਛਾਣ ਨਹੀਂ ਕਰ ਸਕੇ। ਕਿਰਪਾ ਕਰਕੇ 181 ਜਾਂ 112 ਤੇ ਕਾਲ ਕਰੋ।" : "We couldn't identify your problem. Please call 181 or 112."}</p>`;
  } else {
    const p = problems.find(p => p.key === key).translations[currentLang];
    detailDiv.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <h4>📜 ${currentLang === "hi" ? "संबंधित संवैधानिक अधिकार" : currentLang === "pa" ? "ਸੰਵੈਧਾਨਕ ਅਧਿਕਾਰ" : "Related Constitutional Right"}:</h4>
      <p>${p.law}</p>
      <h4>📞 ${currentLang === "hi" ? "हेल्पलाइन" : currentLang === "pa" ? "ਹੈਲਪਲਾਈਨ" : "Helpline"}:</h4>
      <p>${p.helpline}</p>
    `;
  }

  detailDiv.style.display = "block";
  backButton.style.display = "inline-block";
}

function goBack() {
  document.getElementById("problem-detail").style.display = "none";
  document.getElementById("back-button").style.display = "none";
}

document.getElementById("search-bar").addEventListener("input", (e) => {
  displayProblems(e.target.value);
});


  





