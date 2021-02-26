import axios from '../../../axios/axios';
import { setUserAuth, submitUserData } from "./action";

export const getUserInfoData = () => async (dispatch) => {
    try {
        const response = await axios.get('/protected/user-info');
        // dispatch(
        //     setUserAuth(),
        // );
        dispatch(
            submitUserData(response.data.user_info_token),
        );
    } catch (error) {
        console.error('[registerUser]: ', error);
    }
};
