// While -> enquanto
// - laço de tempo/limite "indeterminado"

let indice = 0;

while (indice <= 10) {
  console.log(indice);
  indice++; // causa do laço ser finito
}

// Exemplo mais concreto:
function random(min, max) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

const min = 1;
const max = 50;
let aleatorio = random(min, max);
console.log(aleatorio);

// Sai do laço quando a condição for falsa
while (aleatorio !== 9) {
  aleatorio = random(min, max);
  console.log(aleatorio);
}

// Do While
// - executa primeiro o código e depois checa a condição
// - executa pelo menos uma vez
// - prioridade?
aleatorio = 9;
do {
  aleatorio = random(min, max);
  console.log(aleatorio);
} while (aleatorio !== 9);
