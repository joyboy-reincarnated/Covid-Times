import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header, { HeaderPhone } from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Faq from './components/Faq/Faq';
import Updates from './components/Updates/Updates';
import Contact from './components/Contact/Contact';

function App() {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <div className="App">
      <Router>
        <HeaderPhone open={open} setOpen={setOpen}/>
        <Header open={open} setOpen={setOpen} />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/faqs' element={<Faq/>}  />
          <Route path='/updates' element={<Updates/>} />
          <Route path='/contact' element={<Contact/>}  />
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
