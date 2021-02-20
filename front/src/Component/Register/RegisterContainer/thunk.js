import axios from "../../../axios/axios";
import { submitAuthRegister } from "./action";
import { setToken } from "../../../localStoreg/localStoreg";

export const registerUser = ({username, password, email}) => async (dispatch) => {
    try {
        const response = await axios.post('/auth/register', {username, password, email});
        dispatch(submitAuthRegister());
        console.log("registerUserid_token",response.data.id_token)
        setToken('accessToken', response.data.id_token);
    } catch (error) {
        console.error('[registerUser]: ', error);
    }
};