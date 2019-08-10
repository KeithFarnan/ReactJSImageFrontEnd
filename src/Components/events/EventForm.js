import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEvent } from '../../actions/event';

// this arrow function takes the addevent object as a parameter
const EventForm = ({ addEvent }) => {
  // this calls the useState method and extracts the text and setText values from the state of the application
  const [text, setText] = useState('');

  return (
    <div className="event-form">
      <div className="bg-primary p">
        <h3>Say Something...</h3>
      </div>
      The form for the event has an onSubmit method event that adds the 
      <form
        className="form my-1"
        onSubmit={e => {
          e.preventDefault();
          addEvent({ text });
          setText('');
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a event"
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

// confirm that the event is a function and is required
EventForm.propTypes = {
  addEvent: PropTypes.func.isRequired
};

// export the component to the connect method for connecting to the redux state object
export default connect(
  null,
  { addEvent }
)(EventForm);
