import React from 'react';
import logo from './../../assets/img/logo/logo.svg';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.logoWrap}>
                <NavLink to="/">
                    <img className={style.logo} src={logo} alt=''/>
                </NavLink>
            </div>
            <div className={style.titleWrap}>
                <h2 className={style.title}>После ста грамм!!</h2>
            </div>
            <div className={style.loginBlockWrap}>
                {props.isAuth
                    ? <NavLink to='/profile'>{props.login}</NavLink>
                    : <NavLink to='/login'><FontAwesomeIcon icon={faSignInAlt}/> Sign In </NavLink>
                }
            </div>
        </header>
    )
}
export default Header;