import React, {useCallback} from 'react'
import MoneyTransaction from "./transactionForm/transactionForm";
import { createTransaction, getAllTransactions, getListUsers } from "./thunk";
import { getUserInfoData } from "components/user/thunk";
import {useDispatch,useSelector} from "react-redux";

const MoneyTransactionContainer = (props) => {
    const dispatch = useDispatch();
    const balance = useSelector((state) =>  state.user.user.balance);
    const usersList = useSelector((state) => state?.transaction?.usersList);
    const correspondentId = useSelector((state) =>  state.user.user.id);
    const transactionList = useSelector((state) => state.transaction.transactionList);
    const transactionError = useSelector((state) => state.transaction.transactionError);

    const getAllTr = useCallback(() => {
        dispatch(getAllTransactions())
    }, [])

    const getListUs = useCallback((text) => {
        dispatch(getListUsers(text))
    }, [])

    const getUserInfo = useCallback((text) => {
        dispatch(getUserInfoData())
    }, [])

    const createTrans = useCallback((name, amount,recipientId,correspondentId) => {
        dispatch(createTransaction(name, amount,recipientId,correspondentId))
    }, [])

    return (
        <MoneyTransaction
            getAllTransactions={getAllTr}
            getUserInfoData={getUserInfo}
            createTransaction={createTrans}
            getListUsers={getListUs}
            transactionList={transactionList}
            usersList={usersList}
            balance={balance}
            transactionError={transactionError}
            correspondentId={correspondentId}
        />
    )
}
// const mapStateToProps = (state) => {
//     return {
//         correspondentId: state.user.user.id,
//         transactionError:state.transaction.transactionError,
//         // balance: state.user.user.balance,
//         // transactionList: state.transaction.transactionList,
//         // usersList: state?.transaction?.usersList
//     }
// }

// const mapDispatchToProps = (dispatch) => ({
//     // getAllTransactions: () => dispatch(getAllTransactions()),
//     // getListUsers: (text) => dispatch(getListUsers(text)),
//     // getUserInfoData: () => dispatch(getUserInfoData()),
//     createTransaction: (name, amount,recipientId,correspondentId) => dispatch(createTransaction(name, amount,recipientId,correspondentId)),
// })
export default React.memo(MoneyTransactionContainer)


