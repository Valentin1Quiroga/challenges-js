alert("Hola soy un alerta y te voy a pedir 2 numeros para indicarte si el primero de ellos es mayor, menor o igual al segundo");
const respuesta1 = prompt("Por favor inserte el primer numero");
const respuesta2 = prompt("Por favor inserte el segundo numero");
console.log("Aqui tienes los resultados:")
respuesta1<respuesta2?
console.log(`${respuesta1} es menor a ${respuesta2}`)
:
console.log(`${respuesta1} no es menor a ${respuesta2}`);

respuesta1>respuesta2?
console.log(`${respuesta1} es mayor a ${respuesta2}`)
:
console.log(`${respuesta1} no es mayor a ${respuesta2}`);

respuesta1==respuesta2?
console.log(`${respuesta1} es igual a ${respuesta2}`)
:
console.log(`${respuesta1} no es igual a ${respuesta2}`);

//No se como ponerle pattern de solo numeros al prompt jaja