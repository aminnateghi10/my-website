import {NextPageWithLayout} from "../_app";
import UserPanelLayout from "../../app/components/admin/userPanelLayout";
import {useEffect, useState} from "react";
import callApi from "../../app/helpers/callApi";
import {Form, Formik, Field} from "formik";
import {addItemSkills} from "../../app/store/skills";
import {toast} from "react-toastify";
import Input from "../../app/components/shared/form/input";
import axios from "axios";

const Services: NextPageWithLayout = () => {
    const [state, setState] = useState();
    useEffect(() => {
        // callApi().post('services',value).then(res => console.log(res.data.data))
        callApi().get('services').then(res => setState(res.data.data))
    }, [])
    return (
        <div className='p-5'>

            <div className='d-flex justify-content-center'>
                <Formik
                    initialValues={{}}
                    onSubmit={async (values) => {
                        console.log(values.img)
                        const data = new FormData();
                        data.append('file', values.img)
                        data.append('title', 'amin');
                        data.append('body', 'amin');
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

            <h2 className='text-center mt-5'>List Services</h2>
            <table className="table text-center table-striped table-hover table-vcenter">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Img</th>
                    <th scope="col">Body</th>
                </tr>
                </thead>
                <tbody>
                {
                    state?.map((item) => (
                            <tr>
                                <th scope="row">1</th>
                                <td>{item.title}</td>
                                <td><img style={{width: '50px'}} src={`http://localhost:8000/${item.image}`}/></td>
                                <td>
                                    <div>
                                        <button type="button" className="btn btn-info mr-1 h6">view</button>
                                        <button type="button" className="btn btn-danger h6">Delete</button>
                                    </div>
                                </td>

                            </tr>
                        )
                    )
                }
                </tbody>
            </table>


        </div>
    )
}

Services.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>

export default Services;