import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Blogs from './components/pages/Blogs';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Blog from './components/pages/Blog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
      </header>
      
      <main>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/blogs' element={ <Blogs /> }/>
        <Route path='/blog/:id' element={ <Blog /> }/>
        <Route path='/about' element={ <About/> }/>
        <Route path='/contact' element={ <Contact/> }/>
        <Route path='/*' element={ <h1>404 Page not fund</h1> }/>
      </Routes>
      </main>

    <Footer />

    </div>
  );
}

export default App;



