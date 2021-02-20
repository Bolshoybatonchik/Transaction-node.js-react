// import React, { useEffect } from 'react'
// import { getToken } from "../../localStoreg/localStoreg";
// import "./header.css"
// import { connect } from "react-redux";
// import { getUserInfoData } from "../user/UsersContainer/thunk";
//
//
// const Header = (props) => {
//     useEffect(() => {
//         if (getToken()) {
//             props.getUserInfoData();
//         }
//     }, []);
//     // if (!props.Auth) {
//     //     return <Redirect to={"/login"}/>
//     // }
//     return (
//         <div></div>
//     )
// }
//
// const mapStateToProps = (state) => {
//     return {
//         Auth: state.auth.isAuth,
//     }
// }
//
// const mapDispatchToProps = (dispatch) => ({
//     getUserInfoData: () => dispatch(getUserInfoData()),
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(Header);