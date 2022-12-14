import Head from 'next/head'

//components
import Navbar from "../app/components/home-page/navbar/index";
import Home from "../app/components/home-page/home";
import callApi from "../app/helpers/callApi";
import About from "../app/components/home-page/about";
import Services from "../app/components/home-page/services";
import Experience from "../app/components/home-page/experience";
import Clients from "../app/components/home-page/clients";
import Contact from "../app/components/home-page/contact/contact";
import Footer from "../app/components/home-page/footer";
import Blog from "../app/components/home-page/blog";

import {ArrowSmallUpIcon} from "@heroicons/react/24/solid";
import {smoothScroll} from "../app/components/shared/smoothScroll";

//interface
import {
    ExperienceInterface,
    InformationInterface,
    ClientInterface,
    ServiceInterface,
    SkillInterface
} from "../app/contracts/interface";

interface InterfaceProps {
    information: InformationInterface,
    services: ServiceInterface[],
    experiences: ExperienceInterface[],
    skills: SkillInterface[],
    clients: ClientInterface[],
}

const HomePage = ({information, services, experiences, skills, clients}: InterfaceProps) => {
    return (
        <div>
            <Head>
                <title>{information?.name}</title>
                <meta name="keywords" content={`${information?.name},${information?.jab},${information?.instagram},`}/>
                <meta name="owner" content={information?.name}/>
                <meta name="description" content={information?.biography}/>
                <meta name="subject" content={`${information?.name} is personal website`}/>
                <meta name="description" content={information?.biography}/>
                <link rel="icon" href={`${process.env.ASSETS_URL}${information?.image}`}/>
            </Head>

            <Navbar/>
            <Home information={information}/>
            <About information={information} skills={skills}/>
            <Services services={services}/>
            <Experience experiences={experiences}/>
            <Clients clients={clients}/>
            <Blog/>
            <Contact information={information}/>
            <Footer information={information}/>
            <a onClick={smoothScroll} href="#home" id="return-to-top"
               className='d-flex justify-content-center'><ArrowSmallUpIcon href="#home" style={{width: '25px'}}/></a>
        </div>
    )
}

export async function getServerSideProps() {
    //request
    let information = await callApi().get('information');
    let services = await callApi().get('services');
    let skills = await callApi().get('skills');
    let experiences = await callApi().get('experiences');
    let clients = await callApi().get('clients');

    return {
        props: {
            information: information.data.data,
            services: services.data.data,
            experiences: experiences.data.data,
            skills: skills.data.data,
            clients: clients.data.data,
        }
    }

}

export default HomePage;

