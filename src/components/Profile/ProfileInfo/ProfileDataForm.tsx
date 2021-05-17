import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import s from "./ProfileInfo.module.scss";
import {createField, GetStringKeys, Input, Textarea} from "../../common/FormsContorls/FormControls";
import style from "../../common/FormsContorls/FormsControl.module.scss";
import {ProfileType} from "../../../types/types";


type PropsType = {
    profile: ProfileType

}
type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={s.infoWrap}>
                <div className={s.infoBlock}>
                    <div className={s.titleBlock}>
                        <div>
                            <h5>
                                Full name:
                            </h5>
                            <div>
                                {createField<ProfileTypeKeys>(
                                    "Full name",
                                    'fullName',
                                    [],
                                    Input,
                                    {className: s.inputW100}
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={s.descriptionBlock}>
                        <div className={s.item}>
                    <div className={s.itemTitle}>
                        About me:&nbsp;
                    </div>
                            <div className={s.itemInputWrap}>
                            {createField<ProfileTypeKeys>(
                                "About me",
                                'aboutMe',
                                [],
                                Textarea,
                                {className: s.inputW100}

                            )}
                            </div>
                        </div>
                        <div className={s.item}>
                    <span className={s.itemTitle}>
                        Looking for a job:&nbsp;
                    </span>
                            <div className={style.formCheckboxWrap}>
                            {createField<ProfileTypeKeys>(
                                "",
                                'lookingForAJob',
                                [],
                                Input,
                                {type: "checkbox", id: 'lookingForAJob'}
                            )}
                                <div className={style.label}>
                            <label htmlFor="lookingForAJob">Yes</label>
                                </div>
                            </div>
                        </div>

                        <div className={s.item}>
                    <span className={s.itemTitle}>
                        My professional skills:&nbsp;
                    </span>
                            <span>{profile.lookingForAJobDescription}</span>
                        </div>
                        {createField<ProfileTypeKeys>(
                            "My professional skills:",
                            'lookingForAJobDescription',
                            [],
                            Textarea
                        )}
                    </div>
                    <div className={s.contactsWrap}>
                        <h5 className={s.title}>Contacts:</h5>
                        <div>
                            {Object.keys(profile.contacts).map(
                                key => {
                                    return <div key={key} className={s.contact}>
                                        <div className={s.contactWrap}>
                                            <div className={s.contactKeyTitle}>{key}:</div>
                                            <div className={s.contactKeyInputWrap}>
                                                {/* todo: create some solution for embedded objects */}
                                                {createField(key,
                                                    "contacts." + key,
                                                    [], Input,
                                                    {className: s.inputW100}
                                                )}</div>
                                        </div>
                                    </div>
                                })}
                        </div>

                    </div>
                </div>
                {error && <div className={style.formSummaryError}>
                    {error}
                </div>
                }
                <div className={s.controlWrap}>
                    <div className={s.formControl}>
                        <button className={s.btn}>
                            save
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;