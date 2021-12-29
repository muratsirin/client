import baseurl from "./baseurl";

const getPosts = () => baseurl.get('posts');
const addPost = (payload) => baseurl.post('post', payload);
const getPostWithID = id => baseurl.get('/post/' + id);
const addComment = (id, payload) => baseurl.post('/post/comment/'+id, payload);

const apis = {getPosts, addPost, getPostWithID, addComment};

export default apis;