import React from 'react';
import style from './Music.module.scss';
import Youtube from "./Youtube/Youtube";
import {MusicType} from "../../types/types";

type PropsType = {
    music: Array<MusicType>
}
const Music: React.FC<PropsType> =({music} ) => {
           return (
            <div className={style.wrapper}>
                {music.map(m => <Youtube idVideo={m.idVideo} key={m.id}/>)}
            </div>
        )
    }


export default Music