import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (email, login, password) => {
    const axiosAPI = $host;
    axiosAPI.defaults.headers.post["Content-Type"] = "application/json";
    return await axiosAPI.post('api/auth/register', JSON.stringify(
        {
            email: email,
            login: login,
            password: password
        }
    ), {
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export const login = async (login, password) => {
    const axiosAPI = $host;
    axiosAPI.defaults.headers.post["Content-Type"] = "application/json";
    const {data} = await axiosAPI.post('api/auth/token', JSON.stringify(
        {
            login: login,
            password: password
        }
    ))
    localStorage.setItem('token', data.token);
    localStorage.setItem('refreshToken', data.refreshToken);
    return jwtDecode(data.token)
}

export const refreshAccessToken = async () => {
    try{
        console.log('refresh')
        const axiosAPI = $host;
        axiosAPI.defaults.headers.post["Content-Type"] = "application/json";
        console.log(axiosAPI)
        const {data} = await axiosAPI.post('api/auth/refresh', JSON.stringify(
            {
                refreshToken: localStorage.getItem('refreshToken'),
            }
        ))
        localStorage.setItem('token', data.token);
        return data.token
    }catch (e){
        console.log('refreshAccessToken catch')
        localStorage.removeItem('token');
        console.error(e);
        throw e;
    }

}

export const check = async () => {
    return await $authHost.get(`api/auth/role`)
}