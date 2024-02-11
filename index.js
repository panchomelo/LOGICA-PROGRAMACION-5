function generarNumeroSecreto() {
  return Math.floor(Math.random() * 100) + 1;
}
function adivinarNumeroSecreto() {
  let numeroSecreto = generarNumeroSecreto();
  let intentos = [];

  while (true) {
    let inputNumero = prompt("Adivina el número secreto (entre 1 y 100):");
    let numero = parseFloat(inputNumero);
    if (isNaN(numero)) {
      alert("Por favor, ingresa un número válido.");
      continue;
    }
    intentos.push(numero);

    if (numero === numeroSecreto) {
      let mensaje = "¡Felicidades! Adivinaste el número secreto.\n";
      mensaje += "Lista de números introducidos: " + intentos.join(", ");
      alert(mensaje);
      break;
    } else {
      alert("Número incorrecto. Inténtalo nuevamente.");
    }
  }
}

adivinarNumeroSecreto();
