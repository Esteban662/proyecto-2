
let nombre = "" 
let email = ""
let confirmacion=""


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
        confirmacion= confirm("Desea ingresar Nombre e email?")
        if(confirmacion==true){ nombre = prompt("Ingrese su nombre")
        localStorage.setItem("nombre", nombre)
        emailValid(email);}else{
            alert("Difrute la pagina!!!")
        }
       
}


inicioUsuario();









