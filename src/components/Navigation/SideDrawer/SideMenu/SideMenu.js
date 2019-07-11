import React from 'react';
import propTypes from 'prop-types';
import classes from './SideMenu.module.css';

const SideMenu = props => (
  <div onClick={props.toggleMenu} className={classes.DrawerToggle}>
    <div />
    <div />
    <div />
  </div>
);

SideMenu.propTypes = {
  toggleMenu: propTypes.func.isRequired
};

export default SideMenu;
