import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCogs, faMusic, faUserCircle, faUsers} from "@fortawesome/free-solid-svg-icons";
import {faNewspaper} from "@fortawesome/free-regular-svg-icons";
import {faFacebookMessenger} from "@fortawesome/free-brands-svg-icons";

const Navbar = (props) => {
    let friends = props.state.friends.map(f => <Friend name={f.name} key={f.id} isMale={f.isMale}/>);
    return (
        <div className={s.wrapper}>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active}>
                        <div className={s.linkTitleWrap}>
                            <div className={s.linkIcon}>
                                <FontAwesomeIcon icon={faUserCircle} size='lg' />
                            </div>
                            <div className={s.linkTitle}>
                                Profile
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.active}>
                        <div className={s.linkTitleWrap}>
                            <div className={s.linkIcon}>
                                <FontAwesomeIcon icon={faFacebookMessenger} size='lg' />
                            </div>
                            <div className={s.linkTitle}>
                                Messages
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.active}>
                        <div className={s.linkTitleWrap}>
                            <div className={s.linkIcon}>
                                <FontAwesomeIcon icon={faNewspaper} size='lg' />
                            </div>
                            <div className={s.linkTitle}>
                                News
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.active}>
                        <div className={s.linkTitleWrap}>
                            <div className={s.linkIcon}>
                                <FontAwesomeIcon icon={faMusic} size='lg' />
                            </div>
                            <div className={s.linkTitle}>
                                Music
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.active}>
                        <div className={s.linkTitleWrap}>
                            <div className={s.linkIcon}>
                                <FontAwesomeIcon icon={faCogs} size='lg' />
                            </div>
                            <div className={s.linkTitle}>
                                Settings
                            </div>
                        </div>

                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users" activeClassName={s.active}>
                        <div className={s.linkTitleWrap}>
                            <div className={s.linkIcon}>
                                <FontAwesomeIcon icon={faUsers} size='lg' />
                            </div>
                            <div className={s.linkTitle}>
                                Users
                            </div>
                        </div>

                    </NavLink>
                </div>
            </nav>
            <div className={s.friendsWrap}>
                <h2>Friends</h2>

            <div className={s.friends}>
                {friends}
            </div>
            </div>
        </div>
    )
}
export default Navbar;