import {NextPageWithLayout} from "../_app";
import UserPanelLayout from "../../app/components/admin/userPanelLayout";
import {useEffect, useState} from "react";
import callApi from "../../app/helpers/callApi";
import InformationForm from "../../app/form/admin/informationForm";


const Information :NextPageWithLayout= ()=>{

    useEffect( () => {
        callApi().get('information').then(res => setData(res.data.data))
    }, []);

    const [data , setData] = useState<object>();

    return(
        data ?
            <div className="px-5 pt-3">
                <InformationForm data={data}/>
            </div>
            :null
    )
}

Information.getLayout=(page)=><UserPanelLayout>{page}</UserPanelLayout>

export default Information;