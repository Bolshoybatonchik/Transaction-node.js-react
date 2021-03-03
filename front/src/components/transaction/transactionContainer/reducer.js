import {createSlice} from '@reduxjs/toolkit'


// import {
//     SET_TRANSACTION_DATA,
//     SET_USERS_LIST,
//     GET_ERROR
// } from "./actionType";
//
//
// const defaultState = {
//     transactionList: [],
//     usersList: [],
//     transactionError: false
// }

// export const TransactionReducer = (state = defaultState, action) => {
//     switch (action.type) {
//         case SET_TRANSACTION_DATA:
//             return {
//                 ...state,
//                 transactionList: action.payload
//             }
//         case SET_USERS_LIST:
//             return {
//                 ...state,
//                 usersList: action.payload
//             }
//         case GET_ERROR:
//             return {
//                 ...state,
//                 transactionError: action.payload
//             }
//     }
//     return state;
// }


export const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        transactionList: [],
        usersList: [],
        transactionError: false

    },
    reducers: {
        setTransactionData: (state, action) => {
            state.transactionList = action.payload
        },
        setListUsers: (state, action) => {
            state.usersList = action.payload
        },
        getError: (state, action) => {
            state.transactionError = action.payload
        }
    }
})

export const {setListUsers, setTransactionData, getError} = transactionSlice.actions

export default transactionSlice.reducer