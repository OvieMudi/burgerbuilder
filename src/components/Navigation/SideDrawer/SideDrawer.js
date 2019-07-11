import React from 'react';
import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/AuxWrapper';

const SideDrawer = props => {
  let sideDrawerClass = `${classes.SideDrawer} ${classes.Close}`;
  if (props.show) sideDrawerClass = `${classes.SideDrawer} ${classes.Open}`;

  return (
    <Aux>
      <Backdrop show={props.show} cancelClick={props.cancelClick} />
      <div className={sideDrawerClass}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
