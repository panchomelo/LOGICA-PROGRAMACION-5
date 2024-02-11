// Función para generar un número aleatorio entre 1 y 100
function generarNumeroSecreto() {
  return Math.floor(Math.random() * 100) + 1;
}

// Función principal para adivinar el número secreto
function adivinarNumeroSecreto() {
  let numeroSecreto = generarNumeroSecreto();
  let intentos = [];

  while (true) {
    let inputNumero = prompt("Adivina el número secreto (entre 1 y 100):");

    // Verificar si el input es un número válido
    let numero = parseFloat(inputNumero);
    if (isNaN(numero)) {
      alert("Por favor, ingresa un número válido.");
      continue;
    }

    // Agregar el intento a la lista
    intentos.push(numero);

    // Verificar si el número es el secreto
    if (numero === numeroSecreto) {
      // Mostrar mensaje de felicitaciones
      let mensaje = "¡Felicidades! Adivinaste el número secreto.\n";
      mensaje += "Lista de números introducidos: " + intentos.join(", ");
      alert(mensaje);
      break;
    } else {
      // Mostrar mensaje de error y solicitar otro intento
      alert("Número incorrecto. Inténtalo nuevamente.");
    }
  }
}

// Iniciar el juego al cargar la página
adivinarNumeroSecreto();
