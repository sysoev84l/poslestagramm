import React from 'react';
import style from './ProfileInfo.module.css';
import Avatar from "../../common/Avatars/Avatar";
import Preloader from "../../common/Preloader/Preloader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faGithub,
    faInstagram,
    faTwitter,
    faVk,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className="">
            <div className={style.descriptionBlock}>
                <div className={style.photo}>
                    {props.profile.photos.small !== null
                        ? <img src={props.profile.photos.small} alt=""/>
                        : <Avatar sex='man' size='lg'/>
                    }
                </div>
                <div className={style.description}>
                    <div className={style.name}>
                        {props.profile.fullName}
                    </div>
                    <div className={style.about}>
                        {props.profile.aboutMe}
                    </div>
                    <div><span>Looking for a job: </span>
                        {props.profile.lookingForAJob
                            ? <span>Yes</span>
                            : <span>No</span>
                        }
                    </div>
                    <div>
                        {props.profile.lookingForAJobDescription}
                    </div>
                </div>

            </div>
            <ProfileStatusWithHooks status={props.status}
                           updateStatus={props.updateStatus}
            />
            <div className={style.contactWrap}>
                <div className={style.titleWrap}>
                    <h5 className={style.title}>Contacts:</h5>

                </div>
                <div className={style.items}>
                    {props.profile.contacts.facebook
                        ? <div className={style.item}>
                            <a href={props.profile.contacts.facebook}><FontAwesomeIcon
                                icon={faFacebook}/> {props.profile.contacts.facebook}</a>

                        </div>
                        : null
                    }
                    {props.profile.contacts.website
                        ? <div className={style.item}>
                            <FontAwesomeIcon icon={faCode}/> - {props.profile.contacts.website}
                        </div>
                        : null
                    }
                    {props.profile.contacts.vk
                        ? <div className={style.item}>
                            <FontAwesomeIcon icon={faVk}/> - {props.profile.contacts.vk}
                        </div>
                        : null
                    }
                    {props.profile.contacts.twitter
                        ? <div className={style.item}>
                            <FontAwesomeIcon icon={faTwitter}/> - {props.profile.contacts.twitter}
                        </div>
                        : null
                    }

                    {props.profile.contacts.instagram
                        ? <div className={style.item}>
                            <FontAwesomeIcon icon={faInstagram}/> - {props.profile.contacts.instagram}
                        </div>
                        : null
                    }
                    {props.profile.contacts.youtube
                        ? <div className={style.item}>
                            <FontAwesomeIcon icon={faYoutube}/> - {props.profile.contacts.youtube}
                        </div>
                        : null
                    }
                    {props.profile.contacts.github
                        ? <div className={style.item}>
                            <FontAwesomeIcon icon={faGithub}/> - {props.profile.contacts.github}
                        </div>
                        : null
                    }
                    {props.profile.contacts.mainLink
                        ? <div className={style.item}>
                            <FontAwesomeIcon icon={faEnvelope}/> - {props.profile.contacts.mainLink}
                        </div>
                        : null
                    }
                </div>
            </div>
        </div>

    )
}
export default ProfileInfo
