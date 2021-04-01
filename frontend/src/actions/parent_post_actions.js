import * as APIUtil from '../util/post_api_util';

export const RECEIVE_PARENT_POST = "RECEIVE_PARENT_POST";
export const RECEIVE_PARENT_POSTS = "RECEIVE_PARENT_POSTS";
export const RECEIVE_PARENT_POST_ERRORS = "RECEIVE_PARENT_POST_ERRORS";

export const receiveParentPosts = posts => ({
    type: RECEIVE_PARENT_POSTS,
    posts
});

export const receiveParentPost = post => ({
    type: RECEIVE_PARENT_POST,
    post
});

export const receiveErrors = errors => ({
    type: RECEIVE_PARENT_POST_ERRORS,
    errors
});

export const requestParentPosts = (forumId) => dispatch => {
    return APIUtil.fetchParentPosts(forumId).then((posts) => (
        dispatch(receiveParentPosts(posts))
    ))
};

export const createParentPost = (forumId, post) => dispatch => (
    APIUtil.createParentPost(forumId, post).then((post) => (
        dispatch(receiveParentPost(post.post))
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ))
);