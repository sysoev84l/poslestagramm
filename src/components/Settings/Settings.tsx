import React from 'react';
import s from './Settings.module.scss';
import Loader from "../common/Preloader/Preloader";

const Settings: React.FC = () => {
    return (
        <div className={s.wrapper}>
            Settings
            <Loader/>
        </div>
    )
}
export default Settings