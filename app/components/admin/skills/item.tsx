import {useState} from "react";
import {Form, Formik} from "formik";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";

import Input from "../../shared/form/input";
import callApi from "../../../helpers/callApi";
import {deleteItemSkills, editItemSkills} from "../../../store/skills";
import * as yup from "yup";


const Item = ({item}: any) => {

    const [edit, setEdit] = useState<boolean>(true)
    const dispatch = useDispatch();

    const deleteItem = async (id: number) => {
        let res = await callApi().delete(`skills/${id}`);
        if (res.status == 200) {
            dispatch(deleteItemSkills(id));
            toast.success('Removed successfully', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const EditSkillFormValidationSchema = yup.object().shape({
        title: yup.string().required(),
        percent: yup.string().required(),
        color: yup.string().required(),
    })

    return (
        <>{
            edit ?
                <div className="card text-white text-center my-2" style={{background: `${item?.meta?.p}`}}>
                    <div className="card-header bg-skills-header d-flex justify-content-center">
                        {item.title}
                    </div>
                    <div className="card-body">
                        <h6 className="card-title ba-skills-body ">{item?.percent}</h6>
                    </div>
                    <div className='d-flex justify-content-between px-2 pb-2'>
                        <button onClick={() => setEdit(!edit)} type="button"
                                className="btn btn-success btn-sm px-3">Edit
                        </button>
                        <button onClick={() => deleteItem(item.id)} type="button"
                                className="btn btn-danger btn-sm p-3">Delete
                        </button>
                    </div>
                </div>
                :
                <Formik
                    initialValues={{title: item.title, percent: item?.percent, color: item?.meta?.p}}
                    validationSchema={EditSkillFormValidationSchema}
                    onSubmit={async (values) => {
                        let newData = {
                            "id": item.id,
                            "title": values.title,
                            "percent": values.percent,
                            "meta": {
                                "p": values.color,
                                "x": ''
                            }
                        }
                        let res = await callApi().put(`skills/${item.id}`, newData)
                        if (res.status = 200) {
                            toast.success('Editing was done successfully', {
                                position: "bottom-right",
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            });
                            dispatch(editItemSkills(newData))
                        }
                        setEdit(true)
                    }}
                >
                    <Form className="card text-white text-center my-2 px-2" style={{background: `${item?.meta?.p}`}}>
                        <div className="card-header bg-skills-header p-0">
                            <Input  inputClassName='form-control' name='title' label='Title'/>
                        </div>
                        <div>
                            <Input  inputClassName='form-control' name='percent' label='Value'/>
                            <Input inputClassName='form-control' name='color' label='Color' type='color'/>
                        </div>
                        <div className='d-flex justify-content-between px-2 py-2'>
                            <button type="submit" className="btn btn-success btn-sm px-3 py-3">Edit</button>
                            <button onClick={() => setEdit(!edit)} type="button"
                                    className="btn btn-warning btn-sm p-3">Cancel
                            </button>
                        </div>
                    </Form>
                </Formik>
        }</>
    )
}

export default Item;