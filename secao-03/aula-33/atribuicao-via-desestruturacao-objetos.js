// Atribuição via desestruturação (Objetos)

const pessoa = {
  nome: "Henrique",
  sobrenome: "Marra",
  idade: 22,
  endereco: {
    rua: "Av. Brasil",
    numero: 999
  }
};

// Como o nome da chave é o mesmo da variável, vai pegar o valor de nome automaticamente
const { nome, sobrenome } = pessoa; 
console.log(nome, sobrenome);

// Definir valor padrão da variável, se não encontrar valor
const { dataNascimento = "", idade = "" } = pessoa;
console.log(dataNascimento, idade);

// Atrelar chave a um nome de variável
const { nome: n } = pessoa;
console.log(n);

// Capturar valores de objetos dentro do objeto
const { endereco: {rua, numero, cidade: c = "São Paulo"} } = pessoa;
console.log(rua, numero, c);

// Resto do objeto
const { nome: nome2, ...resto } = pessoa;
console.log(nome2, resto);