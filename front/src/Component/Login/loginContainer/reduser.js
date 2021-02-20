import { SUBMIT_USER_LOGIN } from "./actionType";

const defaultState = {
    isAuth: false,
}

export const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SUBMIT_USER_LOGIN:
            return {
                ...state,
                isLogin: true
            }
    }
    return state;
}