import React from "react";

interface Props {
    liClassName?:string ,
    aClassName?:string ,
    label:string ,
    href:string,
}

const ListItem = ({label , href , liClassName ,aClassName}:Props)=>{

    const smoothScroll = (e: any) => {
        e.preventDefault();
        let element = document.querySelector(e.target.getAttribute('href'));
        element && element.scrollIntoView({behavior: "smooth", block: "start"});
    }

    return(
    <li className={liClassName}>
        <a onClick={smoothScroll} href={href} className={aClassName}>{label}</a>
    </li>
    )
}

export default ListItem;