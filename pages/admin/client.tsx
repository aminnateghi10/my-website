import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {NextPageWithLayout} from "../_app";
import {RootState} from "../../app/store";
import callApi from "../../app/helpers/callApi";
import {createClient} from "../../app/store/client";
import UserPanelLayout from "../../app/components/admin/userPanelLayout";
import AddClient from "../../app/components/admin/clients/addClient";
import ItemClient from "../../app/components/admin/clients/itemClient";

const Client: NextPageWithLayout = () => {
    const data = useSelector((state: RootState) => state.client)
    const dispatch = useDispatch();

    useEffect(() => {
        callApi().get('clients').then(res => dispatch(createClient(res.data.data)))
    }, [])

    return (
        <div className='p-5'>
            <AddClient/>
            <h2 className='text-center mt-5'>List Services</h2>
            <table className="table text-center table-striped table-hover table-vcenter mt-3">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">name</th>
                    <th scope="col">job</th>
                    <th scope="col">Img</th>
                    <th scope="col">Operations</th>
                </tr>
                </thead>
                <tbody>
                {
                    data?.client?.map((item) => (
                            <tr key={item.id}>
                                <ItemClient item={item}/>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

Client.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>

export default Client;