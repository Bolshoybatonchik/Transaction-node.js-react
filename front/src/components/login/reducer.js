import {createSlice} from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        transaction: {
          error:false,
        }
    },
    reducers: {
        getError: (state, action) => {
            state.login = action.payload
        },
        deleteError: (state, action) => {
            state.login = false
        }
    }

})

export const {getError,deleteError} = loginSlice.actions

export default loginSlice.reducer