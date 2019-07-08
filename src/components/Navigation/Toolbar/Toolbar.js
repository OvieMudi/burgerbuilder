import React from 'react';
import classes from './Toolbar.module.css';

const Toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <div>Menu</div>
      <div>Logo</div>
      <nav>links</nav>
    </header>
  );
};

export default Toolbar;
