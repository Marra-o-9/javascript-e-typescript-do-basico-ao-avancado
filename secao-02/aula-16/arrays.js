// Arrays - listas

//            01234567
const nome = "Henrique";

//              0           1        2
const nomes = ["Henrique", "Marra", "Barbosa"];
console.log(nomes);

// Acessar valor por índice
console.log(nomes[0]);

// Alterar/adicionar valor por índice
nomes[0] = "Henri";
nomes[3] = "Juan";
console.log(nomes);

// Adicionar valor no final do array
// nomes[nomes.length] = "Jae";
nomes.push("Jae");
console.log(nomes);

// Adicionar valor no começo do array
nomes.unshift("Aguiar");
console.log(nomes);

// Remover do final do array
let removido = nomes.pop();
console.log(removido);
console.log(nomes);

// Remover do começo do array
removido = nomes.shift();
console.log(removido);
console.log(nomes);