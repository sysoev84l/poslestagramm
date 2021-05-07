import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'after100Grams/auth/SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'after100Grams/auth/TOGGLE_IS_FETCHING';
const GET_CAPTCHA_URL_SUCCESS = 'after100Grams/auth/GET_CAPTCHA_URL_SUCCESS'

export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth: boolean
    captchaUrl: string | null
};

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null // if null, then captcha is not required
};
const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}
type SetAuthUserDataActionPayloadType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: SetAuthUserDataActionPayloadType

}
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean):
    SetAuthUserDataActionType => (
    {
        type: SET_USER_DATA,
        payload: {id, email, login, isAuth}
    });

type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})

type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
});
export const getAuthUserData = () => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    let response = await authAPI.me();
    dispatch(toggleIsFetching(false));
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) =>
    async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    let response = await authAPI.login(email, password, rememberMe, captcha);
    dispatch(toggleIsFetching(false));
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0
            ? response.data.messages[0]
            : "Some error"
        dispatch(stopSubmit("login",
            {_error: message}
        ))
    }
}

export const logout = () => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
    dispatch(toggleIsFetching(false));
}
export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}
export default authReducer