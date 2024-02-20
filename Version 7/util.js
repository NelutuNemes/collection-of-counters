//test communication file 'index.html' with file 'util.js'
console.log("Start script 'util.js' link test !");

//mandatory with arguments, will not work
//in the form of 'flashBorder()' !!!
export function flashBorder(mainElement, counter) {
  console.log("Import successful, the 'flashBorder' function works");
  if (counter % 2 == 0) {
    mainElement.classList.add("alternate-border-color");
  } else {
    mainElement.classList.remove("alternate-border-color");
  }
}

//mandatory with arguments, will not work
//in the form of 'resetMyApp()' !!!
export function resetMyApp(counter, resultElement) {
  console.log("Import successful, the 'resetMyApp' function works");
  counter = 0;
  resultElement.innerHTML = "0";
  console.log("The App has been reset!");
}
