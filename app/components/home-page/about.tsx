import {InformationInterface, SkillInterface} from "../shared/interface";

interface InterfaceProps {
    information: InformationInterface,
    skills: SkillInterface[],
}

const About = ({information, skills}: InterfaceProps) => {

    return (
        <section id="about">
            <div className="container">
                {/* section title */}
                <h2 className="section-title wow fadeInUp">About Me</h2>
                <div className="row mt-5">
                    <div className="col-md-3">
                        <div className="text-center text-md-left">
                            {/* avatar image */}
                            <img src={`${process.env.ASSETS_URL}${information?.image}`} className="mb-4"
                                 alt={information?.name}/>
                        </div>
                        <div className="spacer d-md-none d-lg-none" data-height={30}/>
                    </div>
                    <div className="col-md-9 triangle-left-md triangle-top-sm">
                        <div className="rounded bg-white shadow-dark padding-30">
                            <div className="row">
                                <div className="col-md-6">
                                    {/* about text */}
                                    <p>{information?.biography}</p>
                                    <div className="mt-3">
                                        <a href={`${process.env.ASSETS_URL}${information?.resume_file}`}
                                           className="btn btn-default p-3">Download CV</a>
                                    </div>
                                    <div className="spacer d-md-none d-lg-none"/>
                                </div>
                                <div className="col-md-6">
                                    {/* skill item */}
                                    {
                                        skills.map((item: SkillInterface) => (
                                            <div className="skill-item mt-3" key={item.id}>
                                                <div className="skill-info clearfix">
                                                    <h4 className="float-left mb-3 mt-0">{item.title}</h4>
                                                    <span className="float-right">{item.percent}%</span>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar data-background" style={{
                                                        backgroundColor: `${item.meta.p}`,
                                                        width: `${item.percent}%`
                                                    }}></div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* row end */}
                <div className="spacer"/>
                <div className="row mt-5">
                    <div className="col-md-3 col-sm-6 mt-2">
                        <div className="fact-item"><span className="icon icon-fire"/>
                            <div className="details"><h3 className="mb-0 mt-0 number"><em
                                className="count">{information?.projectsCompleted}</em></h3><p className="mb-0">Projects
                                completed</p>
                            </div>
                        </div>
                        <div className="spacer d-md-none d-lg-none" data-height={30}/>
                    </div>
                    <div className="col-md-3 col-sm-6 mt-2">
                        <div className="fact-item"><span className="icon icon-cup"/>
                            <div className="details"><h3 className="mb-0 mt-0 number"><em
                                className="count">{information?.cupOfCoffee}</em></h3><p className="mb-0">Cup of
                                coffee</p>
                            </div>
                        </div>
                        <div className="spacer d-md-none d-lg-none" data-height={30}/>
                    </div>
                    <div className="col-md-3 col-sm-6 mt-2">
                        <div className="fact-item"><span className="icon icon-people"/>
                            <div className="details"><h3 className="mb-0 mt-0 number"><em
                                className="count">{information?.satisfiedClients}</em></h3><p className="mb-0">Satisfied
                                clients</p>
                            </div>
                        </div>
                        <div className="spacer d-md-none d-lg-none" data-height={30}/>
                    </div>
                    <div className="col-md-3 col-sm-6 mt-2">
                        <div className="fact-item"><span className="icon icon-badge"/>
                            <div className="details"><h3 className="mb-0 mt-0 number"><em
                                className="count">{information?.nomineesWinner}</em></h3><p className="mb-0">Nominees
                                winner</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;