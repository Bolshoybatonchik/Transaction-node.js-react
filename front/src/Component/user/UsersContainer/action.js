import { SUBMIT_USER_DATA, USER_AUTH } from "./actionType";

export const setUserAuth = () => ({
    type: USER_AUTH,
})

export const submitUserData = (data) => ({
    type: SUBMIT_USER_DATA,
    payload: data
})
