import Music from "./Music";
import {actions} from "../../redux/music-reducer"
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {MusicType} from "../../types/types";

type MapStatePropsType = {
    music: Array<MusicType>
}
type MapDispatchPropsType = {
    addMusic: (idVideo: string) => void
}
type OwnPropsType = {
    pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


class MusicContainer extends React.Component<PropsType> {
    render() {
        return (
            <div>
                <Music music={this.props.music} addMusic={this.props.addMusic}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        music: state.musicPage.music
    }
}
export default compose<React.ComponentType>(
    // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
    connect<MapStatePropsType, {}, {}, AppStateType>(
        mapStateToProps,
        {addMusic: actions.addMusic})
)(MusicContainer)
