import React from 'react';
import s from './Settings.module.css';
import Loader from "../common/Preloader/Preloader";

const Settings = (props) => {
    return (
        <div className={s.wrapper}>
            Settings
            <Loader/>
        </div>
    )
}
export default Settings