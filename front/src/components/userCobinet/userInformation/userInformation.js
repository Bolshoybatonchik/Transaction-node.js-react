import React from 'react'


const userInformation = (props) => {
    const {user,logoutUser} = props;
    return (
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
    )
}

export default userInformation;