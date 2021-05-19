import React from 'react';
import s from './News.module.scss';
import img from './../../assets/img/jews/04.jpg'

const News: React.FC = () => {
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