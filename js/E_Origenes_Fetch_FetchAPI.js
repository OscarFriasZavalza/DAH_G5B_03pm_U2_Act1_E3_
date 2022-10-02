//*DECLARACION DEL OBJETO Resquest
var request = new XMLHttpRequest();

//*INVOCACION DEL METODO OPEN
//? open(method, url, async)
request.open('GET', 'https://reqres.in/api/users', true );
request.send(null);//! Hacemos un envio sin mandar informacion adicional

//*usamos el metodo onreadystatechange mandamos por parametro estado
request.onreadystatechange = function( state ){
    if(request.readyState==4){//!validamos que sea igual a 4
        //* Imprimimos en consola la respuesta convertida a JSON
        console.log(JSON.parse(request.response));
        //*accedemos a page 
        console.log(JSON.parse(request.response).page);
        //*accedemos a data
        console.log(JSON.parse(request.response).data);
    }
}
