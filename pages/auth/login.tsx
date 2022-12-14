import {NextPageWithLayout} from "../_app";
import LoginForm from "../../app/form/auth/loginForm";
import UserAuthLayout from "../../app/components/auth/userAuthLayout";

const Login:NextPageWithLayout =()=>{
    return(
        <section className="vh-100 p-0">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong rounded">
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
Login.getLayout=(page)=><UserAuthLayout>{page}</UserAuthLayout>

export default Login;