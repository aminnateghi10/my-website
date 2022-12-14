import Head from 'next/head'

//components
import Navbar from "../app/components/home-page/navbar/index";
import Home from "../app/components/home-page/home";
import callApi from "../app/helpers/callApi";
import About from "../app/components/home-page/about";
import Services from "../app/components/home-page/services";
import Experience from "../app/components/home-page/experience";
import ClientsReviews from "../app/components/home-page/clientsReviews";
import Contact from "../app/components/home-page/contact";
import Footer from "../app/components/home-page/footer";
import Blog from "../app/components/home-page/blog";

//interface
import {
    ExperienceInterface,
    InformationInterface,
    ClientInterface,
    ServiceInterface,
    SkillInterface
} from "../app/components/shared/interface";

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
                    <meta name="keywords" content={information?.name}/>
                    <meta name="owner" content={information?.name}/>
                    <meta name="description" content={information?.biography}/>
                    <meta name="subject" content={`${information?.name} is personal website`}/>
                    <meta name="description" content={information?.biography}/>
                    <link rel="icon" href={`${process.env.ASSETS_URL}${information?.image}`} />
                </Head>

                <Navbar/>
                <Home information={information}/>
                <About information={information} skills={skills}/>
                <Services services={services}/>
                <Experience experiences={experiences}/>
                <ClientsReviews clients={clients}/>
                <Blog/>
                <Contact information={information}/>
                <Footer information={information}/>
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

