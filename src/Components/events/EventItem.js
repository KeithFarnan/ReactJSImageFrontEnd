import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteEvent } from '../../actions/event';

// the arrow function executes taking the params for EventItem
const EventItem = ({
  deleteEvent,
  auth,
  event: { _id, eventName, eventDate, userName },
}) => (
  <div className="event bg-white p-1 my-1">
      <p className="my-1">{eventName}</p>
  </div>
);

// the default for  the showActions value is true
EventItem.defaultProps = {
  showActions: true
};

// the types of each value is confirmed
EventItem.propTypes = {
  event: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

// the value for authorization of the user is recieved from the redux state
const mapStateToProps = state => ({
  auth: state.auth
});

// the connection to the redux state object is executed
export default connect(
  mapStateToProps,
  { deleteEvent }
)(EventItem);
