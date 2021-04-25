import {profileAPI} from "../api/api";

const ADD_POST = 'poslestagramm/profile/ADD-POST';
const SET_USER_PROFILE = 'poslestagramm/profile/SET_USER_PROFILE'
const TOGGLE_IS_FETCHING = 'poslestagramm/profile/TOGGLE_IS_FETCHING';
const SET_STATUS = 'poslestagramm/profile/SET_STATUS';
const DELETE_POST = 'poslestagramm/profile/DELETE_POST';

let initialState = {
    posts: [
        {id: 1, message: "Hi, it's my first post!!", likesCount: 20},
        {id: 2, message: "I very glad to see you!!", likesCount: 15},
        {id: 3, message: "Who is on duty today??", likesCount: 22},
        {id: 4, message: "I'm Senior Full Stack Developer!!", likesCount: 33},
        {id: 5, message: "Jews, Jews!! There are only Jews around!!", likesCount: 33}
    ],
    newPostText: '',
    profile: null,
    isFetching: false,
    status: ''
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

const setUserProfile = (profile) => (
    {
        type: SET_USER_PROFILE,
        profile
    }
)
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setStatus = (status) => (
    {
        type: SET_STATUS,
        status
    }
)

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(toggleIsFetching(false));
        dispatch(setStatus(status));
    }
}

export default profileReducer