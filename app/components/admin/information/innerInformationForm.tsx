import {Form} from "formik";

import Input from "../../shared/form/input";

const InnerLoginForm = ()=>{
    return (
        <Form className="form-row">
            <div className="form-group col-md-6">
                <Input name='name' label='Name' inputClassName='form-control w-auto h-auto' labelClassName='inputEmail4'/>
            </div>
            <div className="form-group col-md-6">
                <Input name='email' label='Email' inputClassName='form-control w-auto h-auto' labelClassName='inputEmail4'/>
            </div>
            <div className="form-group col-md-6">
                <Input name='jab' label='Jab' inputClassName='form-control w-auto h-auto' labelClassName='inputEmail4'/>
            </div>
            <div className="form-group col-md-6">
                <Input name='projectsCompleted' label='Projects Completed' inputClassName='form-control w-auto h-auto' labelClassName='inputEmail4'/>
            </div>
            <div className="form-group col-md-6">
                <Input name='cupOfCoffee' label='Cup Of Coffee' inputClassName='form-control w-auto h-auto' labelClassName='inputEmail4'/>
            </div>
            <div className="form-group col-md-6">
                <Input name='satisfiedClients' label='Satisfied Clients' inputClassName='form-control w-auto h-auto' labelClassName='inputEmail4'/>
            </div>
            <div className="form-group col-md-6">
                <Input name='nomineesWinner' label='Nominees Winner' inputClassName='form-control w-auto h-auto' labelClassName='inputEmail4'/>
            </div>
            <div className="form-group col-md-6">
                <Input as='textarea' name='biography' label='Biography' inputClassName='form-control' labelClassName='inputEmail4'/>
            </div>
            <div className='form-group col-md-3'>
                <button className="btn btn-success text-whit w-100" type="submit">Edit</button>
            </div>
        </Form>
    )
}

export default InnerLoginForm;