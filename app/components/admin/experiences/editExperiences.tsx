import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import * as yup from "yup";

import Input from "../../shared/form/input";
import callApi from "../../../helpers/callApi";
import {editItemServices} from "../../../store/services";

const EditExperiences = ({item}: any) => {
    const dispatch = useDispatch();

    const EditExperiencesFormValidationSchema = yup.object().shape({
        type: yup.string().required(),
        title: yup.string().required(),
        body: yup.string().required(),
        start: yup.string().required(),
        end: yup.string().required(),
    });

    return (
        <Formik
            initialValues={{
                type: item.type,
                title: item.title,
                body: item.body,
                start: item.start,
                end: item.end,
            }}
            validationSchema={EditExperiencesFormValidationSchema}
            onSubmit={async (values) => {
                console.log({...values, '_method': 'PUT'})
                try {
                    let res = await callApi().post(`experiences/${item.id}`, {
                        ...values,
                        '_method': 'PUT'
                    }).then(res => {
                        console.log(res)
                        dispatch(editItemServices(res.data.data))
                    })

                    toast.success('Editing was done successfully', {
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
            <Form className="needs-validation">
                <div className='mt-2'>
                    <label>type</label>
                    <Field as="select" name="type" className="form-control">
                        <option value="JobExperiences">Job Experiences</option>
                        <option value="EducationalExperiences">Educational Experiences</option>
                    </Field>
                    <ErrorMessage name='type'/>
                </div>
                <div className='mt-2'>
                    <Input name='title' label='Title' inputClassName='d-block form-control'/>
                </div>
                <div className='mt-2'>
                    <Input name='body' label='Body' inputClassName='d-block form-control'/>
                </div>
                <div className='mt-2'>
                    <Input name='start' label='start' inputClassName='d-block form-control'/>
                </div>
                <div className='mt-2'>
                    <Input name='end' label='End' inputClassName='d-block form-control'/>
                </div>
                <button className="btn btn-success mt-2 px-4" type="submit">Edit</button>
            </Form>
        </Formik>
    )
}

export default EditExperiences;