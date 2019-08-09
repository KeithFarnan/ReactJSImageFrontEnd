import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// arrow functioon taking the alerts array as parameter
const Alert = ({ alerts }) =>
  // if the alerts array is not empty
  alerts !== null &&
  // and the array is longer than 0
  alerts.length > 0 &&
  // the function maps over the alerts array and for every alert object does the following
  alerts.map(alert => (
    // the div takes its key and className from the alert object id and type and displays the alert message to the user
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  // confirms that the alerts recieved from the state is an array
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  // gets the alerts array from the state of the application
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
