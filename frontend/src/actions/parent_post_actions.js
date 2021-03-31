import * as APIUtil from '../util/post_api_util';

export const RECEIVE_PARENT_POST = "RECEIVE_PARENT_POST";
export const RECEIVE_PARENT_POST_ERRORS = "RECEIVE_PARENT_POST_ERRORS";

export const receiveParentPost = post => ({
    type: RECEIVE_PARENT_POST,
    post
});

export const receiveErrors = errors => ({
    type: RECEIVE_PARENT_POST_ERRORS,
    errors
});

export const createParentPost = (forumId, post) => dispatch => (
    APIUtil.createParentPost(forumId, post).then((post) => (
        dispatch(receiveParentPost(post.post))
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ))
);