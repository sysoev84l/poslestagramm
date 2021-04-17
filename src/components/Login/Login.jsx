import React from 'react';
import style from './Login.module.css'
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.loginForm}>
            <div className={style.formItem}>
                <Field type="email" placeholder="Enter email" name={'login'} component={'input'}/>
            </div>  
            <div className={style.formItem}>
                  <Field type="password" placeholder="Password" name={'password'} component={'input'}/>
            </div>
            <div className={`${style.formItem} ${style.check}`}>
                <Field type="checkbox" name={'rememberMe'} component={'input'}/>Check me out
            </div>

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