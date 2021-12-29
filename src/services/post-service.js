import api from '../api/post-api';

function addPost(post){
    return api.addPost(post, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            authorization: 'Bearer' + localStorage.getItem('USER-TOKEN') && localStorage.getItem('USER-TOKEN')
        }
    }).then(handleResponse).then(post => {
        return post;
    });
}

function addComment(id, comment){
    return api.addComment(id, comment,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            authorization: 'Bearer' + localStorage.getItem('USER-TOKEN') && localStorage.getItem('USER-TOKEN')
        }
    }).then(handleResponse).then(post => {
        console.log(comment)
        return post;
    });
}

async function getPosts() {
    return await api.getPosts({
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            authorization: 'Bearer' + localStorage.getItem('USER-TOKEN') && localStorage.getItem('USER-TOKEN')
        }
    }).then(res =>{
        return res.data.posts;
    });
}

async function getPostWithID(id){
    return await api.getPostWithID(id, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            authorization: 'Bearer' + localStorage.getItem('USER-TOKEN') && localStorage.getItem('USER-TOKEN')
        }
    }).then(res => {
        return res.data.post;
    });
}

function handleResponse(response) {
    const data = response.data.post;
    console.log(response)
    if (response.status !== 201) {
        const error = (data && data.error) || response.statusText;
        return Promise.reject(error);
    }

    return data;
}

export const postService = {getPosts, addPost, getPostWithID, addComment};