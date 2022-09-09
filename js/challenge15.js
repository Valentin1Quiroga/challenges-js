
const tirarDados= () =>{
 dado1 = Math.round(Math.random() * 10);
 dado2 = Math.round(Math.random() * 10)
 if (dado1 <=6 && dado2 <=6 && dado1 >0 && dado2 >0) {
    alert(`Tus numeros son: ${dado1} y ${dado2} `)    
 }
 else {
    tirarDados()
 }
}

