// setInterval & setTimeout

function retornaHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

function printaHora() {
  console.log(retornaHora());
}

// Define um intervalo (milissegundos)
const timer = setInterval(printaHora, 1000);

// Define um timeout (milissegundos)
setTimeout(function() { // função anônima como handler
  // para o intervalo definido anteriormente
  clearInterval(timer);
  console.log("Mensagem de timeout!");
}, 4000);

setTimeout(function() { // função anônima como handler
  console.log("Múltiplos usos");
}, 8000);