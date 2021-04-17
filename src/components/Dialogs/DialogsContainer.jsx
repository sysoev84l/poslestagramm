import {sendMessage, updateNewMassageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

/*compose(connect(mapStateToProps,
    {sendMessage, updateNewMassageBody}),
    withAuthRedirect)(Dialogs)
const AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps,
    {sendMessage, updateNewMassageBody})(AuthRedirectComponent);*/
export default compose(connect(mapStateToProps,
    {sendMessage, updateNewMassageBody}),
    withAuthRedirect)(Dialogs)