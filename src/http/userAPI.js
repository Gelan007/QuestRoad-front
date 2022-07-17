import {$host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, phone, password, name) => {
    const response = await $host.post('api/User/Registration', {email, phone, password, name})
    return response;
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/User/Login', {email, password})
    localStorage.setItem('token', data.access_token);
    return jwt_decode(data.access_token);
}
