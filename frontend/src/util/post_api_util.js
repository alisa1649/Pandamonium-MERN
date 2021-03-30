import axios from 'axios';

// TODO: replace promises with axios call when connecting to backend

// Temporary to help with fake backend
function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(1000000000));
}

export const createParentPost = (forumId, post) => {
    // return axios.post(`api/forums/${forumName}/posts`, post);
    return Promise.resolve({
        // NOTE: when building backend, return results in this format
        post: {
            id: getRandomInt(),
            forum_id: 1,
            body: post.body
        }
    })
};

export const fetchThread = (postId) => {
    // return axios.post(`api/forums/${forumName}/posts`, post);
    return Promise.resolve({
        post: {
            // NOTE: when building backend, return results in this format
            id: postId,
            forum_id: 1,
            body: "TODO: fill this in after connecting to server",
            comments: {
                [getRandomInt()]: { body: "Placeholder comment 1" },
                [getRandomInt()]: { body: "Placeholder comment 2" },
                [getRandomInt()]: { body: "Placeholder comment 3" },
                [getRandomInt()]: { body: "Placeholder comment 4" },
            }
        }
    })
};
