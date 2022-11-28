import {withFormik} from "formik";
import * as yup from 'yup'

import {RegisterFormValuesInterface} from "../../contracts/auth";
import InnerRegisterForm from "../../components/auth/innerRegisterForm";
import callApi from "../../helpers/callApi";

interface RegisterFormProps{
}

const registerFormValidationSchema =yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(8).max(12),
})

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterface>({
    mapPropsToValues: props => ({
        name: '',
        email: '',
        password: '',
    }) ,
    validationSchema: registerFormValidationSchema,
    handleSubmit: async (values) => {
        let res = await callApi().post('auth/register',values);
        console.log(res , 'amin')
    }
})(InnerRegisterForm)

export default RegisterForm;