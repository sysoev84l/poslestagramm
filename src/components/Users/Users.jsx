import React from "react";
import {Button, Container} from "react-bootstrap";
import style from "./Users.module.scss";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Preloader from "../common/Preloader/Preloader";

const Users = ({
                   currentPage, totalUsersCount, pageSize, isFetching,
                   onPageChanged, onNextPage, onPrevPage, users,
                   followingInProgress, follow, unfollow, ...props
               }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
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
                        <div className={style.btnWrap}>
                            <div>
                            <Button variant='success'
                                    size='lg'
                                    className={style.controlBtn}
                                    disabled={currentPage === 1 || props.isFetching}
                                    onClick={() => {
                                        onPrevPage()
                                    }}>
                                <FontAwesomeIcon icon={faArrowLeft}/>
                            </Button>
                            </div>
                            <div>
                                {isFetching ? <Preloader/> : null}
                            </div>
                            <div>
                            <Button variant='success'
                                    size='lg'
                                    className={style.controlBtn}
                                    disabled={currentPage === pagesCount || props.isFetching}
                                    onClick={() => {
                                        onNextPage()
                                    }}>
                                <FontAwesomeIcon icon={faArrowRight}/>
                           </Button>
                            </div>
                        </div>
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