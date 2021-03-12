import {getError, setListUsers, setTransactionData} from "components/transaction/transactionContainer/reducer";
import axios from "axios/axios";


export const createTransaction = ({name, amount, recipientId, correspondentId}) => async (dispatch) => {
    try {
        const response = await axios.post('protected/transactions', {name, amount, recipientId, correspondentId});
        console.log("createTransaction",response)
        dispatch(
            getError(false)
        )
    } catch (error) {
        console.log(error.response.data.message)
        dispatch(
            getError(error.response.data.message)
        )
    }
};

export const getAllTransactions = () => async (dispatch) => {
    try {
        const response = await axios.get('protected/transactions');
        dispatch(
            setTransactionData(response.data.trans_token),
        );
    } catch (error) {
        console.error('[registerUser]: ', error);
    }
};

export const getListUsers = (text) => async (dispatch) => {
    const response = await axios.post('/protected/users/list', {filter: text});
    dispatch(
        setListUsers(response.data),
    );
};


