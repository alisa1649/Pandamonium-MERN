import { RECEIVE_VOTES, RECEIVE_VOTE, REMOVE_VOTE } from '../actions/vote_actions';

export default (oldState = {}, action) => {
    switch (action.type) {
        case RECEIVE_VOTES:
            const votes = {};
            action.votes.forEach((vote) => {
                votes[vote._id] = vote;
            });
            return Object.assign({}, oldState, votes);
        case RECEIVE_VOTE:
            return Object.assign({}, oldState, { [action.vote._id]: action.vote });
        case REMOVE_VOTE:
            let newState = Object.assign({}, oldState);
            delete newState[action.voteId];
            return newState;
        default:
            return oldState;
    }
};
