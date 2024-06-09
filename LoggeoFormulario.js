/*Validación del formulario de registro de la página de Inicio de sesión.*/

//Creamos una función para asegurarnos que los datos que introduce el usuario para loguearse son los correctos
function validarInicioSesion(){

    //Variable booleana que garantiza que todo funciones
    var funciona = false;
    var usuario = document.login.usuario.value;
    var contraseña = document.login.contraseña.value;
    var input = document.login.button; 

    //Patrón que debe seguir el nombre del usuario                        
    var patronUsuario = /^[a-zA-Z][a-zA-Z0-9._]{2,14}$/
    //Patrón que debe seguir la contraseña del usuario
    var patronClave = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,18}$/
    if(patronUsuario.test(usuario)){
        if(patronClave.test(contraseña)){
            if(usuario == "Asun" && contraseña == "l1AnUn3?"){
                funciona = true;
                alert("El usuario y contraseña que introduciste son correctos.\n !Bienvenida a tu área de cliente!"); 
                
            }else{ 
                alert("Su usuario o contraseña no coincide con los valores que has introducido, por favor, vuelva a introducir las credenciales.")  
            }
        }else{
            alert("El tamaño de la contraseña es demasiado pequeño o largo.\n Recuerda que tu contraseña debe tener una longitud entre 8 y 18 caracteres, pueden ser en mayúscula o minúscula y puede contener cualquier símbolo.");
        }
    }else{
        alert("El tamaño de su nombre de usuario es demasiado pequeño o largo. \n Recuerda que tu nombre de usuario debe tener una longitud entre 3 y 14 caracteres.")
    }
    
    return funciona;
}



