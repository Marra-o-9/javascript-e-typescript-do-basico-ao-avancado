// break e continue

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

  if (numero === 2) {
    console.log("Pular número 2!");
    // continue -> vai para a próxima iteração, sem executar o restante do código
    continue;
  }

  console.log(numero); 

  if (numero === 7) {
    console.log("Número 7, quebrando o fluxo!");
    // break -> quebra e termina o laço
    break;
  }
}