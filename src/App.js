import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Instrumentals from './components/Instrumentals';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/instrumentals' element={<Instrumentals />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;