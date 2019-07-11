import React, { Component } from 'react';
import Aux from '../../hoc/AuxWrapper';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  backdropToggleHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  toggleMenu = event => {
    const showSideDrawer = this.state.showSideDrawer;

    this.setState({
      showSideDrawer: !showSideDrawer
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar toggleMenu={this.toggleMenu} />
        <SideDrawer
          show={this.state.showSideDrawer}
          cancelClick={this.backdropToggleHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
