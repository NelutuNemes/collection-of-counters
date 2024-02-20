let messagesElement = document.getElementById("messages");
let messagesElement2 = document.getElementById("messages-2");

let resultElement = document.getElementById("result");
let resultElement2 = document.getElementById("result-2");

let startButton = document.getElementById("start-button");
let startButton1 = document.getElementById("start-button-1");
let startButton2 = document.getElementById("start-button-2");
let resetButton = document.getElementById("reset-button");


resultElement.innerText = "0";
resultElement2.innerText = "0";


startButton.addEventListener("click", () => {
   masterCount()
   startCount2()
});
startButton1.addEventListener("click", masterCount);
startButton2.addEventListener("click", startCount2);
startButton2.addEventListener("click", startCount2);
resetButton.addEventListener("click", resetApp);


// nested functions version
let counter = 0;
let interval;

function masterCount(startCount) {
    if(counter!=0) {
        messagesElement.innerText = "You must reset the previous value !!!"
        setTimeout(() => {
            messagesElement.innerText = "";
        }, 2000)
        return
    }

    interval = setInterval(startCount,1000);

    function startCount() {

        
        counter++;
        console.log(`Counter current value is: ${counter}`);
        resultElement.innerText = counter;

        if (counter === 5) {
            console.log(`Counter value : ${counter}, Limit value of counter are : 10 `);
            console.log(`App finish count operation!`);
            clearInterval(interval);
            messagesElement.innerText = "Count 1 App job done !"
            setTimeout(() => {
                messagesElement.innerText = "";
            },2000)
        }
    }
}

// single function version
let counter2 = 0;
let interval2;

function startCount2() {
    if(counter2!=0) {
        messagesElement2.innerText = "You must reset the previous value !!!"
        setTimeout(() => {
            messagesElement2.innerText = "";
        }, 2000)
        return
    }

 interval2 = setInterval(() => {
        counter2++;
        console.log(`Current valueof counter2 is : ${counter2}`);
        resultElement2.innerText = counter2;


    if (counter2 === 5) {
        console.log(`Counter value : ${counter2}, Limit value of counter are : 10 `);
        console.log(`App finish count operation!`);
        clearInterval(interval2);
        messagesElement2.innerText = "Count 2 App job done !"
        setTimeout(() => {
            messagesElement2.innerText = "";
        },2000)

    }

    }, 1000);

}

//reset function

function resetApp() {
    counter = 0;
    counter2 = 0;
    resultElement.innerText = "0";
    resultElement2.innerText = "0";
    clearInterval(interval);
    clearInterval(interval2);
    messagesElement.innerText = "App have been reset by user action!";
    setTimeout(() => {
        messagesElement.innerText = "";
    }, 2000);
    console.log(`App have been reset by user action!`);

}