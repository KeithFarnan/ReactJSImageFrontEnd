import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import EventItem from './EventItem';
import EventForm from './EventForm';
import { getEvents } from '../../actions/event';

// the value of Events takes in the
const Events = ({ getEvents, event: { Events, loading } }) => {
  useEffect(() => {
    getEvents();
  }, [getEvents]);

  // if the application is loading the spinner is shown else the code in the fragment executes
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Events</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome to the community
      </p>
      <EventForm />
      {/* the form is populated with the values that are recieved from the events api call */}
      <div className="events">
        {/* The values are mapped over the array of events and the event id is used as the key and event object is passed into the event variable */}
        {events.map(event => (
          <EventItem key={event._id} event={event} />
        ))}
      </div>
    </Fragment>
  );
};

// the proptypes of the values for the event and the get events is confirmed
Events.propTypes = {
  getEvents: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
};

// the event value is taken from the state of the application
const mapStateToProps = state => ({
  event: state.event
});

export default connect(
  mapStateToProps,
  { getEvents }
)(Events);
