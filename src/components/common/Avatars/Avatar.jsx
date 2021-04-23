import React from 'react';
import imgMan from '../../../assets/img/avatar/man.svg';
import imgWoman from '../../../assets/img/avatar/woman.svg';
import s from './Avatars.module.scss';

const Avatar = (props) => {
    let sex = NaN;
    if (props.sex === 'man') sex = imgMan
    else sex = imgWoman;
    let size;
    switch (props.size) {
        case 's' :
            size = s.small;
            break;
        case 'lg' :
            size = s.large;
            break;
        default:
            size = '';
    }
    return (
        <div className={`${s.wrapper} ${size}`}>
            <img src={sex} alt=""/>
        </div>

    )
}

export default Avatar