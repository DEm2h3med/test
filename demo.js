// demo.js

// 1. Unused variable
let unusedVar = "I am never used";

// 2. Dangerous DOM manipulation (imagine this in a browser context)
function unsafeInsert(userInput) {
  document.getElementById("output").innerHTML = "Welcome " + userInput;
}

// 3. Weak equality and bad validation
function checkAge(age) {
  if (age == "18") {
    console.log("You are 18");
  }
}

// 4. Empty catch block
function riskyOperation() {
  try {
    let result = nonExistentFunction();
  } catch (e) {
    // Ignoring all errors
  }
}

// 5. Function never called
function deadFunction() {
  console.log("I do nothing");
}

// 6. Global variable leak
secret = "This should be declared with let or const";

// 7. Poor naming and logic
function doSomething(stuff) {
  if (stuff = true) {
    console.log("Stuff is true");
  }
}

// Simulated call with unsafe input
unsafeInsert("<img src=x onerror=alert(1)>");
checkAge("18");
riskyOperation();
