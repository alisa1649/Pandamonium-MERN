import * as APIUtil from '../util/user_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER_INFO = "RECEIVE_CURRENT_USER_INFO";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER_INFO,
    currentUser
});

export const getCurrentUserInfo = () => dispatch => {
    return (
        APIUtil.getCurrentUserInfo().then((currentUser) => dispatch(receiveCurrentUser(currentUser)))
    )
}

export const editCurrentUserInfo = (newInfo) => dispatch => {
    return (
        APIUtil.editCurrentUserInfo(newInfo).then((currentUser) => dispatch(receiveCurrentUser(currentUser)))
    )
}