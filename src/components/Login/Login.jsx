import React from 'react';
import style from './Login.module.scss'
import s from '../common/FormsContorls/FormsControl.module.scss'
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsContorls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} className={style.loginForm}>
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
            <div className={s.formCheckboxWrap}>
                <div>
                    <Field
                        component={Input}
                        type="checkbox"
                        name={'rememberMe'}
                        id="rememberMe"
                    />
                </div>
                <div className={s.label}>
                    <label htmlFor="rememberMe">check me out</label>
                </div>
            </div>
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {type: "text"})}
            {
                error &&
                <div className={s.formSummaryError}>
                    {error}
                </div>
            }
            <button className={style.formBtn}>
                Sign In
            </button>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password,
            formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }
    return (
        <div className={style.wrapper}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}
export default connect(
    mapStateToProps,
    {login, logout})(Login)