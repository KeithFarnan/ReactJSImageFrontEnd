import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

// this arrow function holds the state for the user state
const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  // the variables are extracted from the formData object
  const { name, email, password, password2 } = formData;

  // the onchange monitors for the event and updates the values of the formData with the updated input value
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // asynchronius method that executes with the onSubmit command
  const onSubmit = async e => {
    // the input does not execute if the values are the default values or the passwords entered do not match
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      // else the user is registered
      register({ name, email, password });
    }
  };

  // if the user is already authenticated redirect them to the dashboard page
  if (isAuthenticated) {
    return <Redirect to="/gallery" />;
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      // calling the onSubmit method when the user submits the form
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
/**
|--------------------------------------------------
calling the onChange method to be executed each time the user types into the box
| 
|--------------------------------------------------
*/ 
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};

// determies if the user will recieve an alert if something is required of if they need to register and if the user isAuthenticated which is either true or false
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

// this method us used by redux to take the values of the stat to the props to be passed to register the user
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

// The exported component
export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
