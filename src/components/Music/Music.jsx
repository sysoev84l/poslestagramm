import React from 'react';
import style from './Music.module.scss';
import Youtube from "./Youtube/Youtube";


class Music extends React.Component {
    render() {
        return (
            <div className={style.wrapper}>
                {this.props.state.music.map(m => <Youtube id={m.idVideo} key={m.id}/>)}
            </div>
        )
    }
}

export default Music