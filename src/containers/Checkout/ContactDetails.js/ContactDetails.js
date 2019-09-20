import React, { Component } from 'react';
import classes from './ContactDetails.module.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../api/axiosBase';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactDetails extends Component {
  state = {
    customer: {
      name: 'Hondo Onaka',
      address: {
        street: 'Aria-Moon, somewhere in orbit',
        zipCode: '8383',
        country: 'Outer Rim Remotes'
      },
      email: 'hondo@piratescum.com'
    },
    deliveryMethod: 'fastest',
    serverIsFetching: false
  };

  formSubmitHandler = event => {
    event.preventDefault();
    console.log(this.props);
    const data = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
      customer: this.state.customer
    };

    this.setState({ serverIsFetching: true });

    axios
      .post('/orders.json', data)
      .then(res => {
        this.setState({ serverIsFetching: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ serverIsFetching: false });
        console.log(error.message);
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="Your Mail"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Street"
        />
        <input
          className={classes.Input}
          type="text"
          name="postal"
          placeholder="Postal Code"
        />
        <Button btnClass="Success" btnClicked={this.formSubmitHandler}>
          ORDER
        </Button>
      </form>
    );

    if (this.state.serverIsFetching) form = <Spinner />;

    return (
      <div className={classes.ContactDetails}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactDetails;
