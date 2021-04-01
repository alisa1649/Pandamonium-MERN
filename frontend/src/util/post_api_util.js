import axios from 'axios';

// TODO: replace promises with axios call when connecting to backend

// Temporary to help with fake backend
function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(1000000000));
}

export const fetchParentPosts = (forumId) => {
    return axios.get(`api/posts/forums/${forumId}`)
        .then(result => result.data);
};

export const createParentPost = (forumId, post) => {
    // return axios.post(`api/forums/${forumId}/posts`, post);
    return Promise.resolve({
        // NOTE: when building backend, return results in this format
        post: {
            id: getRandomInt(),
            forumId: '6064e15dbc30e7788b2fb300',
            text: post.text
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
            text: post.text
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
            text: "TODO: fill this in after connecting to server",
            comments: {
                [getRandomInt()]: { text: "Placeholder comment 1" },
                [getRandomInt()]: { text: "Placeholder comment 2" },
                [getRandomInt()]: { text: "Placeholder comment 3" },
                [getRandomInt()]: { text: "Placeholder comment 4" },
            }
        }
    })
};
