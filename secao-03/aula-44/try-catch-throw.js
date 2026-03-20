// Tratando e lançando erros (try, catch, throw)

// Try -> tenta executar o bloco (bloco potencialmente perigoso)
try {
  console.log(x);
  // Catch -> captura o erro
} catch(error) {
  // Não exibir erros internos para usuário (problemas de segurança)
  console.log(`Variável x não existe.`);
  console.log(error);
}


function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    // lança uma função de erro para diagnóstico
    throw new Error("x e y precisam ser números!");
  }
  return x + y;
}

try {
  console.log(soma(1, 2));
  console.log(soma("a", 2));
} catch(error) {
  // console.log(error);
  console.log("Alguma coisa mais amigável para o usuário!");
}