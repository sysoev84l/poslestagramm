import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helper";

const FOLLOW = 'poslestagramm/users/FOLLOW';
const UNFOLLOW = 'poslestagramm/users/UNFOLLOW';
const SET_USERS = 'poslestagramm/users/SET_USERS';
const SET_CURRENT_PAGE = 'poslestagramm/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'poslestagramm/users/SET_TOTAL_USERS_COUNT';
const ADD_USERS = 'poslestagramm/users/ADD_USERS:';
const TOGGLE_IS_FETCHING = 'poslestagramm/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'poslestagramm/users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(
                    state.users,
                    action.userId,
                    "id",
                    {followed: true})
               /* users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return ({...u, followed: true});
                    } else return u;
                })*/
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(
                    state.users,
                    action.userId,
                    "id",
                    {followed: false})
             /*   users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return ({...u, followed: false});
                    } else return u;
                })*/
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case ADD_USERS:
            return {...state, users: [...state.users, ...action.users]}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

// ActionCreator
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const addUsers = (users) => ({type: ADD_USERS, users});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})
// ThunkCreator
export const requestUsers = (currentPage = 1, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        //currentPage === 1
            dispatch(setUsers(data.items))
        //dispatch(addUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount));
    }
}
export const requestUsers2 = (currentPage = 1, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        currentPage === 1
        ? dispatch(setUsers(data.items))
        : dispatch(addUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount));
    }
}
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}
export const follow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.follow.bind(usersAPI);
        await followUnfollowFlow(dispatch, userId, apiMethod, followSuccess);
    }
}
export const unfollow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.unfollow.bind(usersAPI);
        await followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess);
    }
}

export default usersReducer