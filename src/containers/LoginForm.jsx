import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import Logo from '../components/Logo';

const warn = (values) => {
  const warnings = {};

  if (values.email && values.email.length < 3) {
    warnings.email = 'hmm...';
  }

  return warnings;
};

const validate = (values) => {
  const errors = {};
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const passwordPattern = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).{8,})$/g;

  if (!values.email) {
    errors.email = 'Required';
  } else if (!emailPattern.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (!passwordPattern.test(values.password)) {
    errors.password = 'Invalid Password';
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
    {touched && (error && <span className="login-form__error">{error}</span>)}
  </div>
);

const LoginForm = (props) => {
  const { handleSubmit, submitting } = props;

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-form__title">
        <Logo />
        Orchestrator
      </h2>
      <h3 className="login-form__subtitle">Sign In</h3>
      <Field name="email" component={renderField} type="text" label="ID" />
      <Field name="password" component={renderField} type="password" label="PASSWORD" />
      <div className="login-form__button">
        <button type="submit" disabled={submitting}>
          Sign In
        </button>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'LoginForm',
  validate,
  warn,
})(LoginForm);
