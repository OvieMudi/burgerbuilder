import React, { Component } from 'react';

import Aux from '../../hoc/AuxWrapper';
import Burger from '../../components/Burger/Burger';
import BuilderControls from '../../components/BuilderControls/BuilderControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
// import classes from './BurgerBuilder.module.css';

const INGREDIENTS_PRICE = {
  salad: 0.4,
  meat: 0.6,
  cheese: 0.3,
  bacon: 0.8
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    },
    totalPrice: 3,
    purchasable: false,
    showOrderSummary: false
  };

  addIngredientsHandler = type => {
    const ingredientsCopy = { ...this.state.ingredients };
    ingredientsCopy[type] += 1;

    const oldTotal = this.state.totalPrice;
    const newTotal = oldTotal + INGREDIENTS_PRICE[type];

    this.setState({ ingredients: ingredientsCopy, totalPrice: newTotal });
    this.updatePurchasable(ingredientsCopy);
  };

  removeIngredientsHandler = type => {
    const ingredientsCopy = { ...this.state.ingredients };
    const ing = ingredientsCopy[type];
    const ingCount = ing <= 0 ? 0 : ing - 1;
    ingredientsCopy[type] = ingCount;

    const oldTotal = this.state.totalPrice;
    const newTotal = oldTotal - INGREDIENTS_PRICE[type];

    this.setState({ ingredients: ingredientsCopy, totalPrice: newTotal });
    this.updatePurchasable(ingredientsCopy);
  };

  updatePurchasable = ingredients => {
    const total = Object.values(ingredients).reduce((acc, ing) => acc + ing, 0);
    this.setState({ purchasable: total > 0 });
  };

  showOrderSummaryHandler = event => {
    const targetClass = event.target.className;
    if (
      targetClass.includes('Backdrop') ||
      targetClass.includes('Button_Danger')
    ) {
      this.setState({ showOrderSummary: false });
    } else {
      this.setState({ showOrderSummary: true });
    }
  };

  checkoutHandler = () => {
    alert("You're purchasing a burger!");
  };

  render() {
    const disabledBtnInfo = { ...this.state.ingredients };
    for (let key in disabledBtnInfo) {
      disabledBtnInfo[key] = disabledBtnInfo[key] <= 0;
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>
          <BuilderControls
            addIngredient={this.addIngredientsHandler}
            removeIngredient={this.removeIngredientsHandler}
            disableBtn={disabledBtnInfo}
            totalPrice={this.state.totalPrice}
            purchasable={this.state.purchasable}
            showOrderSummary={this.showOrderSummaryHandler}
          />
        </div>
        <Modal
          show={this.state.showOrderSummary}
          orderSummaryHandler={this.showOrderSummaryHandler}
          checkoutHandler={this.checkoutHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice}
          />
        </Modal>
      </Aux>
    );
  }
}

export default BurgerBuilder;
