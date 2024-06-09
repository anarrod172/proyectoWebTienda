/**Efecto de desplazamiento suave (Smooth scrolling) */

function ready() {
  //Añadir el efecto de desplazamiento suave a los enlaces
  $("a").on('click', function(event) {

    // Se anula el comportamiento de hash
    if (this.hash !== "") {
      // Cambia el comportamiento predeterminado en el ancla
      event.preventDefault();

      var hash = this.hash;

      // Se usa el método animate() de jQuery para agregar el desplazamiento suave en la página
      // Se define el número de milisegundos para desplazarse a un área concreta
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){
    
        // Se añade hash (#) a la URL cuando termine de desplazarse (comportamiento de click predeterminado)
        //window.location.hash = hash;
      });
    } // Termina el if
  });
};

  
 document.addEventListener ("DOMContentLoaded", ready);