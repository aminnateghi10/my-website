import Link from "next/link";
import {Form} from "formik";

import Input from "../shared/form/input";

const InnerRegisterForm = ()=>{
    return (
        <Form className="card-body p-5 text-center">
            <h3 className="mb-5">Register</h3>
            <div className="form-outline mb-4">
                <Input name='name' label='Name' inputClassName='form-control form-control-lg' labelClassName='form-label'/>
            </div>
            <div className="form-outline mb-4">
                <Input name='email' label='Email' inputClassName='form-control form-control-lg' labelClassName='form-label'/>
            </div>
            <div className="form-outline mb-4">
                <Input name='password' label='Password' inputClassName='form-control form-control-lg' labelClassName='form-label'/>
            </div>
            <button className="btn btn-primary btn-lg btn-block py-4" type="submit">register</button>
            <hr className="my-4" />
            <Link href='/auth/login'>login</Link>
            <Link href='/auth/forgot-password' className='text-danger d-block pt-2'>Forgot Password</Link>
        </Form>
    )
}

export default InnerRegisterForm;