import React from 'react';
import imagFla from './imgAivalf.jpg';
import './ByAuthor.css';

const ByAuthor = () => {
  return (
    <div className='flex items-center justify-between '>
      <div className='autpoz moon-gray f4 i pr1'>
        by Flavia
      </div>
      <div>
        <img className='poza grow br4 mr3' alt='Flavia' src={imagFla} />
      </div>
    </div>
  )
}

export default ByAuthor;
