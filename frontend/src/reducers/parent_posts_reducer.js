import {
    RECEIVE_DELETE_PARENT_POST,
    RECEIVE_PARENT_POST,
    RECEIVE_PARENT_POST_ERRORS,
    RECEIVE_PARENT_POSTS, RECEIVE_UPDATE_PARENT_POST
} from '../actions/parent_post_actions';
import {RECEIVE_USER_LOGOUT} from "../actions/session_actions";

const initialState = {};

const ParentPostsReducer = (state = initialState, action) =>  {
    switch (action.type) {
        case RECEIVE_PARENT_POSTS:
            const newState = {}
            action.posts.forEach(post => {
                if (!post.parent) {
                    newState[post._id] = post
                }
            })
            return newState;
        case RECEIVE_PARENT_POST:
            return {
                ...state,
                [action.post._id]: action.post
            };
        case RECEIVE_UPDATE_PARENT_POST:
            return Object.assign({}, state, {[action.post._id]: action.post})
        case RECEIVE_PARENT_POST_ERRORS:
            // TODO: add error code
            return state;
        case RECEIVE_DELETE_PARENT_POST:
            const newState2 = Object.assign({}, state);
            delete newState2[action.postId];
            return newState2;
        case RECEIVE_USER_LOGOUT:
            return {};
        default:
            return state;
    }
}

export default ParentPostsReducer;