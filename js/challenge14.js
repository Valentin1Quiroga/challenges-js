const edad = prompt( "Cuantos años tenes?");    


if((parseFloat(edad))<=0){
    console.log('Por favor escribe un numero mayor a 0')
} else if((parseFloat(edad))<9){
    console.log('El tema para vos es "la vaca lola" de la granja de zenon');
} else if ((parseFloat(edad))<19){
    console.log('El tema para vos  es "baby" de justin bieber')
} else if ((parseFloat(edad))<29){
    console.log('El tema para vos es "ojitos lindos" de bad bunny')
} else if ((parseFloat(edad))<39){
    console.log('El tema para vos es "gasolina" de daddy yankee')
} else if ((parseFloat(edad))<49){
    console.log('El tema para vos es "flaca" de Andres Calamaro')
} else if ((parseFloat(edad))>=99){
    console.log('Tantos años ibas a tener?')
} else if ((parseFloat(edad))>=50){
    console.log('El tema para vos es "Rosa Rosa" de Sandro')
} else {
    console.log('Por favor indica una edad valida')
}; 