import React, {useState} from "react";
import onClickOutside from "react-onclickoutside";
import "./Menu.css";

const Menu = (props) => {
    const {onChange, name, userName, usersList, recipientId} = props;
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    Menu.handleClickOutside = () => setIsOpen(false);

    return (
        <li className={isOpen ? "m-menu -active" : "m-menu "} onClick={toggle}>
            <input type={'text'} className={"Transaction_Input"} placeholder="recipient" onChange={onChange}
                   value={name}/>
            <ul className="m-menu__list">
                {usersList.map(item => (
                    <li className={"m-menu__link"} key={item.id}>
                        <div className={"d"} onClick={() => {
                            userName(item.name);
                            recipientId(item.id);
                        }}>{item.name}</div>
                    </li>
                ))}
            </ul>
        </li>
    );
};

const clickOutsideConfig = {
    handleClickOutside: () => Menu.handleClickOutside
};
Menu.prototype = {}

export default onClickOutside(Menu, clickOutsideConfig);
