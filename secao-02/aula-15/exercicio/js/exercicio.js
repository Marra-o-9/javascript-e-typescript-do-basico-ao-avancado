let numero = Number(prompt("Digite seu número:"));

document.body.innerHTML += (`Seu número é ${numero}`);
document.body.innerHTML += ("<br>");
document.body.innerHTML += (`${numero} é inteiro: ${Number.isInteger(numero)}`);
document.body.innerHTML += ("<br>");
document.body.innerHTML += (`${numero} é NaN: ${Number.isNaN(numero)}`);
document.body.innerHTML += ("<br>");
document.body.innerHTML += (`Arredondado para baixo: ${Math.floor(numero)}`);
document.body.innerHTML += ("<br>");
document.body.innerHTML += (`Arredondado para cima: ${Math.ceil(numero)}`);
document.body.innerHTML += ("<br>");
document.body.innerHTML += (`Com duas casas decimais: ${numero.toFixed(2)}`);
