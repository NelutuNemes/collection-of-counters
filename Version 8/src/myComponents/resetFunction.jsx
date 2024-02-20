export function resetMyApp(setCount, isRunningRef) {
    console.log("Import successful, 'resetMyApp' function works");
    isRunningRef.current = false; // Oprim efectele secundare ale startCount
    setCount( 0 );
    console.log("The application was reset to the user's action!");
  }