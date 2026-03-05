const nome = prompt("Digite seu nome completo:");
const nomeSemEspaco = nome.replace(" ", "");

document.body.innerHTML += `Seu nome é: ${nome}<br>`;
document.body.innerHTML += `Seu nome tem ${nomeSemEspaco.length} letras.<br>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nomeSemEspaco.charAt(1)}<br>`;
document.body.innerHTML += `O primeiro índice da letra a no seu nome é: ${nomeSemEspaco.indexOf("a")}<br>`;
document.body.innerHTML += `O último índice da letra a no seu nome é: ${nomeSemEspaco.lastIndexOf("a")}<br>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nomeSemEspaco.slice(-3)}<br>`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(" ")}<br>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br>`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br>`;