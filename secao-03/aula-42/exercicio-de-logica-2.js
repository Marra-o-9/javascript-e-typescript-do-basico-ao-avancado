/*
Escreva uma função chamada ePaisagem que recebe dois argumentos:
largura e altura de uma imagem (number).

Retorne true se a imagem estiver no modo paisagem.
*/

function ePaisagem(eixoX, eixoY) {
  if (typeof eixoX === "number" && typeof eixoY === "number") {
    return eixoX > eixoY ? true : false;
  } else {
    return "Valores inválidos!";
  }
}

console.log(ePaisagem(1920, 1080));
console.log(ePaisagem(1, 5));
console.log(ePaisagem("a", 5));


// Exemplo prof

const ePaisagem = (largura, altura) => largura > altura;
// retorna true ou false independentemente