import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Post/Post';
import AddPostForm, {AddPostFormValuesType} from "./AddPostForm/AddPostForm";
import {PostType} from "../../../types/types";


export type MapPropsType = {
    posts: Array<PostType>
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = ((props) => {
    let posts = [...props.posts]
        .reverse()
        .map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);
    const onAddPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText);
    }
    return (
        <div className={style.wrapper}>
            <h3 className="">
                My posts
            </h3>
            <AddPostForm onSubmit={onAddPost}/>
            <div className={style.posts}>
                {posts}
            </div>
        </div>
    )
});
const MyPostsMemorized = React.memo(MyPosts)
export default MyPostsMemorized
