import {ErrorMessage, Field, Form, Formik} from "formik";
import callApi from "../../../helpers/callApi";

import {toast} from "react-toastify";
import * as yup from "yup";
import Input from "../../shared/form/input";
import {useDispatch} from "react-redux";
import {editItemClient} from "../../../store/client";

const EditClient = ({item}:any)=>{

    const EditClientsFormValidationSchema = yup.object().shape({
        name: yup.string().required(),
        job: yup.string().required(),
        body: yup.string().required(),
        img: yup.mixed().required(),
    });

    const dispatch = useDispatch();

    return(
        <Formik
            initialValues={{
                name: item.name,
                job: item.job,
                body: item.body,
                img: '',
            }}
            validationSchema={EditClientsFormValidationSchema}
            onSubmit={async (values) => {
                console.log(values)
                const data = new FormData();
                data.append('file', values.img)
                data.append('name', values.name);
                data.append('job', values.job);
                data.append('body', values.body);
                data.append('_method', 'PUT');
                try {
                    let res = await callApi().post(`clients/${item.id}`, data);
                    dispatch(editItemClient(res.data.data));
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
                }catch (err){
                    console.log(err)
                }

                }}
        >
            {(formProps) => (
                <Form className="needs-validation text-left">
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
                    <button type="submit" className="btn btn-success h6 mt-3">
                        Record
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default EditClient;