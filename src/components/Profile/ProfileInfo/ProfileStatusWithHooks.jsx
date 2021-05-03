import React, {useEffect, useState} from "react";
import style from './ProfileInfo.module.scss'

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
     useEffect(()  =>  {
        setStatus(props.status);
        }, [props.status]);

    const activateEditMode = () => {
        props.isOwner && setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={style.statusWrap}>
            <h5>Status:</h5>
            {!editMode &&
            <div>
                <div>
                    <span onClick={activateEditMode}>
                        {props.status || '---------------'}
                    </span>
                </div>
            </div>
            }
            {editMode &&
            <div className={style.statusInputWrap}>
                <input type="text"
                       placeholder='Input your status'
                       autoFocus={true}
                       onBlur={deactivateEditMode}
                       onChange={onStatusChange}
                       value={status}
                />
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks