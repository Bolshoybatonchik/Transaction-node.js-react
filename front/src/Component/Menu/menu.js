import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
import "./Menu.css";
import { UsersList } from "../user/userList/userList";


const Menu = (props) => {
    const {SearchRecipient, name, userInInput, usersList,RecipientId} = props;
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    Menu.handleClickOutside = () => setIsOpen(false);
    return (
        <li className={isOpen ? "m-menu -active" : "m-menu "} onClick={toggle}>
            <input type={'text'} className={"Transaction_Input"} placeholder="recipient" onChange={SearchRecipient}
                   value={name}/>
            <ul className="m-menu__list">
                <li className="m-menu__item">
                    <div className="m-menu__link"><UsersList userInInput={userInInput} usersList={usersList} RecipientId={RecipientId}/></div>
                </li>
            </ul>
        </li>
    );
};

const clickOutsideConfig = {
    handleClickOutside: () => Menu.handleClickOutside
};
Menu.prototype = {}

export default onClickOutside(Menu, clickOutsideConfig);
