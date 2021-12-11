import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

const register = (payload) => api.post('register', payload);
const login = (payload) => api.post('login', payload);

const apis = {
    register,
    login
};

export default apis;