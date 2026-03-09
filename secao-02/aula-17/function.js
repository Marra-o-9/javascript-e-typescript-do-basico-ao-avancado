// Pode ou não retornar valores

function saudacao() { // abrir corpo da função
  console.log("Boa tarde!");
};

saudacao(); // chamar funcao


function saudacaoNome(nome) { // funcao com parâmetro
  console.log(`Boa tarde, ${nome}!`);
};

saudacaoNome("Henrique"); // definir valor do parâmetro
saudacaoNome("Marra");
saudacaoNome("Barbosa");  // reutilizável

// Retorna valor

function saudacaoRetorno(nome) {
  return `Boa tarde, ${nome}!`;
};

const retorno = saudacaoRetorno("Marra de novo");
console.log(retorno)

// Reutilização:

function soma(x, y) {
  const resultado = x + y;
  return resultado; // sai da função obrigatoriamente quando passa por return
}

console.log(soma(1, 1));
console.log(soma(1, 8));
console.log(soma("Henrique", " Marra"));
// console.log(resultado); // não dá pra acessar uma variável que está dentro da função

// Fazer os parâmetros assumirem valores default:
function subtracao(x = 1, y = 1) {
  return x - y;
};

console.log(subtracao());      // assume os valores default
console.log(subtracao(10));    // assumiu somente o primeiro valor
console.log(subtracao(5, 2));  // perdeu os valores default

// Função anônima (funções dentro de variáveis):
const raiz = function (n) {
  return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(25));

// Arrow function:
const raiz2 = n => n ** 0.5; // simplificação de função

console.log(raiz2(9));
console.log(raiz2(25));

// O preferível é criar funções que façam apenas uma tarefa