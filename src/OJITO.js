const inputMes = document.getElementById('cardinput-mes');
const inputAño = document.getElementById('cardinput-año');

const spanMes = document.getElementById('card-mes');
const spanAño = document.getElementById('card-año');

const mesOriginal = spanMes.textContent;
const añoOriginal = spanAño.textContent;


const errorMes = document.querySelector('.error-mes');

//MES
function actualizarMes() {
    if (inputMes.value === '') {
        spanMes.textContent = mesOriginal;
    } else {
        spanMes.textContent = inputMes.value;
    }
}

function verificarFechasMes() {
    if (/[^0-9]+/.test(inputMes.value)) {
        errorMes.textContent = 'Solo se permiten números';
        inputMes.value = '';
    } else {
        errorMes.textContent = '';
    }
}

inputMes.addEventListener('input', function() {
    actualizarMes();
    verificarFechasMes();
});

inputMes.addEventListener('keyup', function() {
    if (inputMes.value === '') {
        actualizarMes();
    }
});



//AÑO
function actualizarAño() {
    if (inputAño.value === '') {
        spanAño.textContent = añoOriginal;
    } else {
        spanAño.textContent = inputAño.value;
    }
}

function verificarFechasAño() {
    if (/[^0-9]+/.test(inputAño.value)) {
        errorMes.textContent = 'Solo se permiten números';
        inputAño.value = '';
    } else {
        errorMes.textContent = '';
    }
}

inputAño.addEventListener('input', function() {
    actualizarAño();
    verificarFechasAño();
});

inputAño.addEventListener('keyup', function() {
    if (inputAño.value === '') {
        actualizarAño();
    }
});