import React from 'react';
import style from './Music.module.scss';
import Youtube from "./Youtube/Youtube";
import {MusicType} from "../../types/types";

type PropsType = {
    music: Array<MusicType>
}
const Music: React.FC<PropsType> =(props ) => {
           return (
            <div className={style.wrapper}>
                {props.music.map(m => <Youtube idVideo={m.idVideo} key={m.id}/>)}
            </div>
        )
    }


export default Music