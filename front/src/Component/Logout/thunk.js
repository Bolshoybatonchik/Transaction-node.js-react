import { deleteToken } from "../../localStoreg/localStoreg";
import { deleteAuth } from "./action";

export const logoutUser = () => async (dispatch) => {
    try {
        deleteToken();
        dispatch(
            deleteAuth()
        )
    } catch (error) {
        console.error('[logoutUser]: ', error);
    }
};
