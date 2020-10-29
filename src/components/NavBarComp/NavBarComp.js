import React from 'react';
import './NavBarComp.css';

const NavBarComp = () => {
  return (
    <nav className="f6 fw6 ttu bb bw1 b--gray pb1 mr5 tracked">
      <a className="linkuri link grow pa1 br3 black dib ml1 mr3" href="#homeLink" title="Home">Home</a>
      <a className="linkuri link grow pa1 br3 black dib mr3" href="#contentLink" title="Gallery">Gallery</a>
      <a className="linkuri link grow pa1 br3 black dib mr1" href="#footerLink" title="Contact">Contact</a>
    </nav>
  )
}

export default NavBarComp;
