import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';

const Dashboard = ({ auth: { user } }) => {
  useEffect(() => []);

  // if the loading state is null then return the spinner else return the fragments of the code
  return loading === null ? (
    <Spinner />
  ) : (
    // this fragment of code executes if the loading component is not null
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        {/* prints a welcome with the user name to the page */}
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>

      {user !== null ? (
        <Fragment>
          <DashboardActions />
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

// the auth of the user is confirmed to be an object
Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

// auth is taken out of the state and mapped to the auth property
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
