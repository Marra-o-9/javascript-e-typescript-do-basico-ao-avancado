// Atribuição via desestruturação (Arrays)

let a = "A"; // B
let b = "B"; // C
let c = "C"; // A

const letras = [b, c, a];
[a, b, c] = letras; // desestruturação

console.log(a, b, c);


//               0    1    2    3    4    5    6    7    8
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [primeiroNumero, segundoNumero, ...restoDoArray] = numeros;
// Atribuiu os dois primeiros índices a duas variáveis
// Atribuiu o resto do Array na última variável (...nomeDaVariavel)
console.log(primeiroNumero, segundoNumero);
console.log(restoDoArray);
/*
...rest operator -> pegar o resto
...spread operator -> separar as coisas
*/

// Pular valores na atribuição
const [um, , tres, , cinco] = numeros;
console.log(um, tres, cinco);

const arrayAninhado = [
// 0  1  2
  [0, 1, 2],  // 0
// 0  1  2
  [3, 4 ,5],  // 1
// 0  1  2
  [6, 7, 8]   // 2
];

console.log(arrayAninhado[1][2]);

const [lista1, lista2, lista3] = arrayAninhado;
console.log(lista1, lista2, lista3);