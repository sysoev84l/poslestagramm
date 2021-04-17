import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const MyPosts = (props) => {
    let posts = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.wrapper}>
            <h3 className="">
                My posts
            </h3>
            <div className={s.formWrap}>
                <div className={s.formItem}>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}
                              className=""
                              placeholder='Enter text of new post'
                    />
                </div>
                <div className={s.formControl}>
                    <div className={s.buttonWrap}>
                        <Button
                            onClick={onAddPost}
                            variant="warning"
                            size="lg"
                            block
                            className={s.btn}>
                            Add post
                        </Button>
                    </div>
                </div>

            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}
export default MyPosts
