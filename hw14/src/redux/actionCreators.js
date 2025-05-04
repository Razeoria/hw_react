import { SET_USER_INFO } from "./types";

export const setUserInfo = (payload)=>{
    return {
        type: SET_USER_INFO,
        payload,
    }
};