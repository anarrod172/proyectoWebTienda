function clickedRopaMujer(){

    window.location.href = "Area_clientes.html#Mujer";
  }
  
  function clickedRopaHombre(){
        window.location.href = "Area_clientes.html";
        document.getElementById("ropaMujer").style.visibility = "collapse";
        document.getElementById("ropaMujer").style.height = "0px";
  }
  
function ocultaRopa(){
    var section;
    if (window.location.hash === '#Mujer') {
        section = document.getElementById("ropaHombre");
        section.style = {
            visibility: "collapse",
            height: "0px"
        }
    } else if(window.location.hash === '#Hombre'){
        section = document.getElementById("ropaHombre");
        section.style = {
            visibility: "collapse",
            height: "0px"
        }
    }
  }

document.addEventListener ("DOMContentLoaded", ocultaRopa);
window.addEventListener("hashchange", ocultaRopa);