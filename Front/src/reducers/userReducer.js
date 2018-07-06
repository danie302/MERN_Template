// Import action types
import { ADD_USER, VALIDATE_USER } from '../actions/types';

const initialState = {
  id:"",
  name:"",
  email:"",
  username:"",
  token:"",
  LogSuccess: false,
  RegSuccess: false,
};

export default function(state = initialState, action){
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        RegSuccess: action.payload.success,
      };
      case VALIDATE_USER:
        return {
          ...state,
          id: action.payload.user.id,
          name: action.payload.user.name,
          email: action.payload.user.email,
          username: action.payload.user.username,
          token: action.payload.token,
          LogSuccess: action.payload.success,
        };
    default:
    return state;
  }
};
