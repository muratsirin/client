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

function handleResponse(response) {
    const data = response.data.post;
    if (response.status !== 201) {
        const error = (data && data.error) || response.statusText;
        return Promise.reject(error);
    }

    return data;
}

export const postService = {getPosts, addPost};