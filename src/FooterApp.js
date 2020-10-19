import React from 'react';
import './FooterApp.css';

function FooterApp() {
  return (
    <div id = "footerLink" className='footl flex items-center ma1 white '>
      <h5 className='athelas ml3'>Copyright &#169; {new Date().getFullYear()} Aivalf Design</h5>
      <h5 className='emal mr3 athelas'> <a href='mailto: aivalf@nyad.eu'>email: aivalf@nyad.eu</a></h5>
    </div>
  )
}

export default FooterApp;
