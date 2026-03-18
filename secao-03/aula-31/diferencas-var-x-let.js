// Mais diferenças entre var e let

let nome1 = "Henrique";
var nome2 = "Marra";

// não pode redeclarar let
// let nome1 = "";

// pode redeclarar var
// var nome2 = "";


// Let tem escopo de bloco { ... bloco }
console.log(nome1);

if (true) {
  let nome1 = "Rique";
  console.log(nome1);

  if (true) {
    let nome1 = "Ique";
    console.log(nome1); // busca a variável de dentro pra fora dos blocos
  }
}

// Var só tem escopo de função
console.log(nome2);

if (true) {
  let nome1 = "Barbosa";
  var nome2 = "Rique";
  console.log(nome2);

  if (true) {
    let nome1 = "Barbous";
    var nome2 = "Ique";
    console.log(nome2);
  }
}

console.log(nome1, nome2);



// Hoisting -> Elevação de criação de variáveis para o topo do arquivo
// JS espera a definição de valor da variável

console.log(sobrenome1);

var sobrenome1 = "Marra";

console.log(sobrenome2);

let sobrenome2 = "Barbosa"; // dá erro, não ocorre hoisting com let