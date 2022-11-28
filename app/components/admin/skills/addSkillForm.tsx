import {Form, Formik} from "formik";
import Input from "../../shared/form/input";
import callApi from "../../../helpers/callApi";
import {addItemSkills} from "../../../store/skills";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";

const AddSkillForm = ()=>{

    const dispatch = useDispatch();
    return (
        <Formik
            initialValues={{ title:'' , percent:'' , color:''}}
            onSubmit={async (values) => {

                let value = {
                    meta: {p: values.color, x: "" },
                    percent:values.percent,
                    title:values.title
                }

                let res = await callApi().post('skills',value).then(res => {
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
                })
            }}
        >
            <div className='d-flex justify-content-center'>
                <Form className="needs-validation border p-4 rounded">
                    <Input name="title" label='Title' inputClassName='form-control mb-1'/>
                    <Input name="percent" label='Percent' inputClassName='form-control mb-1'/>
                    <Input name="color" label='Color' inputClassName='form-control mb-1 w-50' type='color' />
                    <div className='d-flex justify-content-center'><button className="btn btn-success" type="submit">Add</button></div>
                </Form>
            </div>
        </Formik>
    )
}

export default AddSkillForm;