import React from 'react';
import HeaderApp from './HeaderApp';
import AboutApp from './AboutApp';
import ContentApp from './ContentApp';
import FooterApp from './FooterApp';

import './App.css';

function App() {
  return (
    <div id='main-id' className='flex justify-between flex-column'>
        <HeaderApp />
      <div className = 'scroll'>
        <AboutApp />
        <ContentApp />
      </div>
      <FooterApp />
    </div>
  );
}

export default App;
