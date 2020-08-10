
let nombre = "" 
let email = ""


//if(localStorage.getItem()){

//}

function guardarEmail(email){

    email = prompt("Ingrese su email")
    let arrEjemplo = email.split("")
    if(arrEjemplo.includes("@") && arrEjemplo.includes(".")){
        localStorage.setItem("email", email)
    }else{alert("Datos invalidos")}
 
}

function emailValid(email){ 
   do {
       guardarEmail(email);
   } while (localStorage.getItem("email") === null);
}



function inicioUsuario(nombre, email){
        nombre = prompt("Ingrese su nombre")
        localStorage.setItem("nombre", nombre)
        emailValid(email);
}


inicioUsuario();









