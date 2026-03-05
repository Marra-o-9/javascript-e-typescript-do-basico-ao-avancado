let num1 = 10;              // number
let num2 = 14.5;            // number
let num3 = 20.2621321321321 // number

// Transformar em string
console.log(num1.toString() + num2);  // Concatenação

// Representação binária do número
console.log(num2.toString(2));

// "Arredondar" número
console.log(num3.toFixed(2));

// Conferir se número é inteiro
console.log(Number.isInteger(num1));

// Conferir se é "não é número"
console.log(Number.isNaN(num1));

// Padrão que JavaScript segue para casas de números decimais: IEEE 754-2008
let num4 = 0.7;
let num5 = 0.1;
let soma = num4 + num5;
// IMPRECISÃO!
console.log(soma)

// Consertar imprecisão:
soma = Number(soma.toFixed(2));
console.log(soma);