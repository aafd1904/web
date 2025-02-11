/** Carousel  */
const fila = document.querySelector('.contenedor-carousel');
const fila2 = document.querySelector('.contenedor-carousel-destacadas');
const peliculas = document.querySelector('.pelicula');

document.getElementById('flecha-izquierda-estrenos').addEventListener('click', function () {
    fila.scrollLeft -= fila.offsetWidth;
});

document.getElementById('flecha-derecha-estrenos').addEventListener('click', function () {
    fila.scrollLeft += fila.offsetWidth;
});

document.getElementById('flecha-izquierda-destacadas').addEventListener('click', function () {
    fila2.scrollLeft -= fila.offsetWidth;
});

document.getElementById('flecha-derecha-destacadas').addEventListener('click', function () {
    fila2.scrollLeft += fila.offsetWidth;
});

