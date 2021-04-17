import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import musicReducer from "./music-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, it's my first post!!", likesCount: 20},
                {id: 2, message: "I very glad to see you!!", likesCount: 15},
                {id: 3, message: "Who is on duty today??", likesCount: 22},
                {id: 4, message: "I'm Senior Full Stack Developer!!", likesCount: 33}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: "Nastya", isMale: false},
                {id: 1, name: "Katya", isMale: false},
                {id: 1, name: "Anton", isMale: true}
            ]
        },
        musicPage: {
            music: [
                {id: 1, idVideo: "FlP4RVbQMpg"},
                {id: 2, idVideo: "rP2dAbjIQCU"},
                {id: 3, idVideo: "lq5UQ8gWU-A"},
                {id: 4, idVideo: "067YF8KHdTM"},
                {id: 4, idVideo: "qToq_VQ8cN0"},
                {id: 5, idVideo: "7AIoC7xx5nI"}
            ]
        }

    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._state.musicPage = musicReducer(this._state.musicPage, action);
        this._callSubscriber(this._state);

    }
}



export default store
window.store = store;
