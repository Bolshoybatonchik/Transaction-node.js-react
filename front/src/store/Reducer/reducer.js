import { combineReducers } from "redux";
import { loginReducer } from "../../Component/Login/loginContainer/reduser";
import { authReducer } from "./authReducer";
import { userReducer } from "../../Component/user/UsersContainer/reducer";
import { TransactionReducer } from "../../Component/transaction/transactionContainer/reducer";

export default combineReducers({
    login: loginReducer,
    auth: authReducer,
    user: userReducer,
    transaction: TransactionReducer
})
