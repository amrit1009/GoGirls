function goToProblemFinder() {
  document.getElementById("welcome-section").style.display = "none";
  document.getElementById("problem-section").style.display = "block";
}

function goBack() {
  document.getElementById("problem-section").style.display = "none";
  document.getElementById("welcome-section").style.display = "block";
}
