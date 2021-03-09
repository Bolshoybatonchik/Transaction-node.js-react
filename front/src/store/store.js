import {configureStore} from '@reduxjs/toolkit'
import userReducer from "components/userCobinet/reducer";
import transactionReducer from "components/transaction/transactionContainer/reducer";


export default configureStore({
    reducer: {
        user: userReducer,
        transaction: transactionReducer
    }
})


