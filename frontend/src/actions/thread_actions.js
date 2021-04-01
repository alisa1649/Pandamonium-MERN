import * as APIUtil from '../util/post_api_util';

export const RECEIVE_THREAD = "RECEIVE_THREAD";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

export const receiveThread = posts => ({
    type: RECEIVE_THREAD,
    comments: posts
});

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

export const requestThread = (postId) => dispatch => (
    APIUtil.fetchThread(postId).then((posts) => (
        dispatch(receiveThread(posts))
    ))
);

export const createComment = (parentPost, comment) => dispatch => (
    APIUtil.createComment(parentPost, comment).then((comment) => (
        dispatch(receiveComment(comment.post))
    ))
);
