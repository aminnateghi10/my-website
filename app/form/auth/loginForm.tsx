import {withFormik} from "formik";
import * as yup from 'yup'

import {LoginFormValuesInterface} from "../../contracts/auth";
import InnerLoginForm from "../../components/auth/innerLoginForm";
import callApi from "../../helpers/callApi";
import {storeLoginToken} from "../../helpers/auth";

interface LoginFormProps{
}

const loginFormValidationSchema =yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8).max(12),
})

const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
    mapPropsToValues: props => ({
        email: '',
        password: '',
    }) ,
    validationSchema: loginFormValidationSchema,
    handleSubmit: async (values) => {
        try {
            let res = await callApi().post('https://api-web.a-nateghi.ir/api/v1/login' , values);
            storeLoginToken(res.data?.token)
        }catch (err){
            console.log(err)
        }
    }
})(InnerLoginForm)

export default LoginForm;