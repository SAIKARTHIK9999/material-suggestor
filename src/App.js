import React from 'react';
import { Route, Routes} from 'react-router-dom';

import './input.css';
import './App.scss';
import { About, Footer, Header } from './container'
import {Navbar, Login, Contact, Searchmaterials, Logout, About_m,Choose,Application} from './components';

const App = () => {
  
  return (
    <div className='app'>
        <Navbar />
        
          <Routes>
            <Route path="/Login" element={<Login />}/>
            <Route path="/Contact" element={<Contact />}/>
            <Route path="/Logout" element={<Logout />}/>
            <Route path="/About_m" element={<About_m />}/>
            <Route path="/Searchmaterials" element={<Searchmaterials />}/>
            <Route path="/Choose" element={<Choose />}/>
            <Route path='/Application' element={<Application/>}/>
          </Routes>
      
        <Header />
        <About />
        <Footer />
    </div>
  )
}

export default App