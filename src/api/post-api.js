import baseurl from "./baseurl";

const getPosts = () => baseurl.get('posts');

const apis = {getPosts};

export default apis;