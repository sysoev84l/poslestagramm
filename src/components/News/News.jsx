import React from 'react';
import s from './News.module.css';
import img from './../../assets/img/jews/04.jpg'

const News = (props) => {
    return (
        <div className={s.wrapper}>
            <h2 className="">
                News
            </h2>
            <img src={img} alt=""/>
        </div>
    )
}
export default News