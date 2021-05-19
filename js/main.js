const d = document, 
    ls =localStorage;

$('.mensaje a').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});



const formulario = document.getElementById('formularioregistro');
const inputs = document.querySelectorAll('#formularioregistro input');
//Accedemos a todos los inputs contenidos en el id formulario


const expresiones = {
    //Objeto con varias propiedades
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

// cont validarFormulario = () => {

// }

inputs.forEach((input) => {
    //Por cada uno de los inputs se ejecuta la función
    //keyput, cuando se levanta la tecla => comprueba los campos
    //blur, ejecuta cuando se da click por fuera
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

formularioregistro.addEventListener('submit', (e) =>{
    e.preventDefault();
    let $nombre = e.target.nombre.value;
    console.log($nombre);
})
//Cuando el usuario presiona el botón ejecuta la funcion tipo flecha
