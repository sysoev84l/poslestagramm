import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsContorls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
const maxLength100 = maxLengthCreator(100);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.addMessageForm}>
            <div>
                <Field
                    component={Textarea}
                    name="newMessageBody"
                    placeholder='Enter your message'
                    validate={[required, maxLength100]}
                />
            </div>
            <div className={s.formControl}>
                <button className={s.btn}>Send message</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: 'DialogsSendMassageForm'})(AddMessageForm)
const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogs = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} isMale={d.isMale}/>);
    let messages = state.messages.map(m => <Message message={m.message} key={m.id}/>);


    const addNewMessage = (value) => {
        if (JSON.stringify(value) !== '{}') {
            props.sendMessage(value.newMessageBody);
        }
    }
    return (
        <div className={s.wrapper}>
            <h3 className="">
                Dialogs
            </h3>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogs}
                </div>
                <div className={s.messagesWrap}>
                    <div className={s.messages}>
                        {messages}
                    </div>
                </div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}
export default Dialogs