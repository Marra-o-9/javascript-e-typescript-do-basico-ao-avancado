/*
Operadores de Comparação:

> maior que
>= maior ou igual
< menor que
<= menor ou igual
== igualdade (checa somente valor) -> não recomendado
=== igualdade estrita (checa valor e tipo)
!= diferente (checa somente valor) -> não recomendado
!== diferente estrito (checa valor e tipo)
*/

// retorna valor booleano:
console.log(10 > 5);

// Coerção de tipos
let num1 = 10; // number
let num2 = "10"; // string
let comp = num1 == num2;
console.log(comp); // true

// Estrito
comp = num1 === num2; 
console.log(comp); // false