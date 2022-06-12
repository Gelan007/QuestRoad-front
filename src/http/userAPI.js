import {$host} from "./index";

export const registration = async (email, phone, password, name) => {
    const response = await $host.post('api/User/Registration', {email, phone, password, name})
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