import baseurl from "./baseurl";

const register = (payload) => baseurl.post('register', payload);
const login = (payload) => baseurl.post('login', payload);

const apis = {
    register,
    login
};

export default apis;