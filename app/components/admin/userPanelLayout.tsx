import {ReactNode, useState} from "react";
import useAuth from "../../helpers/useAuth";
import Router from "next/router";
import SidebarMenu from "./layouts/sidebarMenu";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";

interface Props {
    children: ReactNode
}

const UserPanelLayout = ({children}: Props) => {
    const [open , setOpen] = useState(true );
    const {user , error , loading} = useAuth();

    if (loading == true) <h2>loading...</h2>
    if (error != undefined) {
        Router.push('/auth/login')
    }

     return (
        <div>
            {/* preloader area start */}
            {/*<div id="preloader">*/}
            {/*    <div className="loader"/>*/}
            {/*</div>*/}
            {/* preloader area end */}

            {/* page container area start */}
            <div className={`page-container ${open ? 'sbar_collapsed' : ''}`}>
                {/* sidebar menu area start */}
                <SidebarMenu/>
                {/* sidebar menu area end */}
                {/* main content area start */}
                <div className="main-content">
                    {/* header area start */}
                    <div className="header-area">
                        <div className="row align-items-center">
                            {/* nav and search button */}
                            <div className="col-md-6 col-sm-8 clearfix d-flex">
                                <div className={`nav-btn ${open ? '' : 'pull-left'}`} onClick={()=>setOpen(!open)}>
                                    {
                                        open ? <Bars3Icon style={{width:'30px'}}/> : <XMarkIcon style={{width:'30px'}} />
                                    }
                                </div>
                                <div className="search-box">
                                    <form action="#">
                                        <input type="text" name="search" placeholder="Search..." required/>
                                        <i className="ti-search"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* header area end */}
                </div>
                {/* main content area start */}
                {
                    children
                }
                {/* main content area end */}

                {/* footer area start*/}
                <footer>
                    <div className="footer-area mt-5">
                        <p>Admin panel <a href="https://a-nateghi.ir/">(Made by Amin Nateghi)</a>
                        </p>
                    </div>
                </footer>
                {/* footer area end*/}
            </div>
            {/* page container area end */}
        </div>
    )
}

export default UserPanelLayout;