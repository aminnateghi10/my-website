import {InformationInterface} from "../../shared/interface";
import ContactForm from "../../../form/home-page/contactForm";

interface PropsInterface {
    information: InformationInterface,
}

const Contact = ({information}: PropsInterface) => {

    return (
        <>
            <section id="contact">
                <div className="container">
                    {/* section title */}
                    <h2 className="section-title wow fadeInUp">Get In Touch</h2>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            {/* contact info */}
                            <div className="contact-info">
                                <h3 className="wow fadeInUp">Lets talk about everything!</h3>
                                <p className="wow fadeInUp">
                                    Dont like forms? Send me an{" "}
                                    <a href={`mailto:${information?.email}`} className='text-danger'>email</a>. 👋
                                </p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            {/*send ticket form*/}
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;