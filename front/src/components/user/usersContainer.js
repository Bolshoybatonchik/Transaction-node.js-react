import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {deleteToken} from "localStorege/localStorege";
import {getUserInfoData} from "components/user/thunk";
import UsersCabinet from "components/user/userCabinet/usersCabinet";


const UsersContainer = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    let history = useHistory();
    console.log(history);
    const logoutUser = () => {
        deleteToken();
        console.log('onClickButtonLogin', history.push)
        history.push('/login')
    }
    const getUserInfo = useCallback(() => {
        dispatch(getUserInfoData())
    }, [])
    useEffect(() => {
        dispatch(getUserInfoData());
    }, []);

    return (<UsersCabinet user={user} onClick={logoutUser} getUserInfoData={getUserInfo}/>)
};


export default React.memo(UsersContainer)
