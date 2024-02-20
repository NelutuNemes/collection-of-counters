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
let intervalId;

setTimeout(function () {
  message();
}, 3000);

hideGif();
setTimeout(function () {
  showGif();
}, 5000);

// Add a blur event to be able to update userChoice
userValue.addEventListener("blur", function () {
  userChoice = parseInt(userValue.value);
  console.log(`The user entered the value: ${userChoice}`);
  console.log(`The new 'userChoice' value is: ${userChoice}`);
});

console.log(
  `At the start of the application, the value of 'userChoice' is: ${userChoice}`
);

for (let i = 0; i < presetButtons.length; i++) {
  presetButtons[i].addEventListener("click", function () {
    // Save the button value in a variable
    let buttonValue = parseInt(this.value);
    userChoice = buttonValue;
    console.log(`The new userChoice is: ${userChoice}`);
    userValue.placeholder = userChoice;
    this.classList.add("mark-element");
  });
}

function count() {
  // Check if userChoice is set and non-zero
  if (userChoice !== 0) {
    for (let i = 0; i <= userChoice; i++) {
      acumulator.push(i);
    }
    console.log(
      `We have an array 'accumulator': (${acumulator}), which we can process!`
    );
    sendResult();
  } else {
    console.log(`Enter a value or choose a preset`);
    alert("Enter a value or choose a preset");
  }
}

function sendResult() {
  intervalId = setInterval(function () {
    if (acumulator.length > 0) {
      hideGif();
      console.log(
        `The 'accumulator' array has the following elements: ${acumulator}`
      );

      const minElement = Math.min(...acumulator);
      console.log("The smallest element:", minElement);

      const minIndex = acumulator.indexOf(minElement);
      console.log("The smallest element has the index:", minIndex);

      //remove the smallest element from the array
      let currentValue = acumulator.splice(minIndex, 1);
      console.log(
        `The element removed with 'splice' will be : ${currentValue}`
      );
      //display the element in the DOM
      resultElement.innerHTML = currentValue[0];

      console.log(
        `The 'accumulator' array after applying 'splice' is now: ${acumulator}`
      );
      console.log(
        `The length of the 'accumulator' array is now : ${acumulator.length},elemente`
      );

      if (currentValue.length <= acumulator.length) {
        console.log(
          `${currentValue.length} < ${acumulator.length}; We can continue the iterations and the application of the 'splice'!`
        );
      } else {
        console.log(
          `We have reached the end, the last element was: ${currentValue}, there are no more items to display!`
        );
        finalMessage();
      }
    } else {
      clearInterval(intervalId);
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
  clearInterval(intervalId);

  userValue.placeholder = "Insert here, again your own value in seconds";
  presetButtons.forEach(function (button) {
    button.classList.remove("mark-element");
  });
}

function message() {
  let imgDiv = document.getElementById("img-div");
  imgDiv.innerHTML = "The App awaits your choice !";
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
