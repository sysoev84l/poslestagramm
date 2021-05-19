import React from 'react';
import logo from './../../assets/img/logo/logo.svg';
import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignInAlt, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

export type MapPropsType = {
    isAuth: boolean
    login: string | null
}
export type DispatchPropsType = {
    logout: () => void
}
const Header:React.FC<MapPropsType & DispatchPropsType> = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.logoWrap}>
                <NavLink to="/">
                    <img className={styles.logo} src={logo} alt=''/>
                </NavLink>
            </div>
            <div className={styles.titleWrap}>
                <h2 className={styles.title}>После ста грамм!!</h2>
            </div>
            <div className={styles.loginBlockWrap}>
                {props.isAuth
                    ?
                    <div className={styles.loginTitleWrap}>
                        <NavLink to='/profile'>{props.login}</NavLink>
                        <button className={styles.btn} onClick={props.logout}><FontAwesomeIcon icon={faSignOutAlt}/>
                        </button>
                    </div>
                    :
                    <div className={styles.loginWrap}>
                        <NavLink className={styles.signInWrap} to='/login'>
                            <span>Sign In</span>
                            <span>
                        <FontAwesomeIcon icon={faSignInAlt}/>
                        </span>
                        </NavLink>

                        <a className={styles.signUpWrap} href="https://social-network.samuraijs.com/signUp">
                            <span>Sign Up</span>
                            <span>
                        <FontAwesomeIcon icon={faSignInAlt}/>
                        </span>
                        </a>

                    </div>

                }
            </div>
        </header>
    )
}
export default Header;