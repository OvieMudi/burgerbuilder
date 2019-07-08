import React from 'react';
import classes from './BuilderControl.module.css';

const BuilderControl = props => {
  return (
    <div className={classes.BuilderControl}>
      <div className={classes.Label}>{props.label}</div>
      <button onClick={props.add} className={classes.Less}>
        add
      </button>
      <button
        onClick={props.remove}
        className={classes.More}
        disabled={props.disabled}
      >
        remove
      </button>
    </div>
  );
};

export default BuilderControl;
