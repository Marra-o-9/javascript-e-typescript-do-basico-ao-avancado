function exercicio() {

  const data = new Date();
  const ano = formatData(data.getFullYear());
  const mesRaw = data.getMonth();
  const dia = formatData(data.getDate());
  const horas = formatData(data.getHours());
  const minutos = formatData(data.getMinutes());
  const diaDaSemanaRaw = data.getDay();

  function getDiaDaSemanaString(indice) {
    switch (indice) {
      case 0:
        return "domingo";
      case 1:
        return "segunda-feira";
      case 2:
        return "terça-feira";
      case 3:
        return "quarta-feira";
      case 4:
        return "quinta-feira";
      case 5:
        return "sexta-feira";
      case 6:
        return "sábado";
      default:
        return "Inválido";
    }
  }

  function getMesString(indice) {
    switch (indice) {
      case 0:
        return "janeiro";
      case 1:
        return "fevereiro";
      case 2:
        return "março";
      case 3:
        return "abril";
      case 4:
        return "maio";
      case 5:
        return "junho";
      case 6:
        return "julho";
      case 7:
        return "agosto";
      case 8:
        return "setembro";
      case 9:
        return "outubro";
      case 10:
        return "novembro";
      case 11:
        return "dezembro";
    }
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