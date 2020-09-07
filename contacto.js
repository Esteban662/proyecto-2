let nombre = ""
let email = ""
let confirmacion=""
let mailTo
const fecha = new Date();
const hora = fecha.getHours();
const postUrl = "https://demo2420474.mockable.io/userData"

if (localStorage.getItem("confirmacion")==null){
    
    confirmacion = confirm("Desea ingresar Nombre e email?")
    localStorage.setItem("confirmacion", confirmacion)
    if(confirmacion==true){
        inicioUsuario()
        
      }
    }
    
    if(localStorage.getItem("nombre")){cuponDescuento()}
    
let arrUsuario = [ `token: "GRUPOB2020"`, `name: ${localStorage.getItem("nombre")}`, `email: ${localStorage.getItem("email")}`, `sendEmail: ${localStorage.getItem("mail")}` ]
    fetch(postUrl,{
    method: 'POST',
    body: JSON.stringify(arrUsuario) ,
    headers:{'Content-Type':'application/json'}
}).then(function(response){
    return response.json()
}).then(function(usuario){
    console.log(usuario)
})

//Funciones
//Inicio de usuario
function inicioUsuario(){
    nombreValid()
    emailValid()
    saludaHoraInicio()
}

//Guardar y validar nombre
function nombreValid(nombre){
    do {
        nombre = prompt("Ingrese su nombre")
        
        if(nombre.trim() == ""){
            alert("Ingrese datos validos")
        }else{return localStorage.setItem("nombre", nombre) }
    } while (nombre=="" || nombre!==undefined);
}

//Guardar y validar email
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

 //Preguntar para enviar mail
function enviarMail(mail){
    mail = confirm("Desea recibir mails con novedades?")
     if(mail == true){
         alert("Estaremos enviandole las ultimas novedades a " + localStorage.getItem("email"))
         localStorage.setItem("mail", mail)
         preguntaPopUp(popUp)
        }
 }


//Cupones

function cuponDescuento() {
    let max = 4;
    let min = 1;
    let PROMO = Math.floor(Math.random() * max) + min;
    let arrPromo = ["5HOTSALE para obtener un 5% de descuento","10HOTSALE para obtener un 10% de descuento","15HOTSALE para obtener un 15% de descuento","20HOTSALE para obtener un 20% de descuento","25HOTSALE para obtener un 25% de descuento"];
    alert("Estimado/a " + localStorage.getItem("nombre") + ". Gracias por elegirnos! Le obsequiamos el codigo " + arrPromo[PROMO] + "con su compra")

}
//Saluda segun hora
function saludaHoraInicio() {
    if (hora >= 00 && hora <= 06) {
      alert("Buenas madrugadas " + localStorage.getItem("nombre") + ". Difrute la pagina!!!" );
  }
  if (hora >= 07 && hora <= 12) {
    alert("Buen dia " + localStorage.getItem("nombre") + ". Difrute la pagina!!!");
  }
  if (hora >= 13 && hora <= 18) {
    alert("Buenas tardes " + localStorage.getItem("nombre") + ". Difrute la pagina!!!");
  }
  if (hora >= 19 && hora <= 23) {
    alert("Buenas noches " + localStorage.getItem("nombre") + ". Difrute la pagina!!!");
  }
  }
  function preguntaPopUp(popUp){
    popUp = confirm("Tenemos ofertas personalizadas que podrian interesarte, desea verlas?")
   
    if(popUp == true){
        window.location.replace("ofertasPersonalizadas.html");
     }
 }