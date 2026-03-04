let nome = "Marra"; // let define variável
var nome2 = "Marra 2"; // método antigo de definição de variável

// Proibido criar variáveis com palavras reservadas
// Variáveis precisam ter nomes descritivos
// Proibido começar nomes de variáveis com números
// Proibido nomes de variáveis com espaços ou traços
// Utilizar camelCase em JS

let camelCase = "Usar camelCase.";

// Variáveis são case-sensitive

let nomeCliente = "Henrique";
let nomecliente = "Marra";

console.log(nomeCliente, nomecliente);

// Proibida a redeclaração de variáveis (apenas alteração de valores)

camelCase = "Valor alterado!"

console.log(camelCase);