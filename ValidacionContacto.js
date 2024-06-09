/*Código que nos permite recibir por correo información sobre quién rellena nuestro formulario*/ 
var form_id_js = "formulario";
    
var data_js = {
    "access_token": "ccwkm03ztryocb8q0dc7eme5"
};

//Función para validar el formulario
function validar(){
    //Creamos una variable booleana con valor a true
    var validado = true;

    //Primero validamos el nombre que ha introducido. 
    if(document.getElementById("Nombre").value.length < 2 || document.getElementById("Nombre").value.length > 50){
        validado = false;
        alert("El nombre introducido debe ser mayor de 2 dígitos y menor de 50")
    }

    //Segundo validamos el teléfono que se ha introducido. 
    var patronTelefono = /^[0-9]{9}$/;
    var telefono = document.formulario.telefono.value;
    if(!patronTelefono.test(telefono)){
        validado = false;
        alert("El teléfono introducido es erróneo,solo se pueden introducir nueve números")
    }

    //Tercero validamos el correo electrónico
    var patronEmail = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    var email = document.formulario.Email.value;
    if(!patronEmail.test(email)){
        validado = false;
        alert("El email introducido tiene que tener el patrón de loquesea@loquesea.es---- ")
    }

    //Cuarto validamos la consulta
    if(document.getElementById("Consulta").value.length > 300){
        validado = false;
        alert(" La consulta escrita debe de tener menos de 300 caracteres.")
    }

    //Quinto validamos la opción marcada
    if(document.getElementById("Seleccion").checked){
        validado = false;
        alert("La selección no es la correcta. Seleccione algo")
    }

    //Sexto validamos el checkbox de aceptación de las condiciones
    if(document.getElementById("Condiciones").value == ""){
        validado = false;
        alert("Acepte las condiciones antes de clicar sobre el botón de enviar")
    }

    //Séptimo si al introducir algunos de los datos anteriores se genera una alerta para avisar al usuario. 
    if(!validado){
        alert("Algunos campos no son correcto, por favor, vuelve a introducir aquellos datos que sean erróneos")
    }
    return validado;
}

function js_onSuccess() {
    // Redirección del correo enviado
    window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
    alert("Tu correo ha sido enviado")
}

function js_onError(error) {
    // Redirección de correo fallido
    window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
    alert("Tu correo no se ha podido enviar. Por favor, inténtalo de nuevo")
}

var sendButton = document.getElementById("Send");

function js_send() {
    sendButton.value='Eviando…';
    sendButton.disabled=true;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            js_onSuccess();
        } else
        if(request.readyState == 4) {
            js_onError(request.response);
        }
    };

    var nombreApellido = document.formulario.Nombre.value;
    var telefono = document.formulario.telefono.value;
    var email = document.formulario.Email.value;
    var seleccion = document.formulario.Seleccion.value;
    var consulta = document.formulario.Consulta.value;
    var subject = "Alta de un nuevo cliente";
    var message = "Los datos del nuevo cliente son: \n " + "Nombre - " + nombreApellido + "\n" + "Email - " + email + " \n" +  "Teléfono -" + telefono + "\n" + "Seleccion - " + seleccion + "\n" + "Consulta - " + consulta;

    data_js['subject'] = subject;
    data_js['text'] = message;
    var params = toParams(data_js);

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.send(params);

    return false;
}

function clickForButton(){
    var valido = validar();
    if(valido){
        js_send();
    }
} 


function toParams(data_js) {
    var form_data = [];
    for ( var key in data_js ) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }

    return form_data.join("&");
}

function addFunction(){
    sendButton = document.getElementById("Send");
    sendButton.onclick = clickForButton;
}

document.addEventListener("DOMContentLoaded", addFunction);

