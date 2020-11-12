import React from 'react';
import ingArt from './logoAbout.jpeg';
import portoRO from './PortfolioAivalfRO.pdf';
import logoPortoRO from './logoPortofoliuRO.png';
import './AboutApp.css';

function AboutApp() {
  return (
    <div id= "about-id" className='flex ma1 items-center '>
      <img className='pozaa br4 ma1' alt='ingArtist' src={ingArt} />
      <div className=''>
        <p className='descrierea ml4 lh-title i b'> &bull; inginer chimist <br/>
                                                &bull; pasionata de desen si pictura <br/>
                                                &bull; creativa si indemanatica</p>
        <p className='descrierea ml2 3rem i b'>Va invit sa studiati lucrarile mele si daca sunt care va plac nu ezitati sa ma contactati.</p>
      </div>
      <div className='descrierea ml2 3rem i b'>
        Puteti descarca portofoliul de prezentare de aici ->
      </div>
      <a href = {portoRO} target = "_blank" rel="noopener noreferrer">
        <img className='logoPort ma1' alt='logoPortofoliu' src={logoPortoRO} />
      </a>
    </div>
  )
}

export default AboutApp;
