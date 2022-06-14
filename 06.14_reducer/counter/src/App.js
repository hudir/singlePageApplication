import { useReducer } from 'react';
import './App.css';

const initialState = {count : 0}

function reducer(preCounter,action){
  switch(action.type){
    case "increment" :
      return {count: preCounter.count+1};
    
    case "decrement" :
      return {count:preCounter.count-1};

    case "reset" :
      return initialState

    default:
      return preCounter;

  }
}

function App() {
  const [counter, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <header className="App-header">

        <button onClick={()=>dispatch({type:"increment"})}>+</button>

        Count: {counter.count}

        <button onClick={()=>dispatch({type:"decrement"})}>-</button>

        <button onClick={()=>dispatch({type:"reset"})}>reset</button>


      
      </header>
    </div>
  );
}

export default App;
