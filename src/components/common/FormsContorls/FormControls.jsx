import React from "react";
import style from "./FormsControl.module.scss"

const FormControl = ({input, meta: {touched, error}, child, children, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={`${style.formControl} ${hasError ? style.error : ''}`}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}
export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}


/*
export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${style.formControl} ${hasError ? style.error : ''}`}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError &&  <span>{meta.error}</span>}
        </div>
    )
}
export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${style.formControl} ${hasError ? style.error : ''}`}>

            <input {...input} {...props} />

            {hasError &&  <span>{meta.error}</span>}
        </div>
    )
}*/
