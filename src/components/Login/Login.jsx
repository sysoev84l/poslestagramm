import React from 'react';
import style from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsContorls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.loginForm}>
            <Field
                component={Input}
                type="email"
                placeholder="Enter email"
                name={'email'}
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
                id="rememberMe"
            />
            <label htmlFor="rememberMe">check me out</label>
            <button className={style.formBtn}>
                Sign In
            </button>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to='/profile' />
    }
        return (
            <div className={style.wrapper}>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        )
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(
    mapStateToProps,
    {login, logout})(Login)