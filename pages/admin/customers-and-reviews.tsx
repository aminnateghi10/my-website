import {NextPageWithLayout} from "../_app";
import UserPanelLayout from "../../app/components/admin/userPanelLayout";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import callApi from "../../app/helpers/callApi";
import ItemService from "../../app/components/admin/services/itemService";
import {createCustomersAndReviews} from "../../app/store/customersAndReviews";
import AddCustomersAndReviews from "../../app/components/admin/customers-and-reviews/addCustomersAndReviews";
import {InterfaceItemCustomersAndReviews} from "../../app/contracts/customersAndReviews";
import ItemCustomersAndReviews from "../../app/components/admin/customers-and-reviews/itemCustomersAndReviews";

const CustomersAndReviews :NextPageWithLayout= ()=>{

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
                    data?.customersAndReviews?.map((item : InterfaceItemCustomersAndReviews) => (
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

CustomersAndReviews.getLayout=(page)=><UserPanelLayout>{page}</UserPanelLayout>

export default CustomersAndReviews;