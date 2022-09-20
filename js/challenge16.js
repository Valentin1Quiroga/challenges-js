let number=0;
const numbers = [];
while(number!=null){
    number = prompt("Ingresa un numero: ");
    if(!isNaN(number) && number!=false){
        numbers.push(number);
    }else alert("por favor ingrese un numero valido");
}
console.log(numbers.join(""));