import React from 'react';
import imgMan from '../../../assets/img/avatar/man.svg';
import imgWoman from '../../../assets/img/avatar/woman.svg';
import s from './Avatars.module.scss';
import cn from "classnames";

type PropsType ={
    size?: string | undefined,
    sex?: string | undefined
}
const Avatar: React.FC<PropsType> = ({size, sex}) => {
    let icon
    if (sex === 'woman') icon = imgWoman
    else icon = imgMan;
    return (
        <div className={
            cn({[s.large]: size === 'lg'},
                {[s.small]: size === 's'},
                s.wrapper
            )}>
            <img src={icon} alt=""/>
        </div>

    )
}

export default Avatar