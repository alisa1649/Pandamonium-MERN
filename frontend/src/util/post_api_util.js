import axios from 'axios';

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

export const createComment = (post) => {
    return axios.post(`api/posts/new/${post.forum}`, post)
        .then(result => {
            return result.data
        });
};


export const fetchThread = (postId) => {
    return axios.get(`api/posts/${postId}`)
        .then(result => {
            return result.data
        });
};

export function deletePost(postId) {
    return axios.delete(`api/posts/${postId}`)
}


