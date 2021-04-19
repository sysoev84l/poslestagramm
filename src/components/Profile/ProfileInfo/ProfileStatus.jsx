import React from "react";
import style from './ProfileInfo.module.css'
import {Form} from "react-bootstrap";

const StatusInput = (props) => {
    return (
        <div className={style.statusInputWrap}>
            <input type="text" {...props}/>
        </div>
    )
}

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
                        {this.props.status
                        ||
                        <StatusInput
                            placeholder={'Input your status'}
                            onChange={this.onStatusChange}
                            autoFocus={true}
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}
                        />
                        }
                    </div>
                </div>
                }
                {this.state.editMode &&
                <StatusInput
                    placeholder={'Input your status'}
                    onChange={this.onStatusChange}
                    autoFocus={true}
                    onBlur={this.deactivateEditMode}
                    value={this.state.status}
                />
                }
            </div>
        )
    }
}

export default ProfileStatus