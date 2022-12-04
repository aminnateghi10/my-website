import {useEffect, useState} from "react";

import {NextPageWithLayout} from "../_app";
import UserPanelLayout from "../../app/components/admin/userPanelLayout";
import callApi from "../../app/helpers/callApi";
import AddService from "../../app/components/admin/services/addService";
import {ServiceInterface} from "../../app/contracts/services";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {createServices} from "../../app/store/services";
import ItemService from "../../app/components/admin/services/itemService";


const Services: NextPageWithLayout = () => {
    const [state, setState] = useState<ServiceInterface[]>();

    const data = useSelector((state: RootState) => state.services)
    const dispatch = useDispatch();
    useEffect(() => {
        callApi().get('services').then(res => dispatch(createServices(res.data.data)))
    }, [])
    return (
        <div className='p-5'>
            <AddService/>
            <h2 className='text-center mt-5'>List Services</h2>
            <table className="table text-center table-striped table-hover table-vcenter mt-3">
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
                    data?.services?.map((item : ServiceInterface) => (
                            <tr key={item.id}>
                                <ItemService item={item}/>
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