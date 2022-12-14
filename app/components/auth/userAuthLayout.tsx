import {ReactNode} from "react";
import useAuth from "../../helpers/useAuth";
import Router from "next/router";

interface Props {
    children : ReactNode,
}

const UserAuthLayout = ({children}: Props) => {

    const {user, error, loading} = useAuth();
    console.log(user, error, loading)
    if (loading) <h2>loading...</h2>
    if (user) {
        Router.push('/admin')
        return null
    }
    return <>{children}</>
}

export default UserAuthLayout;