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

    const navbarList = [
        {label:'Contact',href:'#amin'},
        {label:'Home',href:'#home'},
        {label:'About',href:'#about'},
        {label:'Services',href:'#services'},
        {label:'Experience',href:'#experience'},
        {label:'Works',href:'#works'},
        {label:'Contact',href:'#contact'},
    ]

    return (
        <header className="desktop-header-3 light fixed-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <button onClick={()=>setToggle(!toggle)} className="navbar-toggler bg-dark" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-center ${toggle ? 'show' : ''}`} >
                    <ul className="navbar-nav scrollspy">
                        {
                            navbarList?.map((item)=>(
                            <ListItem key={item.href} label={item.label} href={item.href} liClassName='nav-item' aClassName='nav-link'/>
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