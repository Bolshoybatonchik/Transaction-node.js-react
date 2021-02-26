import '../transactionForm.css';
import React from 'react';


const TransactionList = (props) => {
    const {transactionList,onRetry,correspondentId} = props;
    return (
        <div className="Transaction_Item_Wrapper">
            {transactionList.map(item => (
                <div className={"Transaction_Item"} key={item.id}>
                    <div className={"Transaction_Image"}></div>
                    <label className="p" htmlFor={item.id}>
                        <div>Correspondent Name:{item.name}</div>
                        <div>Date/Time of the transaction:{item.date}</div>
                        <div>Transaction amount, (Debit/Credit for PW transferred):{item.amount}</div>
                        <div>Balance:{item.balance}</div>
                    </label>
                    <button className={"Transaction_Retry"}
                            onClick={() => onRetry(item, true, correspondentId)}> RETRY
                    </button>
                </div>
            ))}</div>
    )
}

export default TransactionList;