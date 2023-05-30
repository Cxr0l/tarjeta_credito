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
    if (/^\s/.test(inputNombreTarjeta.value)) { // verifica si el primer carácter es un espacio en blanco
      inputNombreTarjeta.value = '';
    } else if (/[^A-Za-zñÑáéíóúÁÉÍÓÚ\s]/.test(inputNombreTarjeta.value)) { // verifica si hay caracteres que no sean letras
      errorHolder.textContent = 'Solo se permiten letras';
      inputNombreTarjeta.value = '';
      inputNombreTarjeta.style.outlineColor = '#ff0000';
      inputNombreTarjeta.style.borderColor = '#ff0000';
    } else {
      errorHolder.textContent = '';
      inputNombreTarjeta.style.outlineColor = '#146c94';
      inputNombreTarjeta.style.borderColor = '#146c94';
      actualizarTarjetaLetras();
    }
}

inputNombreTarjeta.addEventListener('change', function() {
    verificarNombreTarjeta();
  });
  
inputNombreTarjeta.addEventListener('keyup', function() {
    verificarNombreTarjeta();
  });
  
inputNombreTarjeta.addEventListener ('keydown', function() {
    verificarNombreTarjeta();
  });
  