import React from "react";
import {Button, Container} from "react-bootstrap";
import style from "./Users.module.css";
import Avatar from "../common/Avatars/Avatar";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    return (
        <Container>
            <div className={style.wrapper}>
                <div className={style.dataWrap}>
                    {
                        props.users.map(u => <div key={u.id}>
                            <div className={style.usersWrap}>
                                <div className={style.userIconWrap}>
                                    <div className={style.userIcon}>
                                        <NavLink to={'/profile/' + u.id}>
                                            {u.photos.small !== null
                                                ? <img src={u.photos.small} alt=""/>
                                                : <Avatar sex='man' size='lg'/>
                                            }
                                        </NavLink>
                                    </div>
                                    <div className={style.followBtnWrap}>
                                        {u.followed
                                            ? <Button disabled={props.followingInProgress.some(id => id === u.id)}
                                                      onClick={() => {
                                                          props.unfollow(u.id)
                                                      }}
                                                      variant="success"
                                                      size="sm"
                                                      block
                                                      className={style.followBtn}>
                                                Unfollow
                                            </Button>
                                            : <Button disabled={props.followingInProgress.some(id => id === u.id)}
                                                      onClick={() => {
                                                          props.follow(u.id)
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
                                            <NavLink to={`/profile/${u.id}`}>
                                                {u.name}
                                            </NavLink>
                                        </h5>
                                        <div className={style.userStatus}>
                                            {u.status}
                                        </div>
                                    </div>
                                    <div className={style.userLocationWrap}>
                                        <div className={style.country}>
                                            {"u.location.country"}
                                        </div>
                                        <div className={style.city}>
                                            {"u.location.city"}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>)
                    }
                </div>
                <div className={style.controlWrap}>
                    {props.users.length
                        ?
                        <Button variant='success'
                                size='lg'
                                className={style.controlBtn}
                                disabled={props.isFetching}
                                onClick={() => {
                                    props.onPageChanged()
                                }}>
                            Show more
                        </Button>
                        : null
                    }
                </div>
            </div>
        </Container>
    )
}
export default Users