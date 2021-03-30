import { RECEIVE_CURRENT_USER } from '../actions/user_actions'

export default (oldState = {}, action) => {
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, {currentUser: action.currentUser})
        default:
            return oldState;
    }
}