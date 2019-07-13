import React, { Component } from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/AuxWrapper';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  componentWillUpdate(prevState) {
    // console.log('[Modal will update]', prevState);
  }

  render() {
    const style = {
      transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: this.props.show ? '1' : '0'
    };

    return (
      <Aux>
        <Backdrop
          show={this.props.show}
          cancelClick={this.props.orderSummaryHandler}
        />
        <div style={style} className={classes.Modal}>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
