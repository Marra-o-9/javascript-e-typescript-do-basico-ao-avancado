// For clássico -> estrutura de repetição

/*
3 expressões
  - variável de controle (geralmente i, que significa index)
  - condição de quebra
  - passo/incremento

  dividir expressões -> ;
*/

// Até o valor ser considerado falso, ele continuará rodando
// Para quando a condição é quebrada
for (let i = 0; i <= 5; i++) {
  console.log(`Linha ${i}`);
}

// Definir valor do passo
for (let i = 0; i <= 100; i+=10) {
  console.log(`Linha ${i}`);
}

// Passo negativo
for (let i = 10; i >= 5; i--) {
  console.log(`Linha ${i}`);
}

// Número par ou ímpar
for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? "par" : "ímpar";
  console.log(i, par);
}

// Exemplo de uso com Arrays:
const bandas = ["Don Broco", "BMTH", "Bad Omens", "Poppy", "LVCAS"];

// Interromper busca no tamanho do Array
for (let i = 0; i < bandas.length; i++) {
  console.log(`Banda ${i}: ${bandas[i]}`);
}