// 🧠 Problem List (can be expanded)
const problems = {
  "Domestic Violence": {
    explanation: "Physical, emotional, or mental harm inflicted within a household.",
    law: "Protection of Women from Domestic Violence Act, 2005",
    helpline: "181 – Women Helpline"
  },
  "Dowry Harassment": {
    explanation: "Demanding or harassing someone for dowry before or after marriage.",
    law: "Section 498A of the Indian Penal Code",
    helpline: "1091 – Police Helpline for Women"
  },
  "Sexual Harassment at Workplace": {
    explanation: "Unwanted verbal, physical or visual sexual advances at work.",
    law: "POSH Act, 2013",
    helpline: "011-26942369 (NCW)"
  },
  "Child Marriage": {
    explanation: "Marrying a person under the legal age.",
    law: "Prohibition of Child Marriage Act, 2006",
    helpline: "1098 – Childline"
  },
  "Cyber Harassment": {
    explanation: "Harassment through digital means including messages and social media.",
    law: "Information Technology Act, Section 66A/67",
    helpline: "1930 – Cybercrime Helpline"
  },
  "other": {
    explanation: "Your problem might not be listed. Please reach out to legal support.",
    law: "Many protections are available under the Indian Constitution.",
    helpline: "Contact local police or legal aid services."
  }
};

// ✅ Show problem section
function goToProblemFinder() {
  document.getElementById("welcome-section").style.display = "none";
  document.getElementById("problem-section").style.display = "block";
  searchProblems(); // show list immediately
}

// ✅ Go back to welcome
function goBack() {
  document.getElementById("problem-section").style.display = "none";
  document.getElementById("welcome-section").style.display = "block";
}

// ✅ Search filter
function searchProblems() {
  const query = document.getElementById("search-bar").value.toLowerCase();
  const list = document.getElementById("problem-list");
  const noResults = document.getElementById("no-results");
  list.innerHTML = "";

  let found = false;
  for (let key in problems) {
    if (key.toLowerCase().includes(query) && key !== "other") {
      const li = document.createElement("li");
      li.textContent = key;
      li.onclick = () => showProblemDetail(key);
      list.appendChild(li);
      found = true;
    }
  }

  noResults.style.display = found ? "none" : "block";
}

// ✅ Show details
function showProblemDetail(key) {
  const problem = problems[key];
  const container = document.getElementById("problem-detail");
  container.innerHTML = `
    <h3>${key}</h3>
    <p><strong>Explanation:</strong> ${problem.explanation}</p>
    <p><strong>Law:</strong> ${problem.law}</p>
    <p><strong>Helpline:</strong> ${problem.helpline}</p>
  `;
}

// ✅ Language Translations
const translations = {
  en: {
    welcome: "Welcome Ladies",
    line1: "This platform helps you find out if the problem you're facing",
    line2: "has a solution according to the Indian Constitution.",
    button: "Find My Problem"
  },
  hi: {
    welcome: "स्वागत है महिलाओं",
    line1: "यह प्लेटफ़ॉर्म आपको यह जानने में मदद करता है कि आप जो समस्या झेल रही हैं",
    line2: "उसका समाधान भारतीय संविधान में है या नहीं।",
    button: "अपनी समस्या खोजें"
  },
  pa: {
    welcome: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਬੀਬੀਆਂ",
    line1: "ਇਹ ਪਲੇਟਫਾਰਮ ਤੁਹਾਡੀ ਮਦਦ ਕਰਦਾ ਹੈ ਇਹ ਜਾਣਨ ਲਈ ਕਿ ਤੁਸੀਂ ਜਿਸ ਮੁਸ਼ਕਲ ਨੂੰ ਝੇਲ ਰਹੇ ਹੋ",
    line2: "ਉਸਦਾ ਹੱਲ ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਵਿੱਚ ਦਿੱਤਾ ਗਿਆ ਹੈ ਜਾਂ ਨਹੀਂ।",
    button: "ਆਪਣੀ ਸਮੱਸਿਆ ਲੱਭੋ"
  }
};

// ✅ Handle language change
function changeLanguage() {
  const lang = document.getElementById("language-select").value;
  document.getElementById("welcome-title").innerText = translations[lang].welcome;
  document.getElementById("line1").innerText = translations[lang].line1;
  document.getElementById("line2").innerText = translations[lang].line2;
  document.getElementById("find-button").innerText = translations[lang].button;
}

