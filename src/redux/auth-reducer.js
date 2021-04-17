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
                ...action.data,
                isAuth: true
            }

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}
const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login} });
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export  const getAuthUserData = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(toggleIsFetching(false));
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
}
export default authReducer