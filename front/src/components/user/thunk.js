import axios from 'axios/axios';
import {userData} from "components/user/reducer";

export const getUserInfoData = () => async (dispatch) => {
    try {
        const response = await axios.get('/protected/user-info');
        dispatch(
            userData(response.data.user_info_token),
        );
    } catch (error) {
        console.error('[registerUser]: ', error);
    }
};
