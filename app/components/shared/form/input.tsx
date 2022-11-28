import {ErrorMessage, Field} from "formik";
import {FC} from "react";

interface InputProps {
    name: string,
    label: string,
    type?: string,
    inputClassName?: string,
    labelClassName?: string,
    errorClassName?: string
    as ?: string
}

const Input: FC<InputProps> = ({name,label,type='text',inputClassName,labelClassName,errorClassName,as}) => {
    return (
        <>
            <label htmlFor={name} className={labelClassName}>{label}</label>
            <Field as={as} name={name} id={name} type={type} className={inputClassName}/>
            <ErrorMessage className={errorClassName} name={name}/>
        </>
    )
}

export default Input;