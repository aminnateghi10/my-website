import { useEffect, useState} from "react";
import callApi from "../../helpers/callApi";

interface InterfaceExperience {
    id:number,
    type:string,
    title:string,
    body:string,
    start:string,
    end:string,
    meta:object,
    created_at:string,
    updated_at:string,
}

function Experience(){
    const [loading , setLoading] = useState(false)
    const [experience , setExperience] = useState<InterfaceExperience[]>()

    useEffect(()=>{

        callApi().get('experiences')
            .then(res =>{
                setExperience(res.data.data)
                console.log(res , 'amin')
                setLoading(true)
            })
    },[])

    const JobExperiences : InterfaceExperience[] | undefined = experience?.filter((item:InterfaceExperience)=> item.type == 'JobExperiences')
    const EducationalExperiences : InterfaceExperience[] | undefined = experience?.filter((item:InterfaceExperience)=> item.type == 'EducationalExperiences')

    return(
        <>
            {
                !loading?<a>am</a>:
                    <section id="experience">
                        <div className="container">
                            {/* section title */}
                            <h2 className="section-title wow fadeInUp">Experience</h2>
                            <div className="row">
                                <div className="col-md-6 mt-5">
                                    {/* timeline wrapper */}
                                    <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
                                        {/* timeline item */}

                                        {
                                            EducationalExperiences === null ? null :
                                            EducationalExperiences?.map((item:InterfaceExperience)=>(
                                            <div className="timeline-container wow fadeInUp" key={item.id}>
                                            <div className="content">
                                            <span className="time">{item?.start}-{item?.end}</span>
                                            <h3 className="title">{item?.title}</h3>
                                            <p>{item?.body}</p>
                                            </div>
                                            </div>
                                            ))
                                        }
                                        {/* main line */}
                                        <span className="line" />
                                    </div>
                                </div>
                                <div className="col-md-6 mt-5">
                                    {/* responsive spacer */}
                                    <div className="spacer d-md-none d-lg-none" data-height={30} />
                                    {/* timeline wrapper */}
                                    <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
                                        {/* timeline item */}
                                        {
                                            JobExperiences === null ? null:
                                                JobExperiences?.map((item:InterfaceExperience)=>(
                                                    <div className="timeline-container wow fadeInUp" key={item.id}>
                                                        <div className="content">
                                                            <span className="time">{item?.start}-{item?.end}</span>
                                                            <h3 className="title">{item?.title}</h3>
                                                            <p>{item?.body}</p>
                                                        </div>
                                                    </div>
                                                ))
                                        }
                                        {/* main line */}
                                        <span className="line" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            }
        </>
    )
}

export default Experience;