import {withFormik} from "formik";
import * as yup from 'yup'

import callApi from "../../helpers/callApi";
import {RegisterFormValuesInterface} from "../../contracts/auth";
import InnerRegisterForm from "../../components/auth/innerRegisterForm";

interface RegisterFormProps {
}

const registerFormValidationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(8).max(12),
    password_confirmation:yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
})

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterface>({
    mapPropsToValues: props => ({
        name: '',
        email: '',
        password: '',
        password_confirmation:'',
    }),
    validationSchema: registerFormValidationSchema,
    handleSubmit: async (values) => {
        console.log(values)
        try {
        let res = await callApi().post('register', values);
            console.log(res)
        }catch (err) {
            console.log(err)
        }
    }
})(InnerRegisterForm)

export default RegisterForm;