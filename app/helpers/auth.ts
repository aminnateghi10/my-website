import Router from "next/router";
import {toast} from "react-toastify";

const removeLoginToken =async () =>{
            try {
                let res : any = await fetch('/api/logout',{
                    method:'POST',
                    headers:{
                        "Content-Type" : "application/json"
                    }
                })
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
            }catch (err){
                console.log(err)
            }

}


export {removeLoginToken}