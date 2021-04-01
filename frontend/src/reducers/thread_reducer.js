import { RECEIVE_THREAD, RECEIVE_COMMENT } from '../actions/thread_actions';

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
        default:
            return state;
    }
}

export default ThreadReducer;