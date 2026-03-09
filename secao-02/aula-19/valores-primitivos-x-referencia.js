// Valores Primitivos (imutáveis) - string, number, boolean, undefined, null, (bigint e symbol)

// Exemplo de imutabilidade:
//               01234
let sobrenome = "Marra";
sobrenome[0] = "S";
console.log(sobrenome[0], sobrenome);

// Valores por Referência (mutável) - array, object, function

let a = [1, 2, 3];
let b = a;  // b referencia o mesmo lugar de a no computador
console.log(a, b);

a.push(4);          // a e b apontam para o mesmo lugar na memória
console.log(a, b); 

b.pop();            // também afetou a
console.log(a, b);

b = [...a]  // copia todos os valores de a
// se torna independente

