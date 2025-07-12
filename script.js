function goToProblemFinder() {
  document.getElementById("welcome-section").style.display = "none";
  document.getElementById("problem-section").style.display = "block";
}

function goBack() {
  document.getElementById("problem-section").style.display = "none";
  document.getElementById("welcome-section").style.display = "block";
}
const problems = {
  "Domestic Violence": {
    explanation: "You may be experiencing physical, emotional, or economic abuse by a family member or partner.",
    law: "Protected under Protection of Women from Domestic Violence Act, 2005.",
    helpline: "Call 181 or 112 for emergency help."
  },
  "Dowry Harassment": {
    explanation: "Pressure to bring dowry, threats, or abuse related to dowry demands.",
    law: "Punishable under Section 498A of IPC and Dowry Prohibition Act, 1961.",
    helpline: "Call 181 or National Commission for Women: 011-2694 4805"
  },
  "Sexual Harassment at Work": {
    explanation: "Unwanted comments, touching, or advances by a co-worker, boss, or anyone at your workplace.",
    law: "Protected under POSH Act (Prevention of Sexual Harassment), 2013.",
    helpline: "Contact Internal Complaints Committee or call 1091."
  },
  "Cyber Harassment / Online Abuse": {
    explanation: "Threats, blackmail, or abuse through social media, messages, or internet.",
    law: "Covered under IT Act, 2000 and IPC 354D (Cyber Stalking).",
    helpline: "Report on cybercrime.gov.in or call 1930."
  },
  "Child Marriage / Forced Marriage": {
    explanation: "Being forced to marry underage or against your will.",
    law: "Illegal under Prohibition of Child Marriage Act, 2006.",
    helpline: "Call CHILDLINE 1098 or 181."
  },
  "other": {
    explanation: "Please call the helpline or talk to our assistant for custom help.",
    law: "We will try to guide you based on your unique situation.",
    helpline: "Call 181 or your local women’s helpline."
  }
};

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

function showProblemDetail(problemKey) {
  const detailDiv = document.getElementById("problem-detail");
  const data = problems[problemKey];
  detailDiv.innerHTML = `
    <h3>${problemKey}</h3>
    <p><strong>Explanation:</strong> ${data.explanation}</p>
    <p><strong>Law:</strong> ${data.law}</p>
    <p><strong>Helpline:</strong> ${data.helpline}</p>
  `;
}
// Populate the list when the page loads
document.addEventListener('DOMContentLoaded', function() {
  searchProblems();
});
