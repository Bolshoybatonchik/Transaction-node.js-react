import React from 'react';
import {useFormik} from 'formik';
import 'components/login/loginPage/login.css'
import {NavLink, useHistory, withRouter} from "react-router-dom";
import * as Yup from 'yup';
import {useSelector} from "react-redux";

const LoginForm = (props) => {
    const {loginUsers} = props;
    // const loginError = useSelector((state) => state.auth.user);
    let history = useHistory();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(7, 'Must be at least 7 characters')
                .max(15, 'Must be 15 characters or less')
                .required('Obligatory field'),
            email: Yup.string().email('Invalid email address').required('Obligatory field'),
        }),
    });
    const email = formik.values.email;
    const password = formik.values.password;

    // const getLoginError = () => {
    //         setLoginError(true)
    // }

    const onClickButtonLogin = async () => {
        if (email && password && !formik.errors.password) {
            loginUsers(email, password);
            console.log(history);
            history.push('/');
            // getLoginError();
        }
    }

    return (
        <div className={"Wrapper_Login_Form"}>
            <div className={"Login_page"}>
                <div className={"Login_Inform"}>
                    <label className={"Login_Content"}>Don't have an account?</label>
                    <label className={"Login_Content_Inform"}>To register, you can follow the link below</label>
                    <NavLink className={"Registration_path"} to="/register">REGISTER</NavLink>
                </div>
                <form className={"Login_Form"} onSubmit={formik.handleSubmit}>
                    <input
                        className={"Login_Input"}
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        placeholder={"Email Address"}
                    />
                    {/*{loginError ? (*/}
                    {/*    <div className={"Error_Login"}>It looks like you entered your email or password incorrectly.*/}
                    {/*        Want to try again?</div>*/}
                    {/*) : null}*/}
                    {/*{formik.touched.email && formik.errors.email ? (*/}
                    {/*    <div className={"Error_Email"}>{formik.errors.email}</div>*/}
                    {/*) : null}*/}
                    <input
                        className={"Login_Input"}
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        placeholder={"Password"}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className={"Error_Password"}>{formik.errors.password}</div>
                    ) : null}
                    <button type="submit" className={"Login_Button"} onClick={onClickButtonLogin}>SING IN</button>
                </form>
            </div>
        </div>
    );
};

export default withRouter(LoginForm);

