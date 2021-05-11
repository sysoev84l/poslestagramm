import Music from "./Music";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {MusicType} from "../../types/types";

type MapStatePropsType = {
    music: Array<MusicType>
}

class MusicContainer extends React.Component<MapStatePropsType> {
    render() {
        return (
          <div>
              <Music music={this.props.music} />
          </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        music: state.musicPage.music
    }
}
export default compose(
    // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
    connect<MapStatePropsType, {}, {}, AppStateType>(
        mapStateToProps,
        {})
)(MusicContainer)
