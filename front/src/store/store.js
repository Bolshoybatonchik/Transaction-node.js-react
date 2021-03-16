import {configureStore} from '@reduxjs/toolkit'
import userReducer from "components/userCobinet/reducer";
import transactionReducer from "components/transaction/reducer";
import loginReducer from "components/login/reducer"

export default configureStore({
    reducer: {
        user: userReducer,
        transaction: transactionReducer,
        login:loginReducer,
    }
})


