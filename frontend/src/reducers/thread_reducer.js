import {
    RECEIVE_THREAD,
    RECEIVE_COMMENT,
    RECEIVE_DELETE_COMMENT,
    RECEIVE_UPDATE_COMMENT
} from '../actions/thread_actions';

const initialState = {};

const ThreadReducer = (state = initialState, action) =>  {
    switch (action.type) {
        case RECEIVE_THREAD:
            const comments = {}
            action.comments.forEach(comment => {
                comments[comment._id] = comment
            })
            return { comments: comments };
        case RECEIVE_COMMENT:
            const comment = action.comment;
            const newComments = Object.assign({}, state.comments, { [comment._id]: comment })
            const newState2 = Object.assign({}, state, { comments: newComments })
            return newState2;
        case RECEIVE_DELETE_COMMENT:
            const newState3 = Object.assign({}, state);
            delete newState3.comments[action.postId];
            return newState3;
        case RECEIVE_UPDATE_COMMENT:
            const comment2 = action.comment;
            const newComments2 = Object.assign({}, state.comments, { [comment2._id]: comment2 })
            const newState4 = Object.assign({}, state, { comments: newComments2 })
            return newState4;
        default:
            return state;
    }
}

export default ThreadReducer;