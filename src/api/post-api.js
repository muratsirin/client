import baseurl from "./baseurl";

const getPosts = () => baseurl.get('posts');
const addPost = (payload) => baseurl.post('post', payload);
const getPostWithID = id => baseurl.get('/post/' + id);

const apis = {getPosts, addPost, getPostWithID};

export default apis;