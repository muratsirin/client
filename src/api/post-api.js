import baseurl from "./baseurl";

const getPosts = () => baseurl.get('posts');
const addPost = (payload) => baseurl.post('post', payload);

const apis = {getPosts, addPost};

export default apis;