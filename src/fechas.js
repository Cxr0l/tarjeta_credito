const inputMes = document.getElementById('cardinput-mes');
const inputAño = document.getElementById('cardinput-año');

const spanMes = document.getElementById('card-mes');
const spanAño = document.getElementById('card-año');

const mesOriginal = spanMes.textContent;
const añoOriginal = spanAño.textContent;


const errorMes = document.querySelector('.error-mes');

///////////////////////////////////MES
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
        inputMes.style.outlineColor = '#ff0000';
        inputMes.style.borderColor = '#ff0000';
        inputMes.value = '';
    } else if (inputMes.value > 12) {
        errorMes.textContent = 'Solo números entre 1 y 12';
        inputMes.style.outlineColor = '#ff0000';
        inputMes.style.borderColor = '#ff0000';
        inputMes.value = '';
    } else {
        errorMes.textContent = '';
        inputMes.style.outlineColor = '#146c94';
        inputMes.style.borderColor = '#146c94';
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



///////////////////////////////AÑO
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
        inputAño.style.outlineColor = '#ff0000';
        inputAño.style.borderColor = '#ff0000';
        inputAño.value = '';
    } else {
        errorMes.textContent = '';
        inputAño.style.outlineColor = '#146c94';
        inputAño.style.borderColor = '#146c94';
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