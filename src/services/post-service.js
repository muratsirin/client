import api from '../api/post-api';

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

export const postService = {getPosts};