import { RECEIVE_THREAD } from '../actions/thread_actions';

const initialState = {};

const ThreadReducer = (state = initialState, action) =>  {
    switch (action.type) {
        case RECEIVE_THREAD:
            return action.thread;
        default:
            return state;
    }
}

export default ThreadReducer;