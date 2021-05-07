import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'after100Grams/app/INITIALIZED_SUCCESS';
const GLOBAL_ERROR = 'after100Grams/app/GLOBAL_ERROR';

export type InitialStateType = {
    initialized: boolean
    globalError: boolean
};

let initialState: InitialStateType = {
    initialized: false,
    globalError: false
};
const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        case GLOBAL_ERROR:
            return {
                ...state,
                globalError: action.globalError
            }
        default:
            return state
    }
}

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
type ToggleGlobalErrorActionType = {
    type: typeof GLOBAL_ERROR,
    globalError: boolean
}
const initializedSuccess = ():InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});
const toggleGlobalError = (globalError: boolean): ToggleGlobalErrorActionType => ({type: GLOBAL_ERROR, globalError});

export const initializeApp = () => {
    return (dispatch: any) => {
        let promise = dispatch(getAuthUserData());
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess());
            });
    }
}
export const catchError = (globalError: boolean) => {
    return (dispatch: any) => {
        dispatch(toggleGlobalError(globalError))
    }
}

export default appReducer