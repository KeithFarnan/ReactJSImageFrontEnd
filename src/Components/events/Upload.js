import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { addEvent } from '../../actions/event';
import PropTypes from 'prop-types';

const AddEvent = ({ setAlert, addEvent, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    eventTitle: '',
    userId: ''
  });

  const { eventTitle, userId } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    // the input does not execute if the values are the default values or the passwords entered do not match
    e.preventDefault();
    {
      // else the user is registered
      addEvent({ eventTitle, userId });
    }
  };

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
            placeholder="eventTitle"
            name="eventTitle"
            value={eventTitle}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="userId"
            name="userId"
            value={userId}
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

AddEvent.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addEvent: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, addEvent }
)(AddEvent);
