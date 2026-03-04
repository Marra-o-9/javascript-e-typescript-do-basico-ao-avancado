// Mantém-se todas as regras de let, MENOS alterar valor

const nome = "Henrique";
// nome = "Marra"; //erro

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

// Perda do valor inicial com let:
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 1;

console.log(resultadoTriplicado);

// Função para ver qual o tipo da variável:
console.log(typeof(primeiroNumero));