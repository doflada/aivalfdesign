import React, { Component } from 'react';

import './Modal.css';

class Modal extends Component {

  componentDidMount() {
    document.addEventListener("keydown", this.props.onHide, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.props.onHide, false);
  }

  render() {
    return (
    <React.Fragment>
      {this.props.zoom && (
        <div className="modal"
              onMouseDown = {this.props.onHide}
              onMouseLeave = {this.props.onHide} >
          <img className=" pozaMare ma3 " alt='poza' src={this.props.numPoza} />
        </div>
      )}
    </React.Fragment>
    );
  }
}

export default Modal;
