import {$host} from "./index";

export const registration = async (email, phone, password, userName) => {
    const response = await $host.post('api/User/Registration', {email, phone, password, userName})
    return response
}

export const login = async (email, password) => {
    const response = await $host.post('api/User/Login', {email, password})
    return response
}

export const check = async () => {
    const response = await $host.post('api/User/Registration')
    return response
}