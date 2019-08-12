import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

// this will contain the login value and the isAuthentication value for the state of the application
const Login = ({ login, isAuthenticated }) => {
  // the formData and setFormData are extracted from the useState object containing the email and password
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // email and password values are extracted from the formData object
  const { email, password } = formData;

  // this method will allow for the applicaition to register the changes to the screen when the user updates the values for the inputs
  const onChange = e =>
    // the function takes in the value of the event and uses the setFormData to update the form with the spread operator and the (event . target . name ) which points to the value of the field being updated and the new value is passed in with (e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // async function called when the user submits the form for login
  const onSubmit = async e => {
    // the method prevents the default values of the fields from being submitted and the login function takes the email and password values as parameters
    e.preventDefault();
    login(email, password);
  };

  // if the user is already signed in redirect them to the dashboard page
  if (isAuthenticated) {
    return <Redirect to="/gallery" />;
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  );
};

// the login. proptypes takes the login method
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

// this method takes the state as the parameter for the arrow function and updates the value of the isAuthenticated key in the state
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

// the default values being exported
export default connect(
  mapStateToProps,
  { login }
)(Login);
