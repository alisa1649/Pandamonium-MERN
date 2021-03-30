import * as APIUtil from '../util/post_api_util';

export const RECEIVE_THREAD = "RECEIVE_THREAD";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

export const receiveThread = thread => ({
    type: RECEIVE_THREAD,
    thread
});

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

export const requestThread = (forumId, postId) => dispatch => (
    APIUtil.fetchThread(forumId, postId).then((thread) => (
        dispatch(receiveThread(thread.post))
    ))
);

export const createComment = (parentPost, comment) => dispatch => (
    APIUtil.createComment(parentPost, comment).then((comment) => (
        dispatch(receiveComment(comment.post))
    ))
);
