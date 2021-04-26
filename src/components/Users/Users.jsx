import React from "react";
import {Container} from "react-bootstrap";
import style from "./Users.module.scss";
import User from "./User";
import {Paginator} from "../common/Paginator/Paginator";

const Users = ({
                   currentPage, totalUsersCount, pageSize, isFetching,
                   onPageChanged, onNextPage, onPrevPage, users,
                   followingInProgress, follow, unfollow, ...props
               }) => {
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

                <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                           totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            </div>
        </Container>
    )
}
export default Users