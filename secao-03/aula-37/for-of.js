// For of -> estrutura de repetição

const nome = "Henrique Marra";
const bandas = ["Don Broco", "BMTH", "Bad Omens", "Poppy", "LVCAS"];

// For clássico
// - geralmente com iteráveis (arrays ou strings)
for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}

// For in
// - retorna o índice ou chave (strings, arrays ou objetos)
for (let i in nome) {
  console.log(nome[i]);
}

// FOR OF PEGA DIRETO O VALOR!!!
// - retorna o valor em si (iteráveis, arrays ou strings)
for (let valor of nome) {
  console.log(valor);
}

for (let valor of bandas) {
  console.log(valor);
}

// Outro jeito de iteração com arrays
bandas.forEach(function(valor, indice, array) {
  console.log(valor, indice, array);
});