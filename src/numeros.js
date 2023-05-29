const inputNumerosTarjeta = document.getElementById('numeros-tarjeta');
const cardNumber = document.querySelector('.card-number');
const numerosOriginales = cardNumber.textContent;
const errorNumero = document.querySelector('.error-number');

let numerosFormateados = numerosOriginales.replace(/([0-9]{4})/g, '$1 '); //



function agrupacionDeNumeros() { //Para que agrupe digitos de 4
    numerosFormateados = inputNumerosTarjeta.value.replace(/([0-9]{4})/g, '$1 ');
    return numerosFormateados}


function actualizarTarjeta() { 
  if (inputNumerosTarjeta.value === '') {
    cardNumber.textContent = numerosOriginales;
  } else {
    numerosFormateados = agrupacionDeNumeros(); //hice mi funcion de agrupacionDeNumeros para poder poner los espacios
    cardNumber.textContent = numerosFormateados;
  }
}

function verificarNumeroTarjeta() {
  if (/[^0-9]+/.test(inputNumerosTarjeta.value)) { // verifica si hay caracteres que no sean numeros
    errorNumero.textContent = 'Solo se permiten números';
    inputNumerosTarjeta.value = '';
    inputNumerosTarjeta.style.outlineColor = '#ff0000';
    inputNumerosTarjeta.style.borderColor = '#ff0000';
  } else {
    errorNumero.textContent = '';
    inputNumerosTarjeta.style.outlineColor = '#146c94';
    inputNumerosTarjeta.style.borderColor = '#146c94';
    actualizarTarjeta();
  }
}

function borrarNumeroTarjeta() {
  inputNumerosTarjeta.value = '';
  errorNumero.textContent = '';
  inputNumerosTarjeta.style.outlineColor = '';
  inputNumerosTarjeta.style.borderColor = '';
  actualizarCVV();
}



inputNumerosTarjeta.addEventListener('blur', function() {
  if (inputNumerosTarjeta.value.length < 16) {
    borrarNumeroTarjeta();
    errorNumero.textContent = 'Debe ingresar 16 dígitos';
    inputNumerosTarjeta.style.outlineColor = '#ff0000';
    inputNumerosTarjeta.style.borderColor = '#ff0000';
  }
});  

inputNumerosTarjeta.addEventListener('change', function() {
  verificarNumeroTarjeta();
});

inputNumerosTarjeta.addEventListener('keyup', function() {
  verificarNumeroTarjeta();
})

inputNumerosTarjeta.addEventListener ('keydown', function() {
  verificarNumeroTarjeta();
})

















// inputNumerosTarjeta.addEventListener('input', function() {
//   actualizarTarjeta();
//   verificarNumeroTarjeta();
// });

// inputNumerosTarjeta.addEventListener('keyup', function() {
//   if (inputNumerosTarjeta.value === '') {
//     actualizarTarjeta();
//   }
// });