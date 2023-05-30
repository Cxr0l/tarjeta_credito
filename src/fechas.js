const inputMes = document.getElementById('cardinput-mes');
const inputAño = document.getElementById('cardinput-año');

const spanMes = document.getElementById('card-mes');
const spanAño = document.getElementById('card-año');

const mesOriginal = spanMes.textContent;
const añoOriginal = spanAño.textContent;


const errorMes = document.querySelector('.error-mes');

///////////////////////////////////MES
function actualizarMes() {
    const mesIngresado = inputMes.value.trim().replace(/\D/g, '').slice(0, 2); // obtenemos los dos primeros dígitos del valor ingresado sin espacios ni caracteres no numéricos
    const mesMostrado = mesIngresado.padStart(2, '0'); // agregamos un cero a la izquierda si el mes ingresado tiene un solo dígito
    
    spanMes.textContent = mesMostrado; // actualizamos el texto del elemento "span"
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
        actualizarMes();
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
    const añoIngresado = inputAño.value.trim().replace(/\D/g, '').slice(0, 2);
    const añoMostrado = añoIngresado.padStart(2, '0'); 
    spanAño.textContent = añoMostrado;
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
  