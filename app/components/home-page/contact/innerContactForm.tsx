import {Form, Formik} from "formik";

import {toast} from "react-toastify";
import Input from "../../shared/form/input";
import callApi from "../../../helpers/callApi";

const InnerContactForm = () => {
    return (
        <Form className="contact-form mt-6">
            <div className="messages"></div>
            <div className="row">
                <div className="column col-md-6">
                    {/* <!-- Name input -->*/}
                    <div className="form-group has-error has-danger">
                        <Input name='name' inputClassName='form-control border-0'
                               placeholder="Your name"/>
                    </div>
                </div>
                <div className="column col-md-6">
                    {/*<!-- Email input -->*/}
                    <div className="form-group has-error has-danger">
                        <Input name='email' inputClassName='form-control border-0'
                               placeholder="Email address"/>
                    </div>
                </div>
                <div className="column col-md-12">
                    {/* <!-- Subject input -->*/}
                    <div className="form-group has-error has-danger">
                        <Input name='subject' inputClassName='form-control border-0'
                               placeholder="Subject"/>
                    </div>
                </div>
                <div className="column col-md-12">
                    {/*<!-- Message textarea -->*/}
                    <div className="form-group has-error has-danger">
                        <Input name='body' as='textarea' inputClassName='form-control border-0'
                               rows={5} placeholder="Message"/>
                    </div>
                </div>
            </div>
            {/*<!-- Send Button -->*/}
            <button type="submit" className="btn btn-default p-3 border-0">Send Message</button>
            {/* Contact Form end */}
        </Form>
    )
}

export default InnerContactForm;