import {
    BeakerIcon,
    ChevronDownIcon,
    ClipboardIcon,
    Cog8ToothIcon,
    EnvelopeIcon,
    HomeIcon,
    XMarkIcon
} from "@heroicons/react/24/solid";
import React, {useState} from "react";
import Link from "next/link";

const SidebarMenu = () => {

        const navigation = [
            {name:'Dasbord' , href:'/admin' , icon:HomeIcon},
            {name:'Messages' , href:'/admin/messages' , icon:EnvelopeIcon},
            {name:'Manage/Edit' , href:'' , icon:Cog8ToothIcon,list:[
                    {name:'Information' , href:'/admin/information' , icon:ClipboardIcon},
                    {name:'Skills' , href:'/admin/skills'},
                    {name:'Services' , href:'/admin/services'},
                    {name:'experiences' , href:'/admin/experiences'},
                    {name:'Customers and reviews' , href:'/admin/customers-and-reviews'},
                ]},
        ]

        const [active , setActive] = useState('')
    return (
        <div className='sidebar-menu'>
            <div className="main-menu">
                <div className="menu-inner">
                    <nav>
                        <ul className="metismenu">
                            {
                                navigation?.map((item)=>(
                                    <li key={item.name}>
                                            <Link onClick={()=>setActive(item.name)} className='d-flex align-items-center' href={item?.href}>
                                                    <item.icon style={{width:'22px'}}/>
                                                    <span>{item.name}</span>
                                            </Link>
                                        {
                                            item.list ?
                                                <ul className={`list-unstyled ${active === item.name ? '':'collapse'}`}>
                                                    {
                                                        item.list?.map((item)=>(
                                                            <li key={item.name}>
                                                                <Link className='d-flex align-items-center text-decoration-none' href={item?.href}>
                                                                    <span>{item.name}</span>
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            :null
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default SidebarMenu;