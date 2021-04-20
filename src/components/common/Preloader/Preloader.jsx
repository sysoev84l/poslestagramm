import React from 'react';
//import './Preloader.css';
import style from './Preloader.module.css'
const Preloader = (props) => {
    return (
        <div className={props.fullSize ? style.fullSize : ''}>
            <div className={style.wrapper}>
                <div className={style.ldsSpinner}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
export default Preloader