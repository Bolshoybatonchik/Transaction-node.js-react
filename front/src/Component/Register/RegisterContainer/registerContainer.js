import RegisterPage from "./RegiaterPage/registerPage";
import { connect } from "react-redux";
import { registerUser } from "./thunk";
import { getUserInfoData } from "../../user/UsersContainer/thunk";
import { useEffect } from "react";
import { getToken } from "../../../localStoreg/localStoreg";

const RegisterContainer = (props) => {
    useEffect(() => {
        if (getToken()) {
            props.getUserInfoData();
        }
    }, []);
    return (
        <RegisterPage registerUser={props.registerUser} getUserInfoData={props.getUserInfoData} Auth={props.Auth}/>
    )
}
const mapStateToProps = (state) => {
    console.log("RegisterContainer",state)
    return {
        Auth: state.auth.isAuth,
    };
}
const mapDispatchToProps = (dispatch) => ({
    registerUser: (data) => dispatch(registerUser(data)),
    getUserInfoData: () => dispatch(getUserInfoData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);