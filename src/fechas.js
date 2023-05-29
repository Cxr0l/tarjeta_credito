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
        inputMes.value = '';
        inputMes.style.outlineColor = '#ff0000';
        inputMes.style.borderColor = '#ff0000';
    } else if (inputMes.value > 12) {
        errorMes.textContent = 'Solo números entre 1 y 12';
        inputMes.value = '';
        inputMes.style.outlineColor = '#ff0000';
        inputMes.style.borderColor = '#ff0000';
    } else {
        errorMes.textContent = '';
        inputMes.style.outlineColor = '#146c94';
        inputMes.style.borderColor = '#146c94';
        actualizarMes();
    }
}

inputMes.addEventListener('change', function() {
    verificarFechasMes();
  });
  
inputMes.addEventListener('keyup', function() {
    verificarFechasMes();
  });
  
inputMes.addEventListener ('keydown', function() {
    verificarFechasMes();
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
        inputAño.value = '';
        inputAño.style.outlineColor = '#ff0000';
        inputAño.style.borderColor = '#ff0000';
    } else {
        errorMes.textContent = '';
        inputAño.style.outlineColor = '#146c94';
        inputAño.style.borderColor = '#146c94';
        actualizarAño();
    }
}

inputAño.addEventListener('change', function() {
    verificarFechasAño();
  });
  
inputAño.addEventListener('keyup', function() {
    verificarFechasAño();
  });
  
inputAño.addEventListener ('keydown', function() {
    verificarFechasAño();
  });
  