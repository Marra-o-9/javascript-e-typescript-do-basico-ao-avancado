/*
Avaliação de curto circuito (Short-circuit)

-> retorna valor falso assim que encontrar o primeiro valor falso em uma expressão com && (AND)
-> retorna valor verdadeiro assim que encontrar o primeiro valor verdadeiro em uma expressão com || (OR)
-> em JS, todos os valores podem ser avaliados entre true ou false
*/

console.log("Henrique" && 0 && "Marra");

console.log("Henrique" && "" && "Marra");

/*
Falsy values (valores considerados falsos):

false
0
'' "" `` (string vazia)
null / undefined
NaN

-> QUALQUER OUTRO VALOR, É TRUE
*/

console.log("Henrique" || "Marra" || "Barbosa"); // retornou o primeiro verdadeiro com OR

console.log(0 || null || NaN); // retornou o último valor falso, no caso de todos falsos com OR
console.log(0 || "isso é uma string = true" || null || NaN);