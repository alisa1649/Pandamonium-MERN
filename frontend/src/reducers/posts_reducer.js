import { RECEIVE_POST, RECEIVE_POST_ERRORS } from '../actions/post_actions';

const initialState = {
    posts: {},
};

const PostsReducer = (state = initialState, action) =>  {
    switch (action.type) {
        case RECEIVE_POST:
            return {
                ...state,
                [action.post.id]: action.post
            };
        case RECEIVE_POST_ERRORS:
            // TODO: add error code
            return state;
        default:
            return state;
    }
}

export default PostsReducer;