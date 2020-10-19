import React, { Component } from 'react';
import PictureCard from './PictureCard';
import { pozele } from './pozele';

import './Picture.css';

class Picture extends Component {

  render() {

    const cardPicture = pozele.map((poza, i) => {
      return (
        <PictureCard
         key =  {pozele[i].id}
         numePoza = {pozele[i].numePoza}
         tumbPoza = {pozele[i].tumbPoza}
         descr =  {pozele[i].descr}
         tip = {pozele[i].tip}
         culori = {pozele[i].culori}
         dimens = {pozele[i].dimens}
       /> )
    });

    return (
      <div id='picts' className='ma3'>
        <div className='flex flex-wrap items-center justify-between'>
         {cardPicture}
        </div>
      </div>
    );
  }
}

export default Picture;
