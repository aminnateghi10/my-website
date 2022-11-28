import React from "react";

interface Props {
    liClassName?:string ,
    aClassName?:string ,
    label:string ,
    href:string,
}

const ListItem = ({label , href , liClassName ,aClassName}:Props)=>{
    return(
    <li className={liClassName}>
        <a href={href} className={aClassName}>{label}</a>
    </li>
    )
}

export default ListItem;