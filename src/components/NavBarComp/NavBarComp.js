import React from 'react';
import './NavBarComp.css';

const NavBarComp = () => {
  return (
    <nav id = "nav-id" className="f6 fw6 mr3 flex tc tracked">
      <a className="linkuri link grow pa2 br3 black ml1 mr3" href="#about-id" title="Home">Home</a>
      <a className="linkuri link grow pa2 br3 black mr3" href="#contentLink" title="Picturi">Picturi</a>
      <a className="linkuri link grow pa2 br3 black mr3" href="#schi-id" title="Schite">Schite</a>
      <a className="linkuri link grow pa2 br3 black mr3" href="#biju-id" title="Bijuterii">Bijuterii</a>
      <a className="linkuri link grow pa2 br3 black mr3" href="#deco-id" title="Decoratiuni">Decoratiuni</a>
      <a className="linkuri link grow pa2 br3 black mr3" href="#carte-id" title="Agende / carti">Agende / carti</a>
      <a className="linkuri link grow pa2 br3 black mr1" href="#about-id" title="Despre mine">Despre mine</a>
    </nav>
  )
}

export default NavBarComp;
