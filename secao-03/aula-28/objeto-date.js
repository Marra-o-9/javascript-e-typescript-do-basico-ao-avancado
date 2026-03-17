// Objeto Date

// Date -> Função construtora (sempre começa com letra maiúscula)

// Definir data em milissegundos
let data = new Date(0); // 01/01/1970 no fuso 0 -> Timestamp unix ou época unix

console.log(data.toString());


// Definir data por:
//              ano mês dia hora minuto segundo milissegundo
// mês começa do 0
data = new Date(2026, 6, 17, 12, 0);
console.log(data.toString());


// Definir data por string
data = new Date("2026-07-17 12:00:00");
// ou
data = new Date("2026-07-17T12:00:00.000");
console.log(data.toString());


// Capturar valores de data específicos
console.log("Dia:", data.getDate());
console.log("Mês:", data.getMonth() + 1); // Mês começa do 0
console.log("Ano:", data.getFullYear());
console.log("Hora:", data.getHours());
console.log("Min:", data.getMinutes());
console.log("Segundos:", data.getSeconds());
console.log("Milissegundos:", data.getMilliseconds());
console.log("Dia da semana:", data.getDay()); // 0 -> Domingo, 6 -> Sábado

// Valor de data em ms
console.log(Date.now());


function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formatData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

data = formatData(data);
console.log(data);