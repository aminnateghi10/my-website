import { useEffect, useState} from "react";
import callApi from "../../helpers/callApi";
import {ExperienceInterface} from "../shared/interface";

interface PropsInterface {
    experiences: ExperienceInterface[],
}

const Experience = ({experiences}:PropsInterface)=>{

    const JobExperiences = experiences?.filter((item)=> item.type == 'JobExperiences');
    const EducationalExperiences = experiences?.filter((item)=> item.type == 'EducationalExperiences');

    return(
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
                                EducationalExperiences?.map((item)=>(
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
                                    JobExperiences?.map((item)=>(
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
    )
}

export default Experience;