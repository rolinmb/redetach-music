import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Blog from './components/Blog';
import Shows from './components/Shows';
import Donations from './components/Donations';
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
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/shows' element={<Shows />}/>
          <Route path='/donations' element={<Donations />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;