import Router from "next/router";
import {toast} from "react-toastify";

const removeLoginToken =async () =>{
    let res :any = await fetch('/api/logout',{
        method:'POST',
        headers:{
            "Content-Type" : "application/json"
        }
    })
    if (res = 200) {
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
        setTimeout(()=>{
            Router.push('/auth/login')
        },2000)
    }
}

export {removeLoginToken}