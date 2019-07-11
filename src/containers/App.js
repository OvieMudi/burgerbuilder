import React, { Component } from 'react';
import Layout from './Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
