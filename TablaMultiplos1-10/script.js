function aceptar() {
    const limite = 10
    let resultado = 0
    let MensajePantalla=""
    let div_mensaje = document.getElementById("mensajeResultado")
    for(let i=1;i<=limite;i++){
        MensajePantalla = "<h2>Tabla del " + i + "</h2><BR>"
        div_mensaje.innerHTML+=MensajePantalla
        for(let j=1;j<=limite;j++){
            resultado = i*j
            MensajePantalla = i + " * " + j + " = " + resultado + "<BR>"
            div_mensaje.innerHTML+=MensajePantalla
        }
    } 
}

function limpiar(){
    document.getElementById("mensajeResultado").innerHTML = ""   
}