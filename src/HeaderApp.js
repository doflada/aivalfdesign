import React from 'react';
import Logo from './components/Logo/Logo';
import Titles from './components/Titles/Titles';
import ByAuthor from './components/ByAuthor/ByAuthor';
import NavBarComp from './components/NavBarComp/NavBarComp';
import './HeaderApp.css';

function HeaderApp() {
  return (
    <header  id = "homeLink" className='antet ml2 mt1 mr2 br4 flex items-center justify-between'>
      <Logo />
      <Titles className='titlec' />
      <div className='naviaut flex flex-column justify-between pa2'>
        <ByAuthor />
        <NavBarComp />
      </div>
    </header>
  )
}

export default HeaderApp;
