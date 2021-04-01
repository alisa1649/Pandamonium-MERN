import * as APIUtil from '../util/post_api_util';

export const RECEIVE_PARENT_POST = "RECEIVE_PARENT_POST";
export const RECEIVE_PARENT_POSTS = "RECEIVE_PARENT_POSTS";
export const RECEIVE_PARENT_POST_ERRORS = "RECEIVE_PARENT_POST_ERRORS";
export const RECEIVE_UPDATE_PARENT_POST = "RECEIVE_UPDATE_PARENT_POST";
export const RECEIVE_DELETE_PARENT_POST = "RECEIVE_DELETE_PARENT_POST";

export const receiveParentPosts = posts => ({
    type: RECEIVE_PARENT_POSTS,
    posts
});

export const receiveParentPost = post => ({
    type: RECEIVE_PARENT_POST,
    post
});

export const receiveUpdateParentPost = post => ({
    type: RECEIVE_UPDATE_PARENT_POST,
    post
});

export const receiveErrors = errors => ({
    type: RECEIVE_PARENT_POST_ERRORS,
    errors
});

export const receiveDeleteParentPost = postId => ({
    type: RECEIVE_DELETE_PARENT_POST,
    postId
});


export const requestParentPosts = (forumId) => dispatch => {
    return APIUtil.fetchParentPosts(forumId).then((posts) => {
        return dispatch(receiveParentPosts(posts))
    })
};

export const createParentPost = (post) => dispatch => (
    APIUtil.createParentPost(post).then((post) => {
        return dispatch(receiveParentPost(post))
    }, err => (
        dispatch(receiveErrors(err.response.data))
    ))
);

export const updateParentPost = (post) => dispatch => (
    APIUtil.updatePost(post).then((post) => {
        return dispatch(receiveUpdateParentPost(post))
    }, err => (
        dispatch(receiveErrors(err.response.data))
    ))
);

export const deleteParentPost = (postId) => dispatch => (
    APIUtil.deletePost(postId).then(() => {
        return dispatch(receiveDeleteParentPost(postId))
    }, err => (
        dispatch(receiveErrors(err.response.data))
    ))
);
