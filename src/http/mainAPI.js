import {$mainAuthHost, $mainHost} from "./index";
import jwt_decode from "jwt-decode";

export const getPopularQuests = async () => {
    const response = await $mainHost.get('api/Quest/Popular')
    return response;
}

export const getUserAccountInfo = async () => {
    const response =  await $mainAuthHost.get('api/Profile/UserInfo')
    return response.data;
}

export const getUserBookings = async () => {
    const response = await $mainAuthHost.get('api/Profile/UserBookings')
    return response.data;
}

export const getUserQuests = async () => {
    const response = await $mainHost.get('api/Quest')
    return response.data;
}

export const addMembers = async (user_id, team_id, when_assigned) => {
    const response = await $mainHost.post('api/Member',{user_id, team_id, when_assigned})
    return response;
}

export const getQuestById = async (quest_id) => {
    const response = await $mainHost.get(`api/Quest/${quest_id}`)
    return response.data;
}