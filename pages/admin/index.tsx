import {NextPageWithLayout} from "../_app";
import UserPanelLayout from "../../app/components/admin/userPanelLayout";
import {removeLoginToken} from "../../app/helpers/auth";

const AdminPanel :NextPageWithLayout= ()=>{
    return(
        <>
            <h1 className='text-danger' onClick={removeLoginToken}>logout</h1>
        </>
    )
}

AdminPanel.getLayout=(page)=><UserPanelLayout>{page}</UserPanelLayout>

export default AdminPanel;