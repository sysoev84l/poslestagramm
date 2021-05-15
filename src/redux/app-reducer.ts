import {getAuthUserData} from "./auth-reducer";
import {InferActionsTypes} from "./redux-store";

let initialState = {
    initialized: false,
    globalError: false
};

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/APP/INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true,
            }
        case "SN/APP/GLOBAL_ERROR":
            return {
                ...state,
                globalError: action.globalError
            }
        default:
            return state
    }
}

export const actions = {
    initializedSuccess: () => ({type: 'SN/APP/INITIALIZED_SUCCESS'} as const),
    toggleGlobalError:  (globalError: boolean) => ({
        type: 'SN/APP/GLOBAL_ERROR',
        globalError
    } as const)
}
export const initializeApp = () => {
    return (dispatch: any) => {
        let promise = dispatch(getAuthUserData());
        Promise.all([promise])
            .then(() => {
                dispatch(actions.initializedSuccess());
            });
    }
}
export const catchError = (globalError: boolean) => {
    return (dispatch: any) => {
        dispatch(actions.toggleGlobalError(globalError))
    }
}

export default appReducer

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
