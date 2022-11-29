import {Field, Form, Formik} from "formik";
import callApi from "../../../helpers/callApi";
import {ChangeEvent, ChangeEventHandler} from "react";
import {useDispatch} from "react-redux";
import {addItemServices} from "../../../store/services";
import {toast} from "react-toastify";

const AddService = ()=>{

    const dispatch = useDispatch();
    return(
        <div className='d-flex justify-content-center'>
            <Formik
                initialValues={{
                    title:'',
                    body:'',
                    img:'',
                }}
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
                    }catch (err){
                        console.log(err)
                    }
                }}
            >
                {(formProps) => (
                    <Form className="needs-validation border p-4 rounded">
                        <div className='mt-2'>
                            <label>title</label>
                            <Field className='d-block form-control' name="title"/>
                        </div>
                        <div className='mt-2'>
                            <label>Body</label>
                            <Field className='d-block form-control' name="body"/>
                        </div>
                        <div className='mt-2'>
                            <label>Img</label>
                            <input name="img" type='file' className='d-block form-control'
                                   onChange={(e: any) => formProps.setFieldValue('img', e.target.files[0])}/>
                        </div>
                        <button className="btn btn-success mt-2" type="submit">Add</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddService;