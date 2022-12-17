import * as yup from 'yup'
import Router from "next/router";
import {withFormik} from "formik";
import {toast} from "react-toastify";

import callApi from "../../helpers/callApi";
import {LoginFormValuesInterface} from "../../contracts/auth";
import InnerLoginForm from "../../components/auth/innerLoginForm";

interface LoginFormProps {
}

const loginFormValidationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8).max(12),
})

const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
    mapPropsToValues: props => ({
        email: '',
        password: '',
    }),
    validationSchema: loginFormValidationSchema,
    handleSubmit: async (values) => {
        try {
            let res = await callApi().post('/login', values);
            toast.success('You have successfully logged in.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })

            setTimeout(() => {
                Router.push('/admin')
            }, 2000)
        } catch (err) {
            console.log(err)
        }
    }
})(InnerLoginForm)

export default LoginForm;