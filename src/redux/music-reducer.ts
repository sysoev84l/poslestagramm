type MusicType = {
    id: number
    idVideo: string
}
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
const musicReducer = (state = initialState, action: any) => {
    return state
}
export default musicReducer