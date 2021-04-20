import { RECEIVE_USER_LOGOUT, RECEIVE_USER_SIGN_IN, RECEIVE_CURRENT_USER, RECEIVE_CURRENT_FORUM } from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  user: {},
  forum: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER: 
     return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      };
    case RECEIVE_CURRENT_FORUM: 
     return {
        ...state,
        isAuthenticated: !!action.currentForum,
        forum: action.currentForum
      };
    case RECEIVE_USER_SIGN_IN: 
     return {
        ...state,
        isSignedIn: true
      }
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    default:
      return state;
  }
}