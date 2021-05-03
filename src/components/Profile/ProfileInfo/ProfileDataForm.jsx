import React from "react";
import {reduxForm} from "redux-form";
import s from "./ProfileInfo.module.scss";
import {createField, Input, Textarea} from "../../common/FormsContorls/FormControls";
import style from "../../common/FormsContorls/FormsControl.module.scss";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
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
                                {createField(
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
                            {createField(
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
                            {createField(
                                "",
                                'lookingForAJob',
                                [],
                                Input,
                                {type: "checkbox", id: 'lookingForAJob'}
                            )}
                            <label htmlFor="lookingForAJob">Yes</label>

                        </div>

                        <div className={s.item}>
                    <span className={s.itemTitle}>
                        My professional skills:&nbsp;
                    </span>
                            <span>{profile.lookingForAJobDescription}</span>
                        </div>
                        {createField(
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

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;