import React from 'react';
import imagFla from './imgAivalf.jpg';
import './AboutApp.css';

function AboutApp() {
  return (
    <div className='flex ma1 items-center '>
      <img className='pozaa br4 ma1' alt='Flavia' src={imagFla} />
      <div className=''>
        <p className='descrierea ml4 3rem i b'>Pictez, desenez, creionez si produc mie si apropiatilor relaxare ! Sunt un inginer care in timpul liber ma relaxez .</p>
        <p className='descrierea ml2 3rem i b'>Va invit sa studiati lucrarile mele si daca sunt care va plac nu ezitati sa ma contactati.</p>
      </div>
    </div>
  )
}

export default AboutApp;
