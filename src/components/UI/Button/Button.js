import React from 'react';
import classes from './Button.module.css';

const Button = props => {
  const btnClass = `${classes.Button} ${classes[props.btnClass]}`;
  return (
    <button onClick={props.btnClicked} className={btnClass}>
      {props.children}
    </button>
  );
};

export default Button;
