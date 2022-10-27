import {ErrorMessage, Field} from "formik";
import {FC} from "react";

interface InputProps {
    name: string,
    label: string,
    type?: string,
    inputClassName?: string,
    labelClassName?: string,
    errorClassName?: string
}

const Input: FC<InputProps> = ({name,label,type='text',inputClassName,labelClassName,errorClassName}) => {
    return (
        <>
            <label htmlFor={name} className={labelClassName}>{label}</label>
            <Field name={name} id={name} type={type} className={inputClassName}/>
            <ErrorMessage className={errorClassName} name={name}/>
        </>
    )
}

export default Input;