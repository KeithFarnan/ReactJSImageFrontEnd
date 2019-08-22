import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import EventItem from '../events/EventItem';
import { getEvent } from '../../actions/event';
import Gallery from 'react-photo-gallery';


const Event = ({ getEvent, event: { event, loading }, match }) => {
  useEffect(() => {
    getEvent(match.params.id);
  }, [getEvent, match.params.id]);

  // if the application is loading or there is no event matching that display the spinner
  return loading || event === null ? (
    <Spinner />
  ) : (
    // else display this fragment which links to all events and has the EventItem taking in the value of the event and setting showActions to false as parameters
    <Fragment>

      {/* The event item takes in the event object and wheter or not is should showActions */}
      <EventItem event={event} showActions={false} />
      {/* <Gallery photos={pictures} /> */}
    </Fragment>
  );
};

// checking the props that we recieve are the props that we were expecting
Event.propTypes = {
  getEvent: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
};



// getting the value for event from the rudux state object
const mapStateToProps = state => ({
  event: state.event
});

// exporting the component with the redux connection passing in the values for the mapstate to props and get event
export default connect(
  mapStateToProps,
  { getEvent }
)(Event);
