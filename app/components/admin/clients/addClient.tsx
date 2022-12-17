import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import * as yup from 'yup'

import callApi from "../../../helpers/callApi";
import Input from "../../shared/form/input";
import {addItemClient} from "../../../store/client";

const AddCustomersAndReviews = ()=>{

    const dispatch = useDispatch();

    const AddClientsFormValidationSchema = yup.object().shape({
        name: yup.string().required(),
        job: yup.string().required(),
        body: yup.string().required(),
        img: yup.mixed().required(),
    });
    return(
        <div className='d-flex justify-content-center'>
            <Formik
                initialValues={{
                    name:'',
                    job:'',
                    body:'',
                    img:'',
                }}
                validationSchema={AddClientsFormValidationSchema}
                onSubmit={async (values) => {
                    console.log(values)
                    try {
                        const data = new FormData();
                        data.append('file', values.img)
                        data.append('name', values.name);
                        data.append('job', values.job);
                        data.append('body', values.body);

                        let res = await callApi().post('clients', data).then(res => {
                            dispatch(addItemClient(res.data.data))
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
                    }catch (err){
                        console.log(err)
                    }
                }}
            >
                {(formProps) => (
                    <Form className="needs-validation border p-4 rounded">
                        <div className='mt-2'>
                            <Input name='name' inputClassName='d-block form-control' label='Name'/>
                        </div>
                        <div className='mt-2'>
                            <Input name='job' label='Job' inputClassName='d-block form-control' />
                        </div>
                        <div className='mt-2'>
                            <Input name='body' label='Body' inputClassName='d-block form-control' />
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
    )
}

export default AddCustomersAndReviews;