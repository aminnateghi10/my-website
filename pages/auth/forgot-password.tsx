import {NextPageWithLayout} from "../_app";
import ForgotPasswordForm from "../../app/form/auth/forgotPasswordForm";
import UserAuthLayout from "../../app/components/auth/userAuthLayout";

const ForgotPassword:NextPageWithLayout =()=>{
    return(
        <section className="vh-100 p-0">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
                            <ForgotPasswordForm/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

ForgotPassword.getLayout=(page)=><UserAuthLayout>{page}</UserAuthLayout>

export default ForgotPassword;