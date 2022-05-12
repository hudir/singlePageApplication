import logo from './logo.svg';
import './App.css';

const animals = [
  { label: "cat" },
  { label: "Turtle" },
  { label: "Elephan" },
  { label: "Monkey" },
  { label: "Horse" }
];

function App() {
  const var1='hudir';

  return (
    <div className="App">
      
      { 
       (var1) && (<h2>Welcome {var1}!</h2>)
      }

      <ul>
        {
          animals.map((el, index)=> (
            <li key={index}>{el.label} - {index}</li>
          ))
        }
      </ul>
     
    </div>
  );
}

export default App;
