import React from 'react';
import style from './ProfileInfo.module.scss';
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

const ProfileInfo = ({isOwner, profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className="">
            <div className={style.descriptionBlock}>
                <div className={style.photoWrap}>
                    <div className={style.photo}>
                        {profile.photos.small !== null
                            ? <img src={profile.photos.small} alt=""/>
                            : <Avatar sex='man' size='lg'/>
                        }
                    </div>
                </div>
                <div className={style.description}>
                    <div className={style.name}>
                        {profile.fullName}
                    </div>
                    <div className={style.about}>
                        {profile.aboutMe}
                    </div>
                    <div><span>Looking for a job: </span>
                        {profile.lookingForAJob
                            ? <span>Yes</span>
                            : <span>No</span>
                        }
                    </div>
                    <div>
                        {profile.lookingForAJobDescription}
                    </div>
                </div>

            </div>
            <div className={style.upload}>
                {isOwner && <input type="file"/>}

            </div>
            <ProfileStatusWithHooks status={status}
                                    updateStatus={updateStatus}
            />

            <div className={style.contactWrap}>
                <div className={style.titleWrap}>
                    <h5 className={style.title}>Contacts:</h5>

                </div>
                <div className={style.items}>
                    {profile.contacts.facebook
                        ? <div className={style.item}>
                            <a href={profile.contacts.facebook}><FontAwesomeIcon
                                icon={faFacebook}/> {profile.contacts.facebook}</a>

                        </div>
                        : null
                    }
                    {profile.contacts.website
                        ? <div className={style.item}>
                            <FontAwesomeIcon icon={faCode}/> - {profile.contacts.website}
                        </div>
                        : null
                    }
                    {profile.contacts.vk
                        ? <div className={style.item}>
                            <FontAwesomeIcon icon={faVk}/> - {profile.contacts.vk}
                        </div>
                        : null
                    }
                    {profile.contacts.twitter
                        ? <div className={style.item}>
                            <FontAwesomeIcon icon={faTwitter}/> - {profile.contacts.twitter}
                        </div>
                        : null
                    }

                    {profile.contacts.instagram
                        ? <div className={style.item}>
                            <FontAwesomeIcon icon={faInstagram}/> - {profile.contacts.instagram}
                        </div>
                        : null
                    }
                    {profile.contacts.youtube
                        ? <div className={style.item}>
                            <FontAwesomeIcon icon={faYoutube}/> - {profile.contacts.youtube}
                        </div>
                        : null
                    }
                    {profile.contacts.github
                        ? <div className={style.item}>
                            <FontAwesomeIcon icon={faGithub}/> - {profile.contacts.github}
                        </div>
                        : null
                    }
                    {profile.contacts.mainLink
                        ? <div className={style.item}>
                            <FontAwesomeIcon icon={faEnvelope}/> - {profile.contacts.mainLink}
                        </div>
                        : null
                    }
                </div>
            </div>
        </div>

    )
}
export default ProfileInfo
