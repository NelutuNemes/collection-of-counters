let resultElement = document.getElementById("result-element");
let watchVariable = document.getElementById("my-clock");
let startButton = document.getElementById("start-button");
let resetButton = document.getElementById("reset-button");
let counter = 0;
let flag = false;

startButton.addEventListener("click", () => startCount(0));
resetButton.addEventListener("click", resetMyApp);

counter = 0;

function startCount(iteration) {
  if (flag) {
    flag = false;
    iteration = 0;
  }

  if (iteration < 10) {
    //I get the seconds
    let currentSecond = new Date().getSeconds();
  console.log(`The counter was started by the user's action`);

    setTimeout(() => {
      if (flag) {
        return;
      }

      counter = counter + 1;
      resultElement.innerHTML = counter;
      let newCurrentSecond = new Date().getSeconds();

      //here I check the second change
      if (newCurrentSecond !== currentSecond && !flag) {
        console.log(`The current second is : ${currentSecond}`);
        console.log(`The new second  is: ${newCurrentSecond}`);
        console.log(`The value of the counter is:${counter}`);
        startCount(iteration + 1);
      }
    }, 1000); // Each digit will be displayed at 1 second interval
    //due to setTimeout not due to second change
  } else {
    console.log(
      `We have reached the limit value : ${iteration} , there is no more number to display`
    );
  }
}

function resetMyApp() {
  flag = true;
  counter = 0;
  resultElement.innerHTML = "0";
  console.log(`The counter was stopped by the user's action`);
  console.log(flag);
}

function updateClock() {
  let currentDate = new Date();
  watchVariable.innerHTML = currentDate.toLocaleTimeString();
}
// Updates the time display every second
setInterval(updateClock, 1000);
