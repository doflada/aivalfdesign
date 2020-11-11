import React from 'react';
import './FooterApp.css';

function FooterApp() {
  return (
    <div id = "footerLink" className='footl flex justify-between ml2 mt1 mr2 br4 mb2 white '>
      <h5 className='athelas ml3'>Copyright &#169; {new Date().getFullYear()} Aivalf Design</h5>
      <h5 className='emal mr3 athelas'> <a href='mailto: aivalf.design@gmail.com'>email: aivalf.design@gmail.com</a></h5>
    </div>
  )
}

export default FooterApp;
