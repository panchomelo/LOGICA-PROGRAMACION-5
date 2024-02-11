function obtenerNumeroSecreto () {
let valorNumero = document.getElementById("numeroSecreto").value;
let floatNumero = parseFloat(valorNumero)
let numeroSecreto = Math.floor(Math.random() *100) + 1;
let adivinado = false;

while (!adivinado) {

if (!isNaN(floatNumero)) {
    if (floatNumero === numeroSecreto) {
        alert("¡Adivinaste el número secreto");
        adivinado = true;
    } else {
        alert("El número secreto es incorrecto. ¡Intenta nuevamente");
    }
} else {
    alert("Porcfavoringresa un número válido");
}
}
}