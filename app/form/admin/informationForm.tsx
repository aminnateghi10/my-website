import {toast} from "react-toastify";
import {ErrorMessage, Form, Formik} from "formik";
import * as yup from 'yup'

import callApi from "../../helpers/callApi";
import {InformationInterface} from "../../contracts/interface";
import Input from "../../components/shared/form/input";

interface InformationFormProps {
    data: InformationInterface
}

const InformationFormValidationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    jab: yup.string().required(),
    projectsCompleted: yup.string().required(),
    cupOfCoffee: yup.string().required(),
    satisfiedClients: yup.string().required(),
    nomineesWinner: yup.string().required(),
    biography: yup.string().required(),
})

const InformationForm = ({data}:InformationFormProps)=> {
    return (
        <Formik
            validationSchema={InformationFormValidationSchema}
            initialValues={{
                name: data.name,
                jab: data.jab,
                email: data.email,
                biography: data.biography,
                projectsCompleted: data.projectsCompleted,
                nomineesWinner: data.nomineesWinner,
                satisfiedClients: data.satisfiedClients,
                cupOfCoffee: data.cupOfCoffee,
                instagram: data.instagram,
                github: data?.github,
                facebook: data?.facebook,
                telegram: data?.telegram,
                resume_file: data?.resume_file,
                image: data?.image
            }}
            onSubmit={async (values:any) => {
                const myData = new FormData();
                myData.append('_method', 'PUT');
                for (let property  in values) {
                    myData.append(property, values[property])
                }

                try {
                let res = await callApi().post('/information', myData);
                    // console.log(res , '11')
                    toast.success('You have successfully logged in.', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    })
                } catch (err) {
                    console.log(err)
                }
            }}
        >
            {
                (formProps) => (
                    <Form className="form-row">
                        <div className="form-group col-md-6">
                            <label className='inputEmail4'>Home Profile</label>
                            <input name="image" type='file' className='form-control w-auto h-auto'
                                   onChange={(e: any) => formProps.setFieldValue('image', e.target.files[0])}/>
                            <ErrorMessage name='image'/>
                        </div>
                        <div className="form-group col-md-6">
                            <label className='inputEmail4'>Resume File</label>
                            <input name="resume_file" type='file' className='form-control w-auto h-auto'
                                   onChange={(e: any) => formProps.setFieldValue('resume_file', e.target.files[0])}/>
                            <ErrorMessage name='resume_file'/>
                        </div>
                        <div className="form-group col-md-6">
                            <Input name='name' label='Name' inputClassName='form-control w-auto h-auto'
                                   labelClassName='inputEmail4'/>
                        </div>
                        <div className="form-group col-md-6">
                            <Input name='email' label='Email' inputClassName='form-control w-auto h-auto'
                                   labelClassName='inputEmail4'/>
                        </div>
                        <div className="form-group col-md-6">
                            <Input name='jab' label='Jab' inputClassName='form-control w-auto h-auto'
                                   labelClassName='inputEmail4'/>
                        </div>
                        <div className="form-group col-md-6">
                            <Input name='projectsCompleted' label='Projects Completed'
                                   inputClassName='form-control w-auto h-auto' labelClassName='inputEmail4'/>
                        </div>
                        <div className="form-group col-md-6">
                            <Input name='cupOfCoffee' label='Cup Of Coffee' inputClassName='form-control w-auto h-auto'
                                   labelClassName='inputEmail4'/>
                        </div>
                        <div className="form-group col-md-6">
                            <Input name='satisfiedClients' label='Satisfied Clients'
                                   inputClassName='form-control w-auto h-auto' labelClassName='inputEmail4'/>
                        </div>
                        <div className="form-group col-md-6">
                            <Input name='nomineesWinner' label='Nominees Winner'
                                   inputClassName='form-control w-auto h-auto' labelClassName='inputEmail4'/>
                        </div>
                        <div className="form-group col-md-6">
                            <Input as='textarea' name='biography' label='Biography' inputClassName='form-control'
                                   labelClassName='inputEmail4'/>
                        </div>
                        <div className="form-group col-md-6">
                            <Input name='instagram' label='Instagram' inputClassName='form-control w-auto h-auto'
                                   labelClassName='inputEmail4'/>
                        </div>
                        <div className="form-group col-md-6">
                            <Input name='facebook' label='Facebook' inputClassName='form-control w-auto h-auto'
                                   labelClassName='inputEmail4'/>
                        </div>
                        <div className="form-group col-md-6">
                            <Input name='telegram' label='Telegram' inputClassName='form-control w-auto h-auto'
                                   labelClassName='inputEmail4'/>
                        </div>
                        <div className="form-group col-md-6">
                            <Input name='github' label='Github' inputClassName='form-control w-auto h-auto'
                                   labelClassName='inputEmail4'/>
                        </div>
                        <div className='form-group col-md-3'>
                            <button className="btn btn-success text-whit w-100" type="submit">Edit</button>
                        </div>

                    </Form>
                )
            }

        </Formik>
    )
}
export default InformationForm;