import * as APIUtil from '../util/post_api_util';

export const RECEIVE_THREAD = "RECEIVE_THREAD";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_DELETE_COMMENT = "RECEIVE_DELETE_COMMENT";
export const RECEIVE_UPDATE_COMMENT = "RECEIVE_UPDATE_COMMENT";

export const receiveThread = posts => ({
    type: RECEIVE_THREAD,
    comments: posts
});

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

export const receiveDeleteComment = postId => ({
    type: RECEIVE_DELETE_COMMENT,
    postId
});
export const receiveUpdateComment = comment => ({
    type: RECEIVE_UPDATE_COMMENT,
    comment
});


export const requestThread = (postId) => dispatch => (
    APIUtil.fetchThread(postId).then((posts) => (
        dispatch(receiveThread(posts))
    ))
);

export const createComment = (comment) => dispatch => (
    APIUtil.createComment(comment).then((comment) => (
        dispatch(receiveComment(comment))
    ))
);
export const deleteComment = (postId) => dispatch => {
    return APIUtil.deletePost(postId).then(() => (
        dispatch(receiveDeleteComment(postId))
    ))
};
export const updateComment = (post) => dispatch => {
    return APIUtil.updatePost(post).then((post) => (
        dispatch(receiveUpdateComment(post))
    ))
};
