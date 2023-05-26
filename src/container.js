const inputNombreTarjeta = document.getElementById('nombre-tarjeta');
const cardName = document.querySelector('.card-name');

inputNombreTarjeta.addEventListener('input', function() {
    cardName.textContent = inputNombreTarjeta.value;
});

const inputNumerosTarjeta = document.getElementById('numeros-tarjeta');
const cardNumber = document.querySelector('.card-number');

inputNumerosTarjeta.addEventListener('input', function() {
    cardNumber.textContent = inputNumerosTarjeta.value;
});