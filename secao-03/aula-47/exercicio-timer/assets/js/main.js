const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".parar");
const zerar = document.querySelector(".zerar");

hora = new Date();

function acaoIniciar() {
  relogio.innerHTML(hora);
}

function acaoPausar() {
  relogio.style.color = "red";
}

function acaoZerar() {

}

iniciar.addEventListener("click", acaoIniciar());
pausar.addEventListener("click", acaoPausar());
zerar.addEventListener("click", acaoZerar());