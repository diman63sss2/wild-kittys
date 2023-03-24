import axios from "axios";
import {refreshAccessToken} from "./userAPI";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterception = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterception)

$authHost.interceptors.response.use((response) => {
    return response
}, async function (error) {
    console.log('auth host error');
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
        console.log('401 refresh')
        originalRequest._retry = true;
        return refreshAccessToken().then(() => {
            originalRequest.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
            return axios(originalRequest);
        });
    }

    return Promise.reject(error);
});

export {
    $host,
    $authHost
}