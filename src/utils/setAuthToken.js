import axios from 'axios';

// the set auth token arrow function takes the token and puts it into the headers.common for the user
const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    // if there is no token recieved the token in the header is deleted
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken