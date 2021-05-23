import {Field, Form, Formik} from 'formik'
import React from 'react'
import {FilterType} from '../../redux/users-reducer'
import s from "../common/FormsContorls/FormsControl.module.scss";
import style from './Users.module.scss'

const usersSearchFormValidate = (values: any) => {
    const errors = {}
    return errors
}

type FormType = {
    term: string
    friend: 'true' | 'false' | 'null'
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {

    const submit = (values: FormType,
                    {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }

        props.onFilterChanged(filter)
        setSubmitting(false)
    }

    return <div className={style.formWrap}>
        <Formik
            initialValues={{term: '', friend: 'null'}}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <div className={s.formControl}>
                        <Field type="text" name="term"
                               className={s.input}
                               placeholder='User name'
                        />
                    </div>
                    <div className={style.formBottomWrap}>
                        <div>
                            <div className={s.formControl}>
                                <Field name="friend" as="select">
                                    <option value="null">All</option>
                                    <option value="true">Only followed</option>
                                    <option value="false">Only unfollowed</option>
                                </Field>
                            </div>
                        </div>
                        <div className={s.btnWrapRight}>
                            <button className={s.btn}
                                    type="submit"
                                    disabled={isSubmitting}>
                                Find
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
})
