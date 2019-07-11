import React, { Component } from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/AuxWrapper';
import Button from '../Button/Button';

class Modal extends Component {
  shouldComponentUpdate(prevState) {
    return prevState.show !== this.props.show;
  }

  componentWillUpdate(prevState) {
    console.log('[Modal will update]', prevState);
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
          <Button btnClass="Success" btnClicked={this.props.checkoutHandler}>
            CONTINUE
          </Button>
          <Button btnClass="Danger" btnClicked={this.props.orderSummaryHandler}>
            CANCEL
          </Button>
        </div>
      </Aux>
    );
  }
}

export default Modal;
