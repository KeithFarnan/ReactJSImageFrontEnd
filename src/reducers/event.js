import {
  ADD_EVENT,
  GET_EVENTS,
  GET_EVENT,
  DELETE_EVENT,
  EVENT_ERROR
} from '../actions/types';

// the initial state is set with an empty array for the events the event is set to null and error object is empty and the loading is set to true
const initialState = {
  events: [],
  event: null,
  loading: true,
  error: {}
};

// The default export of the application is set to this function which takes in a state of the current that the app is currently in and an action
export default function(state = initialState, action) {
  // extracting the type and payload from the action
  const { type, payload } = action;

  //based on the type of action different code will execute
  switch (type) {
    case ADD_EVENT:
      return {
        ...state,
        events: [payload, ...state.events],
        loading: false
      };
    case GET_EVENTS:
      return {
        ...state,
        events: payload,
        loading: false
      };
    case GET_EVENT:
      return {
        ...state,
        event: payload,
        loading: false
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(event => event._id !== payload),
        loading: false
      };
    case EVENT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
