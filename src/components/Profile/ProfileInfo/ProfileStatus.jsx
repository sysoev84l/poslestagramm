import React from "react";
import style from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
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
    onStatusChange = (e) => {
        this.setState({
                status: e.currentTarget.value
            }
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
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
                    <div onClick={this.activateEditMode}>
                        {this.props.status || '---------------'}
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