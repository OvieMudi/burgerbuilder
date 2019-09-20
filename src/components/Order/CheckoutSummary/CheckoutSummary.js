import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const CheckoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We assure you it's the best you ever had!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnClass="Danger" btnClicked={props.cancelClick}>
        CANCEL
      </Button>
      <Button btnClass="Success" btnClicked={props.continueClick}>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
