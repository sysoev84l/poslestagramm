import React from 'react';
//import './Preloader.css';
import style from './Preloader.module.scss'
const Preloader = (props) => {
    return (
        <div className={props.fullSize ? style.fullSize : ''}>
            <h1 className={style.title}>После ста грамм</h1>
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