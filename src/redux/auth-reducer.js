import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
              //  isAuth: true
            }

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}
const setAuthUserData = (id, email, login, isAuth) => (
    {
        type: SET_USER_DATA,
        payload: {id, email, login, isAuth}
    });
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getAuthUserData = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
                dispatch(toggleIsFetching(false));
            });
    }
}
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData());
                }
                dispatch(toggleIsFetching(false));
            });
    }
}
export const logout = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
                dispatch(toggleIsFetching(false));
            });
    }
}
export default authReducer