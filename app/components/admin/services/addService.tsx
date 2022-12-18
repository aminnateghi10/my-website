import {useDispatch} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as yup from "yup";

import callApi from "../../../helpers/callApi";
import {addItemServices} from "../../../store/services";

const AddService = () => {
    const dispatch = useDispatch();

    const AddServiceFormValidationSchema = yup.object().shape({
        title: yup.string().required(),
        body: yup.string().required(),
        img: yup.mixed().required(),
    });

    return (
        <>
            <h2 className='text-center mt-5'>Add Service</h2>
            <div className='d-flex justify-content-center'>
                <Formik
                    initialValues={{
                        title: '',
                        body: '',
                        img: '',
                    }}

                    validationSchema={AddServiceFormValidationSchema}

                    onSubmit={async (values) => {
                        console.log(values)
                        try {
                            const data = new FormData();
                            data.append('file', values.img)
                            data.append('title', values.title);
                            data.append('body', values.body);

                            let res = await callApi().post('services', data).then(res => {
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
                    {(formProps) => (
                        <Form className="needs-validation border p-4 rounded">
                            <div className='mt-2'>
                                <label>title</label>
                                <Field className='d-block form-control' name="title"/>
                                <ErrorMessage name='title'/>
                            </div>
                            <div className='mt-2'>
                                <label>Body</label>
                                <Field className='d-block form-control' name="body"/>
                                <ErrorMessage name='body'/>
                            </div>
                            <div className='mt-2'>
                                <label>Img</label>
                                <input name="img" type='file' className='d-block form-control'
                                       onChange={(e: any) => formProps.setFieldValue('img', e.target.files[0])}/>
                                <ErrorMessage name='img'/>
                            </div>
                            <button className="btn btn-success mt-2" type="submit">Add</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default AddService;