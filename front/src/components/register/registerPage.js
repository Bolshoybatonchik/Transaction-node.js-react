import React from 'react';
import {NavLink} from "react-router-dom";
import * as Yup from "yup";
import {useFormik} from 'formik';
import 'components/register/registerPage.css'
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom'
import {registerUser} from "components/register/thunk";

const RegisterPage = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const register = (data) => dispatch(registerUser(data))
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            email: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Obligatory field'),
            password: Yup.string()
                .min(7, 'Must be at least 7 characters')
                .max(15, 'Must be 15 characters or less')
                .required('Obligatory field'),
            email: Yup.string().email('Invalid email address').required('Obligatory field'),
        }),
    });

    const username = formik.values.username;
    const email = formik.values.email;
    const password = formik.values.password;

    const onClickRegistration = async () => {
        if (username && email && password && !formik.errors.password && !formik.errors.username && !formik.errors.email) {
            const result = {
                username: username,
                password: password,
                email: email,
            }
           await register(result);
            history.push('/');
        }
    }

    return (
        <div className={"Wrapper_Register_Form"}>
            <div className={"Register_Page"}>
                <div className={"Register_Inform"}>
                    <label className={"Register_Content"}>Have an account?</label>
                    <label className={"Register_Content_Inform"}>For authorization, you can follow the link
                        below</label>
                    <NavLink className={"Login_path"} to="/login">LOGIN</NavLink>
                </div>
                <form className={"Register_Form"} onSubmit={formik.handleSubmit}>
                    <input
                        className={"Register_Input"}
                        id="username"
                        name="username"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        onBlur={formik.handleBlur}
                        placeholder={"Username"}
                    />
                    {formik.touched.username && formik.errors.username ? (
                        <div className={"Error_UserName"}>{formik.errors.username}</div>
                    ) : null}
                    <input
                        className={"Register_Input"}
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        placeholder={"Password"}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className={"Error_Register_Password"}>{formik.errors.password}</div>
                    ) : null}
                    <input
                        className={"Register_Input"}
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        placeholder={"Email"}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className={"Error_Register_Email"}>{formik.errors.email}</div>
                    ) : null}
                    <button type="submit" className={"Register_Button"} onClick={onClickRegistration}>Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;

