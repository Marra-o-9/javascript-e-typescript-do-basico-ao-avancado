function exercicio() {
  const form = document.querySelector(".form");
  console.log(form);

  function recebeSubmit (evento) {
    evento.preventDefault();
    const peso = (form.querySelector(".peso")).value;
    console.log(peso);
    const altura = (form.querySelector(".altura")).value;
    console.log(altura);
    const resultado = document.querySelector(".resultado");
    console.log(resultado);

    function calculaIMC(peso, altura) {
      const imc = peso / (altura ** 2);
      if (imc > 0) {
        if (imc < 18.5) {
          return `${imc}: Abaixo do peso`;
        } else if (imc < 25) {
          return `${imc}: Peso normal`;
        } else if (imc < 30) {
          return `${imc}: Sobrepeso`;
        } else if (imc < 35) {
          return `${imc}: Obesidade grau 1`;
        } else if (imc < 40) {
          return `${imc}: Obesidade grau 2`;
        } else {
          return `${imc}: Obesidade grau 3`;
        }
      } else {
        return `Inválido!`;
      }
    }
    if (calculaIMC(peso, altura) === `IMC inválido!`) {
      resultado.innerHTML = `<p style="background: red">Seu IMC é ${calculaIMC(peso, altura)}</p>`;
    } else {
      resultado.innerHTML = `<p style="background: greenyellow">Seu IMC é ${calculaIMC(peso, altura)}</p>`;
    }
    
  }
  form.addEventListener("submit", recebeSubmit);
}

exercicio();

// Posso criar funções onde quiser no código

// Código resumido para interromper evento
/*
form.addEventListener("submit", function (evento) {
  evento.preventDefault();
})
*/

/*
function criaP() {
  const p = document.createElement("p");
  return p
}
*/

// Função para compôr o resultado
/*
function setResultado(msg) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = "";
  const p = criaP();
  resultado.appendChild(p);
}
*/