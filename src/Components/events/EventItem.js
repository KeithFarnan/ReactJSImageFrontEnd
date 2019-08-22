import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteEvent } from '../../actions/event';
import Gallery from 'react-photo-gallery';
import Img from 'react-image'
import Viewer from 'react-viewer';


let pictures = []
let source = ''
// the arrow function executes taking the params for EventItem
const EventItem = ({
  deleteEvent,
  auth,
  event: { eventTitle, eventDate, user, images },
}) => (
  <div className="event bg-white p-1 my-1">
      <p className="my-1">{eventTitle}</p>
      <p className="my-1">{eventDate}</p>
      <p className="my-1">{user.name}</p>
        <ul>
        {images.map(image => (
          <li><img src={image.imageUrl} alt={image.imageTitle}/></li>
          ))}
        </ul>

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
