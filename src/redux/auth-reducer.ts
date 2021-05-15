import {ResultCodeForCaptchaEnum, ResultCodesEnum} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null as string | null// if null, then captcha is not required
};

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/AUTH/SET_USER_DATA":
        case "SN/AUTH/GET_CAPTCHA_URL_SUCCESS":
            return {
                ...state,
                ...action.payload
            }
        case "SN/AUTH/TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}
export const actions = {
    setAuthUserData: (id: number | null,
                      email: string | null,
                      login: string | null,
                      isAuth: boolean) => (
        {
            type: 'SN/AUTH/SET_USER_DATA',
            payload: {id, email, login, isAuth}
        } as const),
    toggleIsFetching: (isFetching: boolean) => ({
        type: 'SN/AUTH/TOGGLE_IS_FETCHING', isFetching
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}
    } as const)
}

export const getAuthUserData = ():ThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    let meData = await authAPI.me();
    dispatch(actions.toggleIsFetching(false));
    if (meData.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = meData.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string,
                      rememberMe: boolean, captcha: string): ThunkType =>
    async (dispatch) => {
        dispatch(actions.toggleIsFetching(true));
        let data = await authAPI.login(email, password, rememberMe, captcha);
        dispatch(actions.toggleIsFetching(false));
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(getAuthUserData());
        } else {
            if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
                dispatch(getCaptchaUrl());
            }
            let message = data.messages.length > 0
                ? data.messages[0]
                : "Some error"
            dispatch(stopSubmit("login",
                {_error: message}
            ))
        }
    }

export const logout = ():ThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
    dispatch(actions.toggleIsFetching(false));
}
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
}
export default authReducer

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>
