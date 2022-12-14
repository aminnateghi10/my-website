import {InformationInterface} from "../shared/interface";

interface InterfaceProps {
    information: InformationInterface,
}
const Footer = ({information}:InterfaceProps) => {
    return (
        <footer className="footer light">
            <div className="container">
                <span className="copyright">{information.name}</span>
            </div>
        </footer>
    )
}

export default Footer;