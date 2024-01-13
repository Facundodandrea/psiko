// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

import brand from '../../assets/img/brand.svg';
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`nav-container ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="nav-content">
        <div className="brandContainer flex">
          <img src={brand} alt="brand-logo" />
          <p>PSIKO</p>
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          <IoMenu className='icon'/>
        </button>
      </div>
      {isMenuOpen && (
        <div className="menu">
            <div className="head-menu">
                <h3>Menú</h3>
                <button className="close-button" onClick={closeMenu}>
                    <IoClose className='icon'/>
                    <p>Cerrar</p>
                </button>
            </div>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/   ">Saber sobre...</Link></li>
            </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
