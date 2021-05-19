import React from 'react';
import s from './Friend.module.scss';
import Avatar from "../../common/Avatars/Avatar";
import {FriendType} from "../../../redux/sidebar-reducer";


const Friend:React.FC<FriendType> = (props) => {
    return (
        <div className={s.wrapper}>
            {props.isMale
                ? <Avatar sex='man' size='s'/>
                : <Avatar sex='woman' size='s'/>
            }
            <div className={s.name}>
                {props.name}
            </div>
        </div>
    )
}
export default Friend
