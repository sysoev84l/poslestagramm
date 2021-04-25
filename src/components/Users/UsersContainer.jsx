import React from "react";
import {connect} from "react-redux";
import {follow, requestUsers, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        let {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onNextPage = () => {
        let {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage + 1, pageSize)
    }
    onPrevPage = () => {
        let {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage - 1, pageSize)
    }
    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return (
            <>
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       onNextPage={this.onNextPage}
                       onPrevPage={this.onPrevPage}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}
                       isFetching={this.props.isFetching}
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }

}

export default compose(
    connect(mapStateToProps, {follow, unfollow, getUsers: requestUsers})
)(UsersContainer);
