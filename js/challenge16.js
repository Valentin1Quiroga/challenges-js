let number=0;
let numbers = [];
while(number!=null){
    number = prompt("Ingrese un número: ");
    if(!isNaN(number) && number!=false){
        numbers.push(number);
    }else alert("no es un numero valido");
}
console.log(numbers.join(""));