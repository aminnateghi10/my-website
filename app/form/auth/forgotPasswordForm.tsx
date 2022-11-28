import {withFormik} from "formik";
import * as yup from 'yup'

import {ForgotPasswordFormValuesInterface} from "../../contracts/auth";
import InnerForgotPasswordForm from "../../components/auth/innerForgotPasswordForm";

interface ForgotPasswordFormProps{
}

const ForgotPasswordFormValidationSchema =yup.object().shape({
    email: yup.string().required().email(),
})

const ForgotPasswordForm = withFormik<ForgotPasswordFormProps, ForgotPasswordFormValuesInterface>({
    mapPropsToValues: props => ({
        email: ''
    }) ,
    validationSchema: ForgotPasswordFormValidationSchema,
    handleSubmit: async (values) => {
        console.log(values)
    }
})(InnerForgotPasswordForm)

export default ForgotPasswordForm;