//LETRAS
const inputNombreTarjeta = document.getElementById('nombre-tarjeta');
const cardName = document.querySelector('.card-name');
const nombreOriginal = cardName.textContent;
const errorHolder = document.querySelector('.error-holder');

function actualizarTarjetaLetras() {
    if (inputNombreTarjeta.value === '') {
        cardName.textContent = nombreOriginal;
    } else {
        cardName.textContent = inputNombreTarjeta.value;
    }
}

function verificarNombreTarjeta() {
    if (/[^A-Za-zñÑáéíóúÁÉÍÓÚ\s]/.test(inputNombreTarjeta.value)) {
        errorHolder.textContent = 'Solo se permiten letras';
        inputNombreTarjeta.value = '';
    } else {
        errorHolder.textContent = '';
    }
}

inputNombreTarjeta.addEventListener('input', function() {
    actualizarTarjetaLetras();
    verificarNombreTarjeta();
});

inputNombreTarjeta.addEventListener('keyup', function() {
    if (inputNombreTarjeta.value === '') {
        actualizarTarjetaLetras();
    }
});




//NUMEROS
const inputNumerosTarjeta = document.getElementById('numeros-tarjeta');
const cardNumber = document.querySelector('.card-number');
const numerosOriginales = cardNumber.textContent;
const errorNumero = document.querySelector('.error-number');

function actualizarTarjeta() {
    if (inputNumerosTarjeta.value === '') {
        cardNumber.textContent = numerosOriginales;
    } else {
        cardNumber.textContent = inputNumerosTarjeta.value;
    }
}

function verificarNumeroTarjeta() {
    if (/[^0-9]+/.test(inputNumerosTarjeta.value)) {
        errorNumero.textContent = 'Solo se permiten números';
        inputNumerosTarjeta.value = '';
    } else {
        errorNumero.textContent = '';
    }
}

inputNumerosTarjeta.addEventListener('input', function() {
    actualizarTarjeta();
    verificarNumeroTarjeta();
});

inputNumerosTarjeta.addEventListener('keyup', function() {
    if (inputNumerosTarjeta.value === '') {
        actualizarTarjeta();
    }
});



//FECHAS
const inputMes = document.getElementById('cardinput-mes');
const inputAño = document.getElementById('cardinput-año');

const spanMes = document.getElementById('card-mes');
const spanAño = document.getElementById('card-año');

const mesOriginal = spanMes.textContent;
const añoOriginal = spanAño.textContent;

const errorMes = document.querySelector('.error-mes');

function actualizarCampo(input, span, original) { //UTILIZANDO LOS PARAMETRO
    if (input.value === '') {
        span.textContent = original;
    } else {
        span.textContent = input.value;
    }
}

function verificarCampo(input, error, mensajeError) {
    if (/[^0-9]+/.test(input.value)) {
        error.textContent = mensajeError;
        input.value = '';
    } else if (input.value > 12) { // Nueva verificación de límite
        error.textContent = 'Solo números entre 1 y 12';
        input.value = '';
    } else {
        error.textContent = '';
    }
}

inputMes.addEventListener('input', function() {
    actualizarCampo(inputMes, spanMes, mesOriginal);
    verificarCampo(inputMes, errorMes, 'Solo se permiten números');
});

inputMes.addEventListener('keyup', function() {
    if (inputMes.value === '') {
        actualizarCampo(inputMes, spanMes, mesOriginal);
    }
});

inputAño.addEventListener('input', function() {
    actualizarCampo(inputAño, spanAño, añoOriginal);
    verificarCampo(inputAño, errorMes, 'Solo se permiten números');
});

inputAño.addEventListener('keyup', function() {
    if (inputAño.value === '') {
        actualizarCampo(inputAño, spanAño, añoOriginal);
    }
});


//CVV
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
    if (/[^0-9]+/.test(inputCVV.value)) {
        errorNumber.textContent = 'Solo se permiten números';
        inputCVV.value = '';
    } else {
        errorNumber.textContent = '';
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