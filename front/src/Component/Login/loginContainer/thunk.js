import { submitAuthLogin } from "./action";
import axios from "../../../axios/axios";
import { setToken } from "../../../localStoreg/localStoreg";

export const loginUsers = (email, password) => async (dispatch) => {
    try {
        const response = await axios.post('/auth/login', {email, password});
        dispatch(
            submitAuthLogin(),
        );
       await setToken('accessToken', response.data.id_token);
    } catch (error) {
        console.error('[registerUser]: ', error);
    }
};



// sessions/create