import {
    SET_TRANSACTION_DATA,
    SET_USERS_LIST,
    GET_ERROR
} from "./actionType";

export const setTransactionData = (data) => ({
    type: SET_TRANSACTION_DATA,
    payload: data
})

export const setListUsers = (response) => ({
    type: SET_USERS_LIST,
    payload: response
})
export const getError = (payload) => ({
    type: GET_ERROR,
    payload
})
