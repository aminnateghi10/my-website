import {Form} from "formik";
import Input from "../shared/form/input";

const InnerLoginForm = ()=>{
    return (
        <Form className="card-body p-5 text-center">
            <h3 className="mb-5">Login Form</h3>
            <div className="form-outline mb-4">
                <Input name='email' label='Email' inputClassName='form-control form-control-lg' labelClassName='form-label'/>
            </div>
            <div className="form-outline mb-4">
                <Input name='password' label='Password' inputClassName='form-control form-control-lg' labelClassName='form-label'/>
            </div>
            <button className="btn btn-primary btn-lg btn-block" type="submit">login</button>
            <hr className="my-4" />
        </Form>
    )
}

export default InnerLoginForm;