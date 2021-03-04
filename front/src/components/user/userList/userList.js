// import React from 'react'
// import "./userList.css"
//
// export const UsersList = (props) => {
//     const {usersList, userInInput,RecipientId} = props;
//     if (usersList.length <= 0)
//         return (
//             <div className="User_list">No options</div>
//         )
//     return (
//         <div className="User_List_Wrapper">
//             {usersList.map(item => (
//                 <div className={"User_list"} key={item.id}>
//                     <label className="p" htmlFor={item.id}>
//                         <div onClick={() => {
//                             userInInput(item.name);
//                             RecipientId(item.id);
//                         }}>{item.name}</div>
//                     </label>
//                 </div>
//             ))}</div>
//     )
// }
