import {NextPageWithLayout} from "../_app";
import UserPanelLayout from "../../app/components/admin/userPanelLayout";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import callApi from "../../app/helpers/callApi";
import {createExperience} from "../../app/store/experience";
import AddExperiences from "../../app/components/admin/experiences/addExperiences";
import ItemExperience from "../../app/components/admin/experiences/itemExperience";
import {ExperienceInterface} from "../../app/components/shared/interface";
import {useEffect} from "react";

const Experiences :NextPageWithLayout= ()=>{

    const data = useSelector((state: RootState) => state.experience);
    const dispatch = useDispatch();

    useEffect(() => {
        callApi().get('experiences').then(res => dispatch(createExperience(res.data.data)))
    }, [])

    console.log(data)
    return (
        <div className='p-5'>
            <h2 className='text-center mt-5'>Add Experience</h2>
            <AddExperiences/>
            <h2 className='text-center mt-5'>List Experiences</h2>
            <table className="table text-center table-striped table-hover table-vcenter mt-3">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">title</th>
                    <th scope="col">type</th>
                    <th scope="col">start</th>
                    <th scope="col">Operations</th>
                </tr>
                </thead>
                <tbody>
                {
                    data?.experience?.map((item : ExperienceInterface) => (
                            <tr key={item.id}>
                                <ItemExperience item={item}/>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>


        </div>
    )
}

Experiences.getLayout=(page)=><UserPanelLayout>{page}</UserPanelLayout>

export default Experiences;