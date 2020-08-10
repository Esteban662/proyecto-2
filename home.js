
let nombre = ""
let email = ""
let confirmacion=""


if(localStorage.getItem("nombre")){
    alert("Bienvenido " + localStorage.getItem("nombre"))
}else{
    inicioUsuario(nombre,email)
}

function guardarEmail(email){

    email = prompt("Ingrese su email")
    let arrEmail = email.split("")
    if(arrEmail.includes("@") && arrEmail.includes(".")){
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
    if(confirmacion==true){ 
        nombreValid(nombre)
        emailValid(email);}else{
            alert("Difrute la pagina!!!")
        }
        
    }
    
    

    
    function nombreValid(nombre){
        do {
            nombre = prompt("Ingrese su nombre")
            nombre.trim(" ")
            if(nombre == ""){
                alert("Ingrese datos validos")
            }else{return localStorage.setItem("nombre", nombre) }
        } while (nombre == "");
    }
    
    






