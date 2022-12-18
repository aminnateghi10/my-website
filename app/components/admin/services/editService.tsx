import {Field, Form, Formik} from "formik";
import callApi from "../../../helpers/callApi";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {editItemServices} from "../../../store/services";

const EditService = ({item}: any) => {
    const dispatch = useDispatch();
    return (
        <Formik
            initialValues={{
                title: item.title,
                body: item.body,
                img: `http://localhost:8000/${item.image}`,
            }}
            onSubmit={async (values) => {
                console.log(values)
                const data = new FormData();
                data.append('file', values.img)
                data.append('title', values.title);
                data.append('body', values.body);
                data.append('_method', 'PUT');
                let res = await callApi().post(`services/${item.id}`, data).then(res => {
                    console.log(res)
                    dispatch(editItemServices(res.data.data))
                    toast.success('Changed successfully', {
                        position: "bottom-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    })
                })

            }}
        >
            {(formProps) => (
                <Form className="needs-validation text-left">
                    <div className='mt-2'>
                        <label>title</label>
                        <Field className='d-block form-control' name="title"/>
                    </div>
                    <div className='mt-2'>
                        <label>body</label>
                        <Field className='d-block form-control' name="body"/>
                    </div>
                    <div className='mt-2'>
                        <label>img</label>
                        <input name="img" type='file' className='d-block form-control'
                               onChange={(e: any) => formProps.setFieldValue('img', e.target.files[0])}/>
                    </div>
                    <button type="submit" className="btn btn-success h6 mt-3">
                        Record
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default EditService;