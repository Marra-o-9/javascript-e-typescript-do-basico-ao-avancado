function exercicio() {

  const data = new Date();
  const ano = formatData(data.getFullYear());
  const mesRaw = data.getMonth();
  const dia = formatData(data.getDate());
  const horas = formatData(data.getHours());
  const minutos = formatData(data.getMinutes());
  const diaDaSemanaRaw = data.getDay();

  function getDiaDaSemanaString(indice) {
    const diaDaSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    return diaDaSemana[indice];
  }

  function getMesString(indice) {
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    return meses[indice];
  }

  function formatData(num) {
    return num >= 10 ? num : `0${num}`;
  }

  const mes = getMesString(mesRaw);
  const diaDaSemana = getDiaDaSemanaString(diaDaSemanaRaw);

  // selecionou pela classe e tag
  const h1 = document.querySelector(".container h1");
  h1.innerHTML = `${diaDaSemana}, ${dia} de ${mes} de ${ano}, ${horas}:${minutos}`;
}

exercicio();