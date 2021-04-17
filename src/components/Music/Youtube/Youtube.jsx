import React from 'react';
import s from './Youtube.module.css';

const Youtube = (props) => {
    let src = 'https://www.youtube.com/embed/' + props.id;
    return (
        <div className={s.wrap}>
            <iframe width="300" height="168.75" src={src}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>
        </div>

    )
}
export default Youtube;