import React, { Component } from 'react';
import Aux from '../../hoc/AuxWrapper';
import Burger from '../../components/Burger/Burger';
// import classes from './BurgerBuilder.module.css';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    }
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Builder Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
