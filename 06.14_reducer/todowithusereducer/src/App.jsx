import './App.css';
import { useReducer } from 'react';

const initial = [
  {id:0, title: "learn Redux", complete: false},
  {id:1, title: "learn Reducer", complete: false},
  {id:2, title: "work out", complete: false},
];

function todoReducerFunc(prevTodos, action){
  switch(action.type){
    case "DO":
      return (prevTodos.map(x=>x.id===action.id ? {...x, complete:true} : x));

    case "UNDO":
      return (prevTodos.map(x=>x.id===action.id ? {...x, complete:false} : x));

    case "ADD":
      return [...prevTodos,{
        id: prevTodos.length,
        title:action.input,
        complete:false
      }]

    default :
      return prevTodos;
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducerFunc,initial);
  // console.log(todos)

  return (
    <div className="App">
      <header className="App-header">

        <form onSubmit={e=>{
          e.preventDefault();
          dispatch({
          type: "ADD",
          input:e.target.input.value
        });
        e.target.input.value=""
        }}>
          <input type="text" name="input"/>
          <button>add todo</button>
        </form>

        <ul>
          {todos.map(x=>(
            <li key={x.id}>
              <input type="checkbox"
              id={x.id+"labelID"}
              checked={x.complete} 
              onChange={()=>dispatch({
                type: x.complete ? "UNDO" : "DO",
                id:x.id
              })}/>
             
              <label htmlFor={x.id+"labelID"}>{x.title}</label>
            </li>
          ))}
        </ul>
      
      </header>
    </div>
  );
}

export default App;
