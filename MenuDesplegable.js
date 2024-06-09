/*Menú desplegable que muestra las opciones*/

function cambia(elemento) {
    var width = window.innerWidth;
    var navSmallMenu = document.getElementById('SubMenuSmall');
    var navMenuHamburguesa = document.getElementById('menuHamburguesa');
    if(width <= 600){
        if (navSmallMenu.style.display != 'none') {
            navSmallMenu.style.display = 'none';
        } else {
            navSmallMenu.style.display = '';
        }
        navMenuHamburguesa.style.display = 'none';
    } else {
        if (navMenuHamburguesa.style.display != 'none') {
            navMenuHamburguesa.style.display = 'none';
        } else {
            navMenuHamburguesa.style.display = '';
        }
        navSmallMenu.style.display = 'none';
    }
}

window.onresize = function() {
    var width = window.innerWidth;
    var navSmallMenu = document.getElementById('SubMenuSmall');
    var navMenuHamburguesa = document.getElementById('menuHamburguesa');

    if (width > 600) {
        if(navSmallMenu.style.display == ''){
            navSmallMenu.style.display = 'none';
            navMenuHamburguesa.style.display = '';
        }
    } else {
        if(navMenuHamburguesa.style.display==''){
            navSmallMenu.style.display = '';
            navMenuHamburguesa.style.display = 'none';
        }
    }
}