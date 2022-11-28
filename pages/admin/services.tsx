import {NextPageWithLayout} from "../_app";
import UserPanelLayout from "../../app/components/admin/userPanelLayout";
import {useEffect, useState} from "react";
import callApi from "../../app/helpers/callApi";
import {Form, Formik, Field} from "formik";
import {addItemSkills} from "../../app/store/skills";
import {toast} from "react-toastify";
import Input from "../../app/components/shared/form/input";
import axios from "axios";
import AddService from "../../app/components/admin/services/addService";
import {ServiceInterface} from "../../app/contracts/services";


const Services: NextPageWithLayout = () => {
    const [state, setState] = useState<ServiceInterface[]>();
    useEffect(() => {
        callApi().get('services').then(res => setState(res.data.data))
    }, [])
    return (
        <div className='p-5'>
            <AddService/>
            <h2 className='text-center mt-5'>List Services</h2>
            <table className="table text-center table-striped table-hover table-vcenter">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Img</th>
                    <th scope="col">Operations</th>
                </tr>
                </thead>
                <tbody>
                {
                    state?.map((item : ServiceInterface, index:number) => (
                            <tr key={item.id}>
                                <th scope="row">{index}</th>
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