// Barra invertida pra "escapar" o caractere do erro
let umaString = "Um \"Texto\"";

console.log(umaString);

                // 0123456789
let outraString = "stringDois";

// Achar caractere em índice específico
console.log(outraString.charAt(6));

// Localizar palavras
// busca da esquerda pra direita
console.log(outraString.indexOf("Dois"));

// busca da direita pra esquerda
console.log(outraString.lastIndexOf("Dois"));

console.log(outraString.match(/[a-z]/g));

// parecido com indexOf, mas aceita regex
console.log(outraString.search(/D/));

// substitui caracteres
console.log(outraString.replace("Dois", "Três"));

// tamanho da string
console.log(outraString.length);

// capturar um pedaço da string
console.log(outraString.slice(2, 6));

// dividir uma string
console.log(outraString.split("i"));

// MAIÚSCULA e minúscula
console.log(outraString.toUpperCase());
console.log(outraString.toLowerCase());