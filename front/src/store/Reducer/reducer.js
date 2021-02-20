import { combineReducers } from "redux";
import { loginReducer } from "../../Component/Login/loginContainer/reduser";
import { authReducer } from "./authReducer";
import { userReducer } from "../../Component/user/UsersContainer/reducer";
import { TransactionReducer } from "../../Component/transaction/transactionContainer/reducer";

let reducer = combineReducers({
    login: loginReducer,
    auth: authReducer,
    user: userReducer,
    transaction: TransactionReducer
})
export default reducer;