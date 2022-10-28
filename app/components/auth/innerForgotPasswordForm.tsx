import {Form} from "formik";
import Input from "../shared/form/input";
import Link from "next/link";

const InnerForgotPasswordForm = ()=>{
    return (
        <Form className="card-body p-5 text-center">
            <h3 className="mb-5">Forgot Password</h3>
            <div className="form-outline mb-4">
                <Input name='email' label='Email' inputClassName='form-control form-control-lg' labelClassName='form-label'/>
            </div>
            <button className="btn btn-primary btn-lg btn-block" type="submit">send email</button>
            <hr className="my-4" />
            <Link href='/auth/login'>login</Link>
        </Form>
    )
}

export default InnerForgotPasswordForm;