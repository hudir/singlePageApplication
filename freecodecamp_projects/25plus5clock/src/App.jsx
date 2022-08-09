import { useEffect, useState } from 'react';
import './App.css';

const toMMSS = num =>{
  if(!isNaN(+num)) {
    if(+num<10) return '0'+num+':00'
    else return num+':00'
  }
  else return num
}

function App() {
  const [breakLength, setBreakLength] = useState(5)
  , [sessionLength, setSessionLength] = useState(25)
  , [run, setRun] = useState(false)
  , [currentSession, setCurrentSession] = useState('Session')
  , [timeLeft, setTimeLeft] = useState("25:00")
  

  const resetHandler = e => {
    setRun(false);
    setBreakLength(5);
    setSessionLength(25);
    setCurrentSession('Session');
    setTimeLeft(toMMSS(sessionLength))  
    document.querySelector('audio').pause();
    document.querySelector('audio').currentTime = 0;
  }

  const stopGoHandler = e => {
    setRun(p=>!p)
  }
  
  // setTimeLeft running
  useEffect(()=>{
    if(run){  
      const interval = setInterval(()=>{
        let min = timeLeft.split(':')[0]
           ,sec = timeLeft.split(':')[1]
        
           if(min > 0 || sec > 0){
            if(sec > 0) sec--;
            else {
              min--;
              sec = 59
            }

            min = min.toString().length < 2 ? `0${min}` : min
            sec = sec.toString().length < 2 ? `0${sec}` : sec
            setTimeLeft(min+':'+sec) 
            if(min == '00' && sec == '00') document.querySelector('audio').play()   
            
           } else {
            // change currentSession and play the sound
            if(currentSession == 'Session') {
              setCurrentSession('Break');
              setTimeLeft(toMMSS(breakLength))
            }  else {
              setCurrentSession('Session')
              setTimeLeft(toMMSS(sessionLength))
            }
          }
      }, 1000)
      return () => clearInterval(interval);
    }
  },[run, timeLeft])

  // update the Length to timeleft
  useEffect(()=>{
      if(currentSession === 'Session'){
        setTimeLeft(toMMSS(sessionLength))
      } else if (currentSession === 'Break'){
        setTimeLeft(toMMSS(breakLength))
      }
  },[sessionLength, breakLength,])



  return (
    <div className="App">
      <header className="App-header">

        <div className="break">
          <button id="break-increment" onClick={e=>{
            if(breakLength<60 && !run)
            setBreakLength(p=>+p+1)
          }}>+</button>
          <span id="break-label">Break Length:  </span>
          <button id="break-decrement" onClick={e=>{
            if(breakLength>1 && !run)
            setBreakLength(p=>p-1)
          }}>-</button>
          <p id="break-length">{breakLength}</p>
          
        </div>

        <div className="session">
          <button id="session-increment" onClick={e=>{
            if(sessionLength<60 && !run)
             setSessionLength(p=>+p+1)
          }}>+</button>
          <span id="session-label">Session Length</span>
          <button id="session-decrement" onClick={e=>{
            if(sessionLength>1 && !run)
             setSessionLength(p=>p-1)
          }}>-</button>
          <p id="session-length">{sessionLength}</p>
        </div>

        <div className="timer">
          <h2 id="timer-label">{currentSession}</h2>
          <h1 id="time-left">{timeLeft}</h1>

          <button id="start_stop" onClick={e=>stopGoHandler(e)}>Stop/Go</button>
          <button id="reset" onClick={e=>resetHandler(e)}>Reset</button>
        </div>

      
      </header>

      <audio src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" id="beep"></audio>
    </div>
  );
}

export default App;
