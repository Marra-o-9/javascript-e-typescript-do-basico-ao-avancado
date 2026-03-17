// Operação ternária

// encurtar código
// ? :

// sem operação ternária
const pontuacao = 999;

if (pontuacao >= 1000) {
  console.log("Usuário VIP");
} else {
  console.log("Usuário normal");
}

// (condição) ? "Valor para true" : "Valor para false";
// com operação ternária
const nivelUsuario = pontuacao >= 1000 ? "Usuário VIP" : "Usuário normal";
console.log(nivelUsuario);

// exemplo com OR
const corUsuario = null;
const corPadrao = corUsuario || "Vermelho";

console.log(nivelUsuario, corPadrao);