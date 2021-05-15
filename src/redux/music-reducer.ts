import {MusicType} from "../types/types"
import {InferActionsTypes} from "./redux-store";

let initialState = {
    music: [
        {id: 1, idVideo: "FlP4RVbQMpg"},
        {id: 2, idVideo: "rP2dAbjIQCU"},
        {id: 3, idVideo: "lq5UQ8gWU-A"},
        {id: 4, idVideo: "067YF8KHdTM"},
        {id: 5, idVideo: "qToq_VQ8cN0"},
        {id: 6, idVideo: "7AIoC7xx5nI"},
        {id: 7, idVideo: "aToYGLpYfng"},
        {id: 8, idVideo: "5XWu-hgipGs"},
        {id: 9, idVideo: "1cUNsE6qWSU"},
        {id: 10, idVideo: "3vnVzoEz_Zs"}
    ] as Array<MusicType>
}
const musicReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/MUSIC/ADD_MUSIC" :
            let newVideo = {
                id: state.music.length + 1,
                idVideo: action.idVideo
            }
            return {
                ...state,
                music: [...state.music, newVideo]

            }
        default:
            return state
    }

}
export const actions = {
    addMusic: (idVideo: string) => (
        {
            type: 'SN/MUSIC/ADD_MUSIC',
            idVideo
        } as const
    )
}

export default musicReducer
type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>