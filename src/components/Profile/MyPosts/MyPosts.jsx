import React from 'react';
import style from './MyPosts.module.scss';
import s from '../../common/FormsContorls/FormsControl.module.scss'
import Post from './Post/Post';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsContorls/FormControls";
const  maxLength50 = maxLengthCreator(50)
let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.addPostForm}>
            <div className={style.formItem}>
                <Field
                    component={Textarea}
                    name="newPostText"
                    placeholder='Enter text of new post'
                    validate={[required, maxLength50]}
                />
            </div>
            <div className={style.formControl}>
                <button className={s.btn}>Add post</button>
            </div>
        </form>
    )
}
AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)
const MyPosts = React.memo((props) => {
    let posts = [...props.posts]
        .reverse()
        .map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);
    const onAddPost = (value) => {
            props.addPost(value.newPostText);
    }
    return (
        <div className={style.wrapper}>
            <h3 className="">
                My posts
            </h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={style.posts}>
                {posts}
            </div>
        </div>
    )
});
export default MyPosts
