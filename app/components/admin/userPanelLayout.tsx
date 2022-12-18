import {ReactNode, useState} from "react";
import useAuth from "../../helpers/useAuth";
import Router from "next/router";
import SidebarMenu from "./layouts/sidebarMenu";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Preloader from "../shared/preloader";

interface Props {
    children: ReactNode
}

const UserPanelLayout = ({children}: Props) => {
    const [open, setOpen] = useState(true);
    const {user, error, loading} = useAuth();
    if (loading == true) return <Preloader/>
    if (error) Router.push('/auth/login')
    if (user) return (
        <div>
            <div className={`page-container ${open ? 'sbar_collapsed' : ''}`}>
                <SidebarMenu/>
                <div className="main-content">
                    {/* header area start */}
                    <div className="header-area">
                        <div className="row align-items-center">
                            {/* nav and search button */}
                            <div className="col-md-6 col-sm-8 clearfix d-flex">
                                <div className={`nav-btn ${open ? '' : 'pull-left'}`} onClick={() => setOpen(!open)}>
                                    {
                                        open ? <Bars3Icon style={{width: '30px'}}/> :
                                            <XMarkIcon style={{width: '30px'}}/>
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
                <footer>
                    <div className="footer-area mt-5">
                        <p>Admin panel <a href="https://a-nateghi.ir/">(Made by Amin Nateghi)</a>
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    )
    return null
}

export default UserPanelLayout;