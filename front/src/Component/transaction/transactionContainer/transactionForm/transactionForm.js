import React, { useEffect, useRef, useState } from 'react'
import './transactionForm.css'
import Menu from "../../../Menu/menu";
import { TransactionError } from "./transactionError/transactionError";
import TransactionList from "./transactonList/transactionList";


const MoneyTransaction = (props) => {
    const {
        getUserInfoData, getAllTransactions, transactionList,
        getListUsers, usersList, balance,
        createTransaction, transactionError, correspondentId
    } = props;
    const [amount, setAmount] = useState();
    const [name, setName] = useState();
    const [showModal, setShowModal] = useState(false);
    const [recipientId, setRecipientId] = useState()
    const RecipientId = (id) => {
        setRecipientId(id)
    }

    const dataTransaction = {
        name,
        amount,
        recipientId,
        correspondentId
    }

    const SendingAmount = (event) => {
        setAmount(event.target.value);
    }
    const SearchRecipient = async (event) => {
        if (!showModal) {
            setShowModal(true)
        }
        RecipientId(null);
        await setName(event.target.value);
        await getListUsers1(event.target.value);
    }

    useEffect(() => {
        setButtonState();
    }, [amount, name, recipientId]);

    useEffect(
        () => {
            getAllTransactions()
        }, [])

    const requestTransaction = async (data) => {
        await createTransaction(data);
        getUserInfoData();
        await getAllTransactions();
    }

    const onRetry = async (item, isRetry, correspondentId) => {
        const {recipient_id, amount, name} = item;
        const datas = {
            recipientId: recipient_id,
            amount,
            name,
            correspondentId
        }
        await requestTransaction(datas);
    };

    // const onRetry = async (data, isRetry) => {
    //     const {recipient_id, amount, name} = data;
    //     console.log('onRetry======>>>>>>111', data)
    //     await setRecipientId(recipient_id);
    //     await setName(name);
    //     await setAmount(amount);
    //     await requestTransaction();
    // };

    const getListUsers1 = (b) => {
        const text = b;
        getListUsers(text);
    }

    const userInInput = (userListName) => {
        setName(userListName);
        setShowModal(false)
    }

    const setButtonState = () => {
        if (!name) {
            return true
        }
        if (!recipientId) {
            return true
        }
        if (!amount) {
            return true
        }
        if (amount <= 0 || amount > balance) {
            return true
        }
        return name === '';
    };

    const ClassButton = () => {
        if (!setButtonState()) {
            return "Transaction_Bt_Active"
        } else {
            return "Transaction_Bt"
        }
    }

    return (<div className={"Transaction_Page"}>
            <div className={"Transaction_Form"}>
                <TransactionError transactionError={transactionError}/>
                <Menu SearchRecipient={SearchRecipient} name={name} showModal={showModal} userInInput={userInInput}
                      usersList={usersList} RecipientId={RecipientId}/>
                <input className={"Transaction_Input"} placeholder="Sum" type="number" onChange={SendingAmount}
                       value={amount}/>
                <button className={ClassButton()} disabled={setButtonState()}
                        onClick={() => requestTransaction(dataTransaction)}>AMOUNT NOW
                </button>
            </div>
            {/*<div className="Transaction_Item_Wrapper">*/}
            {/*    {transactionList.map(item => (*/}
            {/*        <div className={"Transaction_Item"} key={item.id}>*/}
            {/*            <div className={"Transaction_Image"}></div>*/}
            {/*            <label className="p" htmlFor={item.id}>*/}
            {/*                <div>Correspondent Name:{item.name}</div>*/}
            {/*                <div>Date/Time of the transaction:{item.date}</div>*/}
            {/*                <div>Transaction amount, (Debit/Credit for PW transferred):{item.amount}</div>*/}
            {/*                <div>Balance:{item.balance}</div>*/}
            {/*            </label>*/}
            {/*            <button className={"Transaction_Retry"}*/}
            {/*                    onClick={() => onRetry(item, true, correspondentId)}> RETRY*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    ))}</div>*/}
            <TransactionList transactionList={transactionList} correspondentId={correspondentId} onRetry={onRetry}/>
        </div>
    )
}

export default MoneyTransaction;



