import { RECEIVE_THREAD, RECEIVE_COMMENT } from '../actions/thread_actions';

const initialState = {};

const ThreadReducer = (state = initialState, action) =>  {
    switch (action.type) {
        case RECEIVE_THREAD:
            return action.thread;
        case RECEIVE_COMMENT:
            const comment = action.comment;
            const newComments = Object.assign({}, state.comments, { [comment.id]: comment })
            const newState = Object.assign({}, state, { comments: newComments })
            return newState;
        default:
            return state;
    }
}

export default ThreadReducer;