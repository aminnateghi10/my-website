import {Field, Form, Formik} from "formik";
import callApi from "../../../helpers/callApi";

const AddService = ()=>{
    return(
        <div className='d-flex justify-content-center'>
            <Formik
                initialValues={{
                    title:'',
                    body:'',
                    img:'',
                }}
                onSubmit={async (values) => {
                    console.log(values.img)
                    const data = new FormData();
                    data.append('file', values.img)
                    data.append('title', values.title);
                    data.append('body', values.body);
                    let res = await callApi().post('services', data).then(res => {
                        console.log(res)
                    })
                    // toast.success('The item was added to the list', {
                    //     position: "bottom-right",
                    //     autoClose: 2000,
                    //     hideProgressBar: false,
                    //     closeOnClick: true,
                    //     pauseOnHover: true,
                    //     draggable: true,
                    //     progress: undefined,
                    //     theme: "light",
                    // })
                    // })
                }}
            >
                {(formProps) => (
                    <Form className="needs-validation border p-4 rounded text-center">
                        <div className='text-left'>
                            <label>title</label>
                            <Field className='d-block' name="text"/>
                        </div>
                        <input name="img" type='file' className='d-block'
                               onChange={(e) => formProps.setFieldValue('img', e.target.files[0])}/>
                        <button className="btn btn-success" type="submit">Add</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddService;