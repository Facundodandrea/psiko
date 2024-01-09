import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../src/components/navbar/Navbar'

import './App.css';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App bg-grey">
      <Navbar />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
