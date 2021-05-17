import React, {FC} from "react";
import {Container} from "react-bootstrap";
import style from "./Users.module.scss";
import User from "./User";
import {Paginator} from "../common/Paginator/Paginator";
import {UserType} from "../../types/types";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}
const Users: FC<PropsType> = ({
                                  currentPage, totalUsersCount,
                                  pageSize,
                                  onPageChanged, users, followingInProgress,
                                  follow, unfollow
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