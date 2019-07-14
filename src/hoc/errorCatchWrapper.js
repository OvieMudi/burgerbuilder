import React, { Component } from 'react';
import Aux from './AuxWrapper';
import Modal from '../components/UI/Modal/Modal';

const catchError = (WrappedComponent, axios) =>
  class extends Component {
    state = {
      error: null
    };

    componentWillMount() {
      axios.interceptors.response.use(req => {
        this.setState({ error: null });
      });

      axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error });
        }
      );
    }

    showModalHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            showModalHandler={this.showModalHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };

export default catchError;
