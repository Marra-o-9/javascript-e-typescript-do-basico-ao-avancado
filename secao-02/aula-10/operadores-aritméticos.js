/*
  Operadores aritméticos:

  +   Adição 
  -   Subtração
  *   Multiplicação
  /   Divisão
  **  Potenciação
  %   Módulo/Resto inteiro

*/

// Operadores de atribuição:

let contador = 1
// Adiciona valor antes - pré incremento
++contador;
// Adiciona valor depois - pós incremento
contador++;
console.log(contador);


// Subtrai valor antes - pós decremento
--contador;
// Subtrai valor depois - pós decremento
contador--;
console.log(contador);

// Abreviações para steps maiores (com qualquer operador)
contador += 10;
console.log(contador);
contador -= 10;
console.log(contador);
contador *= 50;
console.log(contador);
contador /= 10;
console.log(contador);

// NaN - Not a number
const exemplo1 = 1;
const exemplo2 = "A";

console.log(exemplo1*exemplo2);

// Conversão:
const exemplo3 = parseInt("1");
console.log(exemplo1+exemplo3)
// parseInt(), parseFloat(), Number()