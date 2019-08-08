import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

// setting the initital state to empty array
const initialState = [];

// the exported function from the component which takes in the inital state array and an action as parameters
export default function(state = initialState, action) {
  // extracting the type and payload from the action
  const { type, payload } = action;

  // creating a swithch statement for the type of action
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      // returns the state if nether case is met
      return state;
  }
}
