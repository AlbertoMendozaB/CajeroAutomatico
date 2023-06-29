function aceptar(){
    const numDos = 2
    let numero = document.getElementById("numero").value
    let div_mensaje = document.getElementById("mensajeResultado")
    var resultado = 0
    if(!(isNaN(numero))){
        resultado = numero % numDos
        if(resultado == 0){
            div_mensaje.innerHTML="<br><div><h1>El numero: " + numero +  " es Par </h1></div>"
        }
        else{
            div_mensaje.innerHTML="<br><div><h1>El numero: " + numero +  " es Impar </h1></div>"
        }
    }
    else{
        document.getElementById("numero").value = ""
        div_mensaje.innerHTML="<br><div><h1>Debe digitar un número</h1></div>"
    }
}

