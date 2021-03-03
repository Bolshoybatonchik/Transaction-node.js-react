import {connect} from "react-redux";
import {registerUser} from "components/register/thunk";
import RegisterPage from "components/register/regiaterPage/registerPage";
import {getUserInfoData} from "components/user/thunk";

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