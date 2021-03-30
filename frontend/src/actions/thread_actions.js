import * as APIUtil from '../util/post_api_util';

export const RECEIVE_THREAD = "RECEIVE_THREAD";

export const receiveThread = thread => ({
    type: RECEIVE_THREAD,
    thread
});

export const requestThread = (postId) => dispatch => (
    APIUtil.fetchThread(postId).then((thread) => (
        dispatch(receiveThread(thread.post))
    ))
);