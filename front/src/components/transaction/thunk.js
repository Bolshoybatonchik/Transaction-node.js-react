import {getError, setListUsers, setTransactionData, setLoading} from "components/transaction/reducer";
import axios from "utils/axios";
import {getUserInfoData} from 'components/userCobinet/thunk'


export const createTransaction = ({name, amount, recipientId, correspondentId}) => async (dispatch) => {
    try {
        await axios.post('protected/transactions', {name, amount, recipientId, correspondentId});
        dispatch(
            getError(false)
        )
    } catch (error) {
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


export const fetchTransaction = (data) => async (dispatch) => {
    try{
        dispatch(
            setLoading(true)
        )
        await dispatch(createTransaction(data))
        await dispatch(getUserInfoData())
        await dispatch(getAllTransactions())
        dispatch(
            setLoading(false)
        )
    }catch(error) {
        dispatch(
            getError(error.response.data.message)
        )
        console.log('@@@',error);
    }
};
