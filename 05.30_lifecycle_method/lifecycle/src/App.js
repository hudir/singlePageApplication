import './App.css';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <User myProp='cat' />
      </header>
    </div>
  );
}

export default App;
