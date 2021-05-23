import React from 'react'
import {InjectedFormProps, reduxForm} from "redux-form"
import {createField, GetStringKeys, Textarea} from '../../../common/FormsContorls/FormControls';
import {maxLengthCreator, required} from '../../../../utils/validators/validators'
import s from "../../../common/FormsContorls/FormsControl.module.scss"

const maxLength50 = maxLengthCreator(50)
type PropsType = {}

export type AddPostFormValuesType = {
    newPostText: string
}

type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<AddPostFormValuesTypeKeys>("Your post",
                    'newPostText',
                    [required, maxLength50], Textarea)}
            </div>
            <div className={s.btnWrapRight}>
                <button className={s.btn}>
                    Add Post
                </button>
            </div>
        </form>
    )
}

export default reduxForm<AddPostFormValuesType, PropsType>({form: 'profile-add-post'})(AddPostForm)
