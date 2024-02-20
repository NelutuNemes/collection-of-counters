let userValue = document.getElementById("userValue");
let resultElement = document.getElementById("result-element");
let presetButtons = document.querySelectorAll(".preset-button");
let startCountButton = document.getElementById("start-count-button");
let resetButton = document.getElementById("reset-button");

startCountButton.addEventListener("click", function () {
  count();
  hideGif();
});
resetButton.addEventListener("click", resetMyApp);

let acumulator = [];
let shiftResult = [];
let userChoice = 0;

setTimeout(function () {
  message();
}, 3000);

hideGif();
setTimeout(function () {
  showGif();
}, 5000);

// I add a 'blur' event to update userChoice
userValue.addEventListener("blur", function () {
  userChoice = parseInt(userValue.value);
  console.log(`The user entered value: ${userChoice}`);
});

for (let i = 0; i < presetButtons.length; i++) {
  presetButtons[i].addEventListener("click", function () {
    // I save the value of the button in a variable
    let buttonValue = parseInt(this.value);
    userChoice = buttonValue;
    console.log(`The new userChoice is: ${userChoice}`);
    userValue.placeholder = userChoice;
    this.classList.add("mark-element");

    // count();
  });
}

function count() {
  // I check if userChoice is set and non-zero
  if (userChoice !== 0) {
    for (let i = 0; i <= userChoice; i++) {
      acumulator.push(i);
    }

    sendResult();
  } else {
    console.log(`Enter a value or choose a preset`);
    alert("Enter a value or choose a preset !");
  }
}

function sendResult() {
  let intervalId = setInterval(function () {
    if (acumulator.length > 0) {
      let currentValue = acumulator.shift();
      resultElement.innerHTML = currentValue;

      console.log(`The current value is: ${currentValue}`);

      if (acumulator.length > 0) {
        console.log(`The current value is: ${currentValue}`);
        console.log(`Acumulator length is: ${acumulator.length}`);
      } else {
        console.log(`Acumulator length is: ${acumulator.length}`);
        console.log(
          `We have reached the end, the last element was: ${currentValue}`
        );
        finalMessage();
      }
    } else {
      clearInterval(intervalId); // Stop setInterval after displaying all elements
    }
  }, 1000);
}
function resetMyApp() {
  console.log(`The application was reset by user action.`);
  userValue.value = "";
  acumulator = [];
  userChoice = 0;
  resultElement.innerHTML = "0";
  hideGif();
  message();
  setTimeout(function () {
    showGif();
  }, 2000);

  userValue.placeholder = "Insert again here your own value"; // Resetez placeholder-ul
  presetButtons.forEach(function (button) {
    button.classList.remove("mark-element");
  });
}

function message() {
  let imgDiv = document.getElementById("img-div");
  imgDiv.innerHTML = "The App awaits your choice!";
  setTimeout(function () {
    imgDiv.innerHTML = "";
  }, 2000);
}
function finalMessage() {
  let imgDiv = document.getElementById("img-div");
  imgDiv.innerHTML = "Job done!";
  setTimeout(function () {
    imgDiv.innerHTML = "";
  }, 2000);
}

function showGif() {
  let gifImg = document.getElementById("gif-img");
  gifImg.style.display = "inline";
}
function hideGif() {
  let gifImg = document.getElementById("gif-img");
  gifImg.style.display = "none";
}
