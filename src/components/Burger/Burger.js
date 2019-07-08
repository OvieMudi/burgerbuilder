import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = props => {
  let ingredients = Object.keys(props.ingredients)
    .map(ingName =>
      [...Array(props.ingredients[ingName])].map((_, index) => (
        <BurgerIngredients ingredient={ingName} key={ingName + index} />
      ))
    )
    .reduce((accumulator, element) => accumulator.concat(element), []);

  if (ingredients.length === 0) ingredients = <p>Please add ingredients</p>;

  return (
    <div className={classes.Burger}>
      <BurgerIngredients ingredient={'bread-top'} />
      {ingredients}
      <BurgerIngredients ingredient={'bread-bottom'} />
    </div>
  );
};

export default Burger;
