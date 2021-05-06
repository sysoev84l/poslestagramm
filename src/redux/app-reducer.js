import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'after100Grams/app/INITIALIZED_SUCCESS';
const IS_ERROR = 'after100Grams/app/IS_ERROR';


let initialState = {
    initialized: false,
    isError: false
};
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        case IS_ERROR:
            return {
                ...state,
                isError: action.isError
            }
        default:
            return state
    }
}
const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
const toggleIsError = (isError) => ({type: IS_ERROR, isError});

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData());
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess());
            });
    }
}
export const catchError = (isError) => {
    return (dispatch) => {
        dispatch(toggleIsError(isError))
    }
}

export default appReducer