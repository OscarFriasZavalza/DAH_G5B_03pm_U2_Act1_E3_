
//*imagen de la pagina index.html
let img1 = document.getElementById("IdImg1");


fetch('img/pokemon_go_entei.jpg')//*direccion api de nuestro pokenmon
.then(resp => resp.blob())
.then(image => {
    console.log(image)
    var imgPath1 = URL.createObjectURL(image);
    img1.src = imgPath1;    
});
