import { SUBMIT_USER_LOGIN } from "../../Component/Login/loginContainer/actionType";
import { SUBMIT_USER_REGISTER } from "../../Component/Register/RegisterContainer/actionType";
import { DELETE_AUTH } from "../../Component/Logout/actionType";
import { USER_AUTH } from "../../Component/user/UsersContainer/actionType";

const defaultState = {
    isAuth: false,
    isError: false,
    loginError: ''
}

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SUBMIT_USER_LOGIN:
            return {
                ...state,
                isAuth: true
            }
        case SUBMIT_USER_REGISTER:
            return {
                ...state,
                isAuth: true
            }
        case DELETE_AUTH:
            return {
                ...state,
                isAuth: false
            }
        case USER_AUTH:
            return {
                ...state,
                isAuth: true
            }
    }
    return state;
}

