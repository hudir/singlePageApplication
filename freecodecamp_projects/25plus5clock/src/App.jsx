import { useState } from 'react';
import './App.css';

function App() {
  const br = useState(5)
  , se = useState(25)


  return (
    <div className="App">
      <header className="App-header">

        <div className="break">
          <button id="break-increment">+</button>
          <span id="break-label">Break Length:  </span>
          <button id="break-decrement">-</button>
          <p id="break-length">{br}</p>
          
        </div>

        <div className="session">
          <button id="session-increment">+</button>
          <span id="session-label">Session Length</span>
          <button id="session-decrement">-</button>
          <p id="session-length">{se}</p>
        </div>

        <div className="timer">
          <h2 id="timer-label">id="timer-label"</h2>
          <h1 id="time-left">id="time-left"</h1>

          <button id="start_stop">Stop/Go</button>
          <button id="reset">Reset</button>
        </div>

      
      </header>
    </div>
  );
}

export default App;
