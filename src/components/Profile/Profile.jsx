import React from 'react';
import s from './Profile.module.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Col, Container, Row} from "react-bootstrap";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={s.wrapper}>
            <Container fluid>
                <Row>
                    <Col>
                        <ProfileInfo
                            isOwner={props.isOwner}
                            profile={props.profile}
                            status={props.status}
                            updateStatus={props.updateStatus}
                            savePhoto={props.savePhoto}
                        />
                        <MyPostsContainer/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Profile
