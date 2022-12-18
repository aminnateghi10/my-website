import {ReactNode} from "react";
import Router from "next/router";

import useAuth from "../../helpers/useAuth";
import Preloader from "../shared/preloader";

interface Props {
    children: ReactNode,
}

const UserAuthLayout = ({children}: Props) => {
    const {user, error, loading} = useAuth();
    if (loading) return <Preloader/>
    if (error) return <>{children}</>
    if (user) {
        Router.push('/admin')
    }
    return null
}

export default UserAuthLayout;