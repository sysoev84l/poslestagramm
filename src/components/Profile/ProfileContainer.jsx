import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getStatus, getUserProfile, updateStatus} from '../../redux/profile-reducer';
import Profile from './Profile';
import {compose} from "redux";


class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.refreshProfile();
    }

    render() {
        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
});
export default compose(
    connect(
        mapStateToProps,
        {getUserProfile, getStatus, updateStatus}
    ),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)

/*
const AuthRedirectComponent = withAuthRedirect(ProfileContainer);
const WithUrlDataContainerComponents = withRouter(AuthRedirectComponent);
connect(mapStateToProps, {
    getUserProfile
})(WithUrlDataContainerComponents);*/
