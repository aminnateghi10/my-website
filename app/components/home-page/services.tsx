import React, {useContext, useEffect, useState} from "react";

import callApi from "../../helpers/callApi";

interface InterfaceService {
    id:number,
    title:string,
    body:string,
    image:string,
    meta:object,
    created_at:string,
    updated_at:string,
}

function Services(){
    let [loading , setLoading] = useState(false)
    let [services , setServices] = useState<InterfaceService[]>()

    useEffect(()=>{
        callApi().get('services')
            .then(res => {
                setServices(res.data.data)
                setLoading(true)
                console.log(res)
            })
    },[])
    return(
        <>
            {
                !loading ? <p>logading</p>:
                <section id="services">
                    <div className="container">
                        {/* section title */}
                        <h2 className="section-title wow fadeInUp">Services</h2>
                        <div className="row">

                            {
                                services?.map((item : InterfaceService) =>(
                                    <div className="col-md-4 mt-5" key={item.id}>
                                        {/* service box */}
                                        <div className={`service-box rounded data-background padding-30 text-center text-light ${item.id % 2===0 ?'shadow-blue': 'shadow-pink'}`}
                                             data-color="#6C6CE5">
                                            <img src={`http://localhost:8000//${item.image}`} alt="UI/UX design" />
                                            <h3 className="mb-3 mt-0">{item.title}</h3>
                                            <p className="mb-0">{item.body}</p>
                                        </div>
                                        <div className="spacer d-md-none d-lg-none" data-height={30} />

                                    </div>
                                ))
                            }
                        </div>
                        <div className="mt-5 text-center">
                            <p className="mb-0">
                                Looking for a custom job? <a href="#contact">Click here</a> to
                                contact me! 👋
                            </p>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default Services;