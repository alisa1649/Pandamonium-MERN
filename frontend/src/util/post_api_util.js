import axios from 'axios';

// TODO: replace promises with axios call when connecting to backend

// Temporary to help with fake backend
function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(1000000000));
}

export const createParentPost = (forumId, post) => {
    // return axios.post(`api/forums/${forumId}/posts`, post);
    return Promise.resolve({
        // NOTE: when building backend, return results in this format
        post: {
            id: getRandomInt(),
            forumId: '6064e15dbc30e7788b2fb300',
            body: post.body
        }
    })
};

export const createComment = (parentPost, post) => {
    // return axios.post(`api/forums/${parentPost.forumId}/${parentPost.id}`, post);
    return Promise.resolve({
        // NOTE: when building backend, return results in this format
        post: {
            id: getRandomInt(),
            forumId: '6064e15dbc30e7788b2fb300',
            parentPostId: parentPost.id,
            body: post.body
        }
    })
};


export const fetchThread = (forumId, postId) => {
    // return axios.get(`api/forums/${forumId}/${postId}`);
    return Promise.resolve({
        // NOTE: when building backend, return results in this format
        post: {
            id: postId,
            forumId: '6064e15dbc30e7788b2fb300',
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
