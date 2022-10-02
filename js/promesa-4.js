//E3: funcion normal que regresa una promesa
//pero el resultado se obtiene mas lento.
function fcnSumarLento( numero ){
    /* var promesa = new Promise(function(resolve, reject){
    });
    return promesa; */
    return new Promise(function(resolve, reject){
      /*  if(numero >= 5 ){
            reject('Sumar Lento Fallo');
        } */
        setTimeout(function(){
            resolve( numero + 1 );
            }, 800);
    });
}

/*
//E3: esta es la manera mas optimizada de definir una funcion
//pero de tipo arrow (flecha) que tambien regresa una promesa
//pero el resultado se obtiene mas rapido.
let fcnSumarRapido = (numero)=>{
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve( numero + 1 );
            }, 300);
    });
}*/

/*
//E3: Promise.race
Promise.race([fcnSumarLento(5), fcnSumarRapido(10)])
    .then(respuesta =>{
        console.log('Respuestas:', respuesta);
    });
*/

//E3: Promise.race
Promise.race([fcnSumarLento(5), fcnSumarRapido(10)])
.then(respuesta =>{
    console.log('Respuesta:', respuesta);
})
.catch(error=>{
    console.log("Error en la respuesta de la promesa: ", error);
});

//E3: esta es la manera mas optimizada de definir una funcion
//pero de tipo arrow (flecha) que tambien regresa una promesa
//pero el resultado se obtiene mas rapido pero cambiando el reject.
let fcnSumarRapido = (numero)=>{
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            //resolve( numero + 1 );
            reject('Error en la promesa de la funcion Sumar Rapido');
            }, 1000);
    });
}
