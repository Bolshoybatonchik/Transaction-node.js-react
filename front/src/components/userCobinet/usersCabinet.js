import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import "components/userCobinet/userCabinet.css"
import MoneyTransaction from "components/transaction/transactionForm";
import {getUserInfoData} from "components/userCobinet/thunk";
import UserInformation from "components/userCobinet/userInformation/userInformation";
import {deleteToken} from "utils/localStorage";


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
                <UserInformation user={user} logoutUser={logoutUser}/>
                <div><MoneyTransaction/></div>
            </div>
        </>
    )
};

export default UsersCabinet;