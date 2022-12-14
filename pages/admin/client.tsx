import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {NextPageWithLayout} from "../_app";
import {RootState} from "../../app/store";
import callApi from "../../app/helpers/callApi";
import {ClientInterface} from "../../app/components/shared/interface";
import UserPanelLayout from "../../app/components/admin/userPanelLayout";
import {createCustomersAndReviews} from "../../app/store/customersAndReviews";
import AddCustomersAndReviews from "../../app/components/admin/customers-and-reviews/addCustomersAndReviews";
import ItemCustomersAndReviews from "../../app/components/admin/customers-and-reviews/itemCustomersAndReviews";

const Client :NextPageWithLayout= ()=>{

    const data = useSelector((state: RootState) => state.customersAndReviews)
    const dispatch = useDispatch();

    useEffect(() => {
        callApi().get('clients').then(res => dispatch(createCustomersAndReviews(res.data.data)))
    }, [])

    return (
        <div className='p-5'>
            <AddCustomersAndReviews/>
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
                    data?.customersAndReviews?.map((item : ClientInterface) => (
                            <tr key={item.id}>
                                <ItemCustomersAndReviews item={item}/>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>


        </div>
    )
}

Client.getLayout=(page)=><UserPanelLayout>{page}</UserPanelLayout>

export default Client;