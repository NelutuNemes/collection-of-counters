import { useState, useRef } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { startCount } from './myComponents/counterFunction.jsx';
import { resetMyApp } from './myComponents/resetFunction.jsx';
import MY_TITLE from './myComponents/Title.jsx';

function App() {
  const [count, setCount] = useState(0);
  const isRunningRef = useRef(false);

  const handleStartCount = () => {
    startCount(setCount, isRunningRef);
  };

  const handleResetApp = () => {
    resetMyApp(setCount, isRunningRef);
  };

  return (
    <>
      <div id='container'>
        <MY_TITLE/>
        <div id='items-container'>

          <div id='items'>
            <h1 id='results'>{count}</h1>
            <div className="card">
              <button id='start-button' onClick={handleStartCount}>
                Start Count
              </button>
              <button id='reset-button' onClick={handleResetApp}>
                Reset App
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
