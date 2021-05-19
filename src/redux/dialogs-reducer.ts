import {InferActionsTypes} from "./redux-store";


type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number,
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Alexey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Victor"},
        {id: 5, name: "Marya"},
        {id: 6, name: "Olga"},
        {id: 7, name: "Vasya"}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your after100Grams??"},
        {id: 3, message: "Yo"}
    ] as Array<MessageType>
}
const dialogsReducer =
    (state = initialState,
     action: ActionsType): InitialStateType => {
        switch (action.type) {
            case "SN/DIALOGS/SEND_MESSAGE" :
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

export const actions = {
    sendMessage: (newMessageBody: string) => ({
        type: 'SN/DIALOGS/SEND_MESSAGE',
        newMessageBody
    } as const)
}
export default dialogsReducer

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
