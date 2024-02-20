let mainElement = document.getElementById("main-element");
let resultElement = document.getElementById("result-element");
let startButton = document.getElementById("start-button");
let resetButton = document.getElementById("reset-button");

startButton.addEventListener("click", masterCounter);
resetButton.addEventListener("click", resetMyApp);
var counter = 0;

var intervalId;

function masterCounter(startCount) {
  intervalId = setInterval(startCount, 1000);

  function startCount() {
    if (counter % 2 === 0) {
      mainElement.classList.add("alternate-border-color");
    } else {
      mainElement.classList.remove("alternate-border-color");
    }

    counter++;
    console.log(`The value of the counter in this iteration is: ${counter}`);

    resultElement.innerHTML = counter;

    if (counter === 10) {
      console.log(
        `We have reached the end, the value of the counter is : ${counter}`
      );
      clearInterval(intervalId);
    }
  }
}

function resetMyApp() {
  counter = 0;
  resultElement.innerHTML = "0";
  clearInterval(intervalId);
  console.log(`The counter was reset by the user`);
}
