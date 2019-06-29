import React from 'react';
import PropTypes from 'prop-types';
import ingredients from './BurgerIngredients.module.css';

const BurgerIngredients = props => {
  if (props.ingredient === 'bread-top') {
    return (
      <div className={ingredients['bread-top']}>
        <div className={ingredients.seeds1} />
        <div className={ingredients.seeds2} />
      </div>
    );
  } else {
    const ingredient = ingredients[props.ingredient];
    return ingredient ? <div className={ingredient} /> : null;
  }
};

BurgerIngredients.propTypes = {
  ingredient: PropTypes.string.isRequired
};

export default BurgerIngredients;
