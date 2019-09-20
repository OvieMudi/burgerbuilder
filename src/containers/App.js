import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Checkout from './Checkout/Checkout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Route path="/checkout" component={Checkout} />
          <Route path="/" exact component={BurgerBuilder} />
        </Layout>
      </div>
    );
  }
}

export default App;
