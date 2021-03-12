import React, {useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import debounce from 'lodash.debounce'
import {useFormik} from 'formik';
import 'components/transaction/transactionForm/transactionForm.css'
import TransactionList from "components/transaction/transactionForm/transactonList/transactionList";
import {createTransaction, getAllTransactions, getListUsers} from "components/transaction/thunk";
import {getUserInfoData} from "components/userCobinet/thunk";
import Menu from "components/menu/menu";


const MoneyTransaction = () => {
    const [amount, setAmount] = useState();
    const [name, setName] = useState();
    const [recipientId, setRecipientId] = useState()

    const dispatch = useDispatch();
    const balance = useSelector((state) => state.user.user.balance);
    const usersList = useSelector((state) => state?.transaction?.usersList);
    const correspondentId = useSelector((state) => state.user.user.id);
    const transactionList = useSelector((state) => state.transaction.transactionList);
    const transactionError = useSelector((state) => state.transaction.transactionError);

    const dispatchGetAllTransactions = async () => {
        await dispatch(getAllTransactions())
    }

    const dispatchGetListUsers = async (text) => {
        await dispatch(getListUsers(text))
    }

    const dispatchGetUserInfoData = async () => {
        await dispatch(getUserInfoData())
    }


    const dispatchCreateTransaction = async (data) => {
        await dispatch(createTransaction(data))
    }

    const dataTransaction = {
        name,
        amount,
        recipientId,
        correspondentId
    }

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    }

    const onInputChange = ({target}) => {
        setName(target.value);
        setRecipientId(null);
    }

    useEffect(
        debounce(
            () => dispatchGetListUsers(name), 350),
        [name])


    useEffect(() => {
        setButtonState();
    }, [amount, name, recipientId]);

    useEffect(
        () => {
            dispatchGetAllTransactions()
        }, [])

    const requestTransaction = async (data) => {
        await dispatchCreateTransaction(data);
        await dispatchGetUserInfoData();
        await dispatchGetAllTransactions();
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
                <>
                    {transactionError ? (
                        <div className={"transactionError"}>{transactionError}</div>
                    ) : <div />
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


// {
//     getUserData,
//         getAllTransactions,
//         transactionList,
//         getListUsers,
//         usersList,
//         balance,
//         createTransaction,
//         transactionError,
//         correspondentId
// }