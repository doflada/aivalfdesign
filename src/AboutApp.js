import React from 'react';
import imagFla from './logoAbout.jpeg';
import './AboutApp.css';

function AboutApp() {
  return (
    <div id= "about-id" className='flex ma1 items-center '>
      <img className='pozaa br4 ma1' alt='Flavia' src={imagFla} />
      <div className=''>
        <p className='descrierea ml4 lh-title i b'> &bull; inginer chimist <br/>
                                                &bull; pasionata de desen si pictura <br/>
                                                &bull; creativa si indemanatica</p>
        <p className='descrierea ml2 3rem i b'>Va invit sa studiati lucrarile mele si daca sunt care va plac nu ezitati sa ma contactati.</p>
      </div>
    </div>
  )
}

export default AboutApp;
