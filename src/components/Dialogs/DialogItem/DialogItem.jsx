import React from 'react';
import s from './DialogItem.module.scss';
import {NavLink} from "react-router-dom";
import Avatar from "../../common/Avatars/Avatar";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>
                <div className={s.avatarWrap}>
                    {props.isMale
                        ? <Avatar sex='man' />
                        : <Avatar sex='woman' />
                    }
                    <div className={s.name}>
                        {props.name}
                    </div>
                </div>
            </NavLink>
        </div>
    )
};

export default DialogItem;