// Objeto Math

let num1 = 9.41241;
let num2;

// Arredonda pra baixo
num2 = Math.floor(num1);
console.log(num2);

// Arredonda pra cima
num2 = Math.ceil(num1);
console.log(num2);

// Arredonda pro mais próximo
num2 = Math.round(num1);
console.log(num2);

// Pega o maior número
console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));

// Pega o menor número
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));

// Número aleatório entre 0 e 1
let aleatorio = Math.random();
console.log(aleatorio);

// Valor de pi
console.log(Math.PI);