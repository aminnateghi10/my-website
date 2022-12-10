import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {RootState} from "../../app/store";
import {NextPageWithLayout} from "../_app";
import callApi from "../../app/helpers/callApi";
import {createSkills} from "../../app/store/skills";
import {ItemSkills} from "../../app/contracts/skills";
import Item from "../../app/components/admin/skills/item";
import UserPanelLayout from "../../app/components/admin/userPanelLayout";
import AddSkillForm from "../../app/components/admin/skills/addSkillForm";


const Skills: NextPageWithLayout = () => {

    const data = useSelector((state: RootState) => state.skills)
    const dispatch = useDispatch();

    useEffect(() => {
        callApi().get('skills').then(res => dispatch(createSkills(res?.data?.data)))
    }, []);

    return (
        <div className='p-5'>
            <h2 className='text-center'>Add Skill</h2>
            <AddSkillForm/>
            <h2 className='text-center mt-5'>List Skills</h2>
            <div className='row border mt-1 p-3 justify-content-center justify-content-md-start'>
                {
                    data?.skills?.map((item: ItemSkills) => (
                        <div className='col-12 col-md-6 col-lg-6 col-xl-6' style={{maxWidth: '250px'}} key={item?.id}>
                            <Item item={item}/>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

Skills.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>

export default Skills;