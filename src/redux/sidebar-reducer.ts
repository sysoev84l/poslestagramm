import {InferActionsTypes} from "./redux-store";
import {actions} from "./users-reducer";

export type FriendType = {
    id: number
    name: string
    isMale: boolean
}
let initialState = {
    friends: [
        {id: 1, name: "Nastya", isMale: false},
        {id: 2, name: "Katya", isMale: false},
        {id: 3, name: "Anton", isMale: true}
    ] as Array<FriendType>
};

const sidebarReducer = (state = initialState, action: ActionsType): InitialStateType=> {
    return state
}
export const action = {}

export default sidebarReducer

type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>