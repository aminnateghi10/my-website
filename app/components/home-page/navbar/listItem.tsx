import React from "react";

import {smoothScroll} from "../../shared/smoothScroll";

interface Props {
    liClassName?:string ,
    aClassName?:string ,
    label:string ,
    href:string,
}

const ListItem = ({label , href , liClassName ,aClassName}:Props)=>{
    return(
    <li className={liClassName}>
        <a onClick={smoothScroll} href={href} className={aClassName}>{label}</a>
    </li>
    )
}

export default ListItem;