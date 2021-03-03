import React, {useEffect, useState} from 'react'
import Menu from "components/Menu/menu";
import './transactionForm.css'
import {TransactionError} from "./transactionError/transactionError";
import TransactionList from "./transactonList/transactionList";
import {useFormik} from 'formik';

const MoneyTransaction = ({
                              getUserInfoData,
                              getAllTransactions,
                              transactionList,
                              getListUsers,
                              usersList,
                              balance,
                              createTransaction,
                              transactionError,
                              correspondentId
                          }) => {
    const [amount, setAmount] = useState();
    const [name, setName] = useState();
    const [showModal, setShowModal] = useState(false);
    const [recipientId, setRecipientId] = useState()

    const dataTransaction = {
        name,
        amount,
        recipientId,
        correspondentId
    }

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    }

    const getRecipient = async (event) => {
        if (!showModal) {
            setShowModal(true)
        }
        setRecipientId(null);
        await setName(event.target.value);
        await getListUsers(event.target.value);
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

    // const getList = (b) => {
    //     const text = b;
    //     getListUsers(text);
    // }

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

    const changeButton = () => setButtonState() ? "Transaction_Bt" : "Transaction_Bt_Active";


    const SignupForm = () => {
        const formik = useFormik({
            initialValues: {
                name: '',
                amount: '',
            },
        });

        return (
            <form onSubmit={formik.handleSubmit}>
                <div className={"Transaction_Page"}>
                    <div className={"Transaction_Form"}>
                        <TransactionError transactionError={transactionError}/>
                        <Menu SearchRecipient={getRecipient}
                              name={name} showModal={showModal}
                              userInInput={userInInput}
                              usersList={usersList}
                              RecipientId={setRecipientId}/>
                        {/*<input*/}
                        {/*    className={"Transaction_Input"}*/}
                        {/*    placeholder="Sum" type="number"*/}
                        {/*    onChange={formik.handleChange}*/}
                        {/*    value={formik.values.amount}*/}
                        {/*/>*/}
                        <input
                            className={"Transaction_Input"}
                            id="amount"
                            name="amount"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.amount}
                            onBlur={formik.handleBlur}
                            placeholder={"Sum"}
                        />
                        <button
                            className={changeButton()}
                            disabled={setButtonState()}
                            onClick={() => requestTransaction(dataTransaction)}>
                            AMOUNT NOW
                        </button>
                    </div>
                    <TransactionList transactionList={transactionList} correspondentId={correspondentId}
                                     onRetry={onRetry}/>
                </div>
            </form>
        );
    };

    return (
        <SignupForm/>


        // <div className={"Transaction_Page"}>
        //     <div className={"Transaction_Form"}>
        //         <TransactionError transactionError={transactionError}/>
        //         <Menu SearchRecipient={getRecipient} name={name} showModal={showModal} userInInput={userInInput}
        //               usersList={usersList} RecipientId={setRecipientId}/>
        //         <input className={"Transaction_Input"} placeholder="Sum" type="number" onChange={handleAmountChange}
        //                value={amount}/>
        //         <button className={changeButton()} disabled={setButtonState()}
        //                 onClick={() => requestTransaction(dataTransaction)}>AMOUNT NOW
        //         </button>
        //     </div>
        //     <TransactionList transactionList={transactionList} correspondentId={correspondentId} onRetry={onRetry}/>
        // </div>
    )
}

export default MoneyTransaction;

