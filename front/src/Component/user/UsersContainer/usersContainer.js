import React, { useEffect, useCallback } from 'react';
import UsersCabinet from "./userCabinet/usersCabinet";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfoData } from "./thunk";
import { logoutUser } from '../../Logout/thunk';

const UsersContainer = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    const handleClick = useCallback(() => {
        dispatch(logoutUser())
    }, [])

    const getUserInfo = useCallback(() => {
        dispatch(getUserInfoData())
    }, [])

    useEffect(() => {
        dispatch(getUserInfoData());
    }, []);

    return (<UsersCabinet user={user} onClick={handleClick} getUserInfoData={getUserInfo}/>)
};


export default React.memo(UsersContainer)
