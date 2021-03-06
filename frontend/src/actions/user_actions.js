import * as APIUtil from '../util/user_util';
import { deleteAllParentPostsForUser} from "./parent_post_actions";
import {logoutUser} from "./session_actions";

export const RECEIVE_CURRENT_USER_INFO = 'RECEIVE_CURRENT_USER_INFO';
export const RECEIVE_OTHER_USER_INFO = 'RECEIVE_OTHER_USER_INFO';

export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER_INFO,
    currentUser,
});

export const receiveOtherUser = (user) => ({
    type: RECEIVE_OTHER_USER_INFO,
    user,
});

export const getCurrentUserInfo = () => (dispatch) => {
    return APIUtil.getCurrentUserInfo().then((currentUser) => dispatch(receiveCurrentUser(currentUser)));
};

export const editCurrentUserInfo = (newInfo) => (dispatch) => {
    return APIUtil.editCurrentUserInfo(newInfo).then((currentUser) => dispatch(receiveCurrentUser(currentUser)));
};

export const getOtherUserInfo = (userId) => (dispatch) => {
    return APIUtil.getOtherUserInfo(userId).then((otherUser) => dispatch(receiveOtherUser(otherUser)));
};
export const deleteUser = (userId) => (dispatch) => {
    dispatch(deleteAllParentPostsForUser(userId)).then( () => {
        APIUtil.deleteUser(userId).then(() => {
            dispatch(logoutUser());
        })
    })
}