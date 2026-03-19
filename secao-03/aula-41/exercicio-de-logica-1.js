// Escreva uma função que recebe 2 números e retorne o maior deles

function maiorNumero(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return "Número inválido!";
  }
}

// Operações ternárias
function maiorNumero2(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// Arrow function
const maiorNumero3 = (num1, num2) => num1 > num2 ? num1 : num2;
