/*Carrusel con slider dinámico*/
/*
let currentIndex = 0;

document.querySelector('.prev-button').addEventListener('click', () => {
   navigate(-1);
});

document.querySelector('.next-button').addEventListener('click', () => {
   navigate(1);
});

function navigate(direction) {
   const galleryContainer = document.querySelector('.gallery-container');
   const totalImages = document.querySelectorAll('.gallery-item').length;

   currentIndex = (currentIndex + direction + totalImages) % totalImages;
   const offset = -currentIndex * 100;

   galleryContainer.style.transform = `translateX(${offset}%)`;
}
*/
let currentIndex = 0;
let autoplayInterval = null;

function startAutoplay(interval) {
   stopAutoplay(); // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
   autoplayInterval = setInterval(() => {
      navigate(1); // Navega a la siguiente imagen cada intervalo de tiempo.
   }, interval);
}

function stopAutoplay() {
   clearInterval(autoplayInterval);
}


function afterLoad() {
   
   document.getElementById('prev-button').addEventListener('click', () => {
      if (document.title == "Inicio"){
         navigate(-1);
         startAutoplay(5000);
      } else {
         navigateSmall(-1);
      }
   });
   
   document.getElementById('next-button').addEventListener('click', () => {
      if (document.title == "Inicio"){
         navigate(1);
         startAutoplay(5000);
      } else {
         navigateSmall(1);
      }
   });
   
   if (document.title == "Inicio"){
      // Iniciar autoplay con un intervalo de 5 segundos.
      startAutoplay(5000);
   }
}

//Función que avanza la imagen del carrusel si se le pasa 1 y retorcede si se le pasa -1
function navigate(direction) {
   const galleryContainer = document.querySelector('.gallery-container');
   const totalImages = document.querySelectorAll('.gallery-item').length;

   currentIndex = (currentIndex + direction + totalImages) % totalImages;
   const offset = -currentIndex * 100;

   galleryContainer.style.transform = `translateX(${offset}%)`;
}

//Función que avanza la imagen del carrusel pequeño si se le pasa 1 y retorcede si se le pasa -1
function navigateSmall(direction) {
   const galleryContainer = document.querySelector('.gallery-container');
   const totalImages = document.querySelectorAll('.gallery-small-item').length;

   currentIndex = (currentIndex + direction + totalImages) % totalImages;
   const offset = -currentIndex * 400;

   galleryContainer.style.transform = `translateX(${offset}px)`;
}

document.addEventListener("DOMContentLoaded", afterLoad)
