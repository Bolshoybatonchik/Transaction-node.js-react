import React from 'react';
import {useFormik} from 'formik';
import {NavLink, useHistory, withRouter} from "react-router-dom";
import * as Yup from 'yup';
import {useDispatch, useSelector} from "react-redux";
import {loginUsers} from "components/login/thunk";
import 'components/login/loginForm.css'

const LoginForm = (props) => {
    let history = useHistory();
    const dispatch = useDispatch();
    const loginError = useSelector((state) => state.login.login);


    const login = async (email, password) => {
        await dispatch(loginUsers(email, password));
    }

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

    const onClickButtonLogin = async () => {
        if (email && password && !formik.errors.password) {
            await login(email, password);
            history.push('/');
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
                    {loginError ? (
                        <div className={"Error_Login"}>{loginError}</div>
                    ) : null}
                    {formik.touched.email && formik.errors.email ? (
                        <div className={"Error_Email"}>{formik.errors.email}</div>
                    ) : null}
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

