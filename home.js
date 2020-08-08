
let nombre = "" 
let email = ""


if(localStorage.getItem()){

}






function inicioUsuario(nombre, email){
    let preguntaInicial = false
    do {
        preguntaInicial = confirm("Desea ingresar su nombre y su email?")
        if(preguntaInicial === true){
            nombre = prompt("Ingrese su nombre")
            localStorage.setItem("nombre", nombre)
            email = prompt("Ingrese su email")
            validarEmail(email)
            
        
            
        }
    } while (preguntaInicial === false);
}

function validarEmail(email){
    arrEmail = [] 
    arrEmail = email.split("")
    let bandera = false
    let bandera2 = false
    let largo = arrEmail.length
    for(let i = 0; i<largo; i++){
        if(arrEmail[i] == "@" ){
            bandera = true
        }else if(arrEmail[i] == "."){
            bandera2 = true
        }
    }

}
