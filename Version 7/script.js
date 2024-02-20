//test communication file 'index.html' with file 'index.js'
console.log("Start script 'script.js' link test !");

//import function from the 'util.js' file
import { flashBorder, resetMyApp } from "./util.js";

var counter = 0;

let mainElement = document.getElementById("main-element");
let resultElement = document.getElementById("result-element");
let resetButon = document.getElementById("reset-button");
let startButton = document.getElementById("start-button");

startButton.addEventListener("click", masterCounter);

//we cannot call the simple click function with its name 'resetMyApp',
//must be surrounded by an anonymous function that will be called on click,
//and in turn it will call the proper function with the passed arguments

resetButon.addEventListener("click", () => {
  resetMyApp(
    counter,
    resultElement,
    clearInterval(intervalId),
    mainElement.classList.remove("alternate-border-color")
  );
});

var intervalId;

function masterCounter(startCount) {
  intervalId = setInterval(startCount, 1000);

  function startCount() {
    // we call the function (brought here by import), but we have to provide it with arguments
    flashBorder(mainElement, counter);

    counter++;
    console.log(`The value of the 'counter' in this iteration is: ${counter}`);

    resultElement.innerHTML = counter;

    if (counter === 10) {
      console.log(`We have reached the end, the value of the 'counter' is: ${counter}`);
      clearInterval(intervalId);
    }
  }
}
