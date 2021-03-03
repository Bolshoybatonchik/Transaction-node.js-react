import axios from "axios/axios";
import {setToken} from "localStorege/localStorege";


export const loginUsers = (email, password) => async (dispatch) => {
    try {
        const response = await axios.post('/auth/login', {email, password});
        await setToken('accessToken', response.data.id_token);
    } catch (error) {
        console.error('[registerUser]: ', error);
    }
};


