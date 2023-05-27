const inputNombreTarjeta = document.getElementById('nombre-tarjeta');
const cardName = document.querySelector('.card-name');
const nombreOriginal = cardName.textContent;

inputNombreTarjeta.addEventListener('input', function() {
    if (inputNombreTarjeta.value === '') {
        cardName.textContent = nombreOriginal;
    } else {
        cardName.textContent = inputNombreTarjeta.value;
    }
    verificarLetras();
});


const errorHolder = document.querySelector('.error-holder');

function verificarLetras() {
    const nombre = inputNombreTarjeta.value;
    if (/[^A-Za-zñÑáéíóúÁÉÍÓÚ\s]/.test(nombre)) {
        errorHolder.textContent = 'Solo se permiten letras';
    } else {
        errorHolder.textContent = '';
    }
}





const inputNumerosTarjeta = document.getElementById('numeros-tarjeta');
const cardNumber = document.querySelector('.card-number');
const numerosOriginales = cardNumber.textContent;

//PARA QUE SE VUELVA A RELLENAR EL ESPACIO AL ESTAR VACIO
inputNumerosTarjeta.addEventListener('input', function() {
    if (inputNumerosTarjeta.value === '') {
        cardNumber.textContent = numerosOriginales;
    } else {
        cardNumber.textContent = inputNumerosTarjeta.value;
    }
    verificarNumerosTarjeta();
});

//ERROR DE LOS NUMEROS TARJETA
const errorNumero = document.querySelector('.error-number');

function verificarNumerosTarjeta() {
    const numeroTarjeta = inputNumerosTarjeta.value;
    if (/[^0-9]+/.test(numeroTarjeta)) {
        errorNumero.textContent = 'Solo se permiten números';
    } else {
        errorNumero.textContent = '';
    }
}





const inputMes = document.getElementById('cardinput-mes');
const inputAño = document.getElementById('cardinput-año');

const spanMes = document.getElementById('card-mes');
const spanAño = document.getElementById('card-año');

const mesOriginal = spanMes.textContent;
const añoOriginal = spanAño.textContent;

inputMes.addEventListener('input', function() {
    if (inputMes.value === '') {
        spanMes.textContent = mesOriginal;
    } else {
        spanMes.textContent = inputMes.value;
    }
    verificarNumeros();
});

inputAño.addEventListener('input', function() {
    if (inputAño.value === '') {
        spanAño.textContent = añoOriginal;
    } else {
        spanAño.textContent = inputAño.value;
    }
    verificarNumeros();
});

const errorMes = document.querySelector('.error-mes');

function verificarNumeros() {
    const mes = inputMes.value;
    const año = inputAño.value;
    if (/[^0-9]/.test(mes) || /[^0-9]/.test(año)) {
        errorMes.textContent = 'Solo se permiten números';
    } else {
        errorMes.textContent = '';
    }
}





const inputCVV = document.getElementById('card-CVV');
const cvv = document.querySelector('.CVV');
const cvvOriginal = cvv.textContent;

inputCVV.addEventListener('input', function() {
    if (inputCVV.value === '') {
        cvv.textContent = cvvOriginal;
    } else {
        cvv.textContent = inputCVV.value;
    }
    verificarNumerosCVV();
});

const errorNumber = document.querySelector('.error-CVV');

function verificarNumerosCVV() {
    const numeroCVV = inputCVV.value;
    if (/[^0-9]+/.test(numeroCVV)) {
        errorNumber.textContent = 'Solo se permiten números';
    } else {
        errorNumber.textContent = '';
    }
}