import React, { Component} from 'react';
import Modal from './Modal';

import './PictureCard.css'

class PictureCard extends Component {

  state = {
    noEnter: false,
    isZoom: false
  };

  pictureEnter = () => {
    this.setState({
      noEnter: true
    });
  }

  pictureLeave = () => {
    this.setState({
      noEnter: false
    });
  }

  zoomIn = () => {
    this.pictureLeave();
    this.setState({isZoom: true});
  }

  zoomOut = () => {
    this.setState({isZoom: false});
  }

 render() {
    const { idul, numePoza, tumbPoza, descr, tip, culori, dimens } = this.props;
    return (
      <div id={idul} className= {`picttmb ph2 ml2 mr2 mb2 tc bg-white ${this.state.noEnter ? 'pictEnt' : ''}`}
        onMouseEnter={this.pictureEnter}
        onMouseLeave={this.pictureLeave}
        onClick = {this.zoomIn}
      >
        <div className="nail center pb2 pt0"></div>
        <img className= 'pictura mb2' alt='Picturi' src={tumbPoza} />
        <div className="f6 mt0 pa0">
           <div className = 'descri ma1 br3 pa1 i black'>{descr}</div>
           <div>{tip}</div>
           <div>{culori}</div>
           <div>{dimens}</div>
        </div>
        <Modal zoom={this.state.isZoom} onHide={this.zoomOut} numPoza={numePoza} />
      </div>
  );
  }
}

export default PictureCard;
