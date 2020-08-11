let nombre = ""
let email = ""
let confirmacion=""
let mailTo
let popUp
const fecha = new Date();
const hora = fecha.getHours();

if(localStorage.getItem("confirmacion")== "false"){
    preguntaPopUp()
}else{
    confirmacion= confirm("Desea ingresar Nombre e email?")
    localStorage.setItem("confirmacion", confirmacion)
    if(localStorage.getItem("confirmacion")==true){
        inicioUsuario()
    }else{
        preguntaPopUp()
    }
}





function saludaHora(hora){
            if(hora>= 00 && hora<= 06){alert("Buenas madrugadas " + localStorage.getItem("nombre"))}
            if(hora>= 07 && hora<= 12){alert("Buen dia " + localStorage.getItem("nombre"))}
            if(hora>= 13 && hora<= 18){alert("Buenas tardes " + localStorage.getItem("nombre"))}
            if(hora >= 19 && hora <= 23){alert("Buenas noches " + localStorage.getItem("nombre"))}
}


function enviarMail(mail, popUp){
   mail = confirm("Desea recibir mails con novedades?")
    if(mail == true){
        alert("Estaremos enviandole las ultimas novedades a " + localStorage.getItem("email"))
        localStorage.setItem("mail", mail)
        preguntaPopUp()
    }
    
}

function preguntaPopUp(popUp){
       popUp = confirm("Tenemos ofertas personalizadas que podrian interesarte, desea verlas?")
      
       if(popUp == true){
           window.location.replace("ofertasPersonalizadas.html");
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


function inicioUsuario(){
    nombreValid()
    emailValid()
    alert("Difrute la pagina!!!")
}
    

    
    function nombreValid(nombre){
        do {
            nombre = prompt("Ingrese su nombre")
            
            if(nombre.trim() == ""){
                alert("Ingrese datos validos")
            }else{return localStorage.setItem("nombre", nombre) }
        } while (nombre=="" || nombre!==undefined);
    }
    