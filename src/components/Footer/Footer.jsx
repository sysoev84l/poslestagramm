import React from 'react';
import style from './Footer.module.scss';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faArchive} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";
;

const Footer = () => {
    let hostName = document.location.origin;
            return (
        <footer className={style.footer}>
            <div className={style.wrapper}>
                <div className={style.link}>
                    <a href="https://github.com/sysoev84l/poslestagramm" target='_blank' rel="noreferrer"
                       className=""><FontAwesomeIcon icon={faGithub}/> GitHub</a>
                    <a href="https://social-network.samuraijs.com/docs" target='_blank' rel="noreferrer"
                       className=""><FontAwesomeIcon icon={faArchive}/> API docs</a>

                </div>
                <p className={style.copyright}>
                    &copy; Все мои мечты защищены моим трудолюбием
                </p>
                <div className={style.hostName}>
                    <NavLink to='/'>
                        {hostName}
                    </NavLink>
                </div>
            </div>
        </footer>
    )
}
export default Footer;