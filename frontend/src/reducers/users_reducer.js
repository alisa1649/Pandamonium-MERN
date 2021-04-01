import { RECEIVE_CURRENT_USER_INFO, RECEIVE_OTHER_USER_INFO } from '../actions/user_actions'

export default (oldState = {}, action) => {
    switch(action.type) {
        case RECEIVE_CURRENT_USER_INFO:
            return Object.assign({}, oldState, {currentUser: action.currentUser.data})
        case RECEIVE_OTHER_USER_INFO:
            return Object.assign({}, oldState, {[action.user.id]: action.user})
        default:
            return oldState;
    }
}