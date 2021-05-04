import React from 'react';
import imgMan from '../../../assets/img/avatar/man.svg';
import imgWoman from '../../../assets/img/avatar/woman.svg';
import s from './Avatars.module.scss';
import cn from "classnames";

const Avatar = (props) => {
    let sex
    if (props.sex === 'woman') sex = imgWoman
    else sex = imgMan;
    return (
        <div className={
            cn({[s.large]: props.size === 'lg'},
                {[s.small]: props.size === 's'},
                s.wrapper
            )}>
            <img src={sex} alt=""/>
        </div>

    )
}

export default Avatar