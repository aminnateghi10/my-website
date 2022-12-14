import * as yup from 'yup'
import {withFormik} from "formik";
import {toast} from "react-toastify";

import {ticketInterface} from "../../components/shared/interface";
import InnerContactForm from "../../components/home-page/contact/innerContactForm";
import callApi from "../../helpers/callApi";

interface ContactFormProps{
}

const ContactFormValidationSchema =yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    subject: yup.string().required(),
    body: yup.string().required(),
})

const ContactForm = withFormik<ContactFormProps, ticketInterface>({
    mapPropsToValues: props => ({
        email:'',
        subject:'',
        body:'',
        name:'',
    }) ,
    validationSchema: ContactFormValidationSchema,
    handleSubmit: async (values,{resetForm}) => {
        try {
            resetForm();
            let res = await callApi().post('tickets', values)
                toast.success('Submitted successfully.', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
        }catch (err){
            console.log(err)
        }
    }
})(InnerContactForm)

export default ContactForm;