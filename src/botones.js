const form = document.querySelector("#form");
const continuePart = document.querySelector("#continue");
const buttonContinue = document.querySelector("#button-continue");

form.addEventListener("submit", (e) => { //lamando al evento (e) submit, es un parametro que previene el comportamiento predeterminado del formulario de enviar y recagar la pagina
    e.preventDefault();
    form.classList.add("close");
    continuePart.classList.remove("close");
})

buttonContinue.addEventListener("click", () => {
    form.classList.remove("close");
    continuePart.classList.add("close");
    form.reset();
    cardName.textContent = nombreOriginal
    cardNumber.textContent = numerosOriginales;
    spanMes.textContent = mesOriginal;
    spanAño.textContent = añoOriginal;
    cvv.textContent = cvvOriginal;
})