import React, {useEffect} from 'react'
import "components/user/userCabinet.css"
// import MoneyTransactionContainer from "components/transaction/transactionContainer/transactionContainer";
import MoneyTransaction from "components/transaction/transactionContainer/transactionForm/transactionForm";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {deleteToken} from "localStorege/localStorege";
import {getUserInfoData} from "components/user/thunk";



const UsersCabinet = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    let history = useHistory();


    useEffect(() => {
        dispatch(getUserInfoData());
    }, []);

    const logoutUser = () => {
        deleteToken();
        history.push('/login')
    }
    return (<>
            <div className={"User_Page"}>
                <div className={"Cap"}/>
                <div className={"Wrapper_heading"}><h1 className={"heading"}>KONG TRANSACTION</h1>
                    <h2>fast and convenient translation application</h2></div>
                <div className={"UsersCabinet"}>
                    <nav className={"UsersCabinet_UserInform"}>
                        <div>{user.name}</div>
                        <div>Email: {user.email}</div>
                        <div>Balance:{user.balance} </div>
                        <div className={"Logout_Button_Wrapper"}>
                            <button className={"Logout_Button"} onClick={logoutUser}>
                                <span className={"button_line button_line_top"}/>
                                <span className={"button_line button_line_left"}/>
                                <span className={"button_line button_line_right"}/>
                                <span className={"button_line button_line_bottom"}/>
                                Logout
                            </button>
                        </div>
                    </nav>
                </div>
                <div><MoneyTransaction /></div>
            </div>
        </>
    )
};

export default UsersCabinet;