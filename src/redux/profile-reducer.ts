import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from '../types/types';
import {profileAPI} from "../api/profile-api";

const ADD_POST = 'after100Grams/profile/ADD-POST';
const SET_USER_PROFILE = 'after100Grams/profile/SET_USER_PROFILE'
const SET_STATUS = 'after100Grams/profile/SET_STATUS';
const DELETE_POST = 'after100Grams/profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'after100Grams/profile/SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: "Hi, it's my first post!!", likesCount: 20},
        {id: 2, message: "I very glad to see you!!", likesCount: 15},
        {id: 3, message: "Who is on duty today??", likesCount: 22},
        {id: 4, message: "I'm Senior Full Stack Developer!!", likesCount: 33},
        {id: 5, message: "Jews, Jews!! There are only Jews around!!", likesCount: 33}
    ]as Array<PostType>,
    newPostText: '',
    profile: null as ProfileType | null,
    status: ''
}
export type InitialStateType = typeof initialState
const profileReducer = (state = initialState, action:any ): InitialStateType => {
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
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        default:
            return state
    }
}
type SetUserProfileActionCreatorType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
const setUserProfile = (profile: ProfileType): SetUserProfileActionCreatorType => (
    {
        type: SET_USER_PROFILE,
        profile
    }
)

type AddPostActionCreatorType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPost = (newPostText: string): AddPostActionCreatorType => ({type: ADD_POST, newPostText});

type DeletePostActionCreatorType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostActionCreatorType => ({type: DELETE_POST, postId});
type SetStatusActionCreatorType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusActionCreatorType => (
    {
        type: SET_STATUS,
        status
    }
)
type SavePhotoSuccessActionCreatorType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionCreatorType => ({
    type: SAVE_PHOTO_SUCCESS, photos
})


export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file: any) => async (dispatch:any) => {
    const data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos));
    }
}
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.id;
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0] }));
        return Promise.reject(data.messages[0]);
    }
}

export default profileReducer