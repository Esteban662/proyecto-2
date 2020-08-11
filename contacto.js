let nombre = ""
let email = ""
let confirmacion=""
let mailTo
const fecha = new Date();
const hora = fecha.getHours();
if(localStorage.getItem("confirmacion")== "false"){
    cuponDescuento()
}else{
    confirmacion= confirm("Desea ingresar Nombre e email?")
    localStorage.setItem("confirmacion", confirmacion)
    if(localStorage.getItem("confirmacion")==true){
        inicioUsuario()
    }else{
        cuponDescuento()
    }
}





//Funciones
//Hora
function saludaHora(hora){
    if(hora>= 00 && hora<= 06){alert("Buenas madrugadas " + localStorage.getItem("nombre"))}
    if(hora>= 07 && hora<= 12){alert("Buen dia " + localStorage.getItem("nombre"))}
    if(hora>= 13 && hora<= 18){alert("Buenas tardes " + localStorage.getItem("nombre"))}
    if(hora >= 19 && hora <= 23){alert("Buenas noches " + localStorage.getItem("nombre"))}
}

//Inicio de usuario
function inicioUsuario(){
    nombreValid()
    emailValid()
    alert("Difrute la pagina!!!")
}

//Nombre
function nombreValid(nombre){
    do {
        nombre = prompt("Ingrese su nombre")
        
        if(nombre.trim() == ""){
            alert("Ingrese datos validos")
        }else{return localStorage.setItem("nombre", nombre) }
    } while (nombre=="" || nombre!==undefined);
}


//Email
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

function enviarMail(mail){
    mail = confirm("Desea recibir mails con novedades?")
     if(mail == true){
         alert("Estaremos enviandole las ultimas novedades a " + localStorage.getItem("email"))
         localStorage.setItem("mail", mail)
     }
 }

//Cupones

function cuponDescuento(PROMO){

    PROMO =  Math.floor(Math.random() * 4) + 1;
      
       switch (PROMO) {
           case 1:
              alert("Estimado " + localStorage.getItem("nombre") +". Gracias por elegirnos! Le obsequiamos el codigo (5HOTSALE) para obtener un 5% de descuento con su compra")
               break;
          case 2:
              alert("Estimado " + localStorage.getItem("nombre") +". Gracias por elegirnos! Le obsequiamos el codigo (10HOTSALE) para obtener un 10% de descuentocon su compra")
              break
          case 3:
              alert("Estimado " + localStorage.getItem("nombre") +". Gracias por elegirnos! Le obsequiamos el codigo (15HOTSALE) para obtener un 15% de descuento con su compra")
              break
          case 4:
              alert("Estimado " + localStorage.getItem("nombre") +". Gracias por elegirnos! Le obsequiamos el codigo (20HOTSALE) para obtener un 20% de descuento con su compra")
              break
          case 5:
              alert("Estimado " + localStorage.getItem("nombre") +". Gracias por elegirnos! Le obsequiamos el codigo (25HOTSALE) para obtener un 25% de descuento con su compra")
              break 
          default:
               break;
       }
   }
