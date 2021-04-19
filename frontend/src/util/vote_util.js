import axios from 'axios';

export const getVotesOnPost = (postId) => {
    return axios.get(`api/votes/${postId}`);
};
