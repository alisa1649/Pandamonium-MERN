import * as APIUtil from '../util/post_api_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";

export const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

export const receiveErrors = errors => ({
    type: RECEIVE_POST_ERRORS,
    errors
});

export const createPost = (forumId, post) => dispatch => (
    APIUtil.createPost(forumId, post).then((post) => (
        dispatch(receivePost(post.post))
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ))
);