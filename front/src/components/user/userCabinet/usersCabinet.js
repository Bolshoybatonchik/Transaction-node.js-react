import React from 'react'
import "components/user/userCabinet/userCabinet.css"
import MoneyTransactionContainer from "components/transaction/transactionContainer/transactionContainer";



const UsersCabinet = (props) => {
    const {user, onClick, getUserInfoData } = props;
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
                            <button className={"Logout_Button"} onClick={onClick}>
                                <span className={"button_line button_line_top"}/>
                                <span className={"button_line button_line_left"}/>
                                <span className={"button_line button_line_right"}/>
                                <span className={"button_line button_line_bottom"}/>
                                Logout
                            </button>
                        </div>
                    </nav>
                </div>
                <div><MoneyTransactionContainer getUserInfoData={getUserInfoData}/></div>
            </div>
        </>
    )
};

export default React.memo(UsersCabinet);