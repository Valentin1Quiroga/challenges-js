//! Crear una aplicación a través de la cual yo le pase el radio de un circulo, y en pantalla se muestre un circulo de tal radio
//Cuando un círculo esta inscrito en un cuadrado , el diámetro del círculo es igual a la longitud del lado del cuadrado. 

const crearCirculo = (event)=>{
    event.preventDefault();
    const radius= document.getElementById("circle-radius");
    const radiusNumber= radius.value;
    const diametro=(radiusNumber*2)+"px"
    console.log("este es el radio : " + radiusNumber);
    console.log("este seria el diametro" + diametro);
    const newCircle= document.createElement("div");
    newCircle.classList.add("test")
    newCircle.style.width=diametro
    newCircle.style.height=diametro
    const circleContainer=document.getElementById("circle-container")
    circleContainer.appendChild(newCircle);
    document.querySelector("form").reset();
}
