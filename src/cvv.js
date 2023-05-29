const inputCVV = document.getElementById('card-CVV');
const cvv = document.querySelector('.CVV');
const cvvOriginal = cvv.textContent;
const errorNumber = document.querySelector('.error-CVV');

function actualizarCVV() {
    if (inputCVV.value === '') {
        cvv.textContent = cvvOriginal;
    } else {
        cvv.textContent = inputCVV.value;
    }
}

function verificarCVV() {
    if (/[^0-9]+/.test(inputCVV.value)) { // verifica si hay caracteres que no sean numeros
        errorNumber.textContent = 'Solo se permiten números';
        inputCVV.style.outlineColor = '#ff0000';
        inputCVV.style.borderColor = '#ff0000';
        inputCVV.value = '';
    } else {
        errorNumber.textContent = '';
        inputCVV.style.outlineColor = '#146c94';
        inputCVV.style.borderColor = '#146c94';
    }
}

inputCVV.addEventListener('input', function() {
    actualizarCVV();
    verificarCVV();
});

inputCVV.addEventListener('keyup', function() {
    if (inputCVV.value === '') {
        actualizarCVV();
    }
});