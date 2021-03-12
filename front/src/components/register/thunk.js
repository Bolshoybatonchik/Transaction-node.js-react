import axios from "axios/axios";
import {setToken} from "localStorege/localStorege";


export const registerUser = ({username, password, email}) => async (dispatch) => {
    try {
        const response = await axios.post('/auth/register', {username, password, email});
        setToken('accessToken', response.data.id_token);
    } catch (error) {
        console.error('[registerUser]: ', error);
    }
};