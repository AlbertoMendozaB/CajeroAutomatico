function aceptar(){
    const miUsuario="Alberto"
    const miClave = "$lb3rt0"
    let div_mensaje = document.getElementById("mensajeResultado")
    let usuario = document.getElementById("username").value
    let Contraseña = document.getElementById("passwordText").value
    if (Contraseña.length>0 && usuario.length>0)
    {
        if(miUsuario.toLowerCase() === usuario.toLowerCase() && miClave === Contraseña){
            document.getElementById("passwordText").value = ""       
            div_mensaje.innerHTML="<br><div><h1>Hola usuario: " + usuario + " </h1></div>"
        }
        else {
            div_mensaje.innerHTML="<br><div><h1>Usuario o Password Errados</h1></div>"
            document.getElementById("passwordText").value = ""
            document.getElementById("username").value = ""
        }
    } 
    else{
        div_mensaje.innerHTML="<br><div><h1>Faltan Datos</h1></div>"
    }

}
