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

export const createParentPost = (post) => {
    return axios.post(`api/posts/new`, post)
        .then(result => {
            return result.data
        });
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


export const fetchThread = (postId) => {
    return axios.get(`api/posts/${postId}`)
        .then(result => {
            return result.data
        });
};
