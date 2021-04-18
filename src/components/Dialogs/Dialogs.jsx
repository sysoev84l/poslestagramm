import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Button} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.addMessageForm}>
            <div className={s.formItem}>
                <Field
                    component="textarea"
                    name="newMessageBody"
                    placeholder='Enter your message'
                />
            </div>
            <div className={s.formControl}>
                <button
                    variant="warning"
                    size="lg"
                    className={s.btnSendMessage}
                >
                    Send message
                </button>
            </div>
        </form>
    )
}
const AddMessageReduxForm = reduxForm({form: 'login'})(AddMessageForm)
const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogs = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} isMale={d.isMale}/>);
    let messages = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let newMessageElement = React.createRef();
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    const onSubmit = (formData) => {
        if (JSON.stringify(formData) !== '{}') {
            console.log(formData)
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
            <AddMessageReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
export default Dialogs