import * as APIUtil from '../util/user_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const getCurrentUserInfo = () => dispatch => {
    return (
        APIUtil.getCurrentUserInfo().then((currentUser) => dispatch(receiveCurrentUser(currentUser)))
    )
}