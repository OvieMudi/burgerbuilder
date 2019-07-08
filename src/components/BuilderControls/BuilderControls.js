import React from 'react';

import BuilderControl from './BuilderControl/BuilderControl';
import classes from './BuilderControls.module.css';

const controls = [
  { label: 'Bacon' },
  { label: 'Salad' },
  { label: 'Cheese' },
  { label: 'Meat' }
];

const BuilderControls = props => {
  const controlsList = controls.map(ctrl => (
    <BuilderControl
      label={ctrl.label}
      add={() => props.addIngredient(ctrl.label.toLocaleLowerCase())}
      remove={() => props.removeIngredient(ctrl.label.toLocaleLowerCase())}
      disabled={props.disableBtn[ctrl.label.toLocaleLowerCase()]}
      key={ctrl.label}
    />
  ));

  return (
    <div className={classes.Controls}>
      <p>
        Total Price: <strong>{props.totalPrice.toFixed(2)}</strong>
      </p>
      {controlsList}
      <button
        className={classes.OrderButton}
        onClick={props.showOrderSummary}
        disabled={!props.purchasable}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuilderControls;
