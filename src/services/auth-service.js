import api from "../api/auth-api";

function register(user) {
    return api.register(user, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    }).then(handleResponse).then(user => {
        if (user.token) {
            localStorage.setItem('USER-token', user.token);
        }

        return user.token;
    });
}

function login(user) {
    return api.login(user, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    }).then(handleResponse).then(user => {
        if (user.token) {
            localStorage.setItem('USER-TOKEN', user.token);
        }

        return user.token;
    });
}

function logout() {
    localStorage.clear();
}

function handleResponse(response) {
    const data = response.data.user;
    if (response.statusText !== 'OK') {
        if (response.status === 401) {
            logout();
        }

        const error = (data && data.error) || response.statusText;
        return Promise.reject(error);
    }

    return data;
}

export const authService = {register, login, logout};