import React from 'react';
import style from './Preloader.module.scss'
import cn from "classnames";
type PropsType = {
    fullScreen?: boolean
}
const Preloader: React.FC<PropsType> = (props) => {
    return (
        <div className={cn ({[style.fullSize]: props.fullScreen })}>
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
                <div>
                    <h6>Loading...</h6>
                </div>
            </div>
        </div>
    )
}
export default Preloader