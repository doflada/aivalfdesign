import React from 'react';
import logo from './logo.jpeg';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ml3 mt1 tc w-15'>
      <img className='logo grow' alt='logo Aivalf' src={logo} />
    </div>
  )
}

export default Logo;
