const d = document, 
        ls =localStorage;

       
function validar(){
            const $form = d.getElementById('formularioregistro');
            const $h2 = d.querySelector('.usuarios');
             $form.addEventListener('submit', (e) =>{
             e.preventDefault();
             let $usuario = e.target.usuario.value,
             $contraseina = e.target.pass.value;
             console.log($contraseina,$usuario);
             ls.setItem("keyusuario",$usuario);
             ls.setItem("keypassword",$contraseina);
             alert("Hola "+ $usuario +"\nGracias por suscribirte a Netnet 🎬🎬🎬 \nEn 2 segundos te redirigiremos a la página principal");
             setTimeout ("redireccionar()", 3000);
         })           
     }
     let localname = ls.getItem("keyusuario");
     let localpass = ls.getItem("keypassword");
     
     d.addEventListener('DOMContentLoaded', e => {
         validar();
         console.log(localname, localpass);
     });

     function redireccionar(){
         window.location="index.html";    
        }
          





    

 
    