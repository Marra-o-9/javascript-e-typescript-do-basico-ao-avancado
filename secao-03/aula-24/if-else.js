/*
Estruturas condicionais

if
else if
else
*/

const hora = 20;

if (0 <= hora && hora < 12) {
  console.log("Bom dia!");
} else if (12 <= hora && hora < 19) {
  console.log("Boa tarde!");
} else if (19 <= hora && hora < 23){
  console.log("Boa noite!");
} else {
  console.log("Horário inválido!");
};

// if é independente
// else ifs à vontade
// else só uma vez, e no final da cadeia de um if