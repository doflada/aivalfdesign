import React from 'react';
import Picture from './components/ContentComp/Picture.js';

import './ContentApp.css';

function ContentApp() {
  return (
    <div id='contentLink' className='ma2'>
      <div className = 'titCo f3 pa2 br4 i tc white'>
        Wonderful gallery of paintings by me:
      </div>
      <div>
        <Picture />
      </div>
    </div>
  )
}

export default ContentApp;
