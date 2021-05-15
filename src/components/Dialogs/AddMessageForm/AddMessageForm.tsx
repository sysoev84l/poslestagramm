import React from 'react'
import {InjectedFormProps, reduxForm} from "redux-form"
import {createField, Textarea} from "../../common/FormsContorls/FormControls"
import {maxLengthCreator, required} from "../../../utils/validators/validators"
import {NewMessageFormValuesType} from '../Dialogs'
import style from "../Dialogs.module.scss"
import s from "../../common/FormsContorls/FormsControl.module.scss"

const maxLength100 = maxLengthCreator(100)
type PropsType = {}

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>
const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={style.addMessageForm}>
            <div>
                {createField<NewMessageFormValuesKeysType>("Enter your message",
                    "newMessageBody",
                    [required, maxLength100], Textarea, )}

            </div>
            <div className={s.btnWrapRight}>
                <button className={s.btn}>
                    Send message
                </button>
            </div>
        </form>
    )
}
export default reduxForm<NewMessageFormValuesType>({form: 'dialog-add-message-form'})(AddMessageForm)

























