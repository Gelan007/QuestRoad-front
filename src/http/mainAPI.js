import {$mainHost} from "./index";
import jwt_decode from "jwt-decode";

export const getPopularQuests = async () => {
    const response = await $mainHost.get('api/Quest/Popular')
    return response;
}