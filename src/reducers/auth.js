import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED
} from '../actions/types';

// setting the initial state which will have the default values below
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};

// the default function exported by the application which takes state and action is paramerters
export default function(state = initialState, action) {
  // action type and payload are extracted from the action object
  const { type, payload } = action;

  // action type determines what code is executed
  switch (type) {
    case USER_LOADED:
      // the returned stated is modified and the user is set to the payload
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      // if the user logs in successfully or registers successfully the login token is applied authorizing the user to access protected routes
      localStorage.setItem('token', payload.token);
      // returns the state and payload setting isAuthenticated to true and loading to false
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    // in the case that ther is an error or fail durning login or registration or the user logs out or deletes their account this case executes
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
    case ACCOUNT_DELETED:
      // the token is removed from the localstorage and the state is returned with the token set to null and loading to false and isAuthenticated is also set to false
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };
    default:
      // default case retuns the state without modification
      return state;
  }
}
