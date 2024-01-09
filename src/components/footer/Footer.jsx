import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css';

import brand from '../../assets/img/brand.svg';

export const Footer = () => {
  return (
    <footer className='footerContainer'>
        <div className='footerContent'>
            <div className='brandContainer'>
                <img src={brand} alt="brand-logo" />
                <p>PSIKO</p>
            </div>
            <div className='containerLinks'>
                <ul>
                    <li className='footerLinks'><Link to="/">Artículos</Link></li>
                </ul>
            </div>
        </div>
        <div className=' footerRights'>
            <div className='rightsContent'>
                <p>2024 TODOS LOS DERECHOS RESERVADOS</p>
                <p>Desarrollado por Facundo Esteban D'Andrea</p>
            </div>
        </div>
    </footer>
  )
}
