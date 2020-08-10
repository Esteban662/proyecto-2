
let nombre = ""
let email = ""
let confirmacion=""
let mailTo

if(localStorage.getItem("nombre")){
    alert("Bienvenido " + localStorage.getItem("nombre"))
}else{
    inicioUsuario(nombre,email)
    
}




function enviarMail(mail){
   mail = confirm("Desea recibir mails con novedades?")
    if(mail == true){
        alert("Estaremos enviandole las ultimas novedades a " + localStorage.getItem("email"))
        localStorage.setItem("mail", mail)
    }
}



function guardarEmail(email){

    email = prompt("Ingrese su email")
    let arrEmail = email.split("")
    if(arrEmail.includes("@") && arrEmail.includes(".")){
        localStorage.setItem("email", email)
        enviarMail(mailTo)
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
    
    






