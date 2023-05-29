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
        inputCVV.value = '';
        inputCVV.style.outlineColor = '#ff0000';
        inputCVV.style.borderColor= '#ff0000';
    } else {
        errorNumber.textContent = '';
        inputCVV.style.outlineColor = '#146c94';
        inputCVV.style.borderColor = '#146c94';
        actualizarCVV(); // Llamar a la función actualizarCVV para actualizar el campo de texto CVV
    }
}

inputCVV.addEventListener('change', function() {
  verificarCVV();
});

inputCVV.addEventListener('keyup', function() {
  verificarCVV();
});

inputCVV.addEventListener('keydown', function() {
  verificarCVV();
});