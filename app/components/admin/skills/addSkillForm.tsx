import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {Form, Formik} from "formik";
import * as yup from "yup";

import Input from "../../shared/form/input";
import callApi from "../../../helpers/callApi";
import {addItemSkills} from "../../../store/skills";

const AddSkillForm = () => {

    const dispatch = useDispatch();

    const AddSkillFormValidationSchema = yup.object().shape({
        title: yup.string().required(),
        percent: yup.string().required(),
        color: yup.string().required(),
    })
    return (
        <Formik
            initialValues={{title: '', percent: '', color: ''}}
            validationSchema={AddSkillFormValidationSchema}
            onSubmit={async (values) => {

                let value = {
                    meta: {p: values.color, x: ""},
                    percent: values.percent,
                    title: values.title
                }

                let res = await callApi().post('skills', value);
                try {
                    dispatch(addItemSkills(res.data.data));
                    toast.success('The item was added to the list', {
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
            }}
        >
            <div className='d-flex justify-content-center'>
                <Form className="needs-validation border p-4 rounded">
                    <div>
                        <Input name="title" label='Title' inputClassName='form-control mb-1'/>
                    </div>
                    <div>
                        <Input name="percent" label='Percent' inputClassName='form-control mb-1'/>
                    </div>
                    <div>
                        <Input name="color" label='Color' inputClassName='form-control mb-1 w-50' type='color'/>
                    </div>
                    <button className="btn btn-success w-100 mt-1" type="submit">Add</button>
                </Form>
            </div>
        </Formik>
    )
}

export default AddSkillForm;