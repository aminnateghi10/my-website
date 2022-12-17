import * as yup from 'yup'
import {withFormik} from "formik";
import {toast} from "react-toastify";

import callApi from "../../helpers/callApi";
import {TicketInterface} from "../../contracts/interface";
import InnerContactForm from "../../components/home-page/contact/innerContactForm";

interface ContactFormProps {
}

const ContactFormValidationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    subject: yup.string().required(),
    body: yup.string().required(),
})

const ContactForm = withFormik<ContactFormProps, TicketInterface>({
    mapPropsToValues: props => ({
        email: '',
        subject: '',
        body: '',
        name: '',
    }),
    validationSchema: ContactFormValidationSchema,
    handleSubmit: async (values, {resetForm}) => {
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
        } catch (err) {
            console.log(err)
        }
    }
})(InnerContactForm)

export default ContactForm;