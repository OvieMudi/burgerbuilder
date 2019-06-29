import React from 'react';
import Aux from '../../hoc/AuxWrapper';
import classes from './Layout.module.css';

const Layout = props => {
  return (
    <Aux>
      <div>navbar, side-drawer, toolbar</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
