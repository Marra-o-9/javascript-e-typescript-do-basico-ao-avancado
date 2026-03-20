// Tratando e lançando erros (try, catch, finally)

try {
  // Executado quando não há erros
} catch(e) {
  // Executado quando há erros
} finally {
  // Executado SEMPRE
}

// Exemplo de funcionalidade:

try {
  console.log("Abri um arquivo");
  console.log("Manipulei o arquivo");
  // console.log("Fechei o arquivo");
} catch(e) {
  console.log("Tratando o erro");
} finally {
  console.log("Fechei o arquivo");
}


function retornaHora(data) {
  // se enviar e a variável não for instância de Data
  if (data && !(data instanceof Date)) { // preferir lógica reversa para evitar uso de else
    throw new TypeError("Esperando instância de Date");
  }

  // se não enviar uma data
  if (!data) {
    // gerar nova data
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    // configurar horário de gente
    hour12: false
  });
}

try {
  const data = new Date("01-01-1970 12:58:12");
  const hora = retornaHora(data);
  console.log(hora);
} catch(e) {
  console.log(e);
} finally {
  console.log("Programa finalizado!");
}
