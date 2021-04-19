import axios from 'axios';

export const getVotesOnPost = (postId) => {
    return axios.get(`api/votes/${postId}`);
};

export const createNewVote = (vote) => {
    return axios.post(`api/votes/${vote.post}`, vote).then((result) => {
        return result.data;
    });
};

export const deleteVote = (voteId) => {
    return axios.delete(`api/votes/${voteId}`);
};
