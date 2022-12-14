import ParallaxLayers from "./parallaxLayers";
import {FaFacebook, FaGithub, FaInstagram, FaTelegram} from 'react-icons/fa';
import {InformationInterface} from "../../shared/interface";

interface InterfaceProps {
    information: InformationInterface
}

const Home = ({information}: InterfaceProps) => {

    return (
        <>
            <section id="home" className="home light d-flex align-items-center">
                <div className="container">
                    {/* intro */}
                    <div className="intro">
                        {/* avatar image */}
                        <img src={`${process.env.ASSETS_URL}${information?.image}`} className="mb-4"
                             alt={information?.name}/>
                        {/* info */}
                        <h1 className="mb-2 mt-0">{information?.name}</h1>
                        <span>{information?.jab}</span>
                        {/* social icons */}
                        <ul className="social-icons light list-inline mb-0 mt-4">
                            {
                                information?.telegram &&
                                <li className="list-inline-item">
                                    <a href={`https://telegram.me/${information?.telegram}`}>
                                        <FaTelegram/>
                                    </a>
                                </li>
                            }
                            {
                                information?.instagram &&
                                <li className="list-inline-item">
                                    <a href={`https://instagram.com/${information?.instagram}`}>
                                        <FaInstagram/>
                                    </a>
                                </li>
                            }
                            {
                                information.facebook &&
                                <li className="list-inline-item">
                                    <a href={`https://www.facebook.com/${information?.facebook}`}>
                                        <FaFacebook/>
                                    </a>
                                </li>
                            }
                            {
                                information.github &&
                                <li className="list-inline-item">
                                    <a href={`https://github.com/${information?.github}`}>
                                        <FaGithub/>
                                    </a>
                                </li>
                            }
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