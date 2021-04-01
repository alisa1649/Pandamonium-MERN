import {RECEIVE_PARENT_POST, RECEIVE_PARENT_POST_ERRORS, RECEIVE_PARENT_POSTS} from '../actions/parent_post_actions';

const initialState = {};

const ParentPostsReducer = (state = initialState, action) =>  {
    switch (action.type) {
        case RECEIVE_PARENT_POSTS:
            const newState = {}
            action.posts.forEach(action => {
                if (!action.parent) {
                    newState[action._id] = action
                }
            })
            return newState;
        case RECEIVE_PARENT_POST:
            return {
                ...state,
                [action.post.id]: action.post
            };
        case RECEIVE_PARENT_POST_ERRORS:
            // TODO: add error code
            return state;
        default:
            return state;
    }
}

export default ParentPostsReducer;