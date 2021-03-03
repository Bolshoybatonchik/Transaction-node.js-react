import React, {useCallback} from 'react';
import LoginForm from "components/login/loginPage/login";
import {useDispatch} from "react-redux";
import {loginUsers} from "components/login/thunk";
import {getUserInfoData} from "components/user/thunk";



const LoginContainer = (props) => {
    const dispatch = useDispatch();
    const login = useCallback((email, password) => {
        dispatch(loginUsers(email, password))
    }, [])
    const getUserInfo = useCallback(() => {
        dispatch(getUserInfoData())
    }, [])

    return (
        <LoginForm
            loginUsers={login}
            getUserInfoData={getUserInfo}/>
    )
}

export default React.memo(LoginContainer)
