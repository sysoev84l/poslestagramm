import React from 'react';
import style from './Api.module.scss';
import api from '../../../../assets/img/icons/api.svg';

const Api = (props) => {
    let size;
    switch (props.size) {
        case 'sm' :
            size = style.sm;
            break;
        case 'lg' :
            size = style.lg;
            break;
        default:
            size = '';
    }
    return (
        <div className={`${style.wrapper} ${size}`}>
            <img src={api} alt="API"/>

        </div>
    )
}
export default Api