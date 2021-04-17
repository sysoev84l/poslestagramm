const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessage = () => ({type: SEND_MESSAGE});

export const updateNewMassageBody = (body) => (
    {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
);

let initialState = {
    dialogs: [
        {id: 1, name: "Andrey", isMale: true},
        {id: 2, name: "Alexey", isMale: true},
        {id: 3, name: "Sveta", isMale: false},
        {id: 4, name: "Victor", isMale: true},
        {id: 5, name: "Marya", isMale: false},
        {id: 6, name: "Olga", isMale: false},
        {id: 7, name: "Vasya", isMale: true}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your poslestagramm??"},
        {id: 3, message: "Yo"}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY :
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE :
            let body = state.newMessageBody;
            let newMessage = {
                id: state.messages.length + 1,
                message: body
            };
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, newMessage]
            }
        default:
            return state
    }


}
export default dialogsReducer