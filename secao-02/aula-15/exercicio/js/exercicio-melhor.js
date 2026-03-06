let numero = Number(prompt("Digite seu número:"));

const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");

titulo.innerHTML = numero;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** (1/2)}</p>`;  // ou numero ** 0.5
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>${numero} é NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
