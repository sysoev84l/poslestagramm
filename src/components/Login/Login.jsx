import React from 'react';
import style from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {Input, Label} from "../common/FormsContorls/FormControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.loginForm}>
            <Field
                component={Input}
                type="email"
                placeholder="Enter email"
                name={'login'}
                validate={[required]}
            />
            <Field
                component={Input}
                type="password"
                placeholder="Password"
                name={'password'}
                validate={[required]}
            />
            <Field
                component={Input}
                type="checkbox"
                name={'rememberMe'}
                id="remember"
            />
            <label htmlFor="remember">check me out</label>
            <button className={style.formBtn}>
                Sign In
            </button>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div className={style.wrapper}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
export default Login