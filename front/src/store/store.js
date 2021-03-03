import {configureStore} from '@reduxjs/toolkit'
import userReducer from "components/user/reducer";
import transactionReducer from "components/transaction/transactionContainer/reducer";


export default configureStore({
    reducer: {
        user: userReducer,
        transaction: transactionReducer
    }
})


