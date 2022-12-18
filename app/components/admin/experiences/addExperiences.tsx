import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import * as yup from "yup";

import Input from "../../shared/form/input";
import callApi from "../../../helpers/callApi";
import {addItemServices} from "../../../store/services";

const AddExperiences = () => {
    const dispatch = useDispatch();

    const AddExperiencesFormValidationSchema = yup.object().shape({
        type: yup.string().required(),
        title: yup.string().required(),
        body: yup.string().required(),
        start: yup.string().required(),
        end: yup.string().required(),
    });

    return (
        <div className='d-flex justify-content-center'>
            <Formik
                initialValues={{
                    type: '',
                    title: '',
                    body: '',
                    start: '',
                    end: '',
                }}
                validationSchema={AddExperiencesFormValidationSchema}
                onSubmit={async (values) => {
                    console.log(values)
                    try {
                        let res = await callApi().post('experiences', values).then(res => {
                            dispatch(addItemServices(res.data.data))
                        })

                        toast.success('Added successfully', {
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
                <Form className="needs-validation border p-4 rounded">
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
                    <button className="btn btn-success mt-2" type="submit">Add</button>
                </Form>
            </Formik>
        </div>
    )
}

export default AddExperiences;