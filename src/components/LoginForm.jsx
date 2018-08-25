import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import Logo from './Logo';

const warn = (values) => {
  const warnings = {};

  if (values.email && values.email.length < 3) {
    warnings.email = 'hmm...';
  }

  return warnings;
};

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (values.email.length > 15) {
    errors.email = 'Must be 15 characters or less';
  }

  return errors;
};

const renderField = ({
  input, label, type, meta: { touched, error, warning },
}) => (
  <div className="login-form__field">
    <input
      {...input}
      placeholder={label}
      type={type}
      className={touched && ((error && 'error') || (warning && 'warning'))}
    />
  </div>
);

const submitHandler = (values, reset) => {
  console.log(values);
  reset();
};

const LoginForm = (props) => {
  const {
    handleSubmit, pristine, submitting, reset,
  } = props;

  return (
    <form className="login-form" onSubmit={handleSubmit(value => submitHandler(value, reset))}>
      <h2 className="login-form__title">
        <Logo />
        Orchestrator
      </h2>
      <h3 className="login-form__subtitle">Sign In</h3>
      <Field name="email" component={renderField} type="text" label="ID" />
      <Field name="password" component={renderField} type="text" label="PASSWORD" />
      <div className="login-form__button">
        <button type="submit" disabled={submitting || pristine}>
          Sign In
        </button>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'LoginForm',
  validate,
  warn,
})(LoginForm);
