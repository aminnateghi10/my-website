import {NextPage} from "next";

const Login:NextPage =()=>{
    return(
        <section className="vh-100 p-0">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
                            <div className="card-body p-5 text-center">
                                <h3 className="mb-5">Login</h3>
                                <div className="form-outline mb-4">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control form-control-lg" />
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control form-control-lg" />
                                </div>
                                <button className="btn btn-primary btn-lg btn-block" type="submit">ورود</button>
                                <hr className="my-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;