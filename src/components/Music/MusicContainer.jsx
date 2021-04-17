import Music from "./Music";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        state: state.musicPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return { }
}
const MusicContainer = connect (mapStateToProps, mapDispatchToProps) (Music);
export default MusicContainer