import './App.css';
import { Routes,Route} from 'react-router-dom'
import Home from "./components/pages/Home"
import About from './components/pages/About';
import Error from './components/pages/Error';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import Navbar from './components/pages/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
     
      <main>
         <Routes>
             <Route path='/' element={ <Home /> }></Route>

             <Route path='/about' element={ <About /> }></Route>
             <Route path='/contact' element={ <Contact /> }></Route>
     
             <Route path='*' element={ <Error /> }></Route> 
         </Routes>
      </main>
     
      <Footer />
    </div>
  );
}

export default App;
