import {NextPage} from "next";
import LoginForm from "../../app/form/auth/loginForm";

const Login:NextPage =()=>{
    return(
        <section className="vh-100 p-0">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;