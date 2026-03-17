const data = new Date();
const diaDaSemana = data.getDay();
let diaDaSemanaString;

console.log(diaDaSemana);


// Com if e else
if (diaDaSemana === 0) {
  diaDaSemanaString = "Domingo";
} else if (diaDaSemana === 1) {
  diaDaSemanaString = "Segunda";
} else if (diaDaSemana === 2) {
  diaDaSemanaString = "Terça";
} else if (diaDaSemana === 3) {
  diaDaSemanaString = "Quarta";
} else if (diaDaSemana === 4) {
  diaDaSemanaString = "Quinta";
} else if (diaDaSemana === 5) {
  diaDaSemanaString = "Sexta";
} else if (diaDaSemana === 6) {
  diaDaSemanaString = "Sábado";
} else {
  diaDaSemanaString = "Inválido!";
}

console.log(diaDaSemanaString);


// com switch e case
// faz as comparações com os valores automaticamente nas condicionais
switch (diaDaSemana) {
case 0:
  diaDaSemanaString = "Domingo";
  // quebra o fluxo
  break;
case 1:
  diaDaSemanaString = "Segunda";
  break;
case 2:
  diaDaSemanaString = "Terça";
  break;
case 3:
  diaDaSemanaString = "Quarta";
  break;
case 4:
  diaDaSemanaString = "Quinta";
  break;
case 5:
  diaDaSemanaString = "Sexta";
  break;
case 6:
  diaDaSemanaString = "Sábado";
  break;
// valor padrão, como se fosse else
default:
  diaDaSemanaString = "Inválido";
}

console.log(diaDaSemanaString);