import React from 'react';
import s from './DialogItem.module.scss';
import {NavLink} from "react-router-dom";
import Avatar from "../../common/Avatars/Avatar";

type PropsType = {
    id: number
    name: string
}
const DialogItem: React.FC<PropsType> = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>
                <div className={s.avatarWrap}>
                    <Avatar/>
                    <div className={s.name}>
                        {props.name}
                    </div>
                </div>
            </NavLink>
        </div>
    )
};

export default DialogItem;