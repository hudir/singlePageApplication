import Header from './components/s/Header';
import './App.css';
import Profile from './components/s/Profile';
import { useContext } from 'react';
import Context from './store/context';

function App() {
  const {theme,btnClickHandler,user} = useContext(Context)
  return (
    <div className="App">
      <header className={theme}>

        <h1>Change Color with Login status</h1>
       
        <Header />
       { user && <Profile />}

       <button onClick={btnClickHandler} >Login</button>
      
      </header>
    </div>
  );
}

export default App;
