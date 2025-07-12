// Language Translations
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

// Language change handler
function changeLanguage() {
  const lang = document.getElementById("language-select").value;
  const t = translations[lang];

  document.getElementById("welcome-title").innerText = t.welcome;
  document.getElementById("line1").innerText = t.line1;
  document.getElementById("line2").innerText = t.line2;
  document.getElementById("find-button").innerText = t.button;
}

// Button action (you can update later)
function goToProblemFinder() {
  window.location.href = "problems.html"; // or your problem-finder page
}


