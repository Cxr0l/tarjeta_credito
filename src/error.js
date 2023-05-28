const inputNumerosTarjeta = document.getElementById('numeros-tarjeta');
const cardNumber = document.querySelector('.card-number');
const numerosOriginales = cardNumber.textContent;
const errorNumero = document.querySelector('.error-number');

function verificarNumeroTarjeta() {
    if (/[^0-9]+/.test(inputNumerosTarjeta.value)) {
        errorNumero.textContent = 'Solo se permiten números';
        inputNumerosTarjeta.value = '';
    } else {
        errorNumero.textContent = '';
    }
}

inputNumerosTarjeta.addEventListener('input', function() {
    verificarNumeroTarjeta();
});

