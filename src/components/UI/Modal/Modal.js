import React from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/AuxWrapper';
import Button from '../Button/Button';

const Modal = props => {
  const style = {
    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: props.show ? '1' : '0'
  };

  return (
    <Aux>
      <Backdrop show={props.show} cancelClick={props.orderSummaryHandler} />
      <div style={style} className={classes.Modal}>
        {props.children}
        <Button btnClass="Success" btnClicked={props.checkoutHandler}>
          CONTINUE
        </Button>
        <Button btnClass="Danger" btnClicked={props.orderSummaryHandler}>
          CANCEL
        </Button>
      </div>
    </Aux>
  );
};

export default Modal;
