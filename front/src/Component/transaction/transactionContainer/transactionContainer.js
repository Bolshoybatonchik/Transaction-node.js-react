import React from 'react'
import {connect} from "react-redux";
import MoneyTransaction from "./transactionForm/transactionForm";
import { createTransaction, getAllTransactions, getListUsers } from "./thunk";
import { getUserInfoData } from "../../user/UsersContainer/thunk";


const MoneyTransactionContainer = (props) => {
    return (
        <MoneyTransaction
            getAllTransactions={props.getAllTransactions}
            getUserInfoData={props.getUserInfoData}
            transactionList={props.transactionList}
            getListUsers={props.getListUsers}
            usersList={props.usersList}
            balance={props.balance}
            createTransaction={props.createTransaction}
            transactionError={props.transactionError}
            correspondentId={props.correspondentId}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        correspondentId: state.user.user.id,
        transactionError:state.transaction.transactionError,
        balance: state.user.user.balance,
        transactionList: state.transaction.transactionList,
        usersList: state?.transaction?.usersList
    }
}

const mapDispatchToProps = (dispatch) => ({
    getAllTransactions: () => dispatch(getAllTransactions()),
    getListUsers: (text) => dispatch(getListUsers(text)),
    getUserInfoData: () => dispatch(getUserInfoData()),
    createTransaction: (name, amount,recipientId,correspondentId) => dispatch(createTransaction(name, amount,recipientId,correspondentId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MoneyTransactionContainer)

