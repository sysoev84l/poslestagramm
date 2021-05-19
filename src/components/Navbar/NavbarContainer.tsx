import Navbar from "./Navbar";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import React from "react";


class NavbarContainer extends React.Component<MapStatePropsType> {
    render() {
        return (
            <Navbar friends={this.props.friends}/>
        )
    }
}


let mapStateToProps = (state: AppStateType) => {
    return {
        friends: state.sidebar.friends
    }
}

export default compose(
    // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
    connect<MapStatePropsType, {}, {}, AppStateType>(
        mapStateToProps,
        {})
)(NavbarContainer)

type MapStatePropsType = ReturnType<typeof mapStateToProps>
