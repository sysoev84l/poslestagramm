import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Button} from "react-bootstrap";
import {Redirect} from 'react-router-dom'

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogs = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} isMale={d.isMale}/>);
    let messages = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;
    let messagesLeft = [];
    let messagesRight = [];
    for (let i = 0; i < messages.length; i++) {
        if (i === 0 || i % 2 === 0) {
            messagesLeft.push(messages[i]);
            messagesRight.push(<p>&nbsp;</p>);
        } else {
            messagesRight.push(messages[i])
            messagesLeft.push(<p>&nbsp;</p>);
        }
    }


    let newMessageElement = React.createRef();
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
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
                        <div className={s.leftSide}>
                            {messagesLeft}
                        </div>
                        <div className={s.rightSide}>
                            {messagesRight}
                        </div>
                    </div>
                    <div className={s.formWrap}>
                        <div className={s.formItem}>
                            <textarea
                                value={newMessageBody}
                                onChange={onNewMessageChange}
                                ref={newMessageElement}
                                className=""
                                placeholder='Enter your message'>

                            </textarea>
                        </div>
                        <div className={s.formControl}>
                            <div className={s.buttonWrap}>
                                <Button
                                    onClick={onSendMessageClick}
                                    variant="warning"
                                    size="lg"
                                    block
                                    className={s.btn}>
                                    Send message
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs