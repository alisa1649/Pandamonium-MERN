import axios from 'axios';

export const createPost = (forumId, post) => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    return Promise.resolve({
        post: {
            id: getRandomInt(1000000),
            forum_id: 1,
            body: post.body
        }
    })

    // TODO: replace promise with axios call when connecting to backend
    // return axios.post(`api/forums/${forumName}/posts`, post);
};