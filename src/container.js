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



const inputMes = document.getElementById('cardinput-mes');
const inputAño = document.getElementById('cardinput-año');
const spanMes = document.getElementById('card-mes');
const spanAño = document.getElementById('card-año');

inputMes.addEventListener('input', function() {
    spanMes.textContent = inputMes.value;
});

inputAño.addEventListener('input', function() {
    spanAño.textContent = inputAño.value;
});



const inputCVV = document.getElementById('card-CVV');
const cvv = document.querySelector('.CVV');

inputCVV.addEventListener('input', function() {
    cvv.textContent = inputCVV.value;
});