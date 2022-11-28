import {withFormik} from "formik";
import * as yup from 'yup'

import {LoginFormValuesInterface} from "../../contracts/auth";
import InnerLoginForm from "../../components/auth/innerLoginForm";
import callApi from "../../helpers/callApi";
import Router from "next/router";
import {toast} from "react-toastify";

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
            let res : any = await callApi().post('/login' , values);
            if (res = 200) {
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

                setTimeout(()=>{
                    Router.push('/admin')
                },2000)
            }
        }catch (err){
            console.log(err)
        }
    }
})(InnerLoginForm)

export default LoginForm;