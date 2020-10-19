import React from 'react';
import logo from './logo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ml3 tc w-15'>
      <img className='logo grow br-100' alt='logo Aivalf' src={logo} />
    </div>
  )
}

export default Logo;
