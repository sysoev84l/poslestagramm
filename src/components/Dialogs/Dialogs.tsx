import React from 'react'
import style from './Dialogs.module.scss'
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import {InitialStateType} from '../../redux/dialogs-reducer'

export type NewMessageFormValuesType = {
    newMessageBody: string
}

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void
}
const Dialogs: React.FC<PropsType> = (props) => {
    let state = props.dialogsPage;
    let dialogs = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messages = state.messages.map(m => <Message message={m.message} key={m.id}/>);


    const addNewMessage = (values: NewMessageFormValuesType) => {
        if (JSON.stringify(values) !== '{}') {
            props.sendMessage(values.newMessageBody);
        }
    }
    return (
        <div className={style.wrapper}>
            <h3 className="">
                Dialogs
            </h3>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialogs}
                </div>
                <div className={style.messagesWrap}>
                    <div className={style.messages}>
                        {messages}
                    </div>
                </div>
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}
export default Dialogs