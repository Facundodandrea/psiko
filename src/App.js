import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../src/components/navbar/Navbar'

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App bg-grey">
      <Navbar />
    </div>
    </BrowserRouter>
  );
}

export default App;
