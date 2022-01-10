import api from '../api/post-api';
import {store} from "../redux/store";

function token() {
    const state = store.getState();
    return state.auth.currentUser.token;
}

function addPost(post, image) {
    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('content', post.content);
    formData.append('user', post.user);
    image && formData.append('image', image);

    return api.addPost(formData, {
        method: 'POST',
        data: formData,
        headers: {
            'Content-type': 'application/json',
            authorization: 'Bearer' + token()
        }
    }).then(handleResponse).then(post => {
        return post;
    });
}

function addComment(id, comment) {
    return api.addComment(id, comment, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            authorization: 'Bearer' + token()
        }
    }).then(handleResponse).then(post => {
        return post;
    });
}

async function getPosts() {
    return await api.getPosts({
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            authorization: 'Bearer' + token()
        }
    }).then(res => {
        return res.data.posts;
    });
}

async function getPostWithID(id) {
    return await api.getPostWithID(id, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            authorization: 'Bearer' + token()
        }
    }).then(res => {
        return res.data.post;
    });
}

function handleResponse(response) {
    const data = response.data.post;
    if (response.status !== 201) {
        const error = (data && data.error) || response.statusText;
        return Promise.reject(error);
    }
    return data;
}

export const postService = {getPosts, addPost, getPostWithID, addComment};