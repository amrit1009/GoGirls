const problems = {
  eve_teasing: {
    en: {
      title: "Eve Teasing",
      explanation: "Eve teasing refers to public sexual harassment. This is punishable under Section 354 IPC.",
      law: "According to Indian law, Section 354 and 509 of IPC deal with assault or criminal force to woman with intent to outrage her modesty.",
      helpline: "Call 1091 or your local women helpline."
    },
    hi: {
      title: "छेड़खानी",
      explanation: "छेड़खानी सार्वजनिक स्थानों पर यौन उत्पीड़न को दर्शाता है। यह IPC की धारा 354 के तहत दंडनीय है।",
      law: "भारतीय कानून के अनुसार, IPC की धारा 354 और 509 महिलाओं के साथ दुर्व्यवहार से संबंधित हैं।",
      helpline: "1091 या स्थानीय महिला हेल्पलाइन पर कॉल करें।"
    },
    pa: {
      title: "ਛੇੜਖਾਨੀ",
      explanation: "ਛੇੜਖਾਨੀ ਲੋਕੀ ਥਾਵਾਂ 'ਤੇ ਲਿੰਗ ਅਧਾਰਤ ਤੰਗ ਪੇਸ਼ੀ ਹੈ। ਇਹ IPC ਦੀ ਧਾਰਾ 354 ਹੇਠ ਸਜ਼ਾਈੋਗ ਹੈ।",
      law: "ਭਾਰਤੀ ਕਾਨੂੰਨ ਦੇ ਅਨੁਸਾਰ, IPC ਦੀਆਂ ਧਾਰਾਵਾਂ 354 ਅਤੇ 509 ਇਸ ਨਾਲ ਸੰਬੰਧਿਤ ਹਨ।",
      helpline: "1091 ਜਾਂ ਸਥਾਨਕ ਮਹਿਲਾ ਹੈਲਪਲਾਈਨ ਨੂੰ ਕਾਲ ਕਰੋ।"
    }
  },
  domestic_violence: {
    en: {
      title: "Domestic Violence",
      explanation: "Any abuse in a domestic setting. Protected under Domestic Violence Act, 2005.",
      law: "You are protected under the Protection of Women from Domestic Violence Act, 2005.",
      helpline: "Dial 181 or 1091 for help."
    },
    hi: {
      title: "घरेलू हिंसा",
      explanation: "घरेलू सेटिंग में किसी भी प्रकार की हिंसा। घरेलू हिंसा अधिनियम, 2005 के तहत संरक्षित।",
      law: "आप 'घरेलू हिंसा से महिलाओं की सुरक्षा अधिनियम, 2005' के अंतर्गत संरक्षित हैं।",
      helpline: "181 या 1091 पर कॉल करें।"
    },
    pa: {
      title: "ਘਰੇਲੂ ਹਿੰਸਾ",
      explanation: "ਘਰੇਲੂ ਹਾਲਾਤਾਂ ਵਿੱਚ ਕਿਸੇ ਵੀ ਤਰ੍ਹਾਂ ਦੀ ਹਿੰਸਾ। 2005 ਦੇ ਘਰੇਲੂ ਹਿੰਸਾ ਕਾਨੂੰਨ ਅਧੀਨ ਸੁਰੱਖਿਅਤ।",
      law: "ਤੁਸੀਂ 2005 ਦੇ ਘਰੇਲੂ ਹਿੰਸਾ ਤੋਂ ਸੁਰੱਖਿਆ ਕਾਨੂੰਨ ਹੇਠ ਸੁਰੱਖਿਅਤ ਹੋ।",
      helpline: "181 ਜਾਂ 1091 ਤੇ ਕਾਲ ਕਰੋ।"
    }
  },
  dowry: {
    en: {
      title: "Dowry Demands",
      explanation: "Demanding dowry is illegal. Punishable under Dowry Prohibition Act, 1961.",
      law: "Section 498A IPC and Dowry Prohibition Act protect women against dowry harassment.",
      helpline: "Report to 1091 or nearest police station."
    },
    hi: {
      title: "दहेज की मांग",
      explanation: "दहेज मांगना गैरकानूनी है। यह दहेज निषेध अधिनियम, 1961 के तहत दंडनीय है।",
      law: "धारा 498A और दहेज निषेध अधिनियम महिलाओं को सुरक्षा प्रदान करते हैं।",
      helpline: "1091 या नजदीकी थाने पर रिपोर्ट करें।"
    },
    pa: {
      title: "ਦਾਜ ਦੀ ਮੰਗ",
      explanation: "ਦਾਜ ਮੰਗਣਾ ਗੈਰਕਾਨੂੰਨੀ ਹੈ। 1961 ਦੇ ਦਾਜ ਰੋਕੂ ਕਾਨੂੰਨ ਅਧੀਨ ਸਜ਼ਾਈੋਗ ਹੈ।",
      law: "ਧਾਰਾ 498A ਅਤੇ ਦਾਜ ਰੋਕੂ ਕਾਨੂੰਨ ਤੁਹਾਨੂੰ ਸੁਰੱਖਿਆ ਦਿੰਦੇ ਹਨ।",
      helpline: "1091 ਜਾਂ ਨੇੜਲੇ ਪੁਲਿਸ ਥਾਣੇ ਨੂੰ ਸੂਚਿਤ ਕਰੋ।"
    }
  },
  stalking: {
    en: {
      title: "Stalking",
      explanation: "Following or harassing a woman. Section 354D IPC makes it punishable.",
      law: "Section 354D IPC defines stalking and makes it a cognizable offense.",
      helpline: "Dial 100 or 1091 immediately."
    },
    hi: {
      title: "पीछा करना",
      explanation: "किसी महिला का पीछा करना या परेशान करना। धारा 354D IPC के तहत दंडनीय।",
      law: "धारा 354D IPC के अनुसार यह अपराध है।",
      helpline: "100 या 1091 पर तुरंत कॉल करें।"
    },
    pa: {
      title: "ਪੀਛਾ ਕਰਨਾ",
      explanation: "ਕਿਸੇ ਔਰਤ ਦਾ ਪੀਛਾ ਕਰਨਾ ਜਾਂ ਤੰਗ ਕਰਨਾ। ਧਾਰਾ 354D IPC ਹੇਠ ਇਹ ਸਜ਼ਾਈੋਗ ਹੈ।",
      law: "ਧਾਰਾ 354D IPC ਅਨੁਸਾਰ ਇਹ ਕੌਣੂਨੀ ਉਲੰਘਣਾ ਹੈ।",
      helpline: "100 ਜਾਂ 1091 'ਤੇ ਫ਼ੌਰੀ ਸੰਪਰਕ ਕਰੋ।"
    }
  },
  cyber_harassment: {
    en: {
      title: "Cyber Harassment",
      explanation: "Online threats, messages, or blackmail. Covered under IT Act and IPC 354A.",
      law: "Indian IT Act and IPC protect against online abuse and harassment.",
      helpline: "Report to Cyber Cell or call 1091."
    },
    hi: {
      title: "साइबर उत्पीड़न",
      explanation: "ऑनलाइन धमकी, संदेश या ब्लैकमेल। IT अधिनियम और IPC 354A के तहत संरक्षित।",
      law: "भारतीय IT अधिनियम और IPC ऑनलाइन दुर्व्यवहार से सुरक्षा प्रदान करते हैं।",
      helpline: "साइबर सेल में रिपोर्ट करें या 1091 पर कॉल करें।"
    },
    pa: {
      title: "ਸਾਈਬਰ ਤੰਗ ਪੇਸ਼ੀ",
      explanation: "ਆਨਲਾਈਨ ਧਮਕੀਆਂ ਜਾਂ ਸੰਦੇਸ਼। IT ਐਕਟ ਅਤੇ IPC 354A ਅਧੀਨ ਸੁਰੱਖਿਅਤ।",
      law: "ਭਾਰਤੀ IT ਐਕਟ ਅਤੇ IPC ਤੁਹਾਨੂੰ ਆਨਲਾਈਨ ਹਿੰਸਾ ਤੋਂ ਬਚਾਉਂਦੇ ਹਨ।",
      helpline: "Cyber Cell 'ਚ ਸ਼ਿਕਾਇਤ ਦਿਓ ਜਾਂ 1091 ਨੂੰ ਕਾਲ ਕਰੋ।"
    }
  }
};

let currentLang = "en";

function updateLanguage() {
  currentLang = document.getElementById("language-select").value;
  document.getElementById("welcome-title").innerText = {
    en: "Welcome Ladies 🎀🌸",
    hi: "स्वागत है महिलाओं 🎀🌸",
    pa: "ਸੁਆਗਤ ਹੈ ਮਹਿਲਾਵਾਂ 🎀🌸"
  }[currentLang];

  document.getElementById("line1").innerText = {
    en: "This platform helps you identify your legal issues and know your rights.",
    hi: "यह मंच आपकी कानूनी समस्याओं की पहचान करने और अपने अधिकारों को जानने में मदद करता है।",
    pa: "ਇਹ ਪਲੇਟਫਾਰਮ ਤੁਹਾਨੂੰ ਆਪਣੀਆਂ ਕਾਨੂੰਨੀ ਸਮੱਸਿਆਵਾਂ ਦੀ ਪਛਾਣ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।"
  }[currentLang];

  document.getElementById("line2").innerText = {
    en: "Choose your problem or search for it. You’ll get help based on Indian law.",
    hi: "अपनी समस्या चुनें या खोजें। आपको भारतीय कानून के अनुसार सहायता मिलेगी।",
    pa: "ਆਪਣੀ ਸਮੱਸਿਆ ਚੁਣੋ ਜਾਂ ਖੋਜੋ। ਤੁਹਾਨੂੰ ਭਾਰਤੀ ਕਾਨੂੰਨ ਅਨੁਸਾਰ ਮਦਦ ਮਿਲੇਗੀ।"
  }[currentLang];

  if (document.getElementById("problem-section").style.display === "block") {
    loadProblemList();
  }
}

function findProblem() {
  document.getElementById("welcome-title").style.display = "none";
  document.getElementById("line1").style.display = "none";
  document.getElementById("line2").style.display = "none";
  document.getElementById("find-button").style.display = "none";
  document.getElementById("problem-section").style.display = "block";
  loadProblemList();
}

function loadProblemList() {
  const listDiv = document.getElementById("problem-list");
  listDiv.innerHTML = "";
  for (const key in problems) {
    const btn = document.createElement("button");
    btn.innerText = problems[key][currentLang].title;
    btn.onclick = () => showProblemDetail(key);
    listDiv.appendChild(btn);
  }
}

function showProblemDetail(problemKey) {
  const problem = problems.find(p => p.key === problemKey);
  const detailDiv = document.getElementById("problem-detail");
  const backButton = document.getElementById("back-button");

  if (problem) {
    detailDiv.innerHTML = `
      <h3>${problem.name}</h3>
      <p>${problem.description}</p>
      <h4>📜 Related Constitutional Right:</h4>
      <p>${problem.law}</p>
      <h4>📞 Helpline:</h4>
      <p>${problem.helpline}</p>
    `;
  } else {
    detailDiv.innerHTML = `<p>We couldn't identify your problem. Please call the national helpline: 181 or 112.</p>`;
  }

  detailDiv.style.display = "block";
  backButton.style.display = "inline-block"; // ✅ Always show this
}


}

function goBack() {
  document.getElementById("problem-detail").style.display = "none";
  document.getElementById("back-button").style.display = "none";
  document.getElementById("problem-section").style.display = "block";
}

function filterProblems() {
  const searchText = document.getElementById("search-bar").value.toLowerCase();
  const listDiv = document.getElementById("problem-list");
  listDiv.innerHTML = "";
  for (const key in problems) {
    const title = problems[key][currentLang].title.toLowerCase();
    if (title.includes(searchText)) {
      const btn = document.createElement("button");
      btn.innerText = problems[key][currentLang].title;
      btn.onclick = () => showProblemDetail(key);
      listDiv.appendChild(btn);
    }
  }
}

  





