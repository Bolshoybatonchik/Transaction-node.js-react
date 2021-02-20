import { SUBMIT_USER_DATA } from "./actionType";

const defaultState = {
    user: {
        name: "",
        email: "",
        balance: "",
    }
}

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SUBMIT_USER_DATA:
            return {
                ...state,
                user: action.payload
            }
    }
    return state;
}


