// Codigo para aparecer PopUP

const abrir__popup = document.getElementById('abrir__popup');
const popup__container = document.getElementById('popup__container');
const cerrar__popup = document.getElementById('cerrar__popup');

//Llamamos o escuchamos los eventos para hacer clic para mostrar y desaparecer pop up

abrir__popup.addEventListener('click', () =>
{
    popup__container.classList.add('mostrar__popup');

});

cerrar__popup.addEventListener('click', () =>
{
    popup__container.classList.remove('mostrar__popup');
});