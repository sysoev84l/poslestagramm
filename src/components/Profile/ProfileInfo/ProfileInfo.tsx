import React, {ChangeEvent, useState} from 'react';
import style from './ProfileInfo.module.scss';
import Avatar from "../../common/Avatars/Avatar";
import Preloader from "../../common/Preloader/Preloader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faGlobe, faUpload} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faGithub,
    faInstagram,
    faTwitter,
    faVk,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import {ContactsType, ProfileType} from "../../../types/types";

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}
const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    let icon;
    switch (contactTitle) {
        case 'facebook' :
            icon = <FontAwesomeIcon icon={faFacebook}/>
            break
        case 'website' :
            icon = <FontAwesomeIcon icon={faGlobe}/>
            break
        case 'vk' :
            icon = <FontAwesomeIcon icon={faVk}/>
            break
        case 'twitter' :
            icon = <FontAwesomeIcon icon={faTwitter}/>
            break
        case 'instagram' :
            icon = <FontAwesomeIcon icon={faInstagram}/>
            break
        case 'youtube' :
            icon = <FontAwesomeIcon icon={faYoutube}/>
            break
        case 'github' :
            icon = <FontAwesomeIcon icon={faGithub}/>
            break
        case 'mainLink' :
            icon = <FontAwesomeIcon icon={faEnvelope}/>
            break
        default :
            icon = ''
    }
    return (
        <div>
            <span>{icon}&nbsp;</span>
            <span>{contactTitle}:&nbsp;</span>
            <span>{contactValue}</span>
        </div>
    )
}
type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}
const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return (
        <div className={style.infoWrap}>
            <div className={style.infoBlock}>
                <div className={style.titleBlock}>
                    <div>
                        <h6>
                            Full name: {profile.fullName}
                        </h6>
                    </div>
                </div>
                <div className={style.descriptionBlock}>
                    <div className={style.item}>
                    <span className={style.itemTitle}>
                        About me:&nbsp;
                    </span>
                        <span>{profile.aboutMe}</span>
                    </div>
                    <div className={style.item}>
                    <span className={style.itemTitle}>
                        Looking for a job:&nbsp;
                    </span>
                        {profile.lookingForAJob
                            ? <span>Yes</span>
                            : <span>No</span>
                        }
                    </div>
                    {profile.lookingForAJob &&
                    <div className={style.item}>
                    <span className={style.itemTitle}>
                        My professional skills:&nbsp;
                    </span>
                        <span>{profile.lookingForAJobDescription}</span>
                    </div>
                    }
                </div>
                <div className={style.contactsWrap}>
                    <h6 className={style.title}>Contacts:</h6>
                    <div>
                        {Object
                            .keys(profile.contacts)
                            .map((key) => {
                                return <Contact key={key}
                                                contactTitle={key}
                                                contactValue={profile.contacts[key as keyof ContactsType]}/>
                            })}
                    </div>

                </div>
            </div>
                  <div className={style.controlWrap}>
                {isOwner && <div className={style.formControl}>
                    <button className={style.btn}
                            onClick={goToEditMode}
                    >
                        Edit
                    </button>
                </div>}
            </div>
        </div>
    )
}

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo: React.FC<PropsType> = ({
                                              savePhoto, isOwner, profile,
                                              status, updateStatus, saveProfile
                                          }) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData: ProfileType) => {
        // todo: remove then
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }
    return (
        <div className="">
            <div className={style.head}>
                <div className={style.photoWrap}>
                    <div className={style.photo}>
                        {profile.photos.large !== null
                            ? <img src={profile.photos.large} alt=""/>
                            : <Avatar sex='man' size='lg'/>
                        }
                    </div>

                    <div className={style.uploadWrap}>
                        {isOwner &&
                        <div className={style.photoInputWrap}>
                            <label htmlFor="photoInput" className={style.photoInputLabel}>
                                <span className={style.labelIcon}><FontAwesomeIcon icon={faUpload}/> </span>
                                <input type="file"
                                       id='photoInput'
                                       className={style.photoInput}
                                       onChange={onMainPhotoSelected}/>
                                <span className={style.labelTitle}> Выбирите файл</span>

                            </label>
                        </div>}
                    </div>
                </div>
                <div className={style.descriptionWrap}>
                    {editMode
                        ? <ProfileDataForm initialValues={profile}
                                           profile={profile}
                                           onSubmit={onSubmit}/>
                        : <ProfileData goToEditMode={() => {
                            setEditMode(true)
                        }}
                                       profile={profile} isOwner={isOwner}/>
                    }
                </div>

            </div>
            <ProfileStatusWithHooks status={status}
                                    updateStatus={updateStatus}
                                    isOwner={isOwner}
            />

        </div>
    )
}
export default ProfileInfo
