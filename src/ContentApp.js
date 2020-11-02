import React from 'react';
import Picture from './components/ContentComp/Picture';
import { pozele } from './components/ContentComp/pozele';
import { schitele } from './components/ContentComp/schitele';

import './ContentApp.css';

function ContentApp() {
  return (
    <div id='contentLink'>
      <div className='ma2'>
        <div className = 'titCo f3 pa2 br4 b i tc white'>
          Picturi:
        </div>
        <div>
          <Picture pozele = { pozele } />
        </div>
      </div>
      <div className='ma2'>
        <div className = 'titCo f3 pa2 br4 b i tc white'>
          Schite:
        </div>
        <div>
          <Picture pozele = { schitele } />
        </div>
      </div>
    </div>
  )
}

export default ContentApp;
