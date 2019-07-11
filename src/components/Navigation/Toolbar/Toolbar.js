import React from 'react';
import propTypes from 'prop-types';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideMenu from '../SideDrawer/SideMenu/SideMenu';

const Toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <SideMenu toggleMenu={props.toggleMenu} />
      <Logo />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

SideMenu.propTypes = {
  toggleMenu: propTypes.func.isRequired
};
export default Toolbar;
