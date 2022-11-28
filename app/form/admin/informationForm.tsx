import {withFormik} from "formik";
import * as yup from 'yup'

import InnerInformationForm from "../../components/admin/innerInformationForm";
import callApi from "../../helpers/callApi";
import {toast} from "react-toastify";
import {InformationFormValuesInterface} from "../../contracts/admin";

interface InformationFormProps{
    data : any
}


const InformationFormValidationSchema =yup.object().shape({
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
    mapPropsToValues: props => (props?.data) ,
    validationSchema: InformationFormValidationSchema,
    handleSubmit: async(values) => {
            let res  = await callApi().put('/information' , values);
            console.log(values)
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
        }catch (err){
            console.log(err)
        }
    }
})(InnerInformationForm)

export default InformationForm;