import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from '../types/types';
import {profileAPI} from "../api/profile-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";


let initialState = {
    posts: [
        {id: 1, message: "Hi, it's my first post!!", likesCount: 20},
        {id: 2, message: "I very glad to see you!!", likesCount: 15},
        {id: 3, message: "Who is on duty today??", likesCount: 22},
        {id: 4, message: "I'm Senior Full Stack Developer!!", likesCount: 33},
        {id: 5, message: "Jews, Jews!! There are only Jews around!!", likesCount: 33}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
}
const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/PROFILE/SN/PROFILE/ADD_POST": {
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
        case "SN/PROFILE/DELETE_POST": {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        case "SN/PROFILE/SET_USER_PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SN/PROFILE/SET_STATUS": {
            return {...state, status: action.status}
        }
        case "SN/PROFILE/SAVE_PHOTO_SUCCESS":
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        default:
            return state
    }
}

export const actions = {
    setUserProfile: (profile: ProfileType) => (
        {
            type: 'SN/PROFILE/SET_USER_PROFILE',
            profile
        } as const
    ),
    addPost: (newPostText: string) => ({type: 'SN/PROFILE/SN/PROFILE/ADD_POST', newPostText} as const),
    deletePost: (postId: number) => ({type: 'SN/PROFILE/DELETE_POST', postId} as const),
    setStatus: (status: string) => (
        {
            type: 'SN/PROFILE/SET_STATUS',
            status
        } as const
    ),
    savePhotoSuccess: (photos: PhotosType) => ({
        type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos
    } as const)
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(data));
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(actions.setStatus(status));
    }
}
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    const data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
}
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch,
                                                                       getState) => {
    const userId = getState().auth.id;
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        if (userId !== null) {
            dispatch(getUserProfile(userId));
        } else {
            throw new Error("userId can't be null")
        }
    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}));
        return Promise.reject(data.messages[0]);
    }
}

export default profileReducer

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>