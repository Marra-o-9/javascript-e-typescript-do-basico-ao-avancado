// solução MUITO mais simples

function exercicio() {
  const h1 = document.querySelector(".container h1");
  const data = new Date();
  const opcoes = {
    dateStyle: "full",
    timeStyle: "short"
  }

  h1.innerHTML = data.toLocaleDateString("pt-BR", opcoes);
}

exercicio();