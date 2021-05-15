import React from 'react';
import style from './Music.module.scss';
import s from '../common/FormsContorls/FormsControl.module.scss'
import Youtube from "./Youtube/Youtube";
import {MusicType} from "../../types/types";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsContorls/FormControls";
import {required} from "../../utils/validators/validators";

type PropsType = {
    music: Array<MusicType>
    addMusic: (idVideo: string) => void
}
type AddMusicFormValuesType = {
    idVideo: string
}
type LoginFormValuesTypeKeys = Extract<keyof AddMusicFormValuesType, string>
const AddMusicForm: React.FC<InjectedFormProps<AddMusicFormValuesType>>
    = ({
           handleSubmit
       }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>("IdVideo", "idVideo", [required], Input, {type: "text"})}
            <div className={s.btnWrapRight}>
                <button className={s.btn}>
                    Add Music
                </button>
            </div>
        </form>
    )
}
const MusicReduxForm = reduxForm<AddMusicFormValuesType>({form: 'addMusic'})(AddMusicForm)
const Music: React.FC<PropsType> = ({music, addMusic}) => {
    const onSubmit = (formData: AddMusicFormValuesType) => {
        addMusic(formData.idVideo)
    }
    return (
        <div className={style.wrapper}>
            <div className={style.musicWrap}>
                {music.map(m => <Youtube idVideo={m.idVideo} key={m.id}/>)}
            </div>
            <div className={style.formWrap}>
                <MusicReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}


export default Music