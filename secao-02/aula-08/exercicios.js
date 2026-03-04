const nome = "Henrique";
const sobrenome = "Marra Barbosa";
const anoNascimento = 2003;
const altura = 1.85;
let peso = 72;
let imc = peso / (altura * altura);
let anoAtual = 2026;

console.log(`${nome} ${sobrenome}, tem ${anoAtual - anoNascimento}, pesa ${peso} kg
tem ${altura} de altura e seu IMC é de ${imc}.`);