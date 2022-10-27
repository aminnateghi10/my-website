import {withFormik} from "formik";
import * as yup from 'yup'

import {LoginFormValuesInterface} from "../../contracts/auth";
import InnerLoginForm from "../../components/auth/innerLoginForm";

interface LoginFormProps{

}

const registerFormValidationSchema =yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8).max(12),
})

const RegesterForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
    mapPropsToValues: props => ({
        email: '',
        password: '',
    }) ,
    validationSchema: registerFormValidationSchema,
    handleSubmit: async (values) => {
        console.log(values)
    }
})(InnerLoginForm)

export default RegesterForm;