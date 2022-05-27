import logo from './logo.svg';
import './App.css';
import Form from './Form'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Form with controlled input</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <Form />
      </header>
      
    </div>
  );
}

export default App;
