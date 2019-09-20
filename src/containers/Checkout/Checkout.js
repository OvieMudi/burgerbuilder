import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactDetails from './ContactDetails.js/ContactDetails';

class Checkout extends Component {
  state = {
    ingredients: {},
    totalPrice: null
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);

    const ingredients = {};
    let totalPrice = 0;

    /* for (const pair of query.entries()) {
      ingredients[pair[0]] = pair[1];
    } */

    query.forEach((value, key) => {
      if (key === 'totalPrice') totalPrice = value;
      else ingredients[key] = parseInt(value, 10);
    });

    console.log(ingredients);
    this.setState({ ingredients, totalPrice });
  }

  continueClickHandler = () => {
    this.props.history.replace('/checkout/contact-details');
  };

  cancelClickHandler = () => {
    this.props.history.goBack();
  };

  render() {
    console.log(this.props.match.path);

    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          continueClick={this.continueClickHandler}
          cancelClick={this.cancelClickHandler}
        />
        <Route
          path={this.props.match.path + '/contact-details'}
          render={props => (
            <ContactDetails
              ingredients={this.state.ingredients}
              totalPrice={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
