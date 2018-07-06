// Dependencies
import axios from 'axios';

// Import action types
import { ADD_USER, VALIDATE_USER } from './types';

export const registerUser = (userData) =>dispatch =>{
  console.log("Posting");
  axios({
    method: 'post',
    url: 'http://localhost:8000/API/register',
    data: userData,
    config: {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  })
      .then(res => dispatch({
        type: ADD_USER,
        payload: res.data,
      }))
      .catch(err => console.log(err));
};

export const validateUser = (userData) => dispatch => {
  console.log("validating");
  axios({
    method: 'post',
    url: 'http://localhost:8000/API/login',
    data: userData,
    config: {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  })
  .then(res => dispatch({
    type: VALIDATE_USER,
    payload: res.data,
  }))
  .catch(err => console.log(err));
};
