import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Col, Container, Row} from "react-bootstrap";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";


const Profile = (props) => {

    return (
        <div className={s.wrapper}>
            <Container fluid>
                <Row>
                    <Col>
                        <ProfileInfo
                            profile={props.profile}
                            status={props.status}
                            updateStatus={props.updateStatus}
                        />
                        <MyPostsContainer/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Profile
