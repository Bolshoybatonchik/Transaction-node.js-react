import React from 'react';
import Skeleton from 'react-loading-skeleton';
import {cashIcon} from '../../../asets'


const TransactionList = (props) => {
    const {transactionList, onRetry, correspondentId, isLoading,setButtonState} = props;
    const changeButton = () => setButtonState() ? "Transaction_Retry" : "Transaction_Retry_Active";
    return (
        <div className="Transaction_Item_Wrapper">
            {transactionList.map(item => (
                <div className={"Transaction_Item"} key={item.id}>
                    {isLoading ? <Skeleton width={190} height={150}/> : <img alt="icon" src={cashIcon}/>}
                    <div className="Transaction_Inform">
                        <span className="Transaction_Inform_Item">{isLoading ? <Skeleton/> : "Correspondent Name:" + item.name}</span>
                        <span className="Transaction_Inform_Item">{isLoading ? <Skeleton/> : "Date/Time of the transaction:" + item.date}</span>
                        <span className="Transaction_Inform_Item">{isLoading ? <Skeleton/> :"Transaction amount, (Debit/Credit for PW transferred):" + item.amount}</span>
                        <span className="Transaction_Inform_Item">{isLoading ? <Skeleton/> :"Balance:" + item.balance}</span>
                    </div>
                    <button className={changeButton()}   disabled={setButtonState()}
                            onClick={() => onRetry(item, true, correspondentId)}> RETRY
                    </button>
                </div>
            ))}</div>
    )
}

export default TransactionList;