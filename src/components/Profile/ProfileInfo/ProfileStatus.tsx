import React, {ChangeEvent} from "react";
import style from './ProfileInfo.module.css'

type PropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}

type StateType = {
    editMode: boolean
    status: string
}
class ProfileStatus extends React.Component<PropsType, StateType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
                status: e.currentTarget.value
            }
        );
    }

    componentDidUpdate(prevProps:PropsType, prevState: StateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={style.statusWrap}>
                {!this.state.editMode &&
                <div>
                    <div >
                       <span onClick={this.activateEditMode}> {this.props.status || '---------------'}</span>
                    </div>
                </div>
                }
                {this.state.editMode &&
                <div className={style.statusInputWrap}>
                    <input type="text"
                           placeholder='Input your status'
                           onChange={this.onStatusChange}
                           autoFocus={true}
                           onBlur={this.deactivateEditMode}
                           value={this.state.status}
                    />
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus