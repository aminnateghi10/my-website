import React,{useState} from "react";
import Link from "next/link";
import ListItem from "./listItem";
function Navbar() {
    const [toggle , settoggle] = useState()
    let toggleset = ()=>{
        settoggle(!toggle)
    }

    function  smothScroll(e) {
        e.preventDefault();
        let element = document.querySelector(e.target.getAttribute('href'));
        element && element.scrollIntoView({ behavior: "smooth", block: "start"});
    }

    return (
        <header className="desktop-header-3 light fixed-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <button onClick={toggleset} className="navbar-toggler bg-dark" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-center ${toggle ? 'show' : ''}`} >
                    <ul className="navbar-nav scrollspy">
                        <li className="nav-item">
                            <Link className="nav-link" onClick={smothScroll} href="#home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a href="#about" onClick={smothScroll} className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" onClick={smothScroll} className="nav-link">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#experience" onClick={smothScroll} className="nav-link">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a href="#works" onClick={smothScroll} className="nav-link">Works</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" onClick={smothScroll} className="nav-link">Contact</a>
                        </li>
                        <ListItem label='amin' href='#amin' liClassName='nav-item' aClassName='nav-link'/>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    )
}

export default Navbar;