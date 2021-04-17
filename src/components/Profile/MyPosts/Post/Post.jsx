import React from 'react';
import s from './Post.module.css';
import Avatar from "../../../common/Avatars/Avatar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons";


const Post = (props) => {
    return (
        <div className={s.item}>
            <Avatar sex='man'/>
            <p className="">
                {props.message}
            </p>
            <div className={s.like}>
                <span className={s.count}>{props.likesCount}</span>
                <span className={s.icon}> <FontAwesomeIcon icon={faThumbsUp} size='lg'/></span>
            </div>
        </div>
    )
}
export default Post
