import React,{useState} from "react";
import Link from "next/link";
import ListItem from "./listItem";
function Navbar() {
    const [toggle , setToggle] = useState<boolean>()

    const smoothScroll =(e : any)=>{
        e.preventDefault();
        let element = document.querySelector(e.target.getAttribute('href'));
        element && element.scrollIntoView({ behavior: "smooth", block: "start"});
    }

    return (
        <header className="desktop-header-3 light fixed-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <button onClick={()=>setToggle(!toggle)} className="navbar-toggler bg-dark" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-center ${toggle ? 'show' : ''}`} >
                    <ul className="navbar-nav scrollspy">
                        <li className="nav-item">
                            <Link className="nav-link" onClick={smoothScroll} href="#home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a href="#about" onClick={smoothScroll} className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" onClick={smoothScroll} className="nav-link">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#experience" onClick={smoothScroll} className="nav-link">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a href="#works" onClick={smoothScroll} className="nav-link">Works</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" onClick={smoothScroll} className="nav-link">Contact</a>
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