import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoginForm from '../containers/LoginForm';

class Login extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit() {
    const {
      history: { push },
    } = this.props;

    push('/content');
  }

  render() {
    return (
      <div className="login">
        <LoginForm onSubmit={this.submit} />
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Login;
