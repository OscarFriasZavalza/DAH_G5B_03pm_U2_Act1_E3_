//E3: Enviar a consola hola mundo. 
console.log('hola mundo');

//E3 funcion que recibe un nuemero y le suma uno.
function fcnSumarUno( numero ){
    return numero + 1;
}

//E3: llamar la funcion.
let Resultado = fcnSumarUno (5);

//E3: Resultado a consola. 
console.log("Resultado", Resultado); 


//E3: funcion que recibe un nuemero y le suma uno.
function fcnSumarUno( numero, fcnResultadoCallBack ){
    setTimeout(function(){
      //return numero + 1; 
      fcnResultadoCallBack( numero + 1 );
    }, 800);
}

//E3: llamar la funcion.
fcnSumarUno (5, function(nuevoValor1){
    //desplegar el resultado en consola.
    console.log("Resultado:", nuevoValor1);
});

//E3: llamar la funcion.
fcnSumarUno (5, function(nuevoValor1){
    //desplegar el resultado en consola.
    //console.log("Resultado:", nuevoValor1);
    fcnSumarUno(nuevoValor1, function(nuevoValor2){
        console.log("Resultado:", nuevoValor2);
    });
});

//Equipo3: llamar la funcion.
fcnSumarUno (5, function(nuevoValor1){
    //desplegar el resultado en consola.
    //console.log("Resultado:", nuevoValor1);
    fcnSumarUno(nuevoValor1, function(nuevoValor2){
        //console.log("Resultado:", nuevoValor2);
        fcnSumarUno(nuevoValor2, function(nuevoValor3){
            console.log("Resultado:", nuevoValor3);
        });
    });
});
