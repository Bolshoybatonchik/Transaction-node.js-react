import {connect} from "react-redux";
import {registerUser} from "components/register/thunk";
import RegisterPage from "components/register/regiaterPage/registerPage";
// import {getUserInfoData} from "components/user/thunk";
import {useDispatch, useSelector} from "react-redux";


const RegisterContainer = (props) => {
    const dispatch = useDispatch();
    const register  = (data) => dispatch(registerUser(data))
    // const userData = () => dispatch(getUserInfoData())
    return (
        <RegisterPage registerUser={register}/>
    )
}
// getUserInfoData={userData}
// const mapDispatchToProps = (dispatch) => ({
//     registerUser: (data) => dispatch(registerUser(data)),
//     // getUserInfoData: () => dispatch(getUserInfoData()),
// })

export default RegisterContainer
// connect(null, mapDispatchToProps)(RegisterContainer);