import RegisterPage from "./RegiaterPage/registerPage";
import { connect } from "react-redux";
import { registerUser } from "./thunk";
import { getUserInfoData } from "../../user/UsersContainer/thunk";
import { useEffect } from "react";
import { getToken } from "../../../localStoreg/localStoreg";

const RegisterContainer = (props) => {
    return (
        <RegisterPage registerUser={props.registerUser} getUserInfoData={props.getUserInfoData}/>
    )
}

const mapDispatchToProps = (dispatch) => ({
    registerUser: (data) => dispatch(registerUser(data)),
    getUserInfoData: () => dispatch(getUserInfoData()),
})

export default connect(null, mapDispatchToProps)(RegisterContainer);