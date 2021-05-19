const d = document, 
    ls =localStorage;
// console.log("recibido");
//    function validar(){
//        const $form = d.getElementById('formularioregistro');
//        const $h2 = d.querySelector('.nombres');
//         $form.addEventListener('submit', (e) =>{
//         e.preventDefault();
//         let $nombre = e.target.nombre.value,
//         $contraseina = e.target.pass.value;
//         console.log($contraseina,$nombre);
//         ls.setItem("keynombre",$nombre);
//         ls.setItem("keypassword",$contraseina);
        
//     })
//     $h2.innerHTML= localname;
            
// }
// let localname = ls.getItem("keynombre");
// let localpass = ls.getItem("keypassword");

// d.addEventListener('DOMContentLoaded', e => {
//     validar();
//     console.log(localname, localpass);
// });

console.log("recibido");
   function validar(){
       const $form = d.getElementById('formularioregistro');
       const $h2 = d.querySelector('.nombres');
        $form.addEventListener('submit', (e) =>{
        e.preventDefault();
        let $nombre = e.target.nombre.value,
        $contraseina = e.target.pass.value;
        console.log($contraseina,$nombre);
        ls.setItem("keynombre",$nombre);
        ls.setItem("keypassword",$contraseina);
        alert("Hola "+ $nombre);
        
    })

    $h2.innerHTML= localname;
            
}
let localname = ls.getItem("keynombre");
let localpass = ls.getItem("keypassword");

d.addEventListener('DOMContentLoaded', e => {
    validar();
    console.log(localname, localpass);
});




    

 
    