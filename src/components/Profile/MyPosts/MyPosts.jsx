import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Field, reduxForm} from "redux-form";

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.addPostForm}>
            <div className={s.formItem}>
                <Field
                    component="textarea"
                    name="newPostText"
                    placeholder='Enter text of new post'
                />
            </div>
            <div className={s.formControl}>
                <button className={s.btn}>Add post</button>
            </div>
        </form>
    )
}
AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)
const MyPosts = (props) => {
    let posts = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);
    const onAddPost = (value) => {
       // console.log(value.newPostText)
        if (JSON.stringify(value) !== '{}') {
            props.addPost(value.newPostText);
        }
    }
    return (
        <div className={s.wrapper}>
            <h3 className="">
                My posts
            </h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}
export default MyPosts
