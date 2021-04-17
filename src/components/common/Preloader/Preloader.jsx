import React from 'react';
import './Preloader.css';
import style from './Preloader.module.css'


const Preloader = (props) => {
    return (
        <div className={style.wrapper}>
            <div className="lds-spinner">
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
    )
}
export default Preloader