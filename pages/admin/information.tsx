import {useEffect, useState} from "react";

import {NextPageWithLayout} from "../_app";
import callApi from "../../app/helpers/callApi";
import InformationForm from "../../app/form/admin/informationForm";
import UserPanelLayout from "../../app/components/admin/userPanelLayout";
import {InformationInterface} from "../../app/contracts/interface";

const Information: NextPageWithLayout = () => {
    const [data, setData] = useState<InformationInterface>();

    useEffect(() => {
        callApi().get('information').then(res => setData(res.data.data))
    }, []);

    return (
        <div className="px-5 pt-3">
            {
                data && <InformationForm data={data}/>
            }
        </div>
    )

}

Information.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>

export default Information;