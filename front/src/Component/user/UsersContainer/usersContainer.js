import React, { useEffect } from 'react';
import UsersCabinet from "./userCabinet/usersCabinet";
import { connect } from "react-redux";
import { logoutUser } from "../../Logout/thunk";
import { getToken } from "../../../localStoreg/localStoreg";
import { getUserInfoData } from "./thunk";
import { useHistory } from "react-router-dom";


const UsersContainer = (props) => {
    let history = useHistory();
    useEffect(() => {
        const Effects = async () => {
            if (getToken()) {
                await props.getUserInfoData();
            }
            if (!props.Auth) {
                await history.push("/login")
            }
            ;
        }
        Effects();
    }, [props.Auth]);
    return (<UsersCabinet logoutUser={props.logoutUser} Auth={props.Auth} user={props.user}/>)
}

const mapStateToProps = (state) => {
    return {
        Auth: state.auth.isAuth,
        user: state.user.user,
    };
}

const mapDispatchToProps = ({
    logoutUser,
    getUserInfoData
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);