const userInput = document.location.hash.substring(1);
// VULNERABILITY: User input is directly written to innerHTML
document.getElementById("output").innerHTML = userInput;
