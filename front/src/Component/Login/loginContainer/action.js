import { SUBMIT_USER_LOGIN } from "./actionType";

export const submitAuthLogin = (payload) => ({
    type: SUBMIT_USER_LOGIN,
    payload
})