import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./Users.module.scss";
import {Button} from "react-bootstrap";
import Avatar from "../common/Avatars/Avatar";

let User = ({user, followingInProgress, unfollow, follow}) => {

    return (
        <div key={user.id}>
            <div className={style.usersWrap}>
                <div className={style.userIconWrap}>
                    <div className={style.userIcon}>
                        <NavLink to={'/profile/' + user.id}>
                            {user.photos.small !== null
                                ? <img src={user.photos.small} alt=""/>
                                : <Avatar size='lg'/>
                            }
                        </NavLink>
                    </div>
                    <div className={style.followBtnWrap}>
                        {user.followed
                            ? <Button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}
                                      variant="success"
                                      size="sm"
                                      block
                                      className={style.followBtn}>
                                Unfollow
                            </Button>
                            : <Button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}
                                      variant="success"
                                      size="sm"
                                      block
                                      className={style.followBtn}>
                                Follow
                            </Button>
                        }
                    </div>
                </div>
                <div className={style.userDescriptionWrap}>
                    <div className={style.userInfoWrap}>
                        <h5 className={style.userName}>
                            <NavLink to={`/profile/${user.id}`}>
                                {user.name}
                            </NavLink>
                        </h5>
                        <div className={style.userStatus}>
                            {user.status}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default User;