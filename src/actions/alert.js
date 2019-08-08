import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

// exports the setAlert variable, which will last for 5 seconds taking in values for the message to be displayed and alert type
export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  // the dispatch takes the value of the alert type and the message and id of the alert
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  // when the timer runs out the alert is removed from the users display
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
