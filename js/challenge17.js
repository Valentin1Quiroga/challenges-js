const userDni =()=>{
    let dni=prompt("ingresa tu numero de documento");
    if ( isNaN(dni)|| dni===0 || dni.length <7 || dni.length >8) {
        alert("El numero ingresado no cumple con los parametros de un documento.")
    }else{
        alert(`Su DNI es: ${dni}`)
    }
}
