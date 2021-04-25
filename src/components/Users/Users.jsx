import React from "react";
import {Button, Container} from "react-bootstrap";
import style from "./Users.module.scss";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, totalUsersCount, pageSize,
                   onPageChanged, onNextPage, users,
                   followingInProgress, follow, unfollow, ...props}) => {
        return (
        <Container>
            <div className={style.wrapper}>

                <div className={style.dataWrap}>
                    {
                        users.map(u => <User key={u.id}
                                             user={u}
                                             followingInProgress={followingInProgress}
                                             follow={follow}
                                             unfollow={unfollow}
                        />)
                    }
                </div>
                <div className={style.controlWrap}>
                    {users.length
                        ?
                        <Button variant='success'
                                size='lg'
                                className={style.controlBtn}
                                disabled={props.isFetching}
                                onClick={() => {
                                    onNextPage()
                                }}>
                            Show more
                        </Button>
                        : null
                    }
                </div>
                <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                           totalUsersCount={totalUsersCount} pageSize={pageSize}/>
            </div>
        </Container>
    )
}
export default Users