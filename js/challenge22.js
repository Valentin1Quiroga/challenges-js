const nublar=()=>{
    const fondo=document.querySelector("#background")
    const sol=document.getElementById("sun")
    const button=document.querySelector("button")
    if(fondo.classList.contains("fondo")){
        fondo.classList.add("nublado")
        fondo.classList.remove("fondo")
        sol.classList.remove("sun")
        sol.classList.add("sun2")
        button.classList.remove("cambiar-fondo")
        button.classList.add("cambiar-fondo2")
    }else{
        fondo.classList.remove("nublado")
        fondo.classList.add("fondo")
        sol.classList.remove("sun2")
        sol.classList.add("sun")
        button.classList.remove("cambiar-fondo2")
        button.classList.add("cambiar-fondo")
    }

}
