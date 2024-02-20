let userValue = document.getElementById("userValue");
let resultElement = document.getElementById("result-element");
let mainElement = document.getElementById("main-element");
let startButton = document.getElementById("start-button");
let resetButton = document.getElementById( "reset-button" );
let messageElement = document.getElementById("message")

startButton.addEventListener("click", () => {
  getUserValue(), count();
});
resetButton.addEventListener( "click", resetMyApp );


let acumulator = [];
let mapResult = [];
let intervalId;

function getUserValue() {
  userChoice = userValue.value;
    console.log( `The user entered the value :${ userChoice }` );
    if ( userChoice <= 0 )
    {
        messageElement.innerText = "Please insert max value !" 
        setTimeout( () => {
            messageElement.innerText= "" 
        },1500)
    }
}

function count() {
  userChoice = userValue.value;
  console.log(userChoice);

  for (let i = 0; i <= userChoice; i++) {
    acumulator.push(i);
  }
  console.log(acumulator);

  //Get, extract the elements from the array using the map method

  mapResult = acumulator.map(function (item) {
    return item;
  });

  sendResult();
}
//I am building a function that will send the results to the display
function sendResult() {
  let index = 1;

  intervalId = setInterval(function () {
    if (index < mapResult.length) {
      resultElement.innerHTML = mapResult[index];

      flashSimulatorEfect();

      console.log(`Old index: ${index}`);
      console.log(`The value is: ${mapResult[index]}`);

      index++;

      console.log(`Updated index: ${index}`);
      console.log(`The current value is: ${mapResult[index]}`);
    } else {
      clearInterval(intervalId); // I stop setInterval after displaying all elements
      mainElement.classList.remove("alternate-border-color1");
    }
  }, 1000);
}
function flashSimulatorEfect() {
  mainElement.classList.toggle("alternate-border-color1");
}

function resetMyApp() {
  console.log(`The application was reset by user action.`);
  userValue.value = "";
  acumulator = [];
  resultElement.innerHTML = "0";
  userValue.placeholder = "Insert max number";
  clearInterval(intervalId);
}
