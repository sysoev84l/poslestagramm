const SEND_MESSAGE = 'after100Grams/dialogs/SEND_MESSAGE';

type DialogType = {
    id: number
    name: string
    isMale: boolean
}
type MessageType = {
    id: number,
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: "Andrey", isMale: true},
        {id: 2, name: "Alexey", isMale: true},
        {id: 3, name: "Sveta", isMale: false},
        {id: 4, name: "Victor", isMale: true},
        {id: 5, name: "Marya", isMale: false},
        {id: 6, name: "Olga", isMale: false},
        {id: 7, name: "Vasya", isMale: true}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your after100Grams??"},
        {id: 3, message: "Yo"}
    ] as Array<MessageType>
}
export type InitialStateType = typeof initialState

type ActionsType = SendMessageActionType

const dialogsReducer =
    (state = initialState,
     action: SendMessageActionType): InitialStateType => {
        switch (action.type) {
            case SEND_MESSAGE :
                let body = action.newMessageBody;
                let newMessage = {
                    id: state.messages.length + 1,
                    message: body,
                };
                return {
                    ...state,
                    messages: [...state.messages, newMessage]
                }
            default:
                return state
        }
    }

type SendMessageActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}
export const sendMessage = (newMessageBody: string): SendMessageActionType => ({type: SEND_MESSAGE, newMessageBody});
export default dialogsReducer