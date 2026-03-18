// For in -> estrutura de repetição

// Vetor -> Array de uma só dimensão
const bandas = ["Don Broco", "BMTH", "Bad Omens", "Poppy", "LVCAS"];

// Lê índices ou chaves
// índice -> array ou vetor
// chaves -> objeto
for (let indice in bandas) {
  console.log(bandas[indice]);
}

// Exemplo de for in com objeto:
const pessoa = {
  nome: "Henrique",
  sobrenome: "Marra",
  idade: 22
}

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

// Mesmo resultado na busca de valores do objeto
console.log(pessoa.nome);
console.log(pessoa["nome"]);

// console.log(pessoa[0]); -> UNDEFINED