import axios from "utils/axios";
import {deleteError, getError} from "components/login/reducer";
import {setToken} from "utils/localStorage";


export const loginUsers = (email, password) => async (dispatch) => {
    try {
        const response = await axios.post('/auth/login', {email, password});
        await setToken('accessToken', response.data.id_token);
        dispatch (deleteError())
    } catch (error) {
        console.error('[registerUser]: ', error);
        dispatch(
            getError(error.response.data.message)
        )
    }
};


