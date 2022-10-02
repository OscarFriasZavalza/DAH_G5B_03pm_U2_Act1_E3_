
//*declaramos un objeto
let usuario = {
    nombre: 'Mario Aguirre',
    edad: 25
}

fetch('https://reqres.in/api/users', {
    method: 'POST',//!El metodo POST es para transmitir datos
    body: JSON.stringify(usuario), //!data a enviar
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(resp=>resp.json())//?Convertimos a Json
.then(console.log);