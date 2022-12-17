import {toast} from "react-toastify";
import Router from "next/router";

const removeLoginToken = async () => {
    try {
        let res = await fetch('/api/logout', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
        })
        Router.push('auth/login')
        toast.success('You are logged out', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    } catch (err) {
        console.log(err)
    }
}

export {removeLoginToken};