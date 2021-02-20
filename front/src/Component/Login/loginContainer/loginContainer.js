import React, { useEffect } from 'react';
import LoginForm from "./LoginPage/login";
import { connect } from "react-redux";
import { loginUsers } from "./thunk";
import { getUserInfoData } from "../../user/UsersContainer/thunk";
import { getToken } from "../../../localStoreg/localStoreg";

const LoginContainer = (props) => {
    useEffect(() => {
        if (getToken()) {
            props.getUserInfoData();
        }
    }, []);
    return (
        <LoginForm
            Auth={props.Auth}
            loginUsers={props.loginUsers}
            getUserInfoData={props.getUserInfoData}/>
    )
}

const mapStateToProps = (state) => {
    return {
        Auth: state.auth.isAuth,
    };
}

const mapDispatchToProps = (dispatch) => ({
    loginUsers: (email, password) => dispatch(loginUsers(email, password)),
    getUserInfoData: () => dispatch(getUserInfoData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);