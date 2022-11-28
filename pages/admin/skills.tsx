import {NextPageWithLayout} from "../_app";
import UserPanelLayout from "../../app/components/admin/userPanelLayout";
import {useEffect, useState} from "react";
import callApi from "../../app/helpers/callApi";
import {ItemSkills} from "../../app/contracts/skills";
import Item from "../../app/components/admin/skills/item";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {addItemSkills, createSkills, editItemSkills} from "../../app/store/skills";
import {Form, Formik} from "formik";
import Input from "../../app/components/shared/form/input";
import {toast} from "react-toastify";


const Skills: NextPageWithLayout = () => {

    const data = useSelector((state: RootState) => state.skills)


    const dispatch = useDispatch();
    useEffect(() => {

        callApi().get('skills').then(res => dispatch(createSkills(res?.data?.data)))
    }, []);


    return (
        <div className='p-5'>
            <h2 className='text-center'>Add new Skill</h2>
            <Formik
                initialValues={{ }}
                onSubmit={async (values) => {

                    let value = {
                    meta: {p: values.color, x: "" },
                    percent:values.percent,
                    title:values.title
                    }

                    let res = await callApi().post('skills',value).then(res => {
                        dispatch(addItemSkills(res.data.data));
                        toast.success('The item was added to the list', {
                            position: "bottom-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        })
                    })
                }}
            >
                <div className='d-flex justify-content-center'>
                    <Form className="needs-validation border p-4 rounded">
                        <Input name="title" label='Title' inputClassName='form-control mb-1'/>
                        <Input name="percent" label='Percent' inputClassName='form-control mb-1'/>
                        <Input name="color" label='Color' inputClassName='form-control mb-1 w-50' type='color' />
                        <div className='d-flex justify-content-center'><button className="btn btn-success" type="submit">Add</button></div>
                    </Form>
                </div>
            </Formik>

            <h2 className='text-center mt-5'>List Of Skills</h2>
            <div className='row border mt-1 p-3 justify-content-center justify-content-md-start'>
                {
                    data?.skills?.map((item : ItemSkills) => (
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