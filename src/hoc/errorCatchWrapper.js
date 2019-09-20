import React, { Component } from 'react';
import Aux from './AuxWrapper';
import Modal from '../components/UI/Modal/Modal';

const catchError = (WrappedComponent, axios) =>
  class extends Component {
    state = {
      error: null
    };

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });

      this.resInterceptor = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error });
        }
      );
    }

    componentWillUnmount() {
      console.log(
        '[inside errorCatcher]',
        this.reqInterceptor,
        this.resInterceptor
      );

      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    showModalHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal show={this.state.error} toggleHandler={this.showModalHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };

export default catchError;
