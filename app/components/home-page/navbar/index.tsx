import {useState} from "react";

import ListItem from "./listItem";

const Navbar = () => {
    const [toggle, setToggle] = useState<boolean>()

    const navbarList = [
        {label: 'Home', href: '#home'},
        {label: 'About', href: '#about'},
        {label: 'Services', href: '#services'},
        {label: 'Experience', href: '#experience'},
        {label: 'Works', href: '#works'},
        {label: 'Contact', href: '#contact'},
    ];

    return (
        <header className="desktop-header-3 light fixed-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <button onClick={() => setToggle(!toggle)} className="navbar-toggler bg-dark" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse justify-content-center ${toggle ? 'show' : ''}`}>
                        <ul className="navbar-nav scrollspy">
                            {
                                navbarList?.map((item) => (
                                    <ListItem key={item.href} label={item.label} href={item.href} liClassName='nav-item'
                                              aClassName='nav-link'/>
                                ))
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;