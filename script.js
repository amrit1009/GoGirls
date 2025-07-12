const translations = {
  en: {
    welcome: "Welcome Ladies 🎀🌸",
    line1: "This website is created to help you understand your rights.",
    line2: "Find your problem and see what protections you have under Indian law.",
    button: "Find My Problem"
  },
  hi: {
    welcome: "स्वागत है महिलाओं 🎀🌸",
    line1: "यह वेबसाइट आपके अधिकारों को समझने में मदद के लिए बनाई गई है।",
    line2: "अपनी समस्या खोजें और जानें कि भारतीय कानून में आपके लिए क्या सुरक्षा है।",
    button: "अपनी समस्या खोजें"
  },
  pa: {
    welcome: "ਸੁਆਗਤ ਹੈ ਔਰਤਾਂ 🎀🌸",
    line1: "ਇਹ ਵੈੱਬਸਾਈਟ ਤੁਹਾਡੇ ਹੱਕਾਂ ਨੂੰ ਸਮਝਣ ਵਿੱਚ ਮਦਦ ਲਈ ਬਣਾਈ ਗਈ ਹੈ।",
    line2: "ਆਪਣੀ ਸਮੱਸਿਆ ਲੱਭੋ ਅਤੇ ਜਾਣੋ ਕਿ ਭਾਰਤੀ ਕਾਨੂੰਨ ਤੁਹਾਡੀ ਕਿਵੇਂ ਰੱਖਿਆ ਕਰਦਾ ਹੈ।",
    button: "ਮੇਰੀ ਸਮੱਸਿਆ ਲੱਭੋ"
  }
};

const problems = {
  en: {
    "Domestic Violence": {
      explanation: "If you're experiencing violence at home, you may be protected under the Protection of Women from Domestic Violence Act, 2005.",
      law: "Indian Constitution Article 15(3) empowers the state to make special provisions for women and children.",
      helpline: "Dial 181 (Women Helpline)"
    },
    "Sexual Harassment at Work": {
      explanation: "Sexual harassment at the workplace is covered under the POSH Act (2013).",
      law: "Article 21 ensures the right to live with dignity, and workplace harassment violates it.",
      helpline: "Dial 1091"
    },
    "Dowry Harassment": {
      explanation: "Demanding dowry is a punishable offence under Section 498A and the Dowry Prohibition Act, 1961.",
      law: "Dowry is illegal under Indian law.",
      helpline: "Dial 100 or contact women police cell"
    },
    "Cyber Bullying": {
      explanation: "Online abuse or threats can be reported under the IT Act 2000 and IPC Section 509.",
      law: "Right to safety and privacy is a fundamental right under Article 21.",
      helpline: "Dial 155260 (Cyber Crime)"
    },
    "Public Harassment (Eve-Teasing)": {
      explanation: "You are protected under IPC Section 354 & 509 against verbal or physical public harassment.",
      law: "Indian Constitution ensures dignity of women under Article 21.",
      helpline: "Dial 1091 or approach nearest police station"
    },
    "other": {
      explanation: "If your issue isn't listed, it may still be covered under other laws. Speak to an expert or call a helpline.",
      law: "Indian laws are designed to protect your dignity and safety.",
      helpline: "Dial 112 (Emergency Services)"
    }
  },
  hi: {
    "घरेलू हिंसा": {
      explanation: "यदि आप घर पर हिंसा का सामना कर रही हैं, तो आप 2005 के घरेलू हिंसा अधिनियम के अंतर्गत संरक्षित हो सकती हैं।",
      law: "भारतीय संविधान के अनुच्छेद 15(3) के तहत महिलाओं के लिए विशेष प्रावधान बनाए जा सकते हैं।",
      helpline: "181 (महिला हेल्पलाइन) पर कॉल करें"
    },
    "कार्यस्थल पर यौन उत्पीड़न": {
      explanation: "कार्यस्थल पर यौन उत्पीड़न POSH अधिनियम (2013) के अंतर्गत आता है।",
      law: "अनुच्छेद 21 गरिमा से जीने के अधिकार को सुनिश्चित करता है।",
      helpline: "1091 डायल करें"
    },
    "दहेज प्रताड़ना": {
      explanation: "दहेज की मांग करना भारतीय कानून के तहत दंडनीय अपराध है (धारा 498A और दहेज निषेध अधिनियम)।",
      law: "दहेज देना या लेना कानूनन अपराध है।",
      helpline: "100 डायल करें या नजदीकी महिला थाने से संपर्क करें"
    },
    "साइबर बुलिंग": {
      explanation: "ऑनलाइन धमकी या उत्पीड़न को आईटी अधिनियम और आईपीसी धारा 509 के तहत रिपोर्ट किया जा सकता है।",
      law: "अनुच्छेद 21 गोपनीयता और सुरक्षा का अधिकार प्रदान करता है।",
      helpline: "155260 डायल करें (साइबर अपराध)"
    },
    "सार्वजनिक उत्पीड़न (ईव-टीजिंग)": {
      explanation: "आईपीसी की धारा 354 और 509 के तहत सार्वजनिक स्थान पर उत्पीड़न गैरकानूनी है।",
      law: "अनुच्छेद 21 महिलाओं की गरिमा की सुरक्षा करता है।",
      helpline: "1091 डायल करें या पुलिस स्टेशन जाएं"
    },
    "other": {
      explanation: "अगर आपकी समस्या सूची में नहीं है, तब भी यह किसी कानून के अंतर्गत आ सकती है। विशेषज्ञ से बात करें।",
      law: "भारतीय कानून आपकी गरिमा और सुरक्षा की रक्षा करते हैं।",
      helpline: "112 डायल करें (आपातकालीन सेवा)"
    }
  },
  pa: {
    "ਘਰੇਲੂ ਹਿੰਸਾ": {
      explanation: "ਜੇ ਤੁਸੀਂ ਘਰ ਵਿੱਚ ਹਿੰਸਾ ਦਾ ਸ਼ਿਕਾਰ ਹੋ, ਤਾਂ ਤੁਹਾਨੂੰ 2005 ਦੇ ਘਰੇਲੂ ਹਿੰਸਾ ਕਾਨੂੰਨ ਦੇ ਤਹਿਤ ਸੁਰੱਖਿਆ ਮਿਲ ਸਕਦੀ ਹੈ।",
      law: "ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦੇ ਅਨੁਚ्छੇਦ 15(3) ਤਹਿਤ ਰਾਜ ਔਰਤਾਂ ਲਈ ਵਿਸ਼ੇਸ਼ ਉਪਬੰਧ ਕਰ ਸਕਦਾ ਹੈ।",
      helpline: "181 'ਤੇ ਕਾਲ ਕਰੋ (ਮਹਿਲਾ ਹੈਲਪਲਾਈਨ)"
    },
    "ਕੰਮ ਦੀ ਥਾਂ ਤੇ ਯੌਨ ਉਤਪੀੜਨ": {
      explanation: "ਕੰਮ ਦੀ ਥਾਂ ਤੇ ਯੌਨ ਉਤਪੀੜਨ POSH ਐਕਟ (2013) ਅਧੀਨ ਆਉਂਦਾ ਹੈ।",
      law: "ਅਨੁਚੱਛੇਦ 21 ਮਰਿਆਦਾ ਨਾਲ ਜੀਣ ਦਾ ਹੱਕ ਦਿੰਦਾ ਹੈ।",
      helpline: "1091 'ਤੇ ਕਾਲ ਕਰੋ"
    },
    "ਦਾਜ਼ ਲਈ ਤੰਗ ਕਰਨਾ": {
      explanation: "ਦਾਜ਼ ਮੰਗਣਾ ਅਤੇ ਉਸ ਲਈ ਤੰਗ ਕਰਨਾ 498A ਅਤੇ ਦਾਜ਼ ਰੋਕਥਾਮ ਕਾਨੂੰਨ, 1961 ਤਹਿਤ ਅਪਰਾਧ ਹੈ।",
      law: "ਭਾਰਤ ਵਿੱਚ ਦਾਜ਼ ਲੈਣਾ/ਦੇਣਾ ਗੈਰਕਾਨੂੰਨੀ ਹੈ।",
      helpline: "100 'ਤੇ ਕਾਲ ਕਰੋ ਜਾਂ ਮਹਿਲਾ ਪੁਲਿਸ ਸੈੱਲ ਨਾਲ ਸੰਪਰਕ ਕਰੋ"
    },
    "ਸਾਇਬਰ ਧਮਕੀਆਂ": {
      explanation: "ਆਨਲਾਈਨ ਧਮਕੀਆਂ ਜਾਂ ਬਦਸਲੂਕੀ ਨੂੰ IT ਐਕਟ 2000 ਅਤੇ IPC ਸੈਕਸ਼ਨ 509 ਹੇਠ ਰਿਪੋਰਟ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।",
      law: "ਅਨੁਚੱਛੇਦ 21 ਤਹਿਤ ਸੁਰੱਖਿਆ ਅਤੇ ਨਿੱਜਤਾ ਦਾ ਹੱਕ ਹੈ।",
      helpline: "155260 'ਤੇ ਕਾਲ ਕਰੋ (Cyber Crime)"
    },
    "ਜਨਤਕ ਤੰਗ ਪੇੜ (ਈਵ ਟੀਜ਼ਿੰਗ)": {
      explanation: "IPC ਸੈਕਸ਼ਨ 354 ਅਤੇ 509 ਹੇਠ ਔਰਤਾਂ ਦੀ ਸੁਰੱਖਿਆ ਲਈ ਕਾਨੂੰਨ ਮੌਜੂਦ ਹਨ।",
      law: "ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਔਰਤਾਂ ਦੀ ਇਜ਼ਤ ਦੀ ਰੱਖਿਆ ਕਰਦਾ ਹੈ।",
      helpline: "1091 'ਤੇ ਕਾਲ ਕਰੋ ਜਾਂ ਨਜ਼ਦੀਕੀ ਪੁਲਿਸ ਸਟੇਸ਼ਨ ਜਾਓ"
    },
    "other": {
      explanation: "ਜੇ ਤੁਸੀਂ ਲੱਭ ਰਹੀ ਸਮੱਸਿਆ ਸੂਚੀ ਵਿੱਚ ਨਹੀਂ, ਤਾਂ ਵੀ ਇਹ ਕਿਸੇ ਕਾਨੂੰਨ ਅਧੀਨ ਹੋ ਸਕਦੀ ਹੈ।",
      law: "ਭਾਰਤੀ ਕਾਨੂੰਨ ਤੁਹਾਡੀ ਸੁਰੱਖਿਆ ਅਤੇ ਮਰਿਆਦਾ ਲਈ ਬਣਾਏ ਗਏ ਹਨ।",
      helpline: "112 'ਤੇ ਕਾਲ ਕਰੋ (ਐਮਰਜੈਂਸੀ)"
    }
  }
};

function updateLanguage() {
  const lang = document.getElementById("language-select").value;
  const t = translations[lang];
  document.getElementById("welcome-title").innerText = t.welcome;
  document.getElementById("line1").innerText = t.line1;
  document.getElementById("line2").innerText = t.line2;
  document.getElementById("find-button").innerText = t.button;

  // If problem list is visible, refresh it
  if (document.getElementById("problem-section").style.display === "block") {
    loadProblemList();
  }
}

function loadProblemList() {
  const lang = document.getElementById("language-select").value;
  const list = document.getElementById("problem-list");
  list.innerHTML = "";

  for (let key in problems[lang]) {
    if (key !== "other") {
      const btn = document.createElement("button");
      btn.className = "problem-btn";
      btn.innerText = key;
      btn.onclick = () => showProblemDetail(key);
      list.appendChild(btn);
    }
  }
}

window.showProblemDetail = function (problemKey) {
  const lang = document.getElementById("language-select").value;
  const detail = problems[lang][problemKey];
  const detailDiv = document.getElementById("problem-detail");

  detailDiv.innerHTML = `
    <h3>${problemKey}</h3>
    <p><strong>Explanation:</strong> ${detail.explanation}</p>
    <p><strong>Constitution Info:</strong> ${detail.law}</p>
    <p><strong>Helpline:</strong> ${detail.helpline}</p>
  `;

  detailDiv.style.display = "block";
  document.getElementById("back-button").style.display = "inline-block";
  document.getElementById("problem-section").style.display = "none";
};

window.goBack = function () {
  document.getElementById("problem-detail").style.display = "none";
  document.getElementById("back-button").style.display = "none";
  document.getElementById("problem-section").style.display = "block";
};

window.findProblem = function () {
  document.getElementById("intro").style.display = "none";
  document.getElementById("problem-section").style.display = "block";
  loadProblemList();
};

document.getElementById("language-select").addEventListener("change", updateLanguage);





