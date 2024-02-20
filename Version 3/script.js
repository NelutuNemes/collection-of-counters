let userValue = document.getElementById("userValue");
let resultElement = document.getElementById("result-element");
let mainElement = document.getElementById("main-element");
let startButton = document.getElementById("start-button");
let resetButton = document.getElementById("reset-button");
let messageElement = document.getElementById("message");
let flag = false;

document.getElementById("start-button").addEventListener("click", () => {
  flag = false;
  count();
});

resetButton.addEventListener("click", resetMyApp);

async function count() {
  if (flag) {
    return;
  }

  userChoice = userValue.value;
  console.log(`The user entered the value :${userChoice}`);
  const limit = userChoice;
  if (limit <= 0) {
    messageElement.innerHTML = "Please insert a number greater then 0 !";
    setTimeout(() => {
      messageElement.innerHTML = "";
    }, 1500);
    return;
  }
  let i = 0;

  while (i <= limit && !flag) {
    if (i % 2 == 0) {
      mainElement.classList.add("alternate-border-color1");
      mainElement.classList.remove("alternate-border-color2");
    } else {
      mainElement.classList.remove("alternate-border-color1");
      mainElement.classList.add("alternate-border-color2");
    }

    console.log(`The iteration number in the while loop is:${i}`);
    resultElement.innerHTML = i;
    await delay(1000);
    i++;
    // Display each value at one second interval
    if (i == limit) {
      console.log(
        `The limit has been reached. The last display is coming  :${i}`
      );
    }
  }

  mainElement.classList.remove("alternate-border-color1");
  mainElement.classList.remove("alternate-border-color2");
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function resetMyApp() {
  console.log(`Resetting the app by user's action.`);
  flag = true;
  console.log(`Flag is now set to: ${flag}`);
  userValue.value = "";
  resultElement.innerHTML = "0";
  userValue.placeholder = "Insert a number";
}
