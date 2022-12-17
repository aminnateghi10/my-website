import {useEffect} from "react";

import {RootState} from "../../app/store";
import {NextPageWithLayout} from "../_app";
import callApi from "../../app/helpers/callApi";
import {useDispatch, useSelector} from "react-redux";
import {createServices} from "../../app/store/services";
import AddService from "../../app/components/admin/services/addService";
import UserPanelLayout from "../../app/components/admin/userPanelLayout";
import ItemService from "../../app/components/admin/services/itemService";

const Services: NextPageWithLayout = () => {
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
                    data?.services?.map((item) => (
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