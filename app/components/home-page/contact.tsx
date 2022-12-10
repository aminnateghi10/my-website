import {useState} from "react";
import {Form , Formik } from "formik";
import callApi from "../../helpers/callApi";
import {editItemServices} from "../../store/services";
import {toast} from "react-toastify";
import Input from "../shared/form/input";
import * as yup from "yup";

interface InterfaceProps {
    data?: {
        name: string,
        email: string,
        jab: string,
        projectsCompleted: string,
        cupOfCoffee: string,
        satisfiedClients: string,
        nomineesWinner: string,
        biography: string
    }
}

function Contact({data}: InterfaceProps){

    const SendMassageFormValidationSchema = yup.object().shape({
        name:yup.string().required(),
        email:yup.string().required().email(),
        subject:yup.string().required(),
        body:yup.string().required(),
    });

    return(
    <>
        <section id="contact">
            <div className="container">
                {/* section title */}
                <h2 className="section-title wow fadeInUp">Get In Touch</h2>
                <div className="row mt-5">
                    <div className="col-md-4">
                        {/* contact info */}
                        <div className="contact-info">
                            <h3 className="wow fadeInUp">Lets talk about everything!</h3>
                            <p className="wow fadeInUp">
                                Dont like forms? Send me an{" "}
                                <a href={`mailto:${data?.email}`} className='text-danger'>email</a>. 👋
                            </p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        {/* Contact Form */}
                        <Formik
                            initialValues={{
                                name:'',
                                email:'',
                                subject:'',
                                body:'',
                            }}
                            validationSchema={SendMassageFormValidationSchema}
                            onSubmit={async (values) => {
                                console.log(values)
                                let res = await callApi().post('tickets', values).then(res => {
                                    console.log(res)
                                    toast.success('Submitted successfully.', {
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

                            }}>
                            <Form className="contact-form mt-6">
                                <div className="messages"></div>
                                <div className="row">
                                    <div className="column col-md-6">
                                        {/* <!-- Name input -->*/}
                                        <div className="form-group has-error has-danger">
                                            <Input name='name' inputClassName='form-control border-0' placeholder="Your name"/>
                                        </div>
                                    </div>

                                    <div className="column col-md-6">
                                        {/*<!-- Email input -->*/}
                                        <div className="form-group has-error has-danger">
                                            <Input name='email' inputClassName='form-control border-0' placeholder="Email address"/>
                                        </div>
                                    </div>

                                    <div className="column col-md-12">
                                        {/* <!-- Subject input -->*/}
                                        <div className="form-group has-error has-danger">
                                            <Input name='subject' inputClassName='form-control border-0' placeholder="Subject"/>
                                        </div>
                                    </div>
                                    <div className="column col-md-12">
                                        {/*<!-- Message textarea -->*/}
                                        <div className="form-group has-error has-danger">
                                            <Input name='body' as='textarea' inputClassName='form-control border-0' rows={5} placeholder="Message"/>
                                        </div>
                                    </div>
                                </div>
                                {/*<!-- Send Button -->*/}
                                <button type="submit" className="btn btn-default p-3 border-0">Send Message</button>
                                {/* Contact Form end */}
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Contact;