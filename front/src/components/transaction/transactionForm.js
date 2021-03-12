import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import debounce from 'lodash.debounce'
import 'components/transaction/transactionForm.css'
import TransactionList from "components/transaction/transactonList/transactionList";
import {getAllTransactions, getListUsers, fetchTransaction} from "components/transaction/thunk";
import Menu from "components/menu/menu";
import {setLoading} from "components/transaction/reducer";


const MoneyTransaction = () => {
    const [amount, setAmount] = useState();
    const [name, setName] = useState();
    const [recipientId, setRecipientId] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const todosPerPage = 5;


    const dispatch = useDispatch();
    const balance = useSelector((state) => state.user.user.balance);
    const usersList = useSelector((state) => state?.transaction?.usersList);
    const correspondentId = useSelector((state) => state.user.user.id);
    const transactionList = useSelector((state) => state.transaction.transactionList);
    const transactionError = useSelector((state) => state.transaction.transactionError);
    const isLoading = useSelector((state) => state.transaction.isLoading);


    const dispatchGetAllTransactions = () => {
        dispatch(getAllTransactions())
    }

    const dispatchGetListUsers = async (text) => {
        await dispatch(getListUsers(text))
    }

    const dispatchSetLoading = (data) => {
        dispatch(setLoading(data))
    }

    const handleClick = (number) => {
        setCurrentPage(number)
    }

    const renderList = () => {
        const indexOfLastPage = currentPage * todosPerPage;
        const indexOfFirstPage = indexOfLastPage - todosPerPage;
        return transactionList.slice(indexOfFirstPage, indexOfLastPage)
    }

    const renderPageNumbers = () => {
        const pageNumber = [];
        if (transactionList.length > 5) {
            for (let i = 1; i <= Math.ceil(transactionList.length / todosPerPage); i++) {
                pageNumber.push(i)
            }
            return (<ul className="Page_List">
                {pageNumber.map(number => {
                    return (
                        <li className="Page_List_Item" id={number} key={number}
                            onClick={() => handleClick(number)}> {number}</li>
                    );
                })}
            </ul>)
        }
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

    useEffect(
        () => {
            dispatchSetLoading(false)
        }, [transactionList])


    const requestTransaction = (data) => {
        dispatch(fetchTransaction(data));
    }

    const onRetry = async (item, isRetry, correspondentId) => {
        const {recipient_id, amount, name} = item;
        const userData = {
            recipientId: recipient_id,
            amount,
            name,
            correspondentId
        }
        requestTransaction(userData);
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
        if (isLoading) {
            return true
        }
        if (amount <= 0 || amount > balance) {
            return true
        }
        return name === '';
    };

    const setRetryButtonState = () => {
        if (balance <= 0) {
            return true
        }
    }

    const changeButton = () => setButtonState() ? "Transaction_Bt" : "Transaction_Bt_Active";

    return (
        <div className={"Transaction_Page"}>
            <div className={"Transaction_Form"}>
                <>
                    {transactionError ? (
                        <div className={"transactionError"}>{transactionError}</div>
                    ) : <div/>
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
            <TransactionList
                setButtonState={setRetryButtonState}
                transactionList={renderList()}
                isLoading={isLoading}
                correspondentId={correspondentId}
                onRetry={onRetry}/>
            {renderPageNumbers()}
        </div>
    )
}

export default MoneyTransaction;

