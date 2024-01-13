import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/home/Home';
import DetailsPage from './pages/details/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/details/:feeling" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
