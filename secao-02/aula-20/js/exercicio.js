// Variável protegida pela função, fora do contexto global
// function escopo() {
//   const nome = "Henrique";
//   alert(nome);
// };
// 
// escopo();

function exercicio() {
  // querySelector seleciona elementos no HTML
  // selecionar por tag = form
  // selecionar por classe = .form
  // selecionar por id = #form
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  console.log(form);
  console.log(resultado);

  const registros = [];

  // evento onsubmit
  // form.onsubmit = function (evento) { // função anônima
    // previne o que acontece por padrão, cancela envio do formulário
    // evento.preventDefault();
  // };

  function recebeSubmit (evento) {
    evento.preventDefault();
    // seleciona os itens específicos da classe que já foi armazenada na variável "form"
    const nome = (form.querySelector(".nome")).value;
    const sobrenome = (form.querySelector(".sobrenome")).value;
    const peso = (form.querySelector(".peso")).value;
    const altura = (form.querySelector(".altura")).value;
    console.log(nome, sobrenome, peso, altura);

    registros.push({
      nome,
      sobrenome,
      peso,
      altura
    })

    // LEMBRAR DE DEIXAR DENTRO DOS ESCOPOS NECESSÁRIOS
    resultado.innerHTML += `<p>${nome} ${sobrenome} - ${peso}kg - ${altura}cm</p>`;
  };
  // forma moderna: método geral para detectar eventos
  form.addEventListener("submit", recebeSubmit);
};
exercicio();