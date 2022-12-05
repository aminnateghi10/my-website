import ParallaxLayers from "./parallaxLayers";

interface InterfaceProps {
    data?: {
        name: string,
        email: string,
        jab: string,
        projectsCompleted: string,
        cupOfCoffee: string,
        satisfiedClients: string,
        nomineesWinner: string,
        biography: string
    }
}


function Home({data}: InterfaceProps) {

    return (
        <>
            <section id="home" className="home light d-flex align-items-center">
                <div className="container">
                    {/* intro */}
                    <div className="intro">
                        {/* avatar image */}
                        <img src='https://a-nateghi.ir/assets/favicon.aa16bbfe.png' className="mb-4"/>
                        {/* info */}
                        <h1 className="mb-2 mt-0">{data?.name}</h1>
                        <span>{data?.jab}</span>
                        {/* social icons */}
                        <ul className="social-icons light list-inline mb-0 mt-4">
                            <li className="list-inline-item">
                                <a href="#">
                                    <i className="fab fa-instagram"/>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    <i className="fab fa-twitter"/>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    <i className="fab fa-behance"/>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    <i className="fab fa-dribbble"/>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    <i className="fab fa-pinterest-p"/>
                                </a>
                            </li>
                        </ul>
                        {/* buttons */}
                        <div className="mt-4">
                            <a href="#contact" className="btn btn-default px-4 py-3">Hire me</a>
                        </div>
                    </div>
                    {/* scroll down mouse wheel */}
                    <div className="scroll-down light">
                        <a href="#about" className="mouse-wrapper">
                            <span>Scroll Down</span>
                            <span className="mouse"><span className="wheel"/></span>
                        </a>
                    </div>
                    {/* parallax layers */}
                    <ParallaxLayers/>
                </div>
            </section>
        </>
    )
}

export default Home;