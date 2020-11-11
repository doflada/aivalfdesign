import React from 'react';
import Picture from './components/ContentComp/Picture';
import { pozele } from './components/ContentComp/pozele';
import { schitele } from './components/ContentComp/schitele';
import { bijuterii } from './components/ContentComp/bijuterii';
import { decoratiuni } from './components/ContentComp/decoratiuni';

import './ContentApp.css';

function ContentApp() {
  return (
    <div id='contentLink'>
      <div id = "pict-id" className='ma2'>
        <div className = 'titCo f3 pa2 br4 b i tc white'>
          Picturi:
        </div>
        <div>
          <Picture pozele = { pozele } />
        </div>
      </div>
      <div  id = "schi-id" className='ma2'>
        <div className = 'titCo f3 pa2 br4 b i tc white'>
          Schite:
        </div>
        <div>
          <Picture pozele = { schitele } />
        </div>
      </div>
      <div id = "biju-id" className='ma2'>
        <div className = 'titCo f3 pa2 br4 b i tc white'>
          Bijuterii:
        </div>
        <div>
          <Picture pozele = { bijuterii } />
        </div>
      </div>
      <div id = "deco-id" className='ma2'>
        <div className = 'titCo f3 pa2 br4 b i tc white'>
          Decoratiuni:
        </div>
        <div>
          <Picture pozele = { decoratiuni } />
        </div>
      </div>
    </div>
  )
}

export default ContentApp;
