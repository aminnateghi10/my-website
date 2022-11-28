import {NextPageWithLayout} from "../_app";
import UserPanelLayout from "../../app/components/admin/userPanelLayout";
import {removeLoginToken} from "../../app/helpers/auth";

const AdminPanel :NextPageWithLayout= ()=>{
    return(
        <>
            sdfasfd
        </>
    )
}

AdminPanel.getLayout=(page)=><UserPanelLayout>{page}</UserPanelLayout>

export default AdminPanel;