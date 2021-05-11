import React from 'react'
import style from './Login.module.scss'
import s from '../common/FormsContorls/FormsControl.module.scss'
import {InjectedFormProps, reduxForm} from "redux-form"
import {createField, Input} from "../common/FormsContorls/FormControls"
import {required} from "../../utils/validators/validators"
import {connect} from "react-redux"
import {login} from "../../redux/auth-reducer"
import {Redirect} from "react-router-dom"
import {AppStateType} from "../../redux/redux-store"

type LoginFormOwnProps = {
    captchaUrl: string | null
}
const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps>
    = ({
           handleSubmit,
           error,
           captchaUrl,

       }) => {
    return (
        <form onSubmit={handleSubmit} className={style.loginForm}>
            {/*  <Field
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
            />*/}
            {createField<LoginFormValuesTypeKeys>("Email", "email", [required], Input, {type: "email"})}
            {createField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, {type: "password"})}
            <div className={s.formCheckboxWrap}>
                {createField<LoginFormValuesTypeKeys>(
                    undefined,
                    'rememberMe',
                    [],
                    Input,
                    {type: "checkbox", id: 'rememberMe'}
                )}
                <div className={s.label}>
                    <label htmlFor="rememberMe">remember me</label>
                </div>
            </div>
            {/* <div className={s.formCheckboxWrap}>
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
            </div>*/}
            {captchaUrl && <img src={captchaUrl} alt='captcha'/>}
            {captchaUrl && createField<LoginFormValuesTypeKeys>("Symbols from image", "captcha", [required], Input, {type: "text"})}
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
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void

}
type LoginFormValuesType = {
    captcha: string
    email: string
    password: string
    rememberMe: boolean
}
type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
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
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}
export default connect(
    mapStateToProps,
    {login})(Login)