import {createSlice} from '@reduxjs/toolkit'


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