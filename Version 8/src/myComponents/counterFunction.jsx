
export function startCount( setCurrentCount, isRunningRef) {
  isRunningRef.current = true; 
  console.log("Import successful, 'startCount' function working");

  const intervalId = setInterval(() => {

    if (isRunningRef.current) {
      setCurrentCount((prevCount) => {
        const newCount = prevCount + 1;
        console.log(`The value of the 'counter' in this iteration is: ${newCount}`);
        if (newCount >= 10) {
          clearInterval(intervalId);
          console.log(`At the end, the value of the 'counter' was : ${newCount}`);
          isRunningRef.current = false; // Set isRunningRef.current to false to stop other timers or actions
        }
        return newCount;
      });
    }

  }, 1000);
}
  