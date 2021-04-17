import React from "react";
import {connect} from "react-redux";
import {follow, getUsers, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(1, this.props.pageSize)
    }

    onPageChanged = () => {
        this.props.getUsers(this.props.currentPage + 1, this.props.pageSize)

    }

    render() {
        return (
            <>
                <Users users={this.props.users}
                       currentPage={this.props.currentPage}
                       isFetching={this.props.isFetching}
                       onPageChanged={this.onPageChanged}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}
                       isAuth={this.props.isAuth}
                />
                {this.props.isFetching ? <Preloader/> : null}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, getUsers})
)(UsersContainer);
