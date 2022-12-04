import {toast} from "react-toastify";
import {withFormik} from "formik";
import * as yup from 'yup'

import callApi from "../../helpers/callApi";
import {InformationFormValuesInterface} from "../../contracts/admin";
import InnerInformationForm from "../../components/admin/information/innerInformationForm";

interface InformationFormProps {
    data: InformationFormValuesInterface
}


const InformationFormValidationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    jab: yup.string().required(),
    projectsCompleted: yup.string().required(),
    cupOfCoffee: yup.string().required(),
    satisfiedClients: yup.string().required(),
    nomineesWinner: yup.string().required(),
    biography: yup.string().required()
})

const InformationForm = withFormik<InformationFormProps, InformationFormValuesInterface>({
    mapPropsToValues: props => ({
        name: props.data.name,
        jab: props.data.jab,
        email: props.data.email,
        biography: props.data.biography,
        projectsCompleted: props.data.projectsCompleted,
        nomineesWinner: props.data.nomineesWinner,
        satisfiedClients: props.data.satisfiedClients,
        cupOfCoffee: props.data.cupOfCoffee
    }),
    validationSchema: InformationFormValidationSchema,
    handleSubmit: async (values) => {
        let res = await callApi().put('/information', values);
        try {
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
        } catch (err) {
            console.log(err)
        }
    }
})(InnerInformationForm)

export default InformationForm;