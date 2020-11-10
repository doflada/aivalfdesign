import React from 'react';
import Logo from './components/Logo/Logo';
import Titles from './components/Titles/Titles';
import ByAuthor from './components/ByAuthor/ByAuthor';
import NavBarComp from './components/NavBarComp/NavBarComp';
import './HeaderApp.css';

function HeaderApp() {
  return (
    <header className='antet ml2 mt1 mr2 br4 flex items-center justify-between'>
      <div className = "logotit flex">
        <Logo />
        <Titles className='titlec' />
      </div>
      <div className='naviaut flex pa2'>
        <NavBarComp />
        <ByAuthor />
      </div>
    </header>
  )
}

export default HeaderApp;
