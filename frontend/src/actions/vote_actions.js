import * as VoteUtil from '../util/vote_util';

export const RECEIVE_VOTES = 'RECEIVE_VOTES';
export const RECEIVE_VOTE = 'RECEIVE_VOTE';
export const REMOVE_VOTE = 'REMOVE_VOTE';

export const receiveVote = (vote) => {
    return {
        type: RECEIVE_VOTE,
        vote,
    };
};

export const receiveVotes = (votes) => {
    return {
        type: RECEIVE_VOTES,
        votes,
    };
};

export const removeVote = (voteId) => {
    return {
        type: REMOVE_VOTE,
        voteId,
    };
};

export const requestVotesOnPost = (postId) => (dispatch) => {
    VoteUtil.getVotesOnPost(postId).then((votes) => {
        return dispatch(receiveVotes(votes));
    });
};

export const createNewVote = (vote) => (dispatch) => {
    VoteUtil.createNewVote(vote).then((vote) => {
        return dispatch(receiveVote(vote));
    });
};

export const deleteVote = (voteId) => (dispatch) => {
    VoteUtil.deleteVote(voteId).then(() => {
        return dispatch(removeVote(voteId));
    });
};
