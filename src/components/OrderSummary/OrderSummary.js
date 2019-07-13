import React from 'react';

import Aux from '../../hoc/AuxWrapper';
import Button from '../UI/Button/Button';

const OrderSummary = props => {
  const priceList = Object.keys(props.ingredients).map(ing => (
    <li key={ing}>
      {ing}: {props.ingredients[ing]}
    </li>
  ));
  return (
    <Aux>
      <h3>Your Burger Is Ready</h3>
      <p>Great choice! Here is a breakdown of your order:</p>
      <ul>{priceList}</ul>
      <p>
        <strong>Total Price: {props.totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnClass="Success" btnClicked={props.checkoutHandler}>
        CONTINUE
      </Button>
      <Button btnClass="Danger" btnClicked={props.orderSummaryHandler}>
        CANCEL
      </Button>
    </Aux>
  );
};

export default OrderSummary;
