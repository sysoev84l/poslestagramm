import React, {FC, useEffect} from "react";
import {Container} from "react-bootstrap";
import style from "./Users.module.scss";
import User from "./User";
import Paginator from "../common/Paginator/Paginator";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType, requestUsers} from "../../redux/users-reducer";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "../../redux/users-selectors";
import {useDispatch, useSelector} from "react-redux";

type PropsType = {}
export const Users: FC<PropsType> = (props) => {
    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter))
    }, [])
    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }
    const follow = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }

    return (
        <Container>
            <div className={style.wrapper}>
                <UsersSearchForm onFilterChanged={onFilterChanged}/>

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