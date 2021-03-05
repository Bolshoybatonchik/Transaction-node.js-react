import React, {useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import debounce from 'lodash.debounce'
import {useFormik} from 'formik';
import Menu from "components/Menu/menu";
import './transactionForm.css'
import TransactionList from "./transactonList/transactionList";
import {createTransaction, getAllTransactions, getListUsers} from "components/transaction/transactionContainer/thunk";
import {getUserInfoData} from "components/user/thunk";


const MoneyTransaction = ({
                              getUserData,
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

    const debouncedSave = useCallback(
        debounce(value => getListUsers(value), 300),
        [],
    );


    // const getRecipient = ({target}) => {
    //     const {value} = target;
    //     if (!isShowModal) {
    //         setShowModal(true)
    //     }
    //
    // }

    const onInputChange = ({target}) => {
        setName(target.value);
        setRecipientId(null);
    }

    useEffect(() => {
            debouncedSave()
        },
        [name])

    // useEffect(
    //         debounce(
    //             () => getListUsers(name), 300),
    //     [name])

    useEffect(() => {
        setButtonState();
    }, [amount, name, recipientId]);

    useEffect(
        () => {
            getAllTransactions()
        }, [])

    const requestTransaction = async (data) => {
        await createTransaction(data);
        getUserData();
        await getAllTransactions();
    }

    const onRetry = async (item, isRetry, correspondentId) => {
        const {recipient_id, amount, name} = item;
        const userData = {
            recipientId: recipient_id,
            amount,
            name,
            correspondentId
        }
        await requestTransaction(userData);
    };

    const userName = (userListName) => {
        setName(userListName);
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


    return (
        <div className={"Transaction_Page"}>
            <div className={"Transaction_Form"}>
                {/*<TransactionError transactionError={transactionError}/>*/}
                <>
                    {transactionError ? (
                        <div className={"transactionError"}>Recipient not found check the correctness of the entered
                            data</div>
                    ) : <div></div>
                    }
                </>
                <Menu name={name}
                      userName={userName}
                      usersList={usersList}
                      recipientId={setRecipientId}
                      onChange={onInputChange}/>
                <input className={"Transaction_Input"} placeholder="Sum" type="number" onChange={handleAmountChange}
                       value={amount}/>
                <button className={changeButton()}
                        disabled={setButtonState()}
                        onClick={() => requestTransaction(dataTransaction)}
                >AMOUNT NOW
                </button>
            </div>
            <TransactionList transactionList={transactionList} correspondentId={correspondentId} onRetry={onRetry}/>
        </div>
    )
}

export default MoneyTransaction;


// New
// const SignupForm = () => {
//     const formik = useFormik({
//         initialValues: {
//             name: '',
//             amount: '',
//             recipientId: null,
//             correspondentId: null
//         },
//     });
//
//     const dataTransaction = {
//         name: formik.values.name,
//         amount: formik.values.amount,
//         recipientId: formik.values.recipientId,
//         correspondentId: formik.values.correspondentId,
//     }
//     console.log()
//
//     return (
//         <form onSubmit={formik.handleSubmit}>
//             <div className={"Transaction_Page"}>
//                 <div className={"Transaction_Form"}>
//                     <TransactionError transactionError={transactionError}/>
//                     <Menu onChange={onInputChange}
//                           name={name} showModal={showModal}
//                           userInInput={userInInput}
//                           usersList={usersList}
//                           RecipientId={setRecipientId}/>
//                     {/*<input*/}
//                     {/*    className={"Transaction_Input"}*/}
//                     {/*    placeholder="Sum" type="number"*/}
//                     {/*    onChange={formik.handleChange}*/}
//                     {/*    value={amount}*/}
//                     {/*/>*/}
//                     <input
//                         className={"Transaction_Input"}
//                         id="amount"
//                         name="amount"
//                         type="number"
//                         onChange={formik.handleChange}
//                         value={amount}
//                         onBlur={formik.handleBlur}
//                         placeholder={"Sum"}
//                     />
//                     <button
//                         className={changeButton()}
//                         disabled={setButtonState()}
//                         onClick={() => requestTransaction(dataTransaction)}>
//                         AMOUNT NOW
//                     </button>
//                 </div>
//                 <TransactionList transactionList={transactionList} correspondentId={correspondentId}
//                                  onRetry={onRetry}/>
//             </div>
//         </form>
//     );
// };
