// Objeto literal
let pessoa1 = {
  nome: "Henrique",
  sobrenome: "Marra",
  idade: 22,
};

let pessoa2 = {
  nome: "Carlos",
  sobrenome: "Matias",
  idade: 25,
};

console.log(pessoa1.nome); // acessar valor dentro do objeto
console.log(pessoa2.idade)

function criaPessoa (nome, sobrenome, idade) { // parâmetros
  return {
    // nome: nome,
    // sobrenome: sobrenome,
    // idade: idade
    nome, // abreviação
    sobrenome,
    idade
  };
};

pessoa1 = criaPessoa("Henrique", "Marra", 22); // argumentos => valores passados para os parâmetros
pessoa2 = criaPessoa("Carlos", "Matias", 25);

console.log(pessoa1);
console.log(pessoa2);

// Função dentro de objetos
let pessoa3 = {
  nome: "Átila",
  sobrenome: "Medeiros",
  idade: 28,

  fala() {
    console.log(`Olá, eu sou o ${this.nome}!`); // this referencia o próprio objeto
  },

  incrementaIdade() {
    this.idade++; // pode alterar valores dentro do próprio objeto
  }
}

pessoa3.fala();
pessoa3.incrementaIdade();
console.log(pessoa3.idade);