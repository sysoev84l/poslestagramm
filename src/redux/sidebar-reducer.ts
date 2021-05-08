type FriedType = {
    id: number
    name: string
    isMale: boolean
}
let initialState = {
    friends: [
        {id: 1, name: "Nastya", isMale: false},
        {id: 2, name: "Katya", isMale: false},
        {id: 3, name: "Anton", isMale: true}
    ] as Array<FriedType>
};

const sidebarReducer = (state = initialState, action: any) => {
    return state
}
export default sidebarReducer