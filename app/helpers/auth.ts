const storeLoginToken =async (token:string )=>{
    await fetch('/api/login',{
        method:'POST',
        headers:{
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({token})
    })
}

export {storeLoginToken}